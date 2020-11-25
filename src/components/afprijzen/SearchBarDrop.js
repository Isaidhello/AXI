import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardsContainer: {
      marginLeft: "1px",
      marginTop: "20px",
    },
    dropdown: {
      width: '80vw',
      marginLeft: '0vw',
      backgroundColor: 'white',
      paddingBottom: '5px',
      paddingTop: '5px',
      paddingLeft: '30px',
      paddingRight: '30px',
      borderRadius: '5px',
    },
    resize:{
      fontSize:23
    },
  }));


const OwnSearchBarDrop = () => {
    const classes = useStyles();

    const defaultProps = {
      options: products,
      getOptionLabel: (option) => option.title,
    };
  
    const flatProps = {
      options: products.map((option) => option.title),
    };
  
    const [value, setValue] = React.useState(null);

    return(
     <Grid container justify="center" className={classes.cardsContainer}>
        <Grid item >
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          className={classes.dropdown}
          disableClearable
          options={products.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Scan of zoek hier een product"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
        </Grid>
    </Grid>
    )
}

const products = [
  { title: 'Vitakraft Konijn Kracker 3in1', year: 1994 },
  { title: 'Supreme Russel Rabbit Fruities', year: 1972 },
  { title: 'Vitakraft Vita Verde Hooitunnel Large', year: 1974 },
  { title: 'Versele-Laga Crispy Sticks Konijn&Cavia - Konijnensnack', year: 2008 },
  { title: 'Supreme Gerty Guinea Pig Scrummies', year: 1957 },
  { title: "Flexa Creations muurverf early dew 1L", year: 1993 },
];

export default OwnSearchBarDrop;