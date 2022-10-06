import { useState } from 'react'
import { Tab, Box, Tabs } from '@mui/material'
import { styled } from '@mui/material/styles'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import GroupsIcon from '@mui/icons-material/Groups'
import LocalPlayIcon from '@mui/icons-material/LocalPlay'
import { Credits } from './Credits'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, height: '100%', overflow: "auto" }}>
          {children}
        </Box>
      )}
    </div>
  )
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const StyledBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
}))

const AppContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "80vh",
}))

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
  width: "100%",
  height: "100%",
}))

export function Lobby() {
  const [value, setValue] = useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <AppContainer >
      <Tabs
        sx={{ minHeight: '78px' }}
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab icon={<LocalPlayIcon />} label="Nuova partita" {...a11yProps(0)} />
        <Tab icon={<GroupsIcon />} label="Partecipa" {...a11yProps(1)} />
        <Tab icon={<LocalLibraryIcon />} label="Regole" {...a11yProps(2)} />
      </Tabs>

      <StyledBox>
        <StyledTabPanel value={value} index={0} >
            Content 0
        </StyledTabPanel>
        <StyledTabPanel value={value} index={1} >
            Content 1
        </StyledTabPanel>
        <StyledTabPanel value={value} index={2} >
            <Credits />
        </StyledTabPanel>
      </StyledBox>
    </AppContainer >
  )
}
