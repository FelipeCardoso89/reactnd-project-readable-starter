import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { withStyles } from '@material-ui/core/styles';

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core'

import {
    Button,
    TextField,
    CircularProgress
} from '@material-ui/core'

type CommentFormProps = {
    open: boolean,
    handleClose: func,
    handleSave: func,
    post: object
}

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    minWidth: 120,
  },
  form: {
    display: 'flex',
    width: 300,
    heigth: 400
  }
})

const ActivityIndicator = ({classes, open, handleClose}) => {
    return (
        <div className={classes.form}>
            <Dialog open={open} onClose={handleClose}> 
                <DialogContent>
                    <CircularProgress size={80} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

const Form = props => {

    const { 
        open,
        handleClose
    } = props

    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit
    } = props

    return (
        <div> 
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Novo comentário</DialogTitle>
                <DialogContent>
                    <DialogContentText>Deixe seu commentário</DialogContentText>
                
                    <TextField 
                        fullWidth 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="dense" 
                        id="body" 
                        label="Conteúdo"
                        value={values.body}
                    />

                    <TextField
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="dense"
                        id="author"
                        label="Autor"
                        value={values.author}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">CANCELAR</Button>
                    <Button onClick={handleSubmit} color="primary">SALVAR</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
} 

class CommentForm extends Component<CommentFormProps> {
    render() {

        const { handleSave } = this.props

        return (
            <div>
                <Formik
                    initialValues={{ body: '', author: '' }}
                    validate={values => {}}
                    onSubmit={handleSave}
                >
                {({isSubmitting, ...formProps }) => {
                    if(isSubmitting) { return ( <ActivityIndicator {...this.props} /> ) }
                    return <Form {...this.props} {...formProps} />
                }}
                </Formik>
            </div>
        )
    }
}

CommentForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentForm);