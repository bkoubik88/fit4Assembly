import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    bottom: 50,
    right: 25,
  },
}));

export default function OpenIconSpeedDial({ welcherDialogOffnen }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const actions = [
    {
      icon: <TimelapseIcon onClick={() => welcherDialog("Durchlauf")} />,
      name: "Neuer Durchlauf",
    },
    {
      icon: <LibraryAddIcon onClick={() => welcherDialog("Plan")} />,
      name: "Neuer Plan",
    },
    {
      icon: <PlaylistAddIcon onClick={() => welcherDialog("Aufgabe")} />,
      name: "Neue Aufgabe",
    },
    {
      icon: <GroupAddIcon onClick={() => welcherDialog("Gruppe")} />,
      name: "Neue Gruppe",
    },
  ];

  const welcherDialog = (art) => {
    if (art === "Durchlauf") {
      welcherDialogOffnen("Durchlauf");
    } else if (art === "Plan") {
      welcherDialogOffnen("Plan");
    } else if (art === "Aufgabe") {
      welcherDialogOffnen("Aufgabe");
    } else {
      welcherDialogOffnen("Gruppe");
    }
  };

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
