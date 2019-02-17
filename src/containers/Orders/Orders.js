import React, { Component } from 'react';

import axios from '../../axios-orders';

import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then((response) => {
                const data = response.data;
                let orders = [];

                for (let order in data) {
                    orders.push({
                        ...data[order],
                        id: order
                    });
                }

                console.log('orders', orders, data);
                
                this.setState({loading: false, orders: orders});
            })
            .catch((error) => {
                console.log('error', error.message);
                this.setState({loading: false}); 
            });
    }

    render() {
        let orders = null;
        
        if (this.state.orders.length) {
            orders = this.state.orders.map((order) => (
                    <Order 
                        key={order.id}
                        price={order.price}
                        ingredients={order.ingredients} />
                    ));
        }

        if (this.state.loading) {
            orders = <Spinner />;
        }

        return (
            <div>
                {orders}
            </div>            
        );
    }
}

export default withErrorHandler(Orders, axios);