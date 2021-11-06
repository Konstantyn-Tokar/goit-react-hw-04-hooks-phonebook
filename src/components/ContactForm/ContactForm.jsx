import { useState } from "react";
import PropTypes from "prop-types";

import s from "./ContactForm.module.css";

function ContactForm({ handlelAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumder] = useState("");

  const handelChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumder(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    handlelAddContact({ name, number });
    console.log(name, number);
    setName("");
    setNumder("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <h1 className={s.title}>Phonebook </h1>
      <label className={s.label}>
        <p className={s.text}>Name</p>
        <input
          type="text"
          className={s.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handelChange}
          value={name}
        />
      </label>
      <label>
        <p className={s.text}>Number</p>
        <input
          type="tel"
          className={s.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handelChange}
          value={number}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  handlelAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
