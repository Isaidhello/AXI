import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  divider: {
    // Kleur van de dividers
    background: "grey",
    height: "1px",
  },
}));

export default function ListBestellen() {
  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem className="listitem">
          <Link
            to="/axi/bestellen1"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemAvatar className="listItemAvatar"></ListItemAvatar>
            <ListItemText className="listItemText">
              <Typography variant="h5">
                <TableCell className="cell1">&nbsp;</TableCell>
                <TableCell className="cell2"></TableCell>
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction className="editicon"></ListItemSecondaryAction>
          </Link>
        </ListItem>
        <Divider classes={{ root: classes.divider }} />

        {/* Copy paste voor meer lege list items */}
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
    </div>
  );
}
