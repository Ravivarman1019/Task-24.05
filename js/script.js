
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    const asiaCountries = data.filter(country => country.region === 'Asia');

    
    const lessThan2LakhPopulation = data.filter(country => country.population < 200000);

    
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    })
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total population of countries: ${totalPopulation}`);

    
    const usDollarCountry = data.find(country => country.currencies['USD']);
    console.log(`Country using US dollars as currency: ${usDollarCountry.name.common}`);
  })
  .catch(error => console.log('Error fetching data:', error));
