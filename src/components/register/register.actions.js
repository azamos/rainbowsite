export const userChanged = (payload) => ({
    type: 'USER_CHANGED',
    payload
})
export const fetchError = (payload) => ({
    type: 'FETCH_FAILED',
    payload
})
export const sendData = (dispatch, data) => {
    fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.ops[0].name)
        .then(uName => dispatch(userChanged(uName)))
        .catch(err => dispatch(fetchError(err)))
}
export const inputChanged = (input) => ({//input === e.target
    type: `${input.id}_changed`,
    payload: input.value
}) 
export const fileChanged = (input) => ({
    type: 'fileName_changed',
    payload: input
})