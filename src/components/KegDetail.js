import React from "react";
import PropTypes from "prop-types";

export default function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Details about This Kombucha</h1>
      <h3>{keg.name} - {keg.price}</h3>
      <p>{keg.content} % alcohol</p>
      <button onClick={ props.onClickingEdit }>Update keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Remove keg</button>
      <hr className='line-small'/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};