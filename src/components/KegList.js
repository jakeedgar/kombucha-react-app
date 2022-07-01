import React from "react"
import KombuchaKeg from "./KombuchaKeg"
import PropTypes from "prop-types"

export default function KegList (props) {

  return(
    <React.Fragment>
      <hr className="list" />
      {props.kegList.map((keg) =>
      <KombuchaKeg 
        whenKegClicked = {props.onKegSelection}
        id={keg.id}
        key={keg.id}
        name={keg.name}
        content={keg.content}
        price={keg.price}
        pints={keg.pints}
      />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};