function GetInfo(){
    const newName= document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"
}

fetch("api.openweathermap.org/data/2.5/forecast?q'+newName.value+'=&appid=3dcfb21eca2150e046f30fba7d0d457f");
then(response => response.json())
.then(data =>{
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Min").innerHTML ="Min:" + Number(data.list[i].main.temp_min -288.53).toFixed(1)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" + Number(data.list[i].main.temp_max -288.53).toFixed(1)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" + Number(data.list[i].main.temp_max -288.53).toFixed(1)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("img" +(i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})

.catch(err => alert("An Error Has Occurred"))

const d =new Date();
const weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];