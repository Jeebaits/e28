// Create an array of unordered data
const data = [2, 4, 76, 8, 44, 612, 30, 9, 10, 99];

// Create a function that will search from the array
function searchNumber(data, num){
    var attempt = 0;

    for (let index = 0; index < data.length; index++) {
        if(data[index] === num){ // Checks data element if equal to number being searched
            return `${num} is located at index ${index} with ${attempt + 1} attempt(s)`;
        }

        attempt ++;
    }

    // Print attempts even if not found
    return `${num} is not found with ${attempt} attempt(s)`;
}

console.log(searchNumber(data, 8));
console.log(searchNumber(data, 30));
// searchNumber(data, 30);

// A better version of searching
function searchNumberV2(data, num){
    let length = data.length;
    let left = 0;
    let right = length - 1;
    let index = -1;

    while(left <= right){
        // Check left side
        if(data[left] === num){
            index = left;
            return `${num} is found at index ${index} with ${left + 1} attempt(s)`;
        }

        // Check right side
        if(data[right] === num){
            index = right;
            return `${num} is found at index ${index} with ${length - right} attempt(s)`;
        }

        // Do the following after execution of above code
        left ++;
        right --;
    }

    // Returns the code if not found
    if(index == -1){
        return `${num} is not found with ${left} attempts`
    }
}

console.log(searchNumberV2(data, 8));
console.log(searchNumberV2(data, 30));