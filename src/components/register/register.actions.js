export const userChanged = (payload) => ({
    type: 'USER_CHANGED',
    payload
})
export const fetchError = (payload) => ({
    type: 'FETCH_FAILED',
    payload
})
export const sendData = (dispatch, data) => {
    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => res[0])
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