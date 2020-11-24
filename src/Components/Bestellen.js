import React from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Headerflow from './HeaderFlow';
import SearchBar from "material-ui-search-bar";


const useStyles = makeStyles((theme) => ({
    topBar: {
        height: "7vh"
    },
    scan: {
        backgroundColor: "#FE9D02",
        color: "white",
        width: "80vw",
        marginTop: "20px"
    },
    scanText: {
        padding: "10px"
    },
    searchbar: {
        marginTop: "10px",
    },
    productList: {

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
                <Grid item container justify="center" className={classes.searchbar}>
                    <SearchBar
                        placeholder='Scan of zoek hier een product'
                        style={{
                            width: 650,
                            height: 60,
                            backgroundcolor: "orange",
                        }}
                    />
                </Grid>
                {/* List met gescande producten */}
                <Grid item xs={12} className={classes.productList}>

                </Grid>
                {/* Scan een (volgend) product balk */}
                <Grid item container xs={12} justify="center" alignItems="center">
                    <Card raised={false} className={classes.scan} align="center">
                        <Typography variant="h6" className={classes.scanText}>
                            Scan een product
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Bestellen;