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
    marginTop: 16,
    marginBottom: 8
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class Post extends Component {
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
    const { id, voteScore, title, author, body, timestamp, classes } = this.props;
    const { onEdit, onDelete } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {`${voteScore}`}
            </Avatar>
          }
          action={
            <IconButton onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography variant="title">{title}</Typography>}
          subheader={`${author}, ${moment(timestamp).format("L")}`}
        />
        <CardContent>
          <Typography component="p">{body}</Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/post/detail/${id}`} size="small">
            Detalhes
          </Button>
        </CardActions>
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
              onEdit();
            }}
          >
            Editar
          </MenuItem>
          <MenuItem
            onClick={event => {
              this.handleClose(event);
              onDelete();
            }}
          >
            Excluir
          </MenuItem>
        </Menu>
      </Card>
    );
  }
}

export default withStyles(styles)(Post);
