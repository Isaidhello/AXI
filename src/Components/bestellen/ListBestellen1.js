import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import Zeep from '../../images/zeep.jpg';
import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
    divider: {
        // Theme Color, or use css color in quote
        background: 'grey',
        height: '3px'
    },
}));



export default function ListBestellen1() {

    const classes = useStyles();

    return (
        <div>
            <List>
                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">
                        <img src={Zeep} alt="not found" width="60" height="60" />
                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                        <Typography variant="h5">
                            <TableCell className="cell1">Aloe Vera Zeep</TableCell>
                            <TableCell className="cell2">1 st</TableCell>
                        </Typography>
                    </ListItemText>
                </ListItem>
                <Divider classes={{ root: classes.divider }} />

                <ListItem className="listitem">
                    <Link to="/bestellen2" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemAvatar className="listItemAvatar">

                        </ListItemAvatar>
                        <ListItemText className="listItemText">
                            <Typography variant="h5">
                                <TableCell className="cell1">&nbsp;</TableCell>
                                <TableCell className="cell2"></TableCell>
                            </Typography>
                        </ListItemText>
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

            </List>

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
        </div>

    )
}