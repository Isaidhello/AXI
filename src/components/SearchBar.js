import React from 'react';
import '../Homescreen.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
    homescreen: {
      width: '100vw',
      height: '100vh',
      background: "linear-gradient(135deg, rgba(29,95,192,1) 0%, rgba(28,90,198,1) 100%);",
    },
    root: {
      flexGrow: 1,
      background: "linear-gradient(135deg, rgba(29,95,192,1) 0%, rgba(28,90,198,1) 100%);"
    },
    appBar: {
      height: '7%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: "#4688D7",
      height: "100%",
      top: "15%"
    },
    title: {
      flexGrow: 1,
      color: "#767676",
    },
    subTitle: {
      flexGrow: 1,
      color: "#767676",
    },
    settingsIcon: {
      color: "#4688D7",
      fontSize: "50px",
    },
    menuIcon: {
      fontSize: "40px",
    },
    card: {
      height: "25vh",
      width: "45vw"
    },
    cardsContainer: {
      marginLeft: "5px",
      marginRight: "5px",
      marginTop: "20px",
    },
    searchBar: {
      height: "100px"
    },
    settingsContainer: {
      height: "100%"
    },
    buttonFont: {
      color: "#4688D7",
      fontWeight: "bold"
    },
    shoppingCartIcon: {
      color: "#4688D7",
      fontSize: "60px",
    },
    assignmentIcon: {
      color: "#4688D7",
      fontSize: "60px",
    },
    localShippingIcon: {
      color: "#4688D7",
      fontSize: "60px",
    },
    deleteForeverIcon: {
      color: "#4688D7",
      fontSize: "60px",
    },
    euroIcon: {
      color: "#4688D7",
      fontSize: "60px",
    },
    viewWeekIcon: {
      color: "#4688D7",
      fontSize: "60px",
    },
    badgeWidth: {
      width: '100%'
    },
    content: {
      marginTop: "30%",
    main: {
      background: "linear-gradient(135deg, rgba(29,95,192,1) 0%, rgba(28,90,198,1) 100%);",
      width: '100vw',
      height: '100vh'
    }}
  }));


const OwnSearchBar = () => {
    const classes = useStyles();
    return(
     <Grid container justify="center" className={classes.cardsContainer}>
        <Grid item >
        <SearchBar
            placeholder='Scan of zoek hier een product'
            style={{
            width: 650,
            height: 60,
            }}
        />
        </Grid>
    </Grid>
    )
}

export default OwnSearchBar;