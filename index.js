
let container = document.querySelector("#container")
let search = document.querySelector("#ist>button")
let cont = document.querySelector("#ist>input")
let popula = document.querySelector("#sec>input")
let popuBut = document.querySelector("#sec>button")


popuBut.addEventListener("click", filtpopu)

function filtpopu(){
    let value = popula.value
    let newData = Data.filter(function(ele){
        console.log("hello")
        return value >= ele.population
    })

    if(newData.length>0){
        showData(newData)
    }
    else{
        container.innerHTML = "Sorry No Data !!!"
    }
}


function showData(arr){
    container.innerHTML = ""
    arr.forEach(function(ele, i){
        
        
        let Box = document.createElement("div")

        let h3 = document.createElement("h3")
        h3.innerHTML = ele.country

        let rank = document.createElement("div")
        rank.innerHTML = `Rank : ${ele.Rank}`

        let popu = document.createElement("div")
        popu.innerHTML= `Population : ${ele.population}`

        Box.append(h3, rank, popu)
        container.append(Box)


    })
 
}



function getData(URL){
    
    fetch(URL)
    .then(function(res){
        return res.json()
    })
    .then(function(res){

        Data = res.data

       
        showData(Data)
    })

}

getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")


function searching(){
    let value= cont.value
 
    let newData = Data.filter(function(ele){
        console.log("hello")
        return ele.country.toLowerCase()===value.toLowerCase()
    })

    if(newData.length>0){
        showData(newData)
    }
    else{
        container.innerHTML = "Sorry No Data !!!"
    }
}

let Data ;

search.addEventListener("click", searching)