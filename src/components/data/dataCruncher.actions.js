export const fetchOK = 'fetch-OK';
export const fetchBad = 'fetch-Bad';

export const dataCrunch = (dispatch) => {
    dispatch({type:fetchOK,payload:['some fake data some fake data some fake data some fake data some fake data']});
    // fetch('https://randomuser.me/api')
    // .then(res=>res.json())
    // .then(res=>res.results)
    // .then(res=>dispatch({type:fetchOK,payload:JSON.stringify(res)}))
    // .catch(err=>dispatch({type:fetchBad,payload:err}))
}