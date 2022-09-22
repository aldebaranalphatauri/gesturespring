import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { indigo, green, blue, lightGreen } from '@mui/material/colors'
import { Container, CssBaseline } from '@mui/material'
import { useSprings, animated, config } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import clamp from 'lodash.clamp'
import swap from 'lodash-move'

import styles from './styles.module.css'

const theme = createTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    },
    background: {
      bore: green[900],
      default: green[800],
      active: lightGreen[200],
      toolbar: lightGreen[50],
    },
  },
})

const cardHeight = 84
const cardWidth = 60

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

function DraggableList({ items }) {
  // Store indicies as a local ref, this represents the item order
  const order = useRef(items.map((_, index) => index))

  // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const [springs, api] = useSprings(items.length, fn(order.current))

  const bind = useDrag(({
    args: [originalIndex],
    active,
    movement: [x]
  }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 80 + x) / 80), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)

    // Feed springs new style data, they'll animate the view without causing a single render
    api.start(fn(newOrder, active, originalIndex, curIndex, x))

    if (!active) {
      order.current = newOrder
    }
  } )

  return (
    <div className={styles.content} >
      {springs.map(({ zIndex, shadow, x, scale }, i) => {
        const bimg = 'url("' + items[i].url + '")'
        return (
          <animated.div
            {...bind(i)}
            key={i}
            style={{
              backgroundImage: `url(${items[i].url})`,
              backgroundRepeat: 'no-repeat',
              zIndex,
              boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
              x,
              scale,
            }}
            id={items[i].id}
          />
        )
      }
      )}
    </div>
  )
}

const TOTAL_ITEMS = 25

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  //The maximum is exclusive and the minimum is inclusive
}

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'X']
const seeds = ['C', 'D', 'H', 'S']

// url: "https://picsum.photos/60/84?random&" + i
const initial = [...Array(TOTAL_ITEMS).keys()].map((i) => {
  const value = values[getRandomInt(0, values.length)]
  const seed = (value === 'X') ? 'B' : seeds[getRandomInt(0, seeds.length)]
  return ({
    id: 'id-' + i,
    url: "/gesturespring/resources/" + value + seed + ".svg",
    front: value + seed,
    selected: false,
    value: i,
    back: 'BB', //fake
  })
})

export default function App() {
  const [cards, setCards] = useState(initial)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters={true}>
          <DraggableList items={cards} />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}
