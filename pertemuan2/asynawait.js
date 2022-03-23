const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}


async function asyncAwait() {
    try {
        console.log("hello");
    } catch(error) {
        
    }
}

asyncAwait();