// Following is given the object "programming". Use this object to complete the following challenges.

let programming = {
    languages: ['JavaScript', 'Python', 'Java'],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke',
  };
  
  //Challenge 1: Add the language "Go" at the end of the languages array in the above programming object and print the same.
  programming.languages.push('Go');
  console.log(programming.languages);
  
  //Challenge 2: Change the value of the difficulty to 7 in the above object programming and print the same.
  programming.difficulty = 7;
  console.log(programming.difficulty);
  
  //Challenge 3: Using the delete keyword, remove the jokes key from the programming object and print the object.
  delete programming.jokes;
  console.log(programming);
  
  //Challenge 4: Add a new property or key "isFun" and a value as true to the programming object and print the same.
  
  //Challenge 5: Using a loop, iterate through the languages array and console.log all of the languages.
  
  //Challenge 6: Print all of the keys in the programming object.
  