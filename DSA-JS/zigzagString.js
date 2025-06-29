let s = "AB";
let numRows = 1;
let rows = Array.from({length:numRows},()=>'')
let row = 0
let up = -1
if(numRows===1 ||s.length<numRows){
    console.log(s)
    return;
} 
for (let char of s){
    rows[row] += char
    if(row===0) up = -1;
    if(row===numRows-1)up = 1;
    row -= up
}