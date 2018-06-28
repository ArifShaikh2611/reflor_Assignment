import React, { Component } from 'react';
import Filterbar from './components/filterbar';
import Productcard from './components/productcard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {},
      products: [{
        id: 1,
        name: 'Moto G1',
        price: 1000,
        rating: 1
      },
      {
        id: 2,
        name: 'Samsung J7',
        price: 2000,
        rating: 2
      },
      {
        id: 3,
        name: 'Redmi 5',
        price: 3000,
        rating: 3
      },
      {
        id: 4,
        name: 'Iphone 7 plus',
        price: 4000,
        rating: 4
      },
      {
        id: 5,
        name: 'Iphone',
        price: 5000,
        rating: 4
      },
      {
        id: 6,
        name: 'Moto G6',
        price: 6000,
        rating: 5
      },
      {
        id: 7,
        name: 'Nokia 8000',
        price: 3500,
        rating: 2
      },
      {
        id: 8,
        name: 'HTC K400',
        price: 4500,
        rating: 4
      }]
    }
  }


  componentDidMount() {
    if (this.props.location.search !== "") {
      const params = new URLSearchParams(this.props.location.search);
      const filter = params.get('filter').split("_");
      this.setState({ filter: { param: filter[0], val: filter[1] } });
      if (filter[0] === "range") {
        this.setState({ filter: { param: filter[0], val: [filter[1], filter[2]] } });
      }
    }
  }


  applyFilter = (filterParam, value) => {
    this.setState({ filter: { param: filterParam, val: value } });
  }

  displayProducts = () => {
    var tempFilter = [];

    switch (this.state.filter.param) {
      case 'price':
        tempFilter = this.state.products.filter((obj) => obj.price <= this.state.filter.val);
        break;
      case 'rating': 
        tempFilter = this.state.products.filter((obj) => obj.rating <= this.state.filter.val);
        break;
      case 'range': 
        if (this.state.filter.val[1] === 0) {
          tempFilter = this.state.products.filter((obj) => obj.price >= this.state.filter.val[0]);
        } else {
          tempFilter = this.state.products.filter((obj) => obj.price >= this.state.filter.val[0] && obj.price <= this.state.filter.val[1]);
        }
        break;
      case 'name': tempFilter = this.state.products.filter((obj, index) => obj.name.toLowerCase().includes(this.state.filter.val.toLowerCase()));
        break;
      default: tempFilter = this.state.products;
        break;
    }

    if (this.state.filter.val == 0) {
      tempFilter = this.state.products;
    }

    if (tempFilter.length === 0) {
      return (
        <div className="alert alert-danger mt-3">
          <strong>Oh sanp!</strong> Currently No items available for requested filter. please try again after some time!
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



export default App;
