import React from 'react'
import { connect } from 'react-redux'
import { incAction, decAction, resetAction } from '../state/counter'

const Counter = (props) => (
    <div>
        <h1>{props.number}</h1>
        <button
            onClick={props.incHandler}
        >
            +
                </button>
        <button
            onClick={props.decHandler}
        >
            -
                </button>
        <button
            onClick={props.resetHandler}
        >
            RESET
                </button>
    </div>
)

const mapStateToProps = state => ({
    number: state.counter.number
})

const mapDispatchToProps = dispatch => ({
    incHandler: () => dispatch(incAction()),
    decHandler: () => dispatch(decAction()),
    resetHandler: () => dispatch(resetAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
