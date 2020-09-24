import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NeueAufgabe from "./NeueAufgabe";
import Aufgaben from "./Aufgaben";
import NeueGruppe from "./NeueGruppe";
import Gruppen from "./Gruppen";
import Plaene from "./Plaene";
import NeuerPlan from "./NeuerPlan";

import Durchlauf from "./Durchlauf";
import NeuerDurchlauf from "./NeuerDurchlauf";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthTabs({ durchlauf, gruppen, plaene, durch }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      {durchlauf && (
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Neue Aufgabe" {...a11yProps(0)} />
            <Tab label="Alle Aufgaben" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      )}
      {durchlauf && (
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <NeueAufgabe></NeueAufgabe>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Aufgaben durchlauf={durchlauf}></Aufgaben>
          </TabPanel>
        </SwipeableViews>
      )}

      {gruppen && (
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Neue Gruppe" {...a11yProps(0)} />
            <Tab label="Alle Gruppen" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      )}
      {gruppen && (
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <NeueGruppe></NeueGruppe>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Gruppen gruppen={gruppen}></Gruppen>
          </TabPanel>
        </SwipeableViews>
      )}
      {plaene && (
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Neuer Plan" {...a11yProps(0)} />
            <Tab label="Alle Plaene" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      )}
      {plaene && (
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <NeuerPlan></NeuerPlan>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Plaene plaene={plaene}></Plaene>
          </TabPanel>
        </SwipeableViews>
      )}
      {durch && (
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Neuer Plan" {...a11yProps(0)} />
            <Tab label="Alle Plaene" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      )}
      {durch && (
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <NeuerDurchlauf></NeuerDurchlauf>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Durchlauf durchlauf={durch}></Durchlauf>
          </TabPanel>
        </SwipeableViews>
      )}
    </div>
  );
}
