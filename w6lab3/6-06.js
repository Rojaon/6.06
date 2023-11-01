let hacker1 = 'Arijj';
console.log(`The driver's name is: ${hacker1}`);
let hacker2 = 'Youssef';
console.log(`The navigator's name is: ${hacker2}`);

let count1 = hacker1.length;
let count2 = hacker2.length;

if (count1 > count2) {
    console.log(`The driver has the longest name, it has ${count1} characters.`);
  } else if (count2 > count1){
    console.log(`It seems that the navigator has the longest name, it has ${count2} characters.`);
  }else {
    console.log(`Wow, you both have equally long names, ${count2} characters!.`);
  }

  console.log("The driver's name seperated:",...hacker1.toUpperCase());
  var string = "";
  for (let i = count2-1; i >= 0; i--) {
    const arr = Array.from(hacker2);
    const arr1 = [];
    arr1.push(arr[i]);
    arr1.forEach(function(element){
      string += element;
    });
  }
  console.log("The navigator's name in reverse order:",string);

  if (hacker1 > hacker2) {
    console.log(`The driver's name goes first, it has ${hacker1.charAt(0)} character.`);
  } else if (hacker2 > hacker1){
    console.log(`Yo, the navigator goes first, definitely, it has ${hacker2.charAt(0)} character.`);
  }else if(hacker1 === hacker2){
    console.log(`What?! You both have the same name?, ${hacker1}!.`);
  }