//a(anonymus function)
//b(IIFE FUNCTION)



//1.Print odd numbers in an array

//anonymus function

const odd = function(arr) {
  arr.forEach(function(num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

//ex:

odd([1, 2, 3, 4, 5]); 

// Output: 1 3 5

//IIFE function
(function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })([1, 2, 3, 4, 5]); 
  
  // Output: 1 3 5

  //2.Convert all the strings to title caps in a string array
//anonymus function

const Title = function(arr) {
    const Array = arr.map(function(str) {
      return str.charAt(0).toUpper() + str.slice(1).toLower();
    });
    return Array;
  };
  
  // Example:


  const myArray = ["hello world", "foo bar", "lorem ipsum"];
  const Array = Title(myArray);
  console.log(Array); 
  
  // Output: ["Hello World", "Foo Bar", "Lorem Ipsum"]

  //IIFE function

  (function(arr) {
    const Array = arr.map(function(str) {
      return str.charAt(0).toUpper() + str.slice(1).toLower();
    });
    console.log(Array);
  })(["hello world", "foo bar", "lorem ipsum"]); 
  
  // Output: ["Hello World", "Foo Bar", "Lorem Ipsum"]
  

  //3.Sum of all numbers in an array
//anonymus function

const array= function(nums) {
    let sum = 0;
    nums.forEach(function(num) {
      sum += num;
    });
    return sum;
  };
  
  // Example :
  const arr = [4,6,2,8];
  const sum = array(arr);
  console.log(sum); 
  
  // Output: 20
  

  //IIFE function

  (function(nums) {
    let sum = 0;
    nums.forEach(function(num) {
      sum += num;
    });
    console.log(sum);
  })([4,6,2,8]); 
  
  // Output: 20


  //4.Return all the prime numbers in an array
  //anonymus fun 

  {
    const prime = function(nums) {
    const Arr = nums.filter(function(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
    return Arr;
  };
  
  // Example :
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Arr = prime(myArray);
  console.log(Arr); 
}
// Output: [2, 3, 5, 7]

  

//IIFE 

  (function(nums) {
    const prime = nums.filter(function(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    });
    console.log(prime);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
  
  // Output: [2, 3, 5, 7]

  //5.Return all the palindromes in an array
//anonymus
{
const palindrome = function(strs) {
    const array = strs.filter(function(str) {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    });
    return array;
  };
  
  // Example:
  const arr = ['racecar', 'banana', 'level', 'apple', 'deified'];
  const array = palindrome(arr);
  console.log(array); 
  
  
  // Output: ['racecar', 'level', 'deified']

}
  
  //IFEE

  (function(strs) {
    const palindrome = strs.filter(function(str) {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    });
    console.log(palindrome);
  })(['racecar', 'banana', 'level', 'apple', 'deified']); 
  
  // Output: ['racecar', 'level', 'deified']
  
  //6.Return median of two sorted arrays of the same size.

  //a.

  const find = function(nums1, nums2) {

    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    
    
    const mid = Math.floor(merged.length / 2);
    
  
    if (merged.length % 2 === 0) {
      return (merged[mid] + merged[mid - 1]) / 2;
    } else {
      return merged[mid];
    }
  };
  
  // Example:
  const nums1 = [1, 3, 5];
  const nums2 = [2, 4, 6];
  const median = find(nums1, nums2);
  console.log(median); 
  
  // Output: 3.5
  
  //b.
{
  const find = (function(nums1, nums2) {
    
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    
  
    const mid = Math.floor(merged.length / 2);
    

    if (merged.length % 2 === 0) {
      return (merged[mid] + merged[mid - 1]) / 2;
    } else {
      return merged[mid];
    }
  })([1, 3, 5], [2, 4, 6]);
  
  console.log(find); 
  
  // Output: 3.5
  
}


//7.Remove duplicates from an array

//a.
{
const arr = [1, 2, 3, 3, 4, 5, 5];
const unique= Array.from(new Set(arr));
console.log(unique); 

// Output: [1, 2, 3, 4, 5]

}


//b.

const unique = (function(arr) {
    return Array.from(new Set(arr));
  })([1, 2, 3, 3, 4, 5, 5]);
  
  console.log(unique); 
  
  // Output: [1, 2, 3, 4, 5]
  

  //8.Rotate an array by k times
//a.
{
const arr = [1, 2, 3, 4, 5];
const v = 2;


for (let i = 0; i < v; i++) {
  arr.unshift(arr.pop());
}

console.log(arr);

// Output: [4, 5, 1, 2, 3]
}



//========================================>//ARROW FUNCTION<=====================================================

  

//a.Print odd numbers in an array


const arr1 = [1, 2, 3, 4, 5];
arr.forEach(num => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});


// Output: 1, 3, 5


//b.Convert all the strings to title caps in a string array


{function titleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  
  function convert(arr) {
    arr.forEach((str, i) => {
      arr[i] = titleCase(str);
    });
  }
  
  const arr = ["the quick brown fox", "jumps over", "the lazy dog"];
  convert(arr);
  console.log(arr); 
  
  
  // Output: ["The Quick Brown Fox", "Jumps Over", "The Lazy Dog"]
  }
  

  //c.Sum of all numbers in an array

{
    
function add(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
    sum += arr[i];
    }
}
return sum;
}

const arr = [1, 2, 3, 4, 5];
const sum = add(arr);
console.log(sum); // Output: 15
}



//d.Return all the prime numbers in an array

const primes = (arr) => {
  return arr.filter(num => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
};

//example :
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const p = primes(nums); // [2, 3, 5, 7]



//e.Return all the palindromes in an array


const palindrome = (arr) => {
  return arr.filter(str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  });
};

//example :
const w = ['level', 'racecar', 'hello', 'madam'];
const pal = palindrome(w); // ['level', 'racecar', 'madam']
