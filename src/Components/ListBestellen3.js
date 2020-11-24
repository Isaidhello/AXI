import React, { useState } from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Zeep from '../images/zeep.jpg';
import Strokorrel from '../images/strokorrel.png';
import Vogel from '../images/vogel.png';
import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

import Divider from '@material-ui/core/Divider';


export default function ListBestellen3() {

    const [count1, setCount1] = useState(Number(localStorage.getItem('count1')));
    const [count2, setCount2] = useState(Number(localStorage.getItem('count2')));
    const [count3, setCount3] = useState(Number(localStorage.getItem('count3')));

    function zeepAdd() {
        setCount1(count1 + 1);
        localStorage.setItem('count1', (count1 + 1));
    }
    function zeepRemove() {
        setCount1(count1 - 1);
        localStorage.setItem('count1', (count1 - 1));
    }

    function strokorrelAdd() {
        setCount2(count2 + 1);
        localStorage.setItem('count2', (count2 + 1));
    }
    function strokorrelRemove() {
        setCount2(count2 - 1);
        localStorage.setItem('count2', (count2 - 1));
    }

    function vogelAdd() {
        setCount3(count3 + 1);
        localStorage.setItem('count3', (count3 + 1));
    }
    function vogelRemove() {
        setCount3(count3 - 1);
        localStorage.setItem('count3', (count3 - 1));
    }

    

    return (
        <div>
            <List>
                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">
                        <img src={Zeep} alt="not found" width="60" height="60"/>
                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                    <Typography variant="h5">
                            <TableCell className="cell1">Aloe Vera Zeep</TableCell>
                            <TableCell className="cell2">{count1} st</TableCell>
                    </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    <IconButton edge="end" aria-label="edit" onClick={zeepAdd}>
                        <AddIcon fontSize="large"/>
                    </IconButton>
                    <IconButton edge="end" aria-label="edit" onClick={zeepRemove}>
                        <RemoveIcon fontSize="large"/>
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">
                        <img src={Strokorrel} alt="not found" width="60" height="60"/>
                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                    <Typography variant="h5">
                            <TableCell className="cell1">Strokorrel</TableCell>
                            <TableCell className="cell2">{count2} st</TableCell>
                    </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    <IconButton edge="end" aria-label="edit" onClick={strokorrelAdd}>
                        <AddIcon fontSize="large"/>
                    </IconButton>
                    <IconButton edge="end" aria-label="edit" onClick={strokorrelRemove}>
                        <RemoveIcon fontSize="large"/>
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem className="listitem">
                    <ListItemAvatar className="listItemAvatar">
                        <img src={Vogel} alt="not found" width="60" height="60"/>
                    </ListItemAvatar>
                    <ListItemText className="listItemText">
                    <Typography variant="h5">
                            <TableCell className="cell1">Vogelzaad</TableCell>
                            <TableCell className="cell2">{count3} st</TableCell>
                    </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction className="editicon">
                    <IconButton edge="end" aria-label="edit" onClick={vogelAdd}>
                        <AddIcon fontSize="large"/>
                    </IconButton>
                    <IconButton edge="end" aria-label="edit" onClick={vogelRemove}>
                        <RemoveIcon fontSize="large"/>
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </List>
        </div>
    )
}