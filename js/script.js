let hr = document.querySelector('#hour');
let seconds = document.querySelector('#seconds');
let minutes = document.querySelector('#minutes');
let resultParagraph = document.querySelector('.result p');
let result_show = document.querySelector('.result');
let result_text = document.querySelector('.result .text');

function validateHours(input){
    // Remove any non-digit characters
    let value = input.value.replace(/\D/g, '');
    // Limit to two digits
    value = value.slice(0, 6);
    // Update the input value
    input.value = value;
}

function validateMinutes(input){
    // Remove any non-digit characters
    let value = input.value.replace(/\D/g, '');
    // Limit to two digits
    value = value.slice(0, 6);
    // Update the input value
    input.value = value;
}

function validateSeconds(input){
     // Remove any non-digit characters
     let value = input.value.replace(/\D/g, '');
     // Limit to two digits
     value = value.slice(0, 6);
     // Update the input value
     input.value = value;
}




function show(event) {
    event.preventDefault();
    if(hr.value == ""){
        Swal.fire({
            title: 'Oops...',
            text: 'Hour value is required to convert!',
            color: 'red',
            didClose: () => {
                // Focus on the input field after the alert is closed
                    hr.focus();
            },     
        });
        resultParagraph.textContent=" ";    
        resultParagraph.classList.remove("res-p")
        result.style.display="none";   
        
    }
    else if(seconds.value == ""){
        Swal.fire({
            title: 'Oops...',
            text: 'Seconds value is required to convert!',
            color: 'red',
            didClose: () => {
                // Focus on the input field after the alert is closed
                seconds.focus();
            },     
        });
        resultParagraph.textContent=" ";    
        resultParagraph.classList.remove("res-p")
        result.style.display="none";   
    }
    else if(minutes.value == ""){
        Swal.fire({
            title: 'Oops...',
            text: 'Minutes value is required to convert!',
            color: 'red',
            didClose: () => {
                // Focus on the input field after the alert is closed
                    minutes.focus();
            },     
        });
        resultParagraph.textContent=" ";    
        resultParagraph.classList.remove("res-p")
        result.style.display="none"; 
    }
    else{
        result_show.style.display="inline-block";
        resultParagraph.classList.add("res-p")
        let result_a = `${hr.value} hr , ${minutes.value} mins , ${seconds.value} secs is`;
        result_text.textContent=result_a;
        resultParagraph.textContent = (parseInt(hr.value, 10) * 3600) + (parseInt(minutes.value, 10) * 60) + parseInt(seconds.value, 10);
    }
}
