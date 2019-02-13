import React, { Fragment, Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // this could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary.js] Will update');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {igKey}
                        </span>:
                    {this.props.ingredients[igKey]}
                    </li>
                );
            });

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredient:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCanceled} btnType='Danger'>Cancel</Button>
                <Button clicked={this.props.purchaseContinue} btnType='Success'>Continue</Button>
            </Fragment>
        );
    }
};

export default OrderSummary;