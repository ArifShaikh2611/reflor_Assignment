import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class AddProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            rating:"1",
            invalidPrice : false,
            invalidPriceRange : false
        }
    }

   

    setName = (event) =>{
        this.setState({name:event.target.value});
    }

    setPrice = (event) =>{
        var price = event.target.value;
        var digmatch=  /^\d+$/.test(price);
        if(digmatch || event.target.value == ""){
            if(price < 1000 && event.target.value != ""){
                this.setState({invalidPriceRange:true});
            }else{
                this.setState({invalidPriceRange:false}); 
            }
            this.setState({invalidPrice:false});      
        }else{
            this.setState({invalidPrice:true,invalidPriceRange:false});
        }
        this.setState({price:event.target.value});
    }

    setRating = (event) =>{
        this.setState({rating:event.target.value});
    }

    saveProduct = () => {
        if(this.state.invalidPrice || this.state.invalidPriceRange){
            return false;
        }
        this.state.rating=parseInt(this.state.rating);
        this.props.onAddProduct(this.state);
        this.setState({name:"",price:"",rating:"1"})
    }

    deleteProduct = (event) =>{
        console.log(event.target.value);
        var removeId = parseInt(event.target.value);
        this.props.onDeleteProduct(removeId);
    }

    render(){
        return(
           <div style={{padding:'0px 30px'}}>
               <h3 className="text-center mt-4">Please enter product details</h3>
               <div className="row mt-4">
               <div className="col-lg-6 col-md-12 col-sm-12 pl-5">
               
                   <h5>Product List</h5>
                   { 
                        this.props.products.length == 0 ? 
                        <p>No products Added</p> : 
                        <table border="1" cellPadding="10">
                        <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Action</th>
                            </tr>
                            {
                                this.props.products.map((obj,index) => (
                                    <tr key={index}>
                                    <td>{obj.productId}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.price}</td>
                                    <td>{obj.rating}</td>
                                    <td><button value={obj.productId} onClick={this.deleteProduct}>Delete</button></td>
                                        </tr>
                                ))
                            }
                            </tbody>
                            
                        </table>
                    }
               
                       </div>
               <div className="border col-lg-6 col-md-12 col-sm-12">
               <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Name</label>
                </div>
                <div className="col-lg-8">
                    <input type="text" className="btn btn-outline-secondary btn-lg nameinput" onChange={this.setName} value={this.state.name}/>
                </div>
               </div>
               <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Price</label>
                </div>
                <div className="col-lg-8">
                    <input type="text" className={`btn btn-outline-secondary btn-lg nameinput`} onChange={this.setPrice} value={this.state.price}/>
                   { this.state.invalidPrice  ?  <span style={{color:'red'}}><br/>Please enter valid price.</span> : null }
                   { !this.state.invalidPrice && this.state.invalidPriceRange ?  <span style={{color:'red'}}><br/>Price should be greater than 1000!</span> : null }
                </div>
               </div>
               <div className="row mt-4">
                <div className="col-lg-2">
                    <label>Ratings</label>
               </div>
                <div className="col-lg-8">
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
                <div className="col-lg-12 text-center">
                   <button className="btn btn-success btn-lg" onClick={this.saveProduct}>Add</button>
                    { 
                        this.props.products.length != 0 ? <span className="ml-3"><Link to="/view">Click here to View Products</Link></span> : null
                    }
                    
                   </div>
                   </div>
                   </div>
                   
                       </div>
            </div>
        )
        
    }
}


const mapStateToProps = state => ({
    products : state.products
});


const mapDispatchToprops =  {
    onAddProduct : (productData) => ({type:'ADDPRODUCT',payload:productData}),
    onDeleteProduct : (productId) => ({type:'DELETEPRODUCT',payload:productId})
}

export default connect(mapStateToProps,mapDispatchToprops)(AddProduct);