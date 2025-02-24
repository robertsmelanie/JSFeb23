// 1
let yourArray = ["twenty", 32, 534, false, 23];
// running tests

//2
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "c";

// Only change code above this line
console.log(myArray);

//3
function mixedNumbers(arr) {
    // Only change code below this line
    arr.push(7, 'VIII', 9);
    arr.unshift('I', 2, 'three');
    // Only change code above this line
    return arr;
  }
    
  console.log(mixedNumbers(['IV', 5, 'six']));

  //4
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  //5
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);

//6
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2, "DarkSalmon", "BlanchedAlmond")
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  //7
  function forecast(arr) {
    // Only change code below this line
    arr = arr.slice(2,4);
    return arr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  //8
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
    newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  //9
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

  // 10
  function quickCheck(arr, elem) {
    // Only change code below this line
    if(arr.indexOf(elem) != -1){
      return true;
      }
      return false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  //11
  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
      for(let i=0;i<arr.length;i++){
        let flag=0;
        for(let j=0;j<arr[i].length;j++){
          if(arr[i][j]===elem){
            flag=1;
            break;
          }
        }
        if(flag==0)
          newArr.push(arr[i]);
      }
    // change code above this line
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 4, 9]], 3));

  // 12
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
      for(let i=0; i<arr.length;i++){
        let flag=0;
        for(let j=0;j<arr[i].length;j++){
          if(arr[i][j] === elem) {
            flag = 1;
            break;
          }
        }
        if(flag == 0)
          newArr.push(arr[i]);
      }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  //13
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // change code below this line
  foods.bananas=13;
  foods.grapes=35;
  foods["strawberries"]=27;
  // change code above this line
  
  console.log(foods);

  //14
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // change code below this line
  userActivity.data.online=45;
  // change code above this line
  
  console.log(userActivity);

  // 15
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  // do not change code above this line
  
  function checkInventory(scannedItem) {
    // change code below this line
    return foods[scannedItem];
  }
  
  // change code below this line to test different cases:
  console.log(checkInventory("apples"));

  // 16
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // change code above this line
  
  console.log(foods);

  // 17
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    // change code below this line
    return obj.hasOwnProperty("Alan") && obj.hasOwnProperty("Jeff") && obj.hasOwnProperty("Sarah") && obj.hasOwnProperty("Ryan") ;
    // change code above this line
  }
  
  console.log(isEveryoneHere(users));

  // 18
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function countOnline(obj) {
    let noOfOnlineUsers=0;
     console.log(JSON.stringify(obj));
      
    for(let userObj in obj){
      if(users[userObj].online===true)
        noOfOnlineUsers++;
    } 
    return noOfOnlineUsers;
  }
  
  console.log(countOnline(users));

  // 19
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // change code below this line
    return Object.keys(obj);
    // change code above this line
  }
  
  console.log(getArrayOfUsers(users));

  // 20
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // change code below this line 
    console.log(JSON.stringify(userObj.data.friends)); 
  userObj.data.friends.push(friend);
    // change code above this line
    return userObj.data.friends;
  }
  
  console.log(JSON.stringify(addFriend(user, 'Pete')));



