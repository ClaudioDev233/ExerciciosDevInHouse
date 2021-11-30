const paises =[{
  "name": "Afghanistan",
  "region": "Asia",
  "population": 38928341,
  "area": 652230.0
}, {
  "name": "Brazil",
  "region": "Americas",
  "population": 212559409,
  "area": 8515767.0
}, {
  "name": "China",
  "region": "Asia",
  "population": 1402112000,
  "area": 9640011.0
}, {
  "name": "Egypt",
  "region": "Africa",
  "population": 102334403,
  "area": 1002450.0
}, {
  "name": "Estonia",
  "region": "Europe",
  "population": 1331057,
  "area": 45227.0
}, {
  "name": "India",
  "region": "Asia",
  "population": 1380004385,
  "area": 3287590.0
}, {
  "name": "Malawi",
  "region": "Africa",
  "population": 19129955,
  "area": 118484.0
}, {
  "name": "Poland",
  "region": "Europe",
  "population": 37950802,
  "area": 312679.0
}, {
  "name": "Romania",
  "region": "Europe",
  "population": 19286123,
  "area": 238391.0
}]

const paisesUmMilhao = paises.filter(paises => paises.population > 1000000)


//refazer o que ta ai embaixo
const nomeRegiao = paises.map(paises =>{
    return{
        nome: paises.name,
        regiao: paises.region
    }
});


const paisEuropeu = paises.every(paises => paises === 'Europe')


const europa = paises.filter(paises => paises.region === 'Europe');
const popEuropa = europa.map(paises => paises.population);
const somaPop = popEuropa.reduce((total,atual)=> Math.round((total+atual)/europa.length))



const primeiroPaisAfrica = paises.find(paises=> paises.region === "Africa")

const todosAsia = paises.filter(paises => paises.region === 'Asia')

const paisesArea = paises.map(paises => paises.area)
const somaArea = paisesArea.reduce((total, atual) =>{ return total + atual})
console.log(somaArea)