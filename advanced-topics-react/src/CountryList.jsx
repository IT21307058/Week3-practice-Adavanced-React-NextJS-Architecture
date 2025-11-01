import fetchData from "./api/fetchData";

const resource = fetchData('https://restcountries.com/v3.1/all?fields=name');

const CountryList = () => {

//     At this moment:

// UserProfile throws a Promise.

// React’s internal render engine (Fiber) catches it.

// React sees: “Oh, a Promise was thrown inside this part of the tree → it’s not ready yet.”

// React shows the fallback UI (from <Suspense fallback={...}>).

// React keeps listening to that Promise.

    const countries = resource.read();

    return (
        <ul>
            {
                countries.map(({ name }) => (
                    <li key={name.common}>{name.common}</li>
                ))
            }
        </ul>
    )
}

export default CountryList;