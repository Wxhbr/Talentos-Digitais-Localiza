import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Selectors.css';

import { setSessionStorage } from '../store/actions/selectors';

const Selectors = (
  {
    selects, i, setSelectedValues, filters,
  },
) => {
  let filtersColumns = [];
  if (filters.length > 1) {
    const [, ...rest] = filters;
    filtersColumns = !rest.length
      ? rest
      : rest.map(({ numeric_values: { column } }) => column);
  }
  return (
    <div className="select-container">
      <div className="select">
        <select id="values" className="custom-select" onChange={(e) => setSelectedValues(e, i)}>
          {
            i === 0
              ? <option className="select-column" value="">Escolha uma coluna</option>
              : <option className="select-comparison" value="">Escolha um comparador</option>
          }
          {
            selects.map((value) => (filtersColumns.includes(value)
              ? null
              : <option value={value} key={value}>{value}</option>))
          }
        </select>
      </div>
      <div className="filter-number-content">
        {i === 1 ? <input
          className="input-filter-number"
          type="number"
          placeholder="Digite um valor numerico"
          onChange={(e) => setSelectedValues(e, 2)}
        /> : ''}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedValues: (e, i) => dispatch(setSessionStorage(e, i)),
});

const mapStateToProps = ({
  selectors: {
    selectedValues,
  },
  table: {
    filters,
  },
}) => ({
  filters,
  selectedValues,
});


export default connect(mapStateToProps, mapDispatchToProps)(Selectors);

Selectors.propTypes = {
  setSelectedValues: PropTypes.func.isRequired,
  selects: PropTypes.instanceOf(Array).isRequired,
  i: PropTypes.number.isRequired,
  filters: PropTypes.instanceOf(Array).isRequired,
};

Selectors.defaultProps = {
};
