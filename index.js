// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
 //This function takes an array of drivers' names and a string as arguments, 
 //and returns the matching list of drivers.
 //The function should be case insensitive.
const findMatching = (array, string) => {
    return array.filter(match => match.toLowerCase() === string.toLowerCase())
}
/* fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array,
 and returns all drivers whose names begin with the provided letters.*/
 const fuzzyMatch = (array,string) => {
     return array.filter(startingLetters => startingLetters.startsWith(string))
 }
 /* matchName - This function takes an array of driver objects and a string as arguments. 
 Each driver object has two properties: name and hometown. 
 The function should return each element whose name property matches the provided string argument. 
       const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];*/

 const matchName = (array,string) => {
     return array.filter(findMatch => findMatch.name === string )
 }
