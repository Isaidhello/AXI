import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
//import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoneIcon from '@material-ui/icons/Done';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'grid',
    },
    fab: {
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
    },

    container: {
      display: 'grid',
    },
    overlay: {
        backgroundColor: '#1d5fca',
        zIndex: theme.zIndex.drawer + 1,
    },
    item: {
        color: 'white',
    },
    icon: {
        fontSize: 100,
    }

}));

export default function FABRechtsOnder() {
    const classes = useStyles();

    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
        setTimeout(() => {
            history.push("/home")
          }, 2000)
    };
  
    return (
      <div className={classes.root} >
        <Fab className={classes.fab} aria-label="add" color="secondary" onClick={handleToggle}>
          <DoneIcon className={classes.arrow} fontSize='inherit' />
        </Fab>
        <Backdrop className={classes.overlay} open={open} onClick={handleClose}>
                <div className={classes.container}>
                    <IconButton className={classes.item} > 
                        <CheckCircleIcon className={classes.icon} />
                    </IconButton>
                    <Typography className={classes.item} align="center">
                        Lijst succesvol opgestuurd!
                    </Typography>
                </div>
            </Backdrop>
      </div>
    );
}