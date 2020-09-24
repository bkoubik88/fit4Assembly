import React from "react";
import Plan from "./Plan";
import { Container, Row, Col } from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ButtonAE from "./ButtonAE";
import Dialog from "./Dialog";

import { makeStyles } from "@material-ui/core/styles";

const durchlauf = {
  title: "How is your day?",
  description: "Tell me: how has your day been so far?",
  erstellt: "01.07.2020",
  begin: "01.01.2020",
  ende: "22.03.2020",
  gruppe: "A",
  stammausbilder: [{ name: "Max", vorname: "Mustermann", bereich: "ITH/A" }],
  azubisGesamt: 9,
  plaene: [
    { id: "Plan 1", title: "Good", count: 7 },
    { id: "Plan 2", title: "Bad", count: 12 },
    { id: "Plan 3", title: "Not sure yet", count: 1 },
  ],
  aufgabenGesamt: 4,
  aufgaben: [
    {
      id: "1",
      title: "Das ist ein Beispiel Text für eine Aufgabe",
      beschreibung: "Lackierung",
    },
    {
      id: "2",
      title: "Nachts ist es dunkler, als am Tag",
      beschreibung: "Werkzeugmnacher",
    },
    { id: "3", title: "Weisheit Nummer 3", beschreibung: "Theorie" },
  ],
};

const useStyles = makeStyles((theme) => ({
  add: {
    position: "fixed",
    right: 25,
    bottom: 25,
  },
}));

export default function Main() {
  const classes = useStyles();
  const [art, setArt] = React.useState("");
  const [offnen, setOeffnen] = React.useState(false);

  const welcherDialog = (wert) => {
    setArt(wert);
    setOeffnen(true);
  };

  const dialogOffnen = (bool) => {
    setOeffnen(bool);
  };

  return (
    <>
      <Container style={{ marginTop: "35px", marginBottom: "25px" }}>
        <Row className="justify-content-center">
          <Col md={12} xs={12}>
            <h3>Durchläufe</h3>
            <hr></hr>
          </Col>
          <Col md={3} xs={12}>
            <Plan bild="beer.jpg" daten={durchlauf}></Plan>
          </Col>
          <Col md={3} xs={12}>
            <Plan bild="laptop.jpg" daten={durchlauf}></Plan>
          </Col>
          <Col md={3} xs={12}>
            <Plan bild="musik.jpg" daten={durchlauf}></Plan>
          </Col>
          <Col md={3} xs={12}>
            <Plan bild="wald.jpg" daten={durchlauf}></Plan>
          </Col>
          <Col md={3} xs={12}>
            <Plan bild="linse.jpg" daten={durchlauf}></Plan>
          </Col>
        </Row>
      </Container>
      <ButtonAE welcherDialogOffnen={welcherDialog}></ButtonAE>
      <Dialog
        dialogOffnen={dialogOffnen}
        offnen={offnen}
        art={art}
        durchlauf={durchlauf}
      ></Dialog>
    </>
  );
}
