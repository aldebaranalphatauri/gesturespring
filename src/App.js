import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { indigo, green, blue, lightGreen } from '@mui/material/colors'
import { Container, CssBaseline, Box } from '@mui/material'
import { CardReorder } from './components/CardReorder'
import { Viewpager } from './components/Viewpager'

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
  // Store indicies as a local ref, this represents the item order
  const order = useRef(cards.map((_, index) => index))

  return (
    <BrowserRouter basename='/gesturespring' >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters={true}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
            <Routes>
              <Route path="/" element={<CardReorder items={cards} order={order} />} />
              <Route path="/viewpager" element={<Viewpager />} />
            </Routes>
          </Box>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}
