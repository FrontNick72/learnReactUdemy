import React, { Component } from 'react';

import axios from '../../../axios-orders';
import classes from './ContactData.css';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Nikita',
                address: {
                    street: 'Sozidateley',
                    zipCode: '625018',
                    country: 'Russia'
                },
                email: 'nd@crtweb.ru'   
            },
           deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order)
            .then((response) => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({ loading: false });
            });      
    }

    render () {
        let form = (
            <form>
                <fieldset>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="text" name="email" placeholder="Your email" />
                </fieldset>
                <fieldset>
                    <input type="text" name="street" placeholder="Your street" />
                    <input type="text" name="postalCode" placeholder="Your postal code" />
                </fieldset>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }
         
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;