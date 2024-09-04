// PROJECT 2 -----------------------------------------------------------------------

const form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
    e.preventDefault();   // stoped action on submitting form

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)){
       result.innerHTML =  "Please give a valid height !!";
    }
});