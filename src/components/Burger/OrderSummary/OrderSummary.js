import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}
                    </span>: 
                    {props.ingredients[igKey]}
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
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCanceled} btnType='Danger'>Cancel</Button>
            <Button clicked={props.purchaseContinue} btnType='Success'>Continue</Button>
        </Fragment>
    )
};

export default orderSummary;