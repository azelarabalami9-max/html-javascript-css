for (let ok = 1; ok<=5; ok++){
let x = "";
for (let rt = 1; rt <=5 - ok; rt ++)
    x = x +" ";
for (let er = 1; er<= (2 * ok) - 1;er++){
    x = x + "*"
}

console.log(x);



}