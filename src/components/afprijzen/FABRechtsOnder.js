import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
//import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
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
    const classes = useStyles();
  
    return (
      <div className={classes.root} ><Link to='/home'>
        <Fab className={classes.item} aria-label="add" color="secondary">
          <DoneIcon className={classes.arrow} fontSize='inherit' />
        </Fab></Link>
      </div>
    );
}