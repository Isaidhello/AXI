import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Fab from "@material-ui/core/Fab";
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  item: {
    position: "absolute",
    bottom: "40px",
    right: "40px",
    borderRadius: "0%",
    width: "70px",
    height: "70px",
  },
  arrow: {
    color: "white",
    fontSize: 35,
  },
}));

{/* Dit is de logika van de knop rechts onder, als hierop geklikt wordt komt de popup tevoorschijn en als de gebruiker op annuleren klikt of buiten de popup verdwijnt het weer */}
export default function FABRechtsOnder() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    /* Knop rechtsonder */
    <div className={classes.root}>
      <Fab
        className={classes.item}
        aria-label="add"
        color="secondary"
        onClick={handleClickOpen}
      >
        <DoneIcon className={classes.arrow} fontSize="inherit" />
      </Fab>

      {/* Popup box */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Weet je zeker dat je lijst wilt opsturen?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Als je op bevestigen drukt wordt de lijst opgestuurd. Dit kan niet
            ongedaan worden.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} style={{ color: "black" }}>
            Annuleren
          </Button>
          <Link to="/axi/home" style={{ textDecoration: "none" }}>
            <Button
              onClick={handleClose}
              autoFocus
              style={{ backgroundColor: "blue", color: "white" }}
              variant="outlined"
            >
              Bevestigen
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
