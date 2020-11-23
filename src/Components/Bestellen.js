import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Headerflow from './HeaderFlow';


const useStyles = makeStyles((theme) => ({
    topBar: {
        height: "7vh"
    }
}));

function Bestellen() {
    const classes = useStyles();
    return (
        <Grid container>
            {/* Top bar */}
            <Grid container item xs={12} className={classes.topBar}>
            <Headerflow />
            </Grid>
            {/* Content */}
            <Grid container>
                {/* Searchbar */}
                <Grid item container>

                </Grid>
                {/* List met gescande producten */}
                <Grid item>

                </Grid>
                {/* Scan een (volgend) product balk */}
                <Grid item container>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Bestellen;