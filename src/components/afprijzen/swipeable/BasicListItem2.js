import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import Whiskas from '../../../images/whiskas.jpg';
import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

import Divider from '@material-ui/core/Divider';

import './BasicListItem.css';

const BasicListItem2 = () => (
  <div className="basic-swipeable-list__item">
    <ListItem className="listitem">
      <ListItemAvatar className="listItemAvatar">
          <img src={Whiskas} alt="not found" width="50" height="50"/>
      </ListItemAvatar>
      <ListItemText className="listItemText">
        <Typography variant="h5">
                <TableCell className="cell1">Whiskas kattenvoer junior</TableCell>
                <TableCell className="cell2">3 st</TableCell>
        </Typography>
          
      </ListItemText>
      <ListItemSecondaryAction className="editicon">
        <IconButton edge="end" aria-label="edit">
          <EditIcon fontSize="large"/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
  </div>
);

export default BasicListItem2;
