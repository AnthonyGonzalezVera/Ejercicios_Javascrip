"use strict";

let nums = [120, 300, 450, 150, 700]; 
let mayoresA200 = []; 

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 200) { 
        mayoresA200.push(nums[i]); 
    }
}


alert(`Números mayores a 200: ${mayoresA200.join(", ")}`);
