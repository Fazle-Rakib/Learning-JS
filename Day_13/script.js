// console.log [substitution,coloring]
console.log('%d %s of Javascript',30,'Days');

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:gray',
  ''
) // log output green red and yellow text

// console.warn()
console.warn('This is a warning');
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
);
console.warn('Warning is different from error');


//console.error()
console.error('A error msg...');

// console.table()
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names);
const obj = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    }
];
console.table(obj);

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

// console.time()
console.time('Regular for loop');
for(let i = 0;i<countries.length;i++)
{
  console.log(countries[i][0],countries[i][1]);
}
console.timeEnd('Regular for loop');

console.time('for of loop');
for(const each of countries)
{
  console.log(each[0],each[1]);
}
console.timeEnd('for of loop');

console.time('for Each loop');
countries.forEach(([name,city])=>{
  console.log(name,city);
});
console.timeEnd('for Each loop');

// console.info()
console.info('Time to have fun!');
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

// console.assert()
console.assert(4>3,'4 is greater than 3');
console.assert(4<3,'4 is less than 3');

for(let i = 0;i<=10;i++)
{
  let err = `${i} is not a even number`;
  console.assert(i%2 == 0,{number: i, ErrorMsg: err});
}

console.group('Countries');
console.log(countries);
console.groupEnd();

console.group('Object');
console.log(obj);
console.groupEnd();

// console.count()
const func = ()=>{
  console.count('Number ');
}
func();
func();

//Console.clear();
// console.clear();