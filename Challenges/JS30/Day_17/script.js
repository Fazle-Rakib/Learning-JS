const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const lists = document.querySelector('#bands');


// Another way to do with regular expression
function strip(bandName){
    return bandName.replace(/^(a|an|the)/i,('')).trim();
}
const sortedArray = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

// My answer
function addToList(){
    
    bands.sort(function(band1,band2)
    {
        let newBand = band1.split(' ');
        if(newBand[0] == 'A' || newBand[0] == 'An' || newBand[0] == 'The')
        {
            newBand.splice(0,1);
            band1 = newBand.join(' ');
            // console.log(newBand);
        }
        newBand = band2.split(' ');
        if(newBand[0] == 'A' || newBand[0] == 'An' || newBand[0] == 'The')
        {
            newBand.splice(0,1);
            band2 = newBand.join(' ');
            // console.log(newBand);
        }
        if(band1 > band2)
        {
            return 1;
        }
        else
        {
            return -1;
        }
    });
    console.log(bands);
    lists.innerHTML = bands.map((band) =>{
        return `<li>${band}</li>`
    }).join('');
    // console.log(bands);
}

addToList();