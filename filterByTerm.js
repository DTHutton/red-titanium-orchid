"use strict";
;
;
const link1 = {
    description: "Typescript tutorial for beginners is a tutorial for all the JavaSCript developers ...",
    id: 1,
    url: "www.valentinog.com/typsecript/",
    language: "en"
};
function filterByTerm(input, searchTerm, lookupKey = "url") {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement[lookupKey].match(regex);
    }).toString();
}
;
const obj1 = { url: "string1" };
const obj2 = { url: "string2" };
const obj3 = { url: "string3" };
const arrOfLinks = [obj1, obj2, obj3];
const term = "java";
filterByTerm(arrOfLinks, term);
// const paolo = {
//     name: "Paolo",
//     city: "Siena",
//     age: 44
// };
// const tom = {
//     name: "Tom",
//     city: "Munich",
//     age: 33
// };
// function filterPerson(arr, term, key) {
//     return arr.filter(function (person) {
//         return person[key].match(term);
//     });
// };
// filterPerson([paolo, tom], "Siena", "city");
