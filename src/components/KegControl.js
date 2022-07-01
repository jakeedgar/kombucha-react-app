import React from "react";

class KombuchaKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainKegList: []
    }
  }

  render() {

    return(
      <React.Fragment>
        <button>Submit</button>
      </React.Fragment>
    )
  }
}

export default KombuchaKegControl;