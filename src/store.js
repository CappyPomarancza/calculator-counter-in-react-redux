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



const getDiplayedVal = () => {
    const state = store.getState().calculator
  
    return state.isResultShown ? state.result : state.input
  }
  
  store.dispatch(inputAction(6))
  if (getDiplayedVal() !== 6) {
    throw new Error('Input not works! Shoud be 6')
  }
  store.dispatch(inputAction(7))
  if (getDiplayedVal() !== 67) {
    throw new Error('Input not works! Shoud be 67')
  }



window.inputAction = (number) => store.dispatch(inputAction(number))

window.state = () => {
    const state = store.getState().calculator
    console.log({
        ...state,
        display: state.isResultsIsShown ? state.result : state.input
    })
}