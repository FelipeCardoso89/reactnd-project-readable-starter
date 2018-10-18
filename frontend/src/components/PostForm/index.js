import React, { Component } from "react";
import { Button, Typography, TextField, InputLabel, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage } from 'formik';
import { Container } from "./styles";

const styles = theme => ({
  textField: {

  },
  form: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 32
  },
  selectContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: 32
  }
});

class PostForm extends Component {
  render() {
    const { classes, categories } = this.props
    return (
        <Container>
        <Formik
        initialValues={{ title: '', body: '', author: '', category: '' }}
        validate={values => {
        let errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={classes.form}>
          <Typography variant="title"> NOVO POST </Typography>
          <TextField
            id="standard-name"
            label="Título"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Conteúdo"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Nome do autor"
            className={classes.textField}
            margin="normal"
          />
          <div className={classes.selectContainer}>
            <InputLabel htmlFor="age-native-simple">Categorias</InputLabel>
            <Select native>
            <option value="" />
              {categories.map(category => <option value={`${category.name}`}>{`${category.name}`}</option>)}
            </Select>
          </div>
          <Button type="submit" disabled={isSubmitting}>Criar</Button>
        </Form>
      )}
    </Formik>
        </Container>
    );
  }
}

export default withStyles(styles)(PostForm);
