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
  }
  )

  return (
    <div className={styles.content} style={{ height: items.length * 80 }}>
      {springs.map(({ zIndex, shadow, x, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            x,
            scale,
          }}
          children={items[i]}
        />
      ))}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters={true}>
          <div className="flex fill center">
            <DraggableList items={'Lorem ipsum dolor sit'.split(' ')} />
          </div>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}
