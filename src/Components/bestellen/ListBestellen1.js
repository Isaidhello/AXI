import React, { useState } from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Zeep from '../../images/zeep.jpg';
import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';



export default function ListBestellen1() {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            },
        },

        textField: {
            width: 300,
            margin: 100,
        },
        //style for font size
        resize: {
            fontSize: 50
        },
        mainContainer: {
            height: "100vh",
            width: "100vw"
        },
        countCard: {
            maxWidth: "500px",
        }
    }));
    const [count1, setCount1] = useState(Number(localStorage.getItem('count1')));

    // Slide gedeelte 
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    function zeepAdd() {
        setCount1(count1 + 1);
        localStorage.setItem('count1', (count1 + 1));
    };

    function zeepRemove() {
        if (count1 > 0) {
            setCount1(count1 - 1);
            localStorage.setItem('count1', (count1 - 1));
        }
        else {
            return (null);
        }
    };
    const classes = useStyles();
    return (
        <div>
            {/* Container om alles */}
            <Grid container justify="center" direction="row" alignItems="center" className={classes.mainContainer}>

                {/* De list */}
                <Grid item xs={12}>
                    <List>
                        <ListItem className="listitem" checked={checked} onClick={handleChange}>
                            <ListItemAvatar className="listItemAvatar">
                                <img src={Zeep} alt="not found" width="60" height="60" />
                            </ListItemAvatar>
                            <ListItemText className="listItemText">
                                <Typography variant="h5">
                                    <TableCell className="cell1">Aloe Vera Zeep</TableCell>
                                    <TableCell className="cell2">{count1} st</TableCell>
                                </Typography>
                            </ListItemText>
                            <ListItemSecondaryAction className="editicon">
                                <IconButton edge="end" aria-label="edit" onClick={zeepAdd}>
                                    <AddIcon fontSize="large" />
                                </IconButton>
                                <IconButton edge="end" aria-label="edit" onClick={zeepRemove}>
                                    <RemoveIcon fontSize="large" />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </List>
                </Grid>


                {/* Tellen kaart */}
                <Grid item container justify="center" direction="row-reverse" xs={12}>
                    <Grid item>
                        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                            <Card className={classes.countCard}>
                                <CardContent>
                                    <Grid
                                        container
                                        item
                                        justify="center"
                                        alignItems="center"
                                        direction="row">

                                        {/* Remove knop */}
                                        <Grid
                                            item
                                            container
                                            justify="center"
                                            alignItems="center"
                                            xs={4}>

                                            <RemoveCircleOutlineOutlinedIcon style={{ fontSize: 100 }} color='secondary' onClick={zeepRemove} />

                                        </Grid>

                                        {/* Getal midden */}
                                        <Grid
                                            item
                                            container
                                            justify="center"
                                            alignItems="center"
                                            xs={2}>
                                            <TextField maxValue='3' type='number' id="outlined-basic" InputProps={{ style: { fontSize: 40 } }} variant="outlined"
                                                value={count1}
                                            />
                                        </Grid>

                                        {/* Add knop */}
                                        <Grid
                                            item
                                            container
                                            justify="center"
                                            alignItems="center"
                                            xs={4}>
                                            <AddCircleIcon style={{ fontSize: 100 }} color='secondary' onClick={zeepAdd} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                </Grid>

                <Link to="/bestellen2">Voeg item toe</Link>
            </Grid>
        </div>

    )
}