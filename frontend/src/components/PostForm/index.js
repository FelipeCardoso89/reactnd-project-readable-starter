import React, { Component } from "react";
import { Button, Typography, TextField, InputLabel, Select } from "@material-ui/core";
import uuid from 'uuid'
import { withStyles } from "@material-ui/core/styles";
import { Formik, Form } from 'formik';
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
    const { classes, categories, submit } = this.props
    return (
        <Container>
        <Formik
        initialValues={{ title: '', body: '', author: '', category: '' }}
        validate={values => {
        let errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        Object.assign(values, { id: uuid(), timestamp: Date.now()} )
        submit(values)
        setSubmitting(false)
      }}
    >
      {({ values, handleChange, handleBlur, isSubmitting }) => (
        <Form className={classes.form}>
          <Typography variant="title"> NOVO POST </Typography>
          <TextField
            id="title"
            label="Título"
            onChange={handleChange}
            onBlur={handleBlur}
            className={classes.textField}
            value={values.title}
            margin="normal"
          />
          <TextField
            id="body"
            label="Conteúdo"
            onChange={handleChange}
            onBlur={handleBlur}
            className={classes.textField}
            value={values.body}
            margin="normal"
          />
          <TextField
            id="author"
            label="Nome do autor"
            onChange={handleChange}
            onBlur={handleBlur}
            className={classes.textField}
            value={values.author}
            margin="normal"
          />
          <div className={classes.selectContainer}>
            <InputLabel htmlFor="age-native-simple">Categorias</InputLabel>
            <Select 
              name="category"
              value={values.category}
              onChange={handleChange} 
              onBlur={handleBlur}
            >
 >
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
