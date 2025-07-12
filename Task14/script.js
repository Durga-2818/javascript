// 1. Parameterized function to multiply 3 numbers
function multiplyThreeNumbers(a, b, c) {
    return a * b * c;
}

// 2. Parameterized function to divide 2 numbers
function divideTwoNumbers(x, y) {
    if (y === 0) {
        return "Cannot divide by zero!";
    }
    return x / y;
}

// 3. Method to add background color to div element
function setDivBackgroundColor(color) {
    const div = document.getElementById("colorDiv");
    div.style.backgroundColor = color;
}

// 4. Function to generate random background color of body
function setRandomBodyBg() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
}

// 5. Onload of webpage, display modal
window.onload = function () {
    // Show the modal on page load
    const modalElement = document.getElementById('myModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // Test multiply & divide in console
    console.log("Multiply 2 * 3 * 4:", multiplyThreeNumbers(2, 3, 4));
    console.log("Divide 10 / 2:", divideTwoNumbers(10, 2));
};
