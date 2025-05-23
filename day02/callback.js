
function login(callback){ //callback=validateUSer
    setTimeout(() => {
        callback() 
    }, 3000);
  //validateUser
    console.log("Vaild data")
}

function validateUser(callback){ //fetchData
    callback()//fetchData()
    console.log("Authorized")
}

function fetchData(){

    console.log("Fetching")
}

// login(fetchData)
// login(validateUser)

//fetchthe data from external source -->validate data -->login functionality


login(()=>validateUser(()=>fetchData())) //nestedcallback -callbackhell

//