const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    return cats.push("Ralph");
}

function destructivelyPrependCat(){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function prependCat(){
    return cats.slice("Arnold", 0);
}

function appendCat(){
    return cats.slice(0, "Broom");
}

function removeLastCat(){
    return cats.splice(2);
}

function removeFirstCat(){
    return cats.splice(-2);
}