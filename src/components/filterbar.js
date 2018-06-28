import React, { Component } from 'react';
// import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import '../css/filterbar.css';



class Filterbar extends Component {
  constructor(props){
    super(props);
    this.state={
      filterCheck : "",
      reset : "0"
    }
  }

  nameSearch  = (event) => {
    browserHistory.push("?filter=name_"+event.target.value);
    this.props.filterEvent('name',event.target.value);
  }
  
  priceSearch = (event) =>{
    if(event.target.value === "0"){
      browserHistory.push("");  
    }else{
      browserHistory.push("?filter=price_"+event.target.value);
    }
    this.setState({filterCheck:"",reset:""+event.target.value});
    this.props.filterEvent('price',event.target.value);
  }

  ratingSearch = (event) =>{
    if(event.target.value === "0"){
      browserHistory.push("");  
    }else{
      browserHistory.push("?filter=rating_"+event.target.value);
    }
    this.setState({filterCheck:"",reset:""+event.target.value});
    this.props.filterEvent('rating',event.target.value);
  }

  rangeSearch = (event) =>{
    if(event.target.value === "0"){
      browserHistory.push("");  
    }else{
      browserHistory.push("?filter=range_"+event.target.value);
    }
    var rangeArr = event.target.value.split("_");
    rangeArr = rangeArr.map((val)=>parseInt(val));
    this.setState({filterCheck:"",reset:""+event.target.value});
    this.props.filterEvent('range',rangeArr);
  }

  showNameSearch = (option) => {
      if(option === "name"){
        return (
            <input type="text" placeholder="Enter Product name" onChange={this.nameSearch}  className="btn btn-outline-secondary btn-lg nameinput"/>
        );
      }
  }

  resetFilter = () =>{
    browserHistory.push("");
    this.setState({filterCheck:''});
    this.setState({reset:"0"});
    this.props.filterEvent(null,0);
  }

    render() {
      return (
       <div>
         <div id="filterBarId">
         <button className="btn btn-outline-secondary btn-lg" type="button" onClick={() => this.setState({...this.state,filterCheck:'name'})} title="Search by Name">
                <i className="fa fa-search"></i>
            </button>
         {this.showNameSearch(this.state.filterCheck)}
          <select onChange={this.priceSearch} value={this.state.reset} className="btn btn-outline-secondary btn-lg">
           <option value="0">Price</option>
           <option value="2000">less than 2000</option>
           <option value="3000">less than 3000</option>
           <option value="4000">less than 4000</option>
           <option value="0">All</option>
         </select>
         <select onChange={this.ratingSearch} value={this.state.reset} className="btn btn-outline-secondary btn-lg">
           <option value="0">Rating</option>
           <option value="2">below 2</option>
           <option value="3">below 3</option>
           <option value="4">below 4</option>
           <option value="0">All</option>
         </select>
         <select onChange={this.rangeSearch} value={this.state.reset} className="btn btn-outline-secondary btn-lg">
           <option value="0">Range</option>
           <option value="0_999">below 999</option>
           <option value="1000_3000">1000-3000</option>
           <option value="4000_0">Above 4000</option>
           <option value="0">All</option>
         </select>
           <button className="btn btn-warning btn-lg" onClick={this.resetFilter}>Reset</button>
           </div>
           
       </div>
      );
    }
  }



  export default Filterbar;
