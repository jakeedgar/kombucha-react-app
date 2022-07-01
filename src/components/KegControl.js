import React from "react";
import { v4 } from 'uuid';
import KegList from './KegList'

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
        { id: v4(), name: "Synergy", content: 0.3, price: 350, pints: 124 },
        { id: v4(), name: "Tom's Hard Kombucha", content: 7, price: 1000, pints: 124 }
      ],
      selectedKeg: null,
      editing: false
    }
  }

  render() {
    
    let currentlyVisibleState = null;

    return(
      <React.Fragment>
        <div>
        </div>
        <button>Submit</button>
      </React.Fragment>
    )
  }
}

export default KegControl;


    // id: PropTypes.string,
    // name: PropTypes.string,
    // content: PropTypes.number,
    // price: PropTypes.number,
    // pints: PropTypes.number,
    // whenKegClicked: PropTypes.func