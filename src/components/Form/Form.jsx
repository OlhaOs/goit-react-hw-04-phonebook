import css from './Form.module.css';
import { nanoid } from 'nanoid';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.number().required('Phone is required'),
});

export default function FormBook({ onSubmitButton }) {
  const handleSubmit = (values, actions) => {
    const id = nanoid();
    onSubmitButton({ ...values, id });
    actions.resetForm();
  };

  const inputNameId = nanoid();
  const inputTelId = nanoid();

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.phoneBook}>
          <label htmlFor={inputNameId} className={css.lbl}>
            Name
          </label>
          <Field id={inputNameId} type="text" name="name" />
          <ErrorMessage name="name" />
          <label htmlFor={inputTelId} className={css.lbl}>
            Phone number
          </label>
          <Field type="tel" id={inputTelId} name="number" />
          <ErrorMessage name="number" />
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

// Варіант без Formik (використання state)

// import css from './Form.module.css';
// import { nanoid } from 'nanoid';
// import React from 'react';

// export default class Form extends React.Component {
//   state = {
//     name: '',
//     id: '',
//     number: '',
//   };

//   handleInputChange = event => {
//     const { name, value, id } = event.currentTarget;
//     this.setState({
//       [name]: value,
//       id,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmitButton(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const inputNameId = nanoid();
//     const inputTelId = nanoid();
//     return (
//       <>

//         <form className={css.phoneBook} onSubmit={this.handleSubmit}>
//           <label htmlFor={inputNameId} className={css.lbl}>
//             Name
//           </label>
//           <input
//             id={inputNameId}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//           <label htmlFor={inputTelId} className={css.lbl}>
//             Phone number
//           </label>
//           <input
//             type="tel"
//             id={inputTelId}
//             name="number"
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleInputChange}
//           />
//           <button type="submit" className={css.btn}>
//             Add contact
//           </button>
//         </form>{' '}
//       </>
//     );
//   }
// }
