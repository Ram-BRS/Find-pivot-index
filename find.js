function findPivotIndex() {
    const inputArray = document.getElementById('inputArray').value;
    const nums = inputArray.split(',').map(num => parseInt(num.trim()));

    const pivotIndex = calculatePivotIndex(nums);

    if (pivotIndex !== -1) {
        document.getElementById('output').innerHTML = `Pivot Index: ${pivotIndex}`;
        document.getElementById('error').innerHTML = '';
    } else {
        document.getElementById('output').innerHTML = '';
        document.getElementById('error').innerHTML = 'No pivot index found.';
    }
}

function calculatePivotIndex(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
}
