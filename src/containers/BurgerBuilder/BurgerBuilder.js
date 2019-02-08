import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.50,
    bacon: 1.00,
    cheese: 0.80,
    meat: 2.00
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.00,
        purchaseable: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey];
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0);

        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCounted;
        
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount > 0) {
            const updatedCounted = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };

            updatedIngredients[type] = updatedCounted;

            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            });

            this.updatePurchaseState(updatedIngredients);
        }        
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                    disabled={disabledInfo} />
            </Fragment>
        );
    }
}

export default BurgerBuilder;