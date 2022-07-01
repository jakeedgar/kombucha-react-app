import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

export default function KegEditForm(props){
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value, 
      price: event.target.price.value, 
      content: event.target.content.value, 
      id: keg.id,
      pints: keg.pints,
      pintsSold: keg.pintsSold
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission} 
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

KegEditForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};