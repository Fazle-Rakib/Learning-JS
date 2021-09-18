//Error handling
try{
    let firstName = 'Abul';
    let fullName = firstName;
    console.log(fullName);
    // throw true;
    throw new Error('Required');
}catch(err)
{
    console.log(err.message,'Name of error :'+err.name);
    console.error(err);
}
finally
{
    console.log("name is shown!");
}
// throw 'Error101';
// throw 12;
// let square = 2 x 2;
// console.log(square);

// console.log('Hello, world");
