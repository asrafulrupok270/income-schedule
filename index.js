document.getElementById("calculate-btn").addEventListener("click",function(){


    const income =parseFloat( document.getElementById("income").value 
    )
    console.log(income)
    const food =parseFloat( document.getElementById("food").value 
    )
   
    const rent =parseFloat( document.getElementById("rent").value 
    )
   
    const clothes =parseFloat( document.getElementById("clothes").value 
    )
   
    const totalExpanse =  document.getElementById("total-expense")
    totalExpanse.innerText = food+rent+clothes;

    const balance =  document.getElementById("balance")
   
    balance.innerText =  income-  totalExpanse.innerText
   
   
})

document.getElementById("save-btn").addEventListener("click",function(){

    const save = document.getElementById("save").value
    if(save === "20"){
        const income =parseFloat( document.getElementById("income").value 
        )
        const saving = document.getElementById("saving-amount") 
        const save = income*0.2;
saving.innerText = save

    }
    else{
        alert("wrong")
    }
    const saving = document.getElementById("saving-amount").innerText 
    const balance =  document.getElementById("balance").innerText
  
    const remainingBalance = document.getElementById("remaining-balance")

    remainingBalance.innerText = balance-saving
})