document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');
    let string = "";

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Check if the clicked button is '='
            if (e.target.innerHTML === '=') {
                // Evaluate the string and update the input value
                string = eval(string);
                input.value = string;
            }else if(e.target.innerHTML === 'AC'){
                string = "";
                input.value = string;
            }else if(e.target.innerHTML === 'DEL'){
                string = string.substring(0,string.length - 1);
                input.value = string;
            } else {
                // Concatenate the clicked button's innerHTML to the string
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });
});
