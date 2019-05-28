function choice (arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function remove(arr, item){
    let index = arr.indexOf(item);
    if(index > -1){
        arr.splice(index, 1);
    }
}

export {choice, remove};
