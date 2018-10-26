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
    Select,
    TextField,
    InputLabel,
    FormControl,
    MenuItem,
    CircularProgress
} from '@material-ui/core'

type PostFormProps = {
    open: boolean,
    handleClose: func,
    handleSave: func,
    categories: object,
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
        classes, 
        open,
        handleClose,
        categorySelectorOpen,
        categorySelectorHandleClose,
        categorySelectorHandleOpen,
        categories,
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
                <DialogTitle>Nova postagem</DialogTitle>
                <DialogContent>
                    <DialogContentText>Crie seu novo post</DialogContentText>
                    
                    <TextField 
                        autoFocus
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="dense" 
                        id="title"
                        label="Título"
                        value={values.title}
                    />

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

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Categoria</InputLabel>
                        <Select
                            name="category"
                            open={categorySelectorOpen}
                            value={values.category}
                            onClose={categorySelectorHandleClose}
                            onOpen={categorySelectorHandleOpen}
                            onChange={handleChange} 
                            onBlur={handleBlur}
                        >
                        {categories.map(category => <MenuItem key={category.path} value={category.path}>{category.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">CANCELAR</Button>
                    <Button onClick={handleSubmit} color="primary">SALVAR</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
} 

class PostForm extends Component<PostFormProps> {

    constructor(props) {
        super(props)
        this.state = {
            categorySelectorOpen: false
        }
    }

    componentDidMount () {
        this.props.fet
    }

    categorySelectorHandleClose = () => {
        this.setState({ categorySelectorOpen: false })
    }

    categorySelectorHandleOpen = () => {
        this.setState({ categorySelectorOpen: true })
    }

    render() {

        const { handleSave } = this.props

        return (
            <div>
                <Formik
                    initialValues={{ title: '', body: '', author: '', category: '' }}
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

PostForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostForm);