import PropTypes from "prop-types";
import s from "./ContactList.module.css";

function ContactList({ contacts, deliteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <div>
            <p className={s.text}>
              Name: <span className={s.text_d}>{contact.name}</span>
            </p>
            <p className={s.text}>
              Number: <span className={s.text_d}>{contact.number}</span>
            </p>
          </div>
          <button
            type="button"
            className={s.button}
            onClick={() => deliteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  deliteContact: PropTypes.func.isRequired,
};

export default ContactList;
