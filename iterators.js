//Part1
var users = [
    {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
    city: 'San Francisco',
    state: 'CA'
    }
    },
    {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
    city: 'New York',
    state: 'NY'
    }
    },
    {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
    city: 'Fargo',
    state: 'SD'
    }
    },
    {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
    city: 'Albany',
    state: 'NY'
    }
    },
    {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
    city: 'Los Angeles',
    state: 'CA'
    }
    }
    ];
    
//question1
function printEmails() {
    users.forEach(function(emails) {
        console.log(emails.email);
    });
}

printEmails();

//question2
function printHobbies() {
    users.forEach(function(hobbies){
    console.log(hobbies.hobbies.join(" , "));
   }); 
}

printHobbies();

//question3
function findHometownByState(state){
return users.filter(function (user){
    return user.hometown.state === state
  })
}

//question 4
function allLanguages() {
    var languages = []
    users.map(function (user) {
      return user.favoriteLanguages.map(function (language) {
      languages.push(language) 
      })
    })
    return languages
  }

  //question 5
  function hasFavoriteEditor(editor) {
    return users.some(function(user) {
      return user.favoriteEditor === editor
    })
  }

  //question 6
  function findByUsername(name) {
    return users.filter(function(user) {
      return user.username === name
    })
  }

 // PART 2
 //question 1
 function vowelCount(vowel) {
    vowel = vowel.split('');
    return vowel.reduce((acc, current) => {
      if (['a', 'e', 'i', 'o', 'u'].indexOf(current) >= 0) {
        !acc[current] ? (acc[current] = 1) : ++acc[current];
      }
      return acc;
    }, {});
  }

  //question 2
  function removeVowels(word) {
    word = word.split()
    const vowels = ['a', 'e', 'i', 'o', 'u']
  
    return word.filter(function(item){
      return !vowels.includes(item)
    })
  }
  
  

  