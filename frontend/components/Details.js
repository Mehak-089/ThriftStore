import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,categories,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                        {/* title */}
                        <div className="row">
                        <div className="col-10 max-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                        </div>
                        </div> 
                        {/* end-title */}
                        {/* product info */}
                        <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} className="img-fluid" alt="product"/>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>Product: {title}</h2>
                        
                        <h4 className="text-blue">
                        <strong>
                            Price: <span>&#x20B9;</span>
                            {price}
                        </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        some info about product:
                        </p>
                        <p className="text-muted lead">{info}</p>
                        {/* buttons */}
                        <div>
                            <Link to="/">
                            <ButtonContainer>back to products</ButtonContainer>
                            </Link>
                            <ButtonContainer
                            cart
                            disabled={inCart ? true:false}
                            onClick={()=> {
                                value.addToCart(id);
                                value.openModal(id);
                            }}
                            >
                            {inCart? "in cart":"add to cart"}
                            </ButtonContainer>
                        </div>
                        </div>
                        </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}