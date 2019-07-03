import * as constants from './constants'
const INITIAL_STATE = {
    focused: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.HANDLE_FOCUS:
            return {
                focused: true
            }
        case constants.HANDLE_BLUR:
            return {
                focused: false
            }
        default:
            return state
    }
}