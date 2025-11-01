import wrapPromise from './wrapPromise';

function fetchData(url) {
    // Can use axios too
    const promise = fetch(url)
        .then((res) => res.json())
        .then((res) => res);

    //console.log(promise);  

    return wrapPromise(promise);
}

export default fetchData;