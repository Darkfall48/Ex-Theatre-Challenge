
export function spendBalance(amount) {
    return async (dispatch, getState) => {
        dispatch({ type: 'SPEND_BALANCE', amount })
    }
}