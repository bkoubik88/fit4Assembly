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
    margin: theme.spacing(1),
    width: "100%",
  },
}));

function valuetext(value) {
  return `${value}Tage`;
}

export default function NeueGruppe() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Row className="justify-content-center">
      <form className={classes.root} noValidate autoComplete="off">
        <Col md={12} xs={12} style={{ textAlign: "center" }}>
          <h3>Neue Gruppe</h3>
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
            label="Name"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Col>
        <Col md={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Aktiv"
          />
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
