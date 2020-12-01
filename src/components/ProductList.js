import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <Title name='The Life of' title='Jui Patel'></Title>
                        <div className='row'>
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map((product) => {
                                        return (
                                            <Product
                                                key={product.id}
                                                product={product}
                                            />
                                        );
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                        <h3 className='text-muted text-center mt-2'>
                            Because you deserve anything and everything
                        </h3>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
