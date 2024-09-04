// PROJECT 2 -----------------------------------------------------------------------

const form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
    e.preventDefault();   // stoped action on submitting form

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)){
       result.innerHTML =  `Please give a valid height ${height} !!`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
       result.innerHTML =  `Please give a valid weight ${weight} !!`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); // toFixed(2) is if decimal valaue set it to 2 decimal places

        // showing result
        result.innerHTML = `<span>${bmi}</span>`;
    }
});