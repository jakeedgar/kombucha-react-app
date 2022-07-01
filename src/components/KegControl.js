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

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
  const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
  this.setState({
    mainKegList: newMainKegList,
    selectedKeg: null
  });
}

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
  const editedMainKegList = this.state.mainKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(kegToEdit);
  this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
}

  render() {
    
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = null;
    }

    currentlyVisibleState = 
      <KegList 
        mainKegList={this.state.mainKegList} 
        onKegSelection={this.handleChangingSelectedKeg} 
        buttonText = "Add Keg"/>;

    return(
      <React.Fragment>
        <div>
          {currentlyVisibleState}
        </div>
        <button>Submit</button>
      </React.Fragment>
    )
  }
}

export default KegControl;