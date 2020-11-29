import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {
                        id,
                        img,
                        info,
                        price,
                        title,
                        inCart,
                    } = value.detailProduct;
                    return (
                        <div className='container py-5'>
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-blue my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <img
                                        src={img}
                                        className='img-fluid'
                                        alt='product'
                                    ></img>
                                </div>
                                <div className='col-10 mx-auto col-md-6 my-3 '>
                                    <h4 className='text-blue'>
                                        <strong>
                                            Price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className='mt-3 mb-0 text-muted lead'>
                                        {info}
                                    </p>

                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                back to store
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}
