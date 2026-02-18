const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if(height.includes(".")){
        if (weight > 0 && height > 0) {
            
            
            const bmi = weight / (height * height);

            
            document.getElementById('bmi-value').innerText = `${bmi.toFixed(2)}`;

            const result = document.getElementById("description");
            if (bmi < 18.5) {
                result.innerHTML = `With a BMI of ${bmi.toFixed(2)} you are underweight.`;
            } else if (bmi < 25) {
                result.innerHTML = `With a BMI of ${bmi.toFixed(2)} you have a normal weight.`;
            } else if (bmi < 30) {
                result.innerHTML = `With a BMI of ${bmi.toFixed(2)} you are overweight.`;
            } else if (bmi < 35) {
                result.innerHTML = `With a BMI of ${bmi.toFixed(2)} you have obesity class I.`;
            } else if (bmi < 40) {
                result.innerHTML = `With a BMI of ${bmi.toFixed(2)} you have obesity class II.`;
            } else {
                result.innerHTML = `With a BMI of ${bmi.toFixed(2)} you have obesity class III.`;
            }

        } else {

            alert("Please fill in all fields!");

        };
    }else{

        alert("Please include a comma or a period in the heigth!");

    };
});