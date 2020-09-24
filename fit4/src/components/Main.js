import React from "react";
import Plan from "./Plan";
import { Container, Row, Col } from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ButtonAE from "./ButtonAE";
import Dialog from "./Dialog";

import { makeStyles } from "@material-ui/core/styles";

const gruppen = [
  {
    id: 1,
    name: "Gruppe 1",
    aktiv: true,
  },
  {
    id: 2,
    name: "Gruppe 2",
    aktiv: false,
  },
  {
    id: 3,
    name: "Gruppe 3",
    aktiv: true,
  },
  {
    id: 4,
    name: "Gruppe 4",
    aktiv: false,
  },
];

const plaene = [
  {
    id: 1,
    titel: "Azubi-Einarbeitung 2 Wochen",
    ersteller: "Heinz Erhard",
    datum: "05.05.2020",
    aufgaben: [
      {
        id: "1",
        title: "Das ist ein Beispiel Text für eine Aufgabe",
        beschreibung: "Lackierung",
        anhange: 3,
        ersteller: "Hein Erhard",
        datum: "01.01.2020",
        aktiv: true,
        dauer: 11,
        ort: "Sindelfingen",
        gruppe: "Gruppe 1",
      },
      {
        id: "2",
        title: "Nachts ist es dunkler, als am Tag",
        beschreibung: "Werkzeugmnacher",
        anhange: 1,
        ersteller: "Hein Rühmann",
        datum: "11.5.2020",
        aktiv: true,
        dauer: 22,
        ort: "Untertürkheim",
        gruppe: "Gruppe 3",
      },
      {
        id: "3",
        title: "Weisheit Nummer 3",
        beschreibung: "Theorie",
        anhange: 1,
        ersteller: "Max Mustermann",
        datum: "11.5.2020",
        aktiv: true,
        dauer: 16,
        ort: "Untertürkheim",
        gruppe: "Gruppe 3",
      },
    ],

    gruppe: "Gruppe 1",
  },
];

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
    { id: "Plan 1", title: "Guter Plan", count: 7, aufgaben: 10 },
    {
      id: "Plan 2",
      title: "Azubi Einarbeitung-2 Wochen",
      count: 12,
      aufgaben: 20,
    },
    { id: "Plan 3", title: "Lackierung und schleifen", count: 1, aufgaben: 8 },
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
        gruppen={gruppen}
        plaene={plaene}
      ></Dialog>
    </>
  );
}
