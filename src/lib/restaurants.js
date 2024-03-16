const url = (latLong, query, limit) => {
    return `https://api.foursquare.com/v3/places/search?limit=${limit.toString()}&query=${query}&ll=${latLong}`
}

export const fetchRestaurants = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.FOURSQUARE_AUTH
        }
      };
      
      const response = await fetch(url('22.572644064124315%2C88.36429569026392', 'restaurant', 9), options)
      const data = await response.json()

      return data.results
}