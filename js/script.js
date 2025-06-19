//  Country data Fetch :

// const parentContainer = document.querySelector(".parent_Container");

// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/name/uganda");
// request.send();

// request.addEventListener("load", function () {

//     let [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const renderHtml = `
//         <div class="inner_container">
//             <div class="image_flag">
//                 <img src=${data.flage?.svg} alt="">
//             </div>
//             <div class="content">
//                 <h1 class="county_name">${data.name.common}</h1>
//                 <h1 class="county_Population">16M</h1>
//                 <h1 class="county_Currency">BDT</h1>
//             </div>
//         </div>
//     `;
//     parentContainer.insertAdjacentHTML("beforeend", renderHtml);

// });

// ===============================================
// Callback Hell 
// const parentContainer = document.querySelector(".parent_Container");

// const renderHtml = (data) => {
// // console.log(data.borders);

//     // Currency extract
//     // const currency = Object.keys(data.currencies)[0];
//     const currency = Object.values(data.currencies)[0].name;
//     //county_Population
//     const population = data.population;
//     const renderHtml = `
//         <div class="inner_container">
//             <div class="image_flag">
//                 <img src="${data.flags?.svg}" style="width: 600px; " alt="">
//             </div>
//             <div class="content">
//                 <h1 class="county_name">${data.name.common}</h1>
//                 <h1 class="county_Population">${formateNumber(population)}</h1>
//                 <h1 class="county_Currency">${currency}</h1>
//             </div>
//         </div>
//     `;
//     parentContainer.insertAdjacentHTML("beforeend", renderHtml);
// }
// const getCountryData = function (countryName) {
//     let request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
//     request.send();

//     request.addEventListener("load", function () {
//         let [data] = JSON.parse(this.responseText);
//         console.log(data);
//         const borders = data?.borders;
//         // console.log(borders);
//         borders?.forEach((border) => {
//             let borderRequest = new XMLHttpRequest();
//             borderRequest.open(
//                 "GET",
//                 `https://restcountries.com/v3.1/alpha/${border}`
//             );
//             // console.log(border);

//             borderRequest.send();
//             borderRequest.addEventListener("load", function () {
//                 let [borderData] = JSON.parse(this.responseText);
//                 renderHtml(borderData);
//             })
//         });
//         renderHtml(data);
//     });
// }
// function formateNumber(num) {
//     if (num >= 1e9) { return (num / 1e9).toFixed(2) + 'B' }
//     else if (num >= 1e6) { return (num / 1e6).toFixed(2) + 'M' }
//     else { return num.toSting() }
// };
// // getCountryData("Germany")
// getCountryData("Pakistan")

// <h1 class="county_Population">${(data.population / 1_000_000).toFixed(1)}M</h1>
// Callback Hell
// setTimeout(function(){
// console.log('hello');
// },10000)



// ===================================================

// then chaining

const parentContainer = document.querySelector(".parent_Container");

const renderHtml = (data) => {
    // console.log(data.borders);

    // Currency extract
    // const currency = Object.keys(data.currencies)[0];
    const currency = Object.values(data.currencies)[0].name;
    //county_Population
    const population = data.population;
    const renderHtml = `
        <div class="inner_container">
            <div class="image_flag">
                <img src="${data.flags?.svg}" style="width: 600px; " alt="">
            </div>
            <div class="content">
                <h1 class="county_name">${data.name.common}</h1>
                <h1 class="county_Population">${formateNumber(population)}</h1>
                <h1 class="county_Currency">${currency}</h1>
            </div>
        </div>
    `;
    parentContainer.insertAdjacentHTML("beforeend", renderHtml);
}
//Callback Hell 
const getCountryDate = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response) => {

            return response.json();

        }).then((date) => {

            renderHtml(date[0]);

            const borders = date[0]?.borders;

            borders?.forEach(getBorders);

        });
};

function getBorders(borderName) {

    fetch(`https://restcountries.com/v3.1/alpha/${borderName}`)

        .then((response) => response.json())

        .then((borderDate) => {

            // console.log(borderDate);

            renderHtml(borderDate[0])

        })

}


getCountryDate("Bangladesh");

function formateNumber(num) {
    if (num >= 1e9) { return (num / 1e9).toFixed(2) + 'B' }
    else if (num >= 1e6) { return (num / 1e6).toFixed(2) + 'M' }
    else { return num.toSting() }
};




