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

export default function NeueAufagbe() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedF: true,
    checkedG: true,
  });
  const [gruppe, setGruppe] = React.useState("");

  const handleChangeGruppe = (event) => {
    setGruppe(event.target.value);
  };
  const [uploadPercentage, setUploadPercentage] = React.useState(0);
  const [avatar, setAvatar] = React.useState("");

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const uploadFile = (e) => {
    console.log(e.target.files[0]);
    let data = new FormData();
    data.append("file", e.target.files[0]);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          setUploadPercentage(percent);
        }
      },
    };

    axios
      .post("https://www.mocky.io/v2/5185415ba171ea3a00704eed", data, options)
      .then((res) => {
        console.log(res);
        setUploadPercentage(100);
        setTimeout(() => {
          setUploadPercentage(0);
        }, 1000);
      });
  };
  return (
    <Row className="justify-content-center">
      <form className={classes.root} noValidate autoComplete="off">
        <Col md={12} xs={12} style={{ textAlign: "center" }}>
          <h3>Neue Aufgabe</h3>
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
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
              />
            }
            label="Anhang hinzufügen"
          />
        </Col>
        <Col md={12}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => uploadFile(e)}
          />
          {state.checkedB && (
            <label htmlFor="contained-button-file" style={{ width: "100%" }}>
              <Button
                variant="contained"
                color="primary"
                component="span"
                style={{ width: "100%" }}
              >
                Datei anhängen
              </Button>
            </label>
          )}
          <Col md={12}>
            {state.checkedB && (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Gruppe
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={gruppe}
                  onChange={handleChangeGruppe}
                  label="Gruppe"
                >
                  <MenuItem value="">
                    <em>---</em>
                  </MenuItem>
                  <MenuItem value={1}>Gruppe 1</MenuItem>
                  <MenuItem value={2}>Gruppe 2</MenuItem>
                  <MenuItem value={3}>Gruppe 3</MenuItem>
                </Select>
                <FormHelperText>Anhang einer Gruppe zuordnen</FormHelperText>
              </FormControl>
            )}
            <hr></hr>
          </Col>
          {uploadPercentage > 0 && (
            <ProgressBar
              now={uploadPercentage}
              active
              label={`${uploadPercentage}%`}
            />
          )}
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
          <Typography id="discrete-slider" gutterBottom>
            Dauer in Tagen
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={365}
          />
        </Col>
        <Col md={12}>
          <TextField
            id="outlined-basic"
            label="Ort"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Col>
        <Col md={12}>
          <TextField
            id="outlined-basic"
            label="Gruppe"
            variant="outlined"
            style={{ width: "100%" }}
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
