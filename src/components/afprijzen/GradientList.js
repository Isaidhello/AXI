import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Box, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '15vw',
  },
  demo: {
    backgroundColor: 'none'
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  link: {
    textDecoration:'none'
  }
}));

export default function GradientList() {
  const classes = useStyles();
  const [dense] = React.useState(false);

  return (
    <div className={classes.root}>
        <Grid item xs={10} md={8}>

          <div className={classes.demo}>
          <br></br><br></br><br></br><br></br>
            <List dense={dense}>
              <Link to="/afprijzen/korting1" className={classes.link}>
                <ListItem className="gradientlistitem">
                  <ListItemAvatar>
                  </ListItemAvatar>
                  <Typography>
                    <Box fontWeight="fontWeightBold">
                        Kassakorting 26-10 t/m 01-11
                    </Box>
                  </Typography>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
                  <br></br>
              <Link to="/afprijzen/korting2" className={classes.link}>
                <ListItem className="gradientlistitem">
                  <ListItemAvatar>
                  </ListItemAvatar>
                  <Typography>
                    <Box fontWeight="fontWeightBold">
                        De "klusweek" korting 02-11 t/m 08-11
                    </Box>
                  </Typography>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
            </List>
          </div>
        </Grid>
    </div>
  );
}