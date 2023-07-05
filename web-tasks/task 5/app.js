let array = [1,54,24,86,35,7,82,5,];

let min = array[ 0 ];
let max = 0;
let len = array.length;
for ( let i = 0; i < len - 1; i++) {
    if ( min > array[ i ]) {
        min = array[ i ];
    }
    if ( max < array[ i ]) { 
        max = array[ i ];
    }
}
console.log("უმცირესი არის : " + min );
console.log("უდიდესი არის : " + max);

let რიცხვები = [1,54,24,86,35,7,82,5];
რიცხვები.sort((x, y) => x - y);
    console.log("დალაგდა ზრდის მიხედვით : ", რიცხვები)