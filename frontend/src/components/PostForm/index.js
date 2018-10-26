import React, { Component } from 'react'
import PropTypes from 'prop-types';
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
    MenuItem
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
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class PostForm extends Component<PostFormProps> {

    state = {
        categorySelectorOpen: false,
        currentCategory: null
    }

    categorySelectorHandleOpen = () => {
        this.setState({ categorySelectorOpen: true })
    }

    categorySelectorHandleClose = () => {
        this.setState({ categorySelectorOpen: false })
    }

    categorySelectorHandleChange = event => {
        this.setState({ currentCategory: event.target.value });
    }

    render() {
        const { open, handleClose, handleSave, categories, post } = this.props
        const { categorySelectorOpen, currentCategory } = this.state
        
        return (
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>NOVA POSTAGEM</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Preencha o formulário a baixo</DialogContentText>
                        <TextField autoFocus fullWidth margin="dense" id="title" label="Título"/>
                        <TextField autoFocus fullWidth margin="dense" id="body" label="Conteúdo"/>
                        <TextField autoFocus fullWidth margin="dense" id="author" label="Author"/>
                        <Select
                            open={categorySelectorOpen}
                            value={currentCategory}
                            onClose={this.categorySelectorHandleClose}
                            onOpen={this.categorySelectorHandleOpen}
                            onChange={this.categorySelectorHandleChange}
                        >
                        {categories.map(category => <MenuItem value={category.path}>{category.name}</MenuItem>)}
                        </Select>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSave} color="primary">SALVAR</Button>
                        <Button onClick={handleClose} color="primary">CANCELAR</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

PostForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostForm);