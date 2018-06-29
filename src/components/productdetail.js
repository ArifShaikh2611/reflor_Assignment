import React, { Component } from 'react';

class Productdetail extends Component {
componentDidMount(){
    console.log(this.props.match.params);
}

    render(){
        return(
            <div>
                <h2>Here goes the product details</h2>
                </div>
        )
    }


}

export default Productdetail;