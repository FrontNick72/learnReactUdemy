import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';

import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';


class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        let orders = null;

        if (this.props.orders.length) {
            orders = this.props.orders.map((order) => (
                <Order
                    key={order.id}
                    price={order.price}
                    ingredients={order.ingredients} />
                ));
        }

        if (this.props.loading) {
            orders = <Spinner />;
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (orders) => dispatch(actions.fetchOrders(orders))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));