const apiKey = 'lu7odvS2JFnnefhRa0GH4ulLdL5kVSgzfZhESWUUSPQqtj2INEFGhwV3vkAvSj1Wiocm4TvIFN-x6REqbLWtobOzxggZ52wS7gT3mqvOWqDmobpHomfSYqWQRscKY3Yx';

async function getSearchResults(term, location, sorting) {
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&sort_by=${sorting}&limit=20`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
        }
    }
    try {
        const response = await fetch(endpoint, options);
        if (response.ok) {
            const jsonResponse = await response.json();
            const businesses = jsonResponse.businesses;
            return businesses;
        }
    } catch (error) {
        console.log(error);
    }
}

export default getSearchResults;