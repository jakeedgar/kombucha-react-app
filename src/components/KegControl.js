import React from "react";
import { v4 } from 'uuid';
import KegList from './KegList'
import KegDetail from "./KegDetail";
import KegEditForm from './KegEditForm';
import NewKegForm from './NewKegForm'

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
        { id: v4(), name: "Synergy", content: 0.3, price: 350, pints: 124, pintsSold: 0 },
        { id: v4(), name: "Tom's Hard Kombucha", content: 7, price: 1000, pints: 124, pintsSold: 0 }
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

    handleDecrementingPints = () => {
        const kegToDecrement = this.state.selectedKeg;
        if (this.state.selectedKeg.pints !== 0){
            const pintsToDecrement = {
                name: kegToDecrement.name,
                brand: kegToDecrement.brand,
                price: kegToDecrement.price,
                alcoholContent: kegToDecrement.alcoholContent,
                pints: kegToDecrement.pints -=1,
                pintsSolid: kegToDecrement.pintsSold +=1,
                id: kegToDecrement.id,
                key: kegToDecrement.id
            }
            this.handleChangingSelectedKeg(pintsToDecrement.id)   
        } else {
            this.handleChangingSelectedKeg(this.state.selectedKeg.id)
        }
    }

handlePineDecrementing = (selectedKegToDecrement) => {
  const editedMainKegList = this.state.mainKegList
  .filter(keg => keg.id !== this.state.selectedKeg.id)
  .concat(selectedKegToDecrement);
  this.setState({
    mainKegList: editedMainKegList,
    editing: false,
    selectedKeg: null
  })
}

  render() {
    
    let currentlyVisibleState = null;
    let buttonText = null;



    if (this.state.editing ) {      
      currentlyVisibleState = 
      <KegEditForm 
        keg = {this.state.selectedKeg} 
        onEditKeg = {this.handleEditingKegInList} />
        buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} 
        onClickingEdit = {this.handleEditClick} 
        onClickingDecrement = {this.handleDecrementingPints}/>
        buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList}  />;
        buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = 
      <KegList 
        kegList={this.state.mainKegList} 
        onKegSelection={this.handleChangingSelectedKeg} />;
        buttonText = "Add Keg";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button className='submit-button' onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    )
  }
}

export default KegControl;