
const INPUT = 'calculator/INPUT'
const ADD = 'calaculator/ADD'
const SUBSTRATION = 'calaculator/SUBSTRATION'

export const addAction = () => (
    {
        type: ADD
    }
)

export const inputAction = (number) => (
    {
        type: INPUT,
        number
    }
)


const initialState = {
    result: 0,
    input: 0,
    isResultShown: false,
    lastOperation: null,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                input: state.input * 10 + action.number,
                isResultShown: false
            }
        case ADD:
            return {
                ...state,
                input: 0,
                lastOperation: action.type,
                isResultShown: true,
                result: state.result + state.input,
            }
        default:
            return state
    }
}