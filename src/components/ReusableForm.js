import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <textarea 
          className='input-text'
          type='text'
          name='brand'
          placeholder='Kombucha Brand Name' />
        <textarea 
          className='input-text'
          type='text'
          name='name'
          placeholder='Kombucha Name' />
        <textarea
          className='input-text'
          type='text'
          name='price'
          placeholder='Kombucha Price' />
        <textarea
          className='input-text'
          type='text'
          name='content'
          placeholder='Alcohol Content' />
        <button className='submit-button' type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;