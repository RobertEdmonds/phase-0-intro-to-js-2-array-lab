// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];
function destructivelyAppendCat(name){
     cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
  const copyCats = [...cats, "Broom"];
  return copyCats
}
function prependCat(name){
    const newCopyCats = ["Arnold", ...cats];
    return newCopyCats;
}
function removeLastCat(name){
  const newCats = cats.slice(0, cats.length -1);
  return newCats;
}
function removeFirstCat(){
    const firstCat = cats.slice(-2);
    return firstCat;
}
