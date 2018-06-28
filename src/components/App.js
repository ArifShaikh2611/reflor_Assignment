import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filterbar from './filterbar';
import Productcard from './productcard';
 import '../App.css';

class App extends Component {
  
  componentDidMount() {
    if (this.props.location.search !== "") {
      const params = new URLSearchParams(this.props.location.search);
      const filter = params.get('filter').split("_");
      this.setState({ filter: { param: filter[0], val: filter[1] } });
      this.props.filterUpdate({ param: filter[0], val: filter[1] });
      if (filter[0] === "range") {
        this.setState({ filter: { param: filter[0], val: [filter[1], filter[2]] } });
        this.props.filterUpdate({ param: filter[0], val: [filter[1], filter[2]] });
      }
    }
  }


  applyFilter = (filterParam, value) => {
    this.setState({ filter: { param: filterParam, val: value } });
    this.props.filterUpdate({ param: filterParam, val: value });
  }

  displayProducts = () => {
    var tempFilter = [];
    
    switch (this.props.filter.param) {
      case 'price':
        tempFilter = this.props.products.filter((obj) => obj.price <= this.state.filter.val);
        break;
      case 'rating': 
        tempFilter = this.props.products.filter((obj) => obj.rating <= this.props.filter.val);
        break;
      case 'range': 
        if (this.props.filter.val[1] === 0) {
          tempFilter = this.props.products.filter((obj) => obj.price >= this.props.filter.val[0]);
        } else {
          tempFilter = this.props.products.filter((obj) => obj.price >= this.props.filter.val[0] && obj.price <= this.props.filter.val[1]);
        }
        break;
      case 'name': tempFilter = this.props.products.filter((obj, index) => obj.name.toLowerCase().includes(this.props.filter.val.toLowerCase()));
        break;
      default: tempFilter = this.props.products;
        break;
    }

    if (this.props.filter.val == 0) {
      tempFilter = this.props.products;
    }

    if (tempFilter.length === 0) {
      return (
        <div className="alert alert-danger mt-3">
          <strong>Oh sanp!</strong> Currently No items available. please try again after some time!
        </div>
      )
    }

    return (
      tempFilter.map((Obj, index) => <Productcard key={`key-${index}`} name={Obj.name} price={Obj.price} ratings={Obj.rating} />)
    )
  }

  render() {
    return (
      <div className="container">
        <Filterbar filterEvent={this.applyFilter} />
        {
          this.displayProducts()
        }
      </div>
    );
  }
}

const mapStateToPorps = state => ({
  filter : state.filter,
  products : state.products
});


const mapDispatchToProps = {
  filterUpdate : (filterParam) => ({type:"UPDATEFILTER",payload:filterParam})
}

export default connect(mapStateToPorps ,mapDispatchToProps)(App);
