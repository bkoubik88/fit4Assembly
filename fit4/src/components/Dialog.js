import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Container, Row, Col } from "react-bootstrap";

import Tabs from "./Tabs";
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  offnen,
  art,
  dialogOffnen,
  durchlauf,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(offnen);

  const handleClose = () => {
    dialogOffnen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={offnen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {art}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              schließen
            </Button>
          </Toolbar>
        </AppBar>

        <Container>
          {art === "Aufgabe" && <Tabs durchlauf={durchlauf}></Tabs>}
        </Container>
      </Dialog>
    </div>
  );
}
