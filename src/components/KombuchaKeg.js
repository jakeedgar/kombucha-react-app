import React from "react"
import PropTypes from "prop-types"

function KombuchaKeg (props){
  return(
    <div>
      <div onClick= {() => props.whenKegClicked(props.id)}>
        <h1>{props.name} - costs {props.price}$</h1>
        <h3>{props.content} % Alcohol Per Pint</h3>
        <h3>{props.pints} Pints Remaining</h3>
        <h3>{props.pintsSold} Pints Sold So Far</h3>
      </div>
    </div>
  )
};

  KombuchaKeg.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.number,
    price: PropTypes.number,
    pints: PropTypes.number,
    pintsSold: PropTypes.number,
    whenKegClicked: PropTypes.func
  }

export default KombuchaKeg;