
//Correct
function doubleValues(myArray){
  const finalArr = [];
  myArray.forEach(function(Arr) {
    finalArr.push(Arr * 2);
  });
  return finalArr;
}

//Correct
function onlyEvenValues(myArray){
  const finalArr =[];
  myArray.forEach(function(Arr){
    if(Arr % 2 == 0){
      finalArr.push(Arr);
    }
  })
  return finalArr;
}

//Correct
function showFirstAnddLast(myArray){
  const finalArr = [];
  myArray.forEach(function(Arr){
    Arr.split("");
    let connect = Arr[0] + Arr[Arr.length - 1];
    finalArr.push(connect);
  })
  return finalArr;
}

//Correct
function addKeyAndValue(Object, key, value){
  const finalArr = [];
  Object.forEach(function(Obj){
    Obj.key = value;
    finalArr.push(Obj);
  })
  return finalArr;
}

function vowelCount(Word) {
  let splitArr = Word.split("");
  let finalArr = {};
  const vowels = "aeiou";

  splitArr.forEach(function(Obj) {
    let lowerCase = Obj.toLowerCase()
    if (vowels.indexOf(lowerCase) !== -1) {
      if (finalArr[lowerCase]) {
        finalArr[lowerCase]++;
      } else {
        finalArr[lowerCase] = 1;
      }
    }
  });
  return finalArr;
}

function doubleValuesWithMap(myArray){
  const finalArr = []
  myArray.map(function(Arr){
    finalArr.push( Arr * 2);
  })
  return finalArr;
}

function valTimesIndex(myArray){
  const finalArr = [];
  myArray.map(function(Arr, i){
    finalArr.push(Arr * i);
  })
  return finalArr;
}

function extractKey(Object, keys){
  const finalArr = [];
  Object.map(function(value){
    finalArr.push(value[keys]);
  })
  return finalArr;
}

function extractFullName(Object){
  const finalArr = [];
  Object.map(function(Obj){
    finalArr.push(Obj.first + " " + Obj.last);
  })
  return finalArr;
}

function filterByValue(Object, key){
  const finalArr = [];
  Object.filter(function(Obj){
    if(key in Obj){
      finalArr.push(Obj);
    }
  })
  return finalArr;
}

function find(myArray, value){
  let finalArr;
  myArray.filter(function(Arr, i){
    if(Arr == value){
      finalArr = i+1;
    }else{
      return false;
    }
  })
  return finalArr;
}

function findInObj(Object, key, value){
  const finalArr = [];
  Object.filter(function(Obj){
    if(key in Obj && Obj[key] == value){
      finalArr.push(Obj);
      return finalArr;
    }
  })
  return finalArr;
}

function removeVowels(str) {
  const vowels = "aeiou";
  return (str.toLowerCase().split("").filter(function(val) {
      return vowels.indexOf(val) === -1;
    }).join(""));
}

function doubleOddNumbers(myArray){
  const finalArr = [];
  myArray.map(function(Arr){
    if(!(Arr % 2 == 0)) {
      Arr = Arr * 2;
      finalArr.push(Arr);
    }
  })
  return finalArr;
}