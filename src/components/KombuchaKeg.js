import React from "react"
import PropTypes from "prop-types"

function KombuchaKeg (props){
  return(
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="card-body">
              <div onClick= {() => props.whenKegClicked(props.id)}>
                <h1>{props.brand} - {props.name} - costs {props.price}$</h1>
                <h3>{props.content} % Alcohol Per Pint</h3>
                <h3>{props.pints} Pints Remaining</h3>
                <h3>{props.pintsSold} Pints Sold So Far</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

  KombuchaKeg.propTypes = {
    id: PropTypes.string,
    brand: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
    price: PropTypes.string,
    pints: PropTypes.number,
    pintsSold: PropTypes.number,
    whenKegClicked: PropTypes.func
  }

export default KombuchaKeg;