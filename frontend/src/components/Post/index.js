import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Typography,
  Avatar,
  IconButton
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/core/styles";
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

export const Post = ({ title, author, body, timestamp, classes }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            U
          </Avatar>
        }
        action={
          <IconButton>
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
        <Button size="small">Comentários</Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Post);
