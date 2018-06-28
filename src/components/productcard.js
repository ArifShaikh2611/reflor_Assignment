import React, { Component } from 'react';
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
            <a href="#" className="btn btn-danger btn-sm" role="button">BUY</a></div>
            </div>
    );
    }
}

export default Productcard;