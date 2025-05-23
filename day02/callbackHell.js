
function firstInfo(callback){
     setTimeout(()=>{
      callback()
        console.log("Executing firstMethod")
     },3000)
}



function secondInfo(){
    setTimeout(()=>{
       console.log("Executing second method")
    },500)
}


function thirdInfo(){
    setTimeout(()=>{
       console.log("Executing third method")
    },500)
}

firstInfo(()=>secondInfo(()=>thirdInfo())) //nested callback


//promise(resolve,reject)=>{
    //}