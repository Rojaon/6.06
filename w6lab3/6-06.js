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
  let string = "";
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

  let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ligula et dolor pretium tincidunt eget sed augue. Vestibulum tincidunt consequat quam. Nulla facilisis congue suscipit. Donec sed tempor nisl. Sed finibus urna lobortis, luctus augue eget, vehicula nibh. Pellentesque semper sapien neque, non maximus libero vulputate vitae. Praesent venenatis sapien eget condimentum eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin et lacus maximus dui pellentesque molestie. Maecenas et sapien fermentum, faucibus ipsum quis, malesuada massa. Aenean urna libero, lacinia ut commodo id, scelerisque non urna. Sed id gravida nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros augue, convallis quis ullamcorper sit amet, rhoncus at sem. Maecenas a gravida massa. Nulla lacus nisl, sagittis sit amet dui sed, varius ultrices ex. Ut placerat neque enim, nec viverra elit lacinia eu. Sed at lacinia neque. Curabitur aliquet faucibus pellentesque. Phasellus massa nulla, dapibus lacinia accumsan in, convallis quis magna. Etiam felis mi, blandit eu interdum in, dignissim in dolor. Quisque luctus et neque at auctor. Mauris venenatis malesuada vulputate. Nam pharetra accumsan risus eu tempus. Suspendisse blandit imperdiet convallis. Maecenas et turpis cursus, feugiat nisl eu, dignissim massa. Donec enim dolor, vehicula id massa vel, porttitor commodo leo. Aliquam sem nunc, accumsan eu rutrum et, luctus eget ligula. Morbi semper lacus sem, feugiat mattis purus facilisis id. Nam a nibh cursus, semper leo in, laoreet enim. Nullam tincidunt cursus tellus, in scelerisque tellus blandit id. Nullam lacinia dolor in purus rutrum finibus. In cursus purus nisl, semper sagittis leo vehicula eu. Quisque feugiat mollis ante, quis mattis lectus pretium vitae. Etiam lectus velit, tincidunt non neque in, tincidunt pharetra risus. Sed et tristique tellus, a tristique velit. Ut placerat tortor vitae feugiat tincidunt. Integer in nulla laoreet, gravida arcu ac, imperdiet dui.`.replace(/\,/g,'').replace(/\./g,'');
  let numberOfWords = 0;
  let numberOfEt = 0;
  const arr2 = Array.from(longText);
  for (let i = 0; i < arr2.length; i++){
    if(arr2[i-1] === " ")
      if(arr2[i] === "e") 
        if(arr2[i+1] === "t")
          if(arr2[i+2] === " ")
            numberOfEt += 1;
    
    if (arr2[i] === " ") {
      numberOfWords += 1;
    }
  }
  numberOfWords += 1;
  console.log(`The number of words in the string is ${numberOfWords}`);
  console.log(`The number of times the Latin word "et" appears is ${numberOfEt}`);
