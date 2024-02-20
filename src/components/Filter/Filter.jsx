import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from '../../redux/filterSlice';
// import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <div className={css.filter}>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={changeFilter}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   changeFilter: PropTypes.func,
// };

export default Filter;
