const students = [
    {id:1, name:'x'},
    {id:2, name:'y'},
    {id:3, name:'z'},
    {id:4, name:'o'}
];
// const nam = [];
// for(var i = 0; i<students.length; i++){
//      const element = students[i];
//      nam.push(element.name); 
// }
// console.log(nam);

const names = students.map(s => s.name);
console.log(names);

// const allid = students.map(i => i.id);
// console.log(allid);

// const allbiggerid = students.filter( s => s.id>2);
// console.log(allbiggerid);

const firstbiggerid = students.find( s => s.id>2);
console.log(firstbiggerid);
