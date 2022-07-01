import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
  event.preventDefault();
  props.onNewKegCreation({
      id: v4(), 
      name: event.target.name.value, 
      price: event.target.price.value, 
      content: event.target.content.value, 
      pints: 124,
      pintsSold: 0
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText='New Keg!' />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;