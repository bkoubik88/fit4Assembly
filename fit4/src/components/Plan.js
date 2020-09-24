import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import Tooltip from "@material-ui/core/Tooltip";
import PeopleIcon from "@material-ui/icons/People";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const options = ["Löschen", "Bearbeiten"];
const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({ bild, daten }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <div>
            <IconButton
              onClick={handleClick}
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        }
        title={`${daten.title}`}
        subheader={`${daten.erstellt}`}
      />
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/${bild}`}
        title={`${daten.title}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${daten.description}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Tooltip title="Aufgaben">
            <Badge badgeContent={daten.aufgabenGesamt} color="primary">
              <FormatListNumberedIcon />
            </Badge>
          </Tooltip>
        </IconButton>
        <IconButton aria-label="share">
          <Tooltip title="zugeordnete Azubis">
            <Badge badgeContent={daten.azubisGesamt} color="primary">
              <PeopleIcon />
            </Badge>
          </Tooltip>
        </IconButton>
        <IconButton aria-label="share">
          <Tooltip title="Durchlauf kopieren">
            <FileCopyIcon />
          </Tooltip>
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ fontWeight: "bold" }}>
            Beginn:
          </Typography>
          <Typography paragraph>{daten.begin}</Typography>
          <Typography paragraph style={{ fontWeight: "bold" }}>
            Ende:
          </Typography>
          <Typography paragraph>{daten.ende}</Typography>
          <Typography paragraph style={{ fontWeight: "bold" }}>
            Gruppe:
          </Typography>
          <Typography paragraph>{daten.gruppe}</Typography>
          <Typography paragraph style={{ fontWeight: "bold" }}>
            Stammausbilder Info:
          </Typography>
          <Typography paragraph>
            {daten.stammausbilder.map((ausbilder, index) => {
              return (
                <>
                  <p>Name: {ausbilder.name}</p>
                  <p>Vorname: {ausbilder.vorname}</p>
                  <p>Bereich: {ausbilder.bereich}</p>
                </>
              );
            })}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
