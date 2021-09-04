let markWeight = 78,johnWeight = 92,markHeight = 1.69,johnHeight = 1.95;

//Test Data 1
let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//Test Data 2
markWeight = 95, markHeight = 1.88, johnWeight = 85,johnHeight = 1.76;

markBMI = markWeight / (markHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);