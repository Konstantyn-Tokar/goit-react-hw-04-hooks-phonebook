import PropTypes from "prop-types";
import s from "./Filter.module.css";

function Filter({ filter, handelChangeFilter }) {
  return (
    <>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handelChangeFilter}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handelChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
