function error(error){
    throw new Error('cant use toUpperCase')
}

function shout(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    }
    catch(e){
        error(e)
    }
    finally{
        console.log("End.")
    }
}

const obj = {name: 44}
shout(obj) //