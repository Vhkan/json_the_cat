const request = require('request');


const breedFetcher = function(breedName) {
  //Our API Cats goes here=>
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Making a GET request
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    // Parse the JSON data from the response body
    const data = JSON.parse(body);

    //Checking if there is an entered breed
    if (data.length === 0) {
      console.log("The breed is not found");
    } else {
      // Accessing the "description" from the first entry in the data array
      const firstEntryDescription = data[0].description;
      console.log('Description of the first entry:', firstEntryDescription);
    }
  })
};

breedFetcher("Siberian");

