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
import {Link} from 'react-router-dom';


export default function ListBestellen() {

      

    return (
        <div>
            <Link to="/bestellen1">Voeg item toe</Link>
        </div>
    )
}