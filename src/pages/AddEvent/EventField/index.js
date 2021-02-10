import React from 'react';
import PropTypes from 'prop-types';

/**
 * Components for event forms
 *
 * @param {string} label label of the form input
 * @param {string} name unique name to identify related state for this field
 * @param {string} fieldtype customized type of field to display
 * values : text, number, file, date, textarea, price, phone
 * @param {string} placeholder text to display when input is empty
 * @param {function} handleField function to update value of related state
 */
const EventField = ({
  label,
  name,
  fieldType,
  value,
  placeholder,
  optionnal,
  handleField,
}) => (
  <>
    {
      /** for text input */
      (fieldType === 'text') && (
        <label htmlFor={name}>
          <p className="label">{label}</p>
          <input
            name={name}
            id={name}
            type={fieldType}
            className="input-text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleField(e.currentTarget.value, name)}
            required
          />
        </label>
      )
    }
    {
      /** for time input */
      (fieldType === 'time') && (
        <label htmlFor={name}>
          <p className="label">{label}</p>
          <input
            name={name}
            id={name}
            type={fieldType}
            className="input-text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleField(e.currentTarget.value, name)}
            required
          />
        </label>
      )
    }
    {
      /** for number input (except prices) */
      (fieldType === 'number') && (
        <label htmlFor={name}>
          <p className="label">{label}</p>
          <input
            name={name}
            id={name}
            type={fieldType}
            className="input-number"
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleField(parseInt(e.currentTarget.value, 10), name)}
            required
          />
        </label>
      )
    }
    {
      /** for price input - required field */
      (fieldType === 'price' && !optionnal) && (
        <label htmlFor={name}>
          <p className="label label-price">{label}</p>
          <input
            type="number"
            name={name}
            id={name}
            className="input-price"
            value={value}
            onChange={(e) => handleField(e.currentTarget.value, name)}
            required
          />
          <p className="suffix">€</p>
        </label>
      )
    }
    {
      /** for price input - optionnal field */
      (fieldType === 'price' && optionnal) && (
        <label htmlFor={name}>
          <p className="label-price label-optionnal">
            {label}
          </p>
          <input
            type="number"
            name={name}
            id={name}
            className="input-price"
            value={value}
            onChange={(e) => handleField(e.currentTarget.value, name)}
          />
          <p className="suffix">€</p>
        </label>
      )
    }
    {
      /** for date input */
      (fieldType === 'date') && (
        <label htmlFor={name}>
          <p className="date-label">{label}</p>
          <input
            type="date"
            name={name}
            id={name}
            min="2021-07-01"
            max="2021-07-31"
            className="date-input"
            value={value}
            onChange={(e) => handleField(e.currentTarget.value, name)}
          />
        </label>
      )
    }
    {
      /** for textarea */
      (fieldType === 'textarea') && (
      <>
        <p className="label">{label}</p>
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={(e) => handleField(e.currentTarget.value, name)}
          required
        />
      </>
      )
    }
    {
      /** for phone input */
      (fieldType === 'phone') && (
        <label className="reservationContact" htmlFor={name}>
          <p className="label label-optionnal label-contact">{label}</p>
          <input
            type="number"
            name={name}
            id={name}
            placeholder={placeholder}
            className="input-phoneNumber"
            value={value}
            onChange={(e) => handleField(e.currentTarget.value, name)}
          />
        </label>
      )
    }
  </>
);

EventField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
  optionnal: PropTypes.bool,
  handleField: PropTypes.func.isRequired,
};

EventField.defaultProps = {
  placeholder: '',
  optionnal: false,
};

// == Export
export default EventField;
