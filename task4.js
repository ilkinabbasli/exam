const a = process.argv[2];
const b = process.argv[3];

function checkAnagram(a, b) {
    var length1 = a.length;
    var length2 = b.length;
    if(length1 !== length2){
       console.log('Herflerin sayi duz gelmir!');
       return
    }
    var string1 = a.split('').sort().join('');
    var string2 = b.split('').sort().join('');
    if(string1 === string2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkAnagram(a,b);
