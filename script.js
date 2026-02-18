const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if(height.includes(".")){
        if (weight > 0 && height > 0) {
            
            
            const bmi = weight / (height * height);

            
            document.getElementById('bmi-value').innerText = `${bmi.toFixed(2)}`;
        } else {

            alert("Please fill in all fields!");

        };
    }else{

        alert("Please include a comma or a period in the heigth!");
        
    };
});