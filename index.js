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
    const name = ["Arnold", ...cats]
    return name;
}

function appendCat(){
    const append = [...cats, "Broom"]
    return append;
}

function removeLastCat(){
    const remove = cats.splice(2);
    return remove;
}

function removeFirstCat(){
    const first = cats.splice(1);
    return first;
}