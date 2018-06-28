import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            rating:""
        }
    }

    setName = (event) =>{
        this.setState({name:event.target.value});
    }

    setPrice = (event) =>{
        this.setState({price:event.target.value});
    }

    setRating = (event) =>{
        this.setState({rating:event.target.value});
    }

    saveProduct = () => {
        console.log(this.state);
        this.setState({name:"",price:"",rating:""})
    }

    render(){
        return(
           <div>
               <h3 className="text-center mt-4">Please enter product details</h3>
               <div className="border col-lg-6 m-3">
               <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Name</label>
                </div>
                <div className="col-lg-2">
                    <input type="text" className="btn btn-outline-secondary btn-lg nameinput" onChange={this.setName} value={this.state.name}/>
                </div>
               </div>
               <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Price</label>
                </div>
                <div className="col-lg-2">
                    <input type="text" className="btn btn-outline-secondary btn-lg nameinput" onChange={this.setPrice} value={this.state.price}/>
                </div>
               </div>
               <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Ratings</label>
               </div>
                <div className="col-lg-2">
                    <select className="btn btn-outline-secondary btn-lg nameinput" onChange={this.setRating} value={this.state.rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
               </div>
               <div className="row m-4">
                <div className="col-lg-4 text-center">
                   <button className="btn btn-success btn-lg" onClick={this.saveProduct}>Add</button>
                   </div>
                   </div>
                   </div>
            </div>
        )
        
    }
}


export default AddProduct;