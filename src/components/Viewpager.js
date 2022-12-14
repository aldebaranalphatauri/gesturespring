import { useRef } from 'react'
import { useSprings, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import clamp from 'lodash.clamp'
import { Credits } from './Credits'

import styles from '../styles.module.css'

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
]

export function Viewpager() {
  const index = useRef(0)
  const width = window.innerWidth

  const indexHandler = (newValue) => {
    // Access reference value:
    const value = index.current;
    // Update reference value:
    index.current = newValue;
  }

  const getView = (i) => {
    switch (i) {
      case 0:
        return <Credits />
      case 1:
        return <Credits />
      case 2:
      case 3:
      case 4:
        return <Credits />
    }
    return
  }

  const [props, api] = useSprings(pages.length, (i) => ({
    x: i * width,
    scale: 1,
    display: 'block',
  }))

  const bind = useDrag(({
    active,
    movement: [mx],
    direction: [xDir],
    cancel
  }) => {
    if (active && Math.abs(mx) > width / 2) {
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
      cancel()
    }
    api.start(i => {
      if (i < index.current - 1 || i > index.current + 1) {
        return {
          display: 'none'
        }
      }
      const x = (i - index.current) * width + (active ? mx : 0)
      const scale = active ? 1 - Math.abs(mx) / width / 2 : 1
      return {
        x,
        scale,
        display: 'block'
      }
    })
  })

  return (
    <div className={styles.wrapper}>
      {props.map(({ x, display, scale }, i) => (
        <animated.div
          className={styles.page}
          {...bind()}
          key={i}
          style={{ display, x }}
        >
          <animated.div style={{ scale }} >
            {getView(i)}
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}
