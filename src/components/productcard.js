import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/productcard.css';

class Productcard extends Component {

  
    render(){
        var stars = [];
        for(var i=1;i<=5;i++){
            if(i<=this.props.ratings){
                stars.push(<span key={`star-${i}`} className="fa fa-star checked"></span>);
            }else{
                stars.push(<span key={`star-${i}`} className="fa fa-star"></span>);
            }
        }
        return(
            <div className=" col-md-3 column productbox mainCard">
            <div className="producttitle">{this.props.name}</div>
            <div className="productprice">
            <div className="pricetext">₹{this.props.price}</div>
            <div className="pricetext">{stars}</div>
            <button href="" className="btn btn-danger btn-sm" role="button"><Link to={"/product/"+this.props.productId}><span className="navColor">View</span></Link></button></div>
            </div>
    );
    }
}

export default Productcard;