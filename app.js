// we will write our own javascript functions here

// function to add two numbers
function addTwoNumbers(a = 0, b = 0) {
    //check the arguments
    if (isNaN(a) || isNaN(b))
        return false;
    return a + b;
}

//write another funciton (multiply, divide, or subtract) and then test the function for different cases...testing passes (multiple test cases)

// function multiply two numbers
function multTwoNumbers(a = 0, b = 0) {
    //check the arguments
    if (isNaN(a) || isNaN(b))
        return false;
    return a * b;
}

// show data in the greeting div
function show_data(name, age) {
    document.querySelector('#greeting').innerHTML = `<p>Welcome ${name}. You are ${age} years old</p>`
    //succesful end
    return true
}