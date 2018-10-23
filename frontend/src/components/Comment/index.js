import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Menu,
  MenuItem,
  Button,
  Typography,
  Avatar,
  IconButton
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import moment from "moment";

const styles = theme => ({
  card: {
    marginTop: 8,
    marginBottom: 0,
    width: 900
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class Comment extends Component {
  
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null });
  };

  render() {
        const { classes, comment, onDelete } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  {`0`}
                </Avatar>
              }
              action={
                <IconButton onClick={this.handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
              subheader={`${comment.author}, ${moment(comment.timestamp).format("L")}`}
            />
            <CardContent>
              <Typography component="p">{comment.body}</Typography>
            </CardContent>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  width: 100
                }
              }}
            >
              <MenuItem
                onClick={event => {
                  this.handleClose(event);
                  onDelete(comment.id);
                }}
              >
                Excluir
              </MenuItem>
            </Menu>
          </Card>
        )
  }
}

export default withStyles(styles)(Comment);
