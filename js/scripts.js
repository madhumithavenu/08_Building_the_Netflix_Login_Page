const inputs = document.querySelectorAll('form.field input');
// console.log(inputs);
inputs.forEach(inputs => {
    inputs.addEventListiner('blur', validateInput);
    inputs.addEventListiner('input', validateInput);
});

function validateInput(e){
    // console.log(e.target.id);
    const states = ['valid', 'not-valid'];

    let classes;

    if(e.target.value.length === 0){
        classes = states[1];
    }
    else{
        classes = states[0];
    }
}