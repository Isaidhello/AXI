import React from 'react';
import { Grid, Card, Typography, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import ListItem from '@material-ui/core/ListItem';

import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        height: "100vh"
    },
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
        marginTop: "10px"
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

function ListBestellen() {
    const classes = useStyles();

    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
        setTimeout(() => {
            console.log(history);
            history.push("/home")
          }, 2000)
    };

    return (
        <Grid container className={classes.root} alignItems="flex-start">

            <Grid item container alignItems="flex-start" justify="center">

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


                <Grid item container xs={12} justify="center" >
                <Link to="/bestellen1">
                    <Card raised={false} className={classes.scan} align="center">
                   <Typography variant="h6" className={classes.scanText}>
                            Scan een product
                        </Typography>
                    </Card>
                    </Link>
                </Grid>

            </Grid>

        </Grid>
    )
}

export default ListBestellen;