import React from 'react';
import { Grid, Card, Typography, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Headerflow from './HeaderFlow';
import SearchBar from "material-ui-search-bar";
import ProductList from './afprijzen/swipeable/BasicExample';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import AddIcon from '@material-ui/icons/Add';
import DraftsIcon from '@material-ui/icons/Drafts';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom';

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

function Bestellen() {
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
            {/* Top bar */}
            <Grid container item xs={12} className={classes.topBar}>
                <Headerflow />
            </Grid>
            {/* Content */}
            <Grid item container alignItems="flex-start" justify="center">
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
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Trash" />
                        </ListItem>
                        <ListItemLink href="#simple-list">
                            <ListItemText primary="Spam" />
                        </ListItemLink>
                    </List>
                </Grid>
                {/* Scan een (volgend) product balk */}
                <Grid item container xs={12} justify="center" >
                    <Card raised={false} className={classes.scan} align="center">
                        <Typography variant="h6" className={classes.scanText}>
                            Scan een product
                        </Typography>
                    </Card>
                </Grid>

                <Fab variant="extended" onClick={handleToggle}>
                    <AddIcon />
                Handmatig toevoegen
            </Fab>
            </Grid>
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
        </Grid>
    )
}

export default Bestellen;