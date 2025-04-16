//STEP 1
let favMovies = ["Inception", "The Great Gatsby", "Interstellar", "The Interview", "Avengers: End Game"]
//STEP 2
let movies = new Array(5)
movies[0] = "Inception"
movies[1] = "The Great Gatsby"  
movies[2] = "Interstellar"
movies[3] = "The Interview"
movies[4] = "Avengers: End Game"
console.log(movies[0])
//STEP 3
movies.splice(2, 0, "Parasite")
console.log(movies.length)
//STEP 4
let movies2 = ["Inception", "The Great Gatsby", "Interstellar", "The Interview", "Avengers: End Game"]
delete movies2[0]
console.log(movies2)
//STEP 5
let movies3 = ["Inception", "The Great Gatsby", "Interstellar", "The Interview", "Avengers: End Game", "Parasite", "Avatar"]
for (let movie in movies3) {
    console.log(movies3[movie])
}
//STEP 6
for (let movie of movies3) {
    console.log(movie)
}
//STEP 7
movies3.sort()
for (let movie of movies3) {
    console.log(movie)
}
//STEP 8
let leastFavMovies = ["Sharknado 1", "Sharknado 2", "Sharknado 3"]
console.log("Movies I like:\n\n")
for (let i = 0; i < 3; i++) {
    console.log(movies3[i])
}
console.log("...\n")

console.log("\nMovies I regret watching:\n\n")
for (let i = 0; i < 3; i++) {
    console.log(leastFavMovies[i])
}
console.log("...\n")
//STEP 9
mergedArray = movies.concat(leastFavMovies)
mergedArray.sort().reverse()
console.log(mergedArray)
//STEP 10
console.log(mergedArray[mergedArray.length - 1])
//STEP 11
console.log(mergedArray.shift())
//STEP 12
for (let i = 0; i < leastFavMovies.length; i++) {
    leastFavMovies[i] = movies3[i]
}
console.log(leastFavMovies)
//STEP 13
let movies4 = [
    ["Inception", 1], 
    ["The Great Gatsby", 2], 
    ["Interstellar", 3], 
    ["The Interview", 4], 
    ["Avengers: End Game", 5]
]
movies4.forEach((movies) => {
    let titles = movies.filter((movie) => typeof movie === "string")
    console.log(titles[0])
})

//STEP 14
let employees = ["Tim Vo", "Sarah Johnson", "John Smith", "Jane Doe", "Emily Davis"]
let showEmployees = function(arr) {
    console.log("Employees:\n\n")
    arr.forEach((employee) => {
        console.log(employee.toUpperCase())
    })
}
showEmployees(employees)
//STEP 15
let filterValues = function(arr) {
    let filtered = arr.filter((value) => Boolean(value))  
    return filtered
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
//STEP 16
function randomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(randomItem(arr))
//STEP 17
function largestNumber(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}
let arr1 = [111, 2, 132, 4, 53, 6, 7, 8, 92]
console.log(largestNumber(arr1))