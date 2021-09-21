const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":25,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
}`


//Conversion of JSON to Object
const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);

// Use of revier() -> a callback function for Text formatting
const userObjWithRev = JSON.parse(usersText,(key,value) =>{
    // console.log(typeof key, key, typeof value,value ,value == 'string');
    let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value;
    // console.log(typeof newValue,newValue);
    return newValue;
})
console.log(typeof userObjWithRev,userObjWithRev);

// Conversion of Object to JSON 
const text = JSON.stringify(userObjWithRev,['firstName','lastName','age','email'],4);
console.log( text);

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }
  
  const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
  console.log(txt)
   


