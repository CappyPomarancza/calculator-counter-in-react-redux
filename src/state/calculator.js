
const INPUT = 'calculator/INPUT'
const ADD = 'calaculator/ADD'
const SUBSTRATION = 'calaculator/SUBSTRATION'

export const inputAction = (number) => (
    {
        type: INPUT,
        number
    }
)
export const addAction =() =>({
    type: ADD
})

const initialState = {
    result: 0,
    input: 0,
    isResultsIsShown: false 
}
export default (state= initialState, action) => {
    switch(action.type) {
        case INPUT: 
        return {
            ...state,
            input:state.input * 10 +  action.number ,
            isResultsIsShown: false 
        }
        default:
        return state
    }
}