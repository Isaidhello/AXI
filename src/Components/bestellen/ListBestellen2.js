import React, { useState } from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import Zeep from '../../images/zeep.jpg';
import Strokorrel from '../../images/strokorrel.png';
import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import TextField from '@material-ui/core/TextField';



export default function ListBestellen2() {

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
            height: "200px"
        },
        divider: {
            background: 'grey',
            height: '1px',
        },
    }));
    const [count1, setCount1] = useState(Number(localStorage.getItem('count1')));
    const [count2, setCount2] = useState(Number(localStorage.getItem('count2')));

    // Slide gedeelte 
    var [checked1, setChecked1] = React.useState(false);
    var [checked2, setChecked2] = React.useState(false);

    const handleChange1 = () => {
        setChecked1((prev) => !prev);
    };

    const handleChange2 = () => {
        setChecked2((prev) => !prev);
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

    function strokorrelAdd() {
        setCount2(count2 + 1);
        localStorage.setItem('count2', (count2 + 1));
    };

    function strokorrelRemove() {
        if (count2 > 0) {
            setCount2(count2 - 1);
            localStorage.setItem('count2', (count2 - 1));
        }
        else {
            return (null);
        }
    };

    const classes = useStyles();

    return (
        <div>
            <List>
                <ListItem className="listitem" checked={checked1} onClick={handleChange1} >
                    <ListItemAvatar className="listItemAvatar">
                        <img src={Zeep} alt="not found" width="60" height="60" />
                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">Aloe Vera Zeep</TableCell>
                            <TableCell className="cell2">{count1} st</TableCell>
                        </Typography>
                    </ListItemText>
                </ListItem>
                <Divider className={classes.divider} />

                <ListItem className="listitem" checked={checked2} onClick={handleChange2} >
                    <ListItemAvatar className="listItemAvatar">
                        <img src={Strokorrel} alt="not found" width="60" height="60" />
                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">Strokorrel</TableCell>
                            <TableCell className="cell2">{count2} st</TableCell>
                        </Typography>
                    </ListItemText>
                </ListItem>
                <Divider className={classes.divider} />

                <ListItem className="listitem">
                    <Link to="/bestellen3" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemAvatar className="listItemAvatar">

                        </ListItemAvatar>
                        <ListItemText className="listItemText">
                            <Typography variant="h5">
                                <TableCell className="cell1">&nbsp;</TableCell>
                                <TableCell className="cell2"></TableCell>
                            </Typography>
                        </ListItemText>
                        <ListItemSecondaryAction className="editicon">
                        </ListItemSecondaryAction>
                    </Link>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />

                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">

                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">&nbsp;</TableCell>
                            <TableCell className="cell2"></TableCell>
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />

                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">

                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">&nbsp;</TableCell>
                            <TableCell className="cell2"></TableCell>
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />

                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">

                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">&nbsp;</TableCell>
                            <TableCell className="cell2"></TableCell>
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />

                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">

                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">&nbsp;</TableCell>
                            <TableCell className="cell2"></TableCell>
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />

                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">

                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">&nbsp;</TableCell>
                            <TableCell className="cell2"></TableCell>
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />

                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">

                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">&nbsp;</TableCell>
                            <TableCell className="cell2"></TableCell>
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />

                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">

                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">&nbsp;</TableCell>
                            <TableCell className="cell2"></TableCell>
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />

                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">

                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">&nbsp;</TableCell>
                            <TableCell className="cell2"></TableCell>
                        </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />



            </List>

            <Grid item container justify="center" direction="row-reverse" xs={12}>
                <Grid item>
                    <Slide direction="up" in={checked1} mountOnEnter unmountOnExit>
                        <Card className={classes.countCard}>
                            <CardContent>
                                <Grid container item justify="center" alignItems="center" direction="row">
                                    <Grid item container justify="center" alignItems="center" xs={4}>
                                        <RemoveCircleOutlineOutlinedIcon style={{ fontSize: 100 }} color='secondary' onClick={zeepRemove} />
                                    </Grid>
                                    <Grid item container justify="center" alignItems="center" xs={2}>
                                        <TextField maxValue='3' type='number' id="outlined-basic" InputProps={{ style: { fontSize: 40 } }} variant="outlined" value={count1} />
                                    </Grid>
                                    <Grid item container justify="center" alignItems="center" xs={4}>
                                        <AddCircleIcon style={{ fontSize: 100 }} color='secondary' onClick={zeepAdd} />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>
            </Grid>

            <Grid item container justify="center" direction="row-reverse" xs={12}>
                <Grid item>
                    <Slide direction="up" in={checked2} mountOnEnter unmountOnExit>
                        <Card className={classes.countCard}>
                            <CardContent>
                                <Grid container item justify="center" alignItems="center" direction="row">
                                    <Grid item container justify="center" alignItems="center" xs={4}>
                                        <RemoveCircleOutlineOutlinedIcon style={{ fontSize: 100 }} color='secondary' onClick={strokorrelRemove} />
                                    </Grid>
                                    <Grid item container justify="center" alignItems="center" xs={2}>
                                        <TextField maxValue='3' type='number' id="outlined-basic" InputProps={{ style: { fontSize: 40 } }} variant="outlined" value={count2} />
                                    </Grid>
                                    <Grid item container justify="center" alignItems="center" xs={4}>
                                        <AddCircleIcon style={{ fontSize: 100 }} color='secondary' onClick={strokorrelAdd} />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>
            </Grid>
        </div>

    )
}