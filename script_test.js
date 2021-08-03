console.log("updatings data");
/*const key = "f549ccfd90691edc95311e4119a2caaa";
const proxy= "https://cors-anywhere.herokuapp.com/";
*/
const data1= document.getElementById("table1").rows[1].cells;
const data2= document.getElementById("table2").rows[1].cells;

const api = `https://api.covid19api.com/summary`;

 function Refresh(){
 fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        console.log(data);
        display(data);
    })
}

    function display(data){
        data1[0].style.background="5px orange";
        data1[1].style.background="rgb(180, 59, 85)";
        data1[2].style.background="lightgreen";
        data1[0].innerHTML= data.Global.NewConfirmed;
        data1[1].innerHTML= data.Global.NewDeaths;
        data1[2].innerHTML= data.Global.NewRecovered;

        data2[0].style.background="orange";
        data2[1].style.background="red";
        data2[2].style.background="cyan";
        data2[0].innerHTML= data.Global.TotalConfirmed;
        data2[1].innerHTML= data.Global.TotalDeaths;
        data2[2].innerHTML= data.Global.TotalRecovered;
    }