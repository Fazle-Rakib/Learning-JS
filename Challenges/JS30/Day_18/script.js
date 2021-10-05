const timeNodes = [...document.querySelectorAll('[data-time]')];
// console.log(timeNodes);
let seconds = timeNodes
                    .map((eachNode)=> eachNode.dataset.time)
                    .map((eachTime)=> {
                        const [hours,mins] = eachTime.split(':').map(parseFloat);
                        return hours*60+mins;
                    })
                    .reduce((total,vidSeconds)=> total+=vidSeconds)

// console.log(seconds);
const hours = Math.floor(seconds/3600);
seconds  %= 3600;
const mins = Math.floor(seconds/60);
seconds%=60;
console.log(hours,mins,seconds);