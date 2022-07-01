import React from "react";
import PropTypes from "prop-types";

export default function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit, onClickingSell } = props;

  return (
    <React.Fragment>
      <h1>Details about This Kombucha</h1>
      <h3>{keg.brand } - {keg.name} - {keg.price}</h3>
      <p>{keg.content} % alcohol</p>
      <p> There are {keg.pints} remaining in this keg</p>
      <p>we have sold {keg.pintsSold} pints so far today.</p>
      <button onClick={() => onClickingEdit(keg.id) }>Update keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Remove keg</button>
      <button onClick={() => onClickingSell(keg.id) }>Sell a Pint</button>
      <hr className='line-small'/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};