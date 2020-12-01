import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import Zeep from "../../images/zeep.jpg";
import { Typography } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import TextField from "@material-ui/core/TextField";

export default function ListBestellen1() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {},
    },

    textField: {
      width: 300,
      margin: 100,
    },
    //style voor font size
    resize: {
      fontSize: 50,
    },
    mainContainer: {
      height: "100vh",
      width: "100vw",
    },
    countCard: {
      maxWidth: "500px",
      height: "200px",
    },
    divider: {
      background: "grey",
      height: "1px",
    },
    cell2: {
      paddingLeft: "100px",
    },
    contentCount: {
      paddingTop: "45px",
    },
  }));
  /* Constants voor de list items, het getal dat ze krijgen komt van local storage en deze kan aangepast worden met add en remove */
  const [count1, setCount1] = useState(Number(localStorage.getItem("count1")));

  // Slide gedeelte
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  function zeepAdd() {
    setCount1(count1 + 1);
    localStorage.setItem("count1", count1 + 1);
  }

  function zeepRemove() {
    if (count1 > 0) {
      setCount1(count1 - 1);
      localStorage.setItem("count1", count1 - 1);
    } else {
      return null;
    }
  }
  const classes = useStyles();

  return (
    <div>
      {/* Item 1 zeep */}
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
        </ListItem>
        <Divider className={classes.divider} />

        {/* Item 2 strokorrel komt hier op een klik */}
        <ListItem className="listitem">
          <Link
            to="/axi/bestellen2"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
            <ListItemText className="listItemText">
              <Typography variant="h5">
                <TableCell className="cell1">&nbsp;</TableCell>
                <TableCell align="flex-end" className="cell2"></TableCell>
              </Typography>
            </ListItemText>
          </Link>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        <ListItem className="listitem">
          <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
          <ListItemText className="listItemText">
            <Typography variant="h5">
              <TableCell className="cell1">&nbsp;</TableCell>
              <TableCell className="cell2"></TableCell>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        <ListItem className="listitem">
          <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
          <ListItemText className="listItemText">
            <Typography variant="h5">
              <TableCell className="cell1">&nbsp;</TableCell>
              <TableCell className="cell2"></TableCell>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        <ListItem className="listitem">
          <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
          <ListItemText className="listItemText">
            <Typography variant="h5">
              <TableCell className="cell1">&nbsp;</TableCell>
              <TableCell className="cell2"></TableCell>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        <ListItem className="listitem">
          <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
          <ListItemText className="listItemText">
            <Typography variant="h5">
              <TableCell className="cell1">&nbsp;</TableCell>
              <TableCell className="cell2"></TableCell>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        <ListItem className="listitem">
          <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
          <ListItemText className="listItemText">
            <Typography variant="h5">
              <TableCell className="cell1">&nbsp;</TableCell>
              <TableCell className="cell2"></TableCell>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        <ListItem className="listitem">
          <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
          <ListItemText className="listItemText">
            <Typography variant="h5">
              <TableCell className="cell1">&nbsp;</TableCell>
              <TableCell className="cell2"></TableCell>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        <ListItem className="listitem">
          <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
          <ListItemText className="listItemText">
            <Typography variant="h5">
              <TableCell className="cell1">&nbsp;</TableCell>
              <TableCell className="cell2"></TableCell>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        <ListItem className="listitem">
          <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
          <ListItemText className="listItemText">
            <Typography variant="h5">
              <TableCell className="cell1">&nbsp;</TableCell>
              <TableCell className="cell2"></TableCell>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        <ListItem className="listitem">
          <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
          <ListItemText className="listItemText">
            <Typography variant="h5">
              <TableCell className="cell1">&nbsp;</TableCell>
              <TableCell className="cell2"></TableCell>
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />
      </List>

      {/* Popup waarin hoeveelheid aangepast kan worden */} 
      <Grid item container justify="center" direction="row-reverse" xs={12}>
                <Grid item>
                    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                        <Card className={classes.countCard}>
                            <CardContent className={classes.contentCount}>
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
    </div>
  );
}
