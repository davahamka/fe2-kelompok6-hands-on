const wait = (time) => {
    return new Promise((resolve) => {
       if(time < 0) {
            throw new Error("Time must be greater than 0")
       } else {
            setTimeout(resolve, time);
       }
    })
}

wait(-1)
    .then(() => console.log("world"))
    .catch(err=>console.log(err));

setTimeout(()=> {
    console.log("hello")
}, 0);