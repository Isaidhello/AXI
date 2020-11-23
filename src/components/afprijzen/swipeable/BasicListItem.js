import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import Zeep from '../../../images/zeep.jpg';
import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

import Divider from '@material-ui/core/Divider';

import './BasicListItem.css';

const BasicListItem = () => (
  <div className="basic-swipeable-list__item">
    <ListItem className="listitem">
      <ListItemAvatar className="listItemAvatar">
          <img src={Zeep} alt="not found" width="60" height="60"/>
      </ListItemAvatar>
      <ListItemText className="listItemText">
        <Typography variant="h5">
                <TableCell className="cell1">Aloe Vera Zeep</TableCell>
                <TableCell className="cell2">14 st</TableCell>
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

export default BasicListItem;
