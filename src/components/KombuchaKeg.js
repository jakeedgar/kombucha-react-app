import React from "react"
import PropTypes from "prop-types"

function KombuchaKeg (props){
  return(
    <div>{props.name}</div>
  )

  KombuchaKeg.propTypes = {
    name: PropTypes.string,

  }
}

export default KombuchaKeg;