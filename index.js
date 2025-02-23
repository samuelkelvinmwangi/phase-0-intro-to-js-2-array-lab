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
    const remove = cats.slice(0,2);
    return remove;
}

function removeFirstCat(){
    const first = cats.slice(1, 3);
    return first;
}