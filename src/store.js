import { createStore, combineReducers } from 'redux'
import counter, { incAction, decAction, resetAction, substractAction, addAction as addActionCounter } from './state/counter'
import add from './state/add'
import calculator from './state/calculator'
import { inputAction } from './state/calculator'
const reducer = combineReducers({
    add,
    counter,
    calculator
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


window.inputAction = (number) => store.dispatch(inputAction(number))


window.state = () => {
    const state = store.getState().calculator
    console.log({
        ...state,
        display: state.isResultsIsShown ? state.result : state.input
    })
}