import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
//import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
  },
  item: {
    position: 'absolute',
    bottom: '40px',
    right: '40px',
    borderRadius: '0%',
    width: '70px',
    height: '70px',
  },
  arrow: {
    color: 'white',
    fontSize: 35
  }

}));

export default function FABRechtsOnder() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Fab className={classes.item} aria-label="add" color="secondary" onClick={handleClickOpen}>
        <DoneIcon className={classes.arrow} fontSize='inherit' />
      </Fab>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Weet je zeker dat je lijst wilt opsturen?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Als je op bevestigen drukt wordt de lijst opgestuurd. Dit kan niet ongedaan worden.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          Annuleren
          </Button>
          <Link to='/home'>
          <Button onClick={handleClose} color="primary" autoFocus>
          Bevestigen
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
      

    </div>
  );
}