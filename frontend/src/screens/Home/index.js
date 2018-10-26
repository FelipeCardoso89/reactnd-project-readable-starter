import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PostForm from "../../components/PostForm"

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
      postFormOpen: false,
      postToEdit: null,
      loading: false
    };
  }

  componentDidMount() {
    this.props.fetchAllData()
  }

  render() {
    const { classes, categories } = this.props;
    const { postFormOpen, loading }  = this.state;
    return (
      <div> 
        <PostForm 
          loading={loading}
          categories={categories} 
          open={postFormOpen} 
          handleClose={() => { this.setState({ postFormOpen: false }) }}
          handleSave={(values, { setSubmitting }) => {

            this.props.savePost({ 
              title: values.title,
              body: values.body,
              author: values.author,
              category: values.category
            })
            
            setSubmitting(false)
          }}
        />
        <AddPostButton 
          onClick={() => { this.setState({ postFormOpen: true, postToEdit: null }) }}
          className={classes.fab}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Home);
