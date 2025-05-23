
function login(callback){ //callback=validateUSer
    callback() //validateUser
    
    console.log("Vaild data")
}

function validateUser(callback){ //fetchData
    callback()//fetchData()
    return fetchData.then
    console.log("Authorized")
}

function fetchData(){
    return new Promise((resolve)=>{
        console.log("Fetching")
        resolve()
    })
    
}

login(()=>validateUser(()=>fetchData())) //nestedcallback -callbackhell
