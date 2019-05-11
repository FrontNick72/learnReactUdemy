import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.results.map((result) => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        results: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionType.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionType.ADD, value: 5 }),
        onSubtractCounter: () => dispatch({ type: actionType.SUBTRACT, value: 5 }),
        onStoreResult: () => dispatch({ type: actionType.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionType.DELETE_RESULT, resultElId: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);