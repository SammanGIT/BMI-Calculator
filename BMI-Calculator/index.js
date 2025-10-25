
const bmioutput = document.getElementById("bmi-result")
const condition = document.getElementById("weight-condition")
function compute()
{
    const height = document.getElementById("height").value/100
    const weight = document.getElementById("weight").value

    const bmi = weight/ (height * height);
    bmioutput.value = bmi;

    if(bmi < 18.5)
    {
        condition.innerText = "Underweight"
    }
    else if(bmi >= 18.5 && bmi <=24.9)
    {
        condition.innerText = "Healthy Weight"
    }
    else{
        condition.innerText = "Overweight"
    }
}