import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

const AddPostButton = (props) => {
  return (
    <Button variant="fab" color="primary" {...props}>
      <AddIcon />
    </Button>)
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all"
    };
  }

  componentDidMount() {

  }

  render() {
    const { classes } = this.props;
    return <div> <AddPostButton onClick={() => { console.log("Adicionar Post") }} className={classes.fab}/> </div>
  }
}

export default withStyles(styles)(Home);
