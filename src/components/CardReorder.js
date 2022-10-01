import { useSprings, animated, config } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import clamp from 'lodash.clamp'
import swap from 'lodash-move'

import styles from '../styles.module.css'

export const cardHeight = 84
export const cardWidth = 60

const fn =
  (order, active = false, originalIndex = 0, curIndex = 0, x = 0) =>
    (index) =>
      active && index === originalIndex
        ? {
          x: curIndex * 80 + x,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          immediate: (key) => key === 'zIndex',
          config: (key) => (key === 'x' ? config.stiff : config.default),
        }
        : {
          x: order.indexOf(index) * 80,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        }

export function CardReorder({ items, order }) {
  // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const [springs, api] = useSprings(items.length, fn(order.current))

  const bind = useDrag(({
    args: [originalIndex],
    active,
    movement: [x],
    tap,
    cancel,
    startTime,
    memo,
  }) => {
    if (tap) {
      if (memo === undefined) {
        const animatedDiv = document.getElementById('animatedDiv' + originalIndex)
        
        //console.log("tap for " + originalIndex)
        //console.log("tap for " + animatedDiv)

        items[originalIndex].selected = !items[originalIndex].selected
        animatedDiv.style.borderColor = items[originalIndex].selected ? 'blue' : 'transparent'
      }

      cancel()
      return startTime
    }

    //console.log("order ", order)

    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 80 + x) / 80), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)

    // Feed springs new style data, they'll animate the view without causing a single render
    api.start(fn(newOrder, active, originalIndex, curIndex, x))

    if (!active) {
      order.current = newOrder
    }

    return startTime
  },
    { filterTaps: true }
  )

  return (
    <div className={styles.content} >
      {springs.map(({ zIndex, shadow, x, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          id={'animatedDiv' + i}
          style={{
            backgroundImage: `url(${items[i].url})`,
            backgroundRepeat: 'no-repeat',
            border: 'thick double',
            borderColor: items[i].selected ? 'blue' : 'transparent',
            boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            zIndex,
            x,
            scale,
          }}
        />
      )
      )}
    </div>
  )
}