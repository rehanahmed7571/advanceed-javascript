const worker = [
    {id:20 , name:'Norman'},
    {id:25 , name:'pumpkin'},
    {id:35 , name:'Batman'},
    {id:22 , name:'Rohan'},
];

// const nameList = [];

// for(let i=0; i<worker.length; i++){
//     let single = worker[i];
//     let keepName = single.name;
//     nameList.push(keepName)
// }
// console.log(nameList);


const nameList = worker.map( w => w.name );

const ids = worker.filter( w => w.id < 22);
console.log(ids);