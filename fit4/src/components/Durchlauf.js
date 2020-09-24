import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function InteractiveList({ durchlauf }) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(true);
  const [secondary, setSecondary] = React.useState(true);
  const [suche, setSuche] = React.useState("");
  const [filter, setFilter] = React.useState(durchlauf.plaene);

  const onChange = (event) => {
    let d = durchlauf.aufgaben.filter((aufgabe) => {
      return aufgabe.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setFilter(d);
  };

  return (
    <Row className="justify-content-center">
      <Col md={12} xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h6" className={classes.title}>
          Alle Durchläufe
        </Typography>
      </Col>
      <Col md={12} xs={12} style={{ textAlign: "center" }}>
        <div className={classes.demo}>
          <List dense={dense}>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              id="outlined-basic"
              label="Aufgaben durchsuchen"
              variant="outlined"
              value={suche}
              style={{ marginBottom: "5%" }}
              onChange={(e) => {
                const test = durchlauf.aufgaben.filter((aufgabe) => {
                  return aufgabe.title
                    .toString()
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
                });

                setFilter(test);
                setSuche(e.target.value);
              }}
            />
            {filter.map((aufgabe, index) => {
              return (
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${aufgabe.title}`}
                      secondary={`Aufgaben: ${aufgabe.aufgaben}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <hr></hr>
                </>
              );
            })}
          </List>
        </div>
      </Col>
    </Row>
  );
}
