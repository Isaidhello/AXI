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
import Strokorrel from '../../images/strokorrel.png';
import Vogel from '../../images/vogel.png';
import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

import Divider from '@material-ui/core/Divider';


export default function StandardList() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

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
                    <IconButton edge="end" aria-label="edit" onClick={() => setCount1(count1 + 1)}>
                        <AddIcon fontSize="large"/>
                    </IconButton>
                    <IconButton edge="end" aria-label="edit" onClick={() => setCount1(count1 - 1)}>
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
                    <IconButton edge="end" aria-label="edit" onClick={() => setCount2(count2 + 1)}>
                        <AddIcon fontSize="large"/>
                    </IconButton>
                    <IconButton edge="end" aria-label="edit" onClick={() => setCount2(count2 - 1)}>
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
                    <IconButton edge="end" aria-label="edit" onClick={() => setCount3(count3 + 1)}>
                        <AddIcon fontSize="large"/>
                    </IconButton>
                    <IconButton edge="end" aria-label="edit" onClick={() => setCount3(count3 - 1)}>
                        <RemoveIcon fontSize="large"/>
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </List>
        </div>
    )
}