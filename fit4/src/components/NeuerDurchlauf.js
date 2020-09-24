import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Slider from "@material-ui/core/Slider";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  input: {
    display: "none",
  },
  formControl: {
    width: "100%",
  },
}));

function valuetext(value) {
  return `${value}Tage`;
}

export default function NeuerDurchlauf() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [plan, setPlan] = React.useState("");

  const handleChangePlan = (event) => {
    setPlan(event.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Row className="justify-content-center">
      <form className={classes.root} noValidate autoComplete="off">
        <Col md={12} xs={12} style={{ textAlign: "center" }}>
          <h3>Neuer Durchlauf</h3>
          <hr></hr>
        </Col>
        <Col md={12}>
          <TextField
            id="outlined-basic"
            label="Id"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Col>
        <Col md={12}>
          <TextField
            id="outlined-basic"
            label="Titel"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Col>
        <Col md={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Pläne
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={plan}
              onChange={handleChangePlan}
              label="Pläne"
            >
              <MenuItem value="">
                <em>---</em>
              </MenuItem>
              <MenuItem value={1}>Plan 1</MenuItem>
              <MenuItem value={2}>Plan 2</MenuItem>
              <MenuItem value={3}>Plan 3</MenuItem>
            </Select>
          </FormControl>
        </Col>
        <Col md={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Aufgaben
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={plan}
              onChange={handleChangePlan}
              label="Aufgabe"
            >
              <MenuItem value="">
                <em>---</em>
              </MenuItem>
              <MenuItem value={1}>Aufgabe 1</MenuItem>
              <MenuItem value={2}>Aufgabe 2</MenuItem>
              <MenuItem value={3}>Aufgabe 3</MenuItem>
            </Select>
          </FormControl>
        </Col>
        <Col md={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              style={{ width: "100%" }}
              margin="normal"
              id="date-picker-dialog"
              label="Von"
              format="dd.MM.yyyy"
              value={selectedDate}
              cancelLabel="Abbrechen"
              todayLabel="aktuell"
              showTodayButton={true}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Col>
        <Col md={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              style={{ width: "100%" }}
              id="date-picker-dialog"
              label="Bis"
              format="dd.MM.yyyy"
              value={selectedDate}
              cancelLabel="Abbrechen"
              showTodayButton={true}
              todayLabel="aktuell"
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Col>

        <Col md={12}>
          <hr></hr>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "100%" }}
          >
            speichern
          </Button>
        </Col>
      </form>
    </Row>
  );
}
