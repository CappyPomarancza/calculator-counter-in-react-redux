import { createStore, combineReducers } from 'redux'
import counter, { incAction, decAction, resetAction, substractAction, addAction as addActionCounter } from './state/counter'
import add from './state/add'
import calculator from './state/calculator'
import { inputAction, addAction } from './state/calculator'
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
    throw new Error('Input not works! Should be 6!')
  }
  store.dispatch(inputAction(7))
  if (getDiplayedVal() !== 67) {
    throw new Error('Input not works! Should be 67!')
  }
  store.dispatch(inputAction(3))
  if (getDiplayedVal() !== 673) {
    throw new Error('Input not works! Should be 673!')
  }
  
  store.dispatch(addAction())
  if (getDiplayedVal() !== 673) {
    throw new Error('Add not works! Should be 673!')
  }
  store.dispatch(inputAction(3))
  if (getDiplayedVal() !== 3) {
    throw new Error('Input not works! Should be 3!')
  }
  store.dispatch(addAction())
  if (getDiplayedVal() !== 676) {
    throw new Error('Add not works! Should be 676!')
  }