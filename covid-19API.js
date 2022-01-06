const totalCa =document.querySelector('.totalCa')
const totalDeath =document.querySelector('.totalDeath')
const totalConfirm =document.querySelector('.confirm')

const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    let url = "https://api.covid19api.com/summary";

    fetch(url)
    .then(function(res){
      return res.json();
    }).then(function(data){
        totalCa.textContent=data.Global.TotalConfirmed;
        totalDeath.textContent=data.Global.TotalDeaths
        totalConfirm.textContent=data.Global.NewConfirmed;
    })
    // .catch(function(err){
    //   console.error(err)
    // })

})