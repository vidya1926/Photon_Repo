
async function login(){ //callback=validateUSer

   // callback()
    // return validateUser().then(()=>console.log("Login is sucessful"))
    //      .catch(()=>console.log("Unsuccessful login"))
   // console.log("Vaild data")
   validateUser()
   console.log("User is validated")
}

async function validateUser(callback){ //fetchData
   // callback()//fetchData()
    // return fetchData().then(()=>{console.log("Validated with Data")})
    //     .catch(()=>console.log("Invalid data"))
    await fetchData()
    console.log("data is been validated")    
}
function fetchData(){
    console.log("Fetching")
    return new Promise((resolve,reject)=>{
        let isFetched=true
        if(isFetched){
            setTimeout(() => {
                console.log("Data is fetched")
                resolve("resolved")   
            }, 2000);             
        }else{
            console.log("Failed to fetch Data")
            reject("Rejected")
        }
    })
}


//login(()=>validateUser(()=>fetchData())) //nestedcallback -callbackhell

login()