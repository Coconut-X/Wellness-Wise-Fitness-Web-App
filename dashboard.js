

const foodsByAge = {
    '10-15': ['Apples', 'Bananas', 'Carrots', 'Yogurt', 'Whole grains'],
    '16-20': ['Berries', 'Nuts', 'Lean meats', 'Green leafy vegetables', 'Eggs'],
    '21-25': ['Avocados', 'Quinoa', 'Fish', 'Legumes', 'Sweet potatoes'],
    '26-35': ['Chicken breast', 'Broccoli', 'Almonds', 'Chia seeds', 'Spinach'],
    '36-47': ['Salmon', 'Kale', 'Brown rice', 'Berries', 'Olive oil'],
    '48-60': ['Oats', 'Tomatoes', 'Beans', 'Tuna', 'Garlic'],
    '60+': ['Tofu', 'Cauliflower', 'Oranges', 'Lentils', 'Walnuts']
};

const foodsByHeight = {
    '140-150': ['Oranges', 'Almonds', 'Salads', 'Tofu', 'Blueberries'],
    '151-160': ['Papayas', 'Chickpeas', 'Grilled chicken', 'Spinach', 'Walnuts'],
    '161-170': ['Strawberries', 'Cashews', 'Salmon', 'Kale', 'Lentils'],
    '171-180': ['Peaches', 'Pecans', 'Turkey', 'Broccoli', 'Chia seeds'],
    '181-190': ['Pineapple', 'Hazelnuts', 'Beef', 'Zucchini', 'Quinoa'],
    '191-200': ['Mangoes', 'Pistachios', 'Pork', 'Bell peppers', 'Brown rice'],
    '201+': ['Grapes', 'Macadamia nuts', 'Duck', 'Asparagus', 'Millet']
};

const foodsToGetDifferentBodyTypes = {
    'sporty': ['Chicken breast', 'Brown rice', 'Broccoli', 'Oatmeal', 'Greek yogurt'],
    'muscle_gain': ['Lean beef', 'Quinoa', 'Sweet potatoes', 'Eggs', 'Salmon'],
    'weight_loss': ['Leafy greens', 'Berries', 'Lean turkey', 'Whole grains', 'Nuts'],
    'toned': ['Fish', 'Avocado', 'Nuts', 'Seeds', 'Legumes'],
    'endurance': ['Bananas', 'Pasta', 'Oranges', 'Whole grain bread', 'Yogurt'],
    'balanced': ['Chicken', 'Brown rice', 'Vegetables', 'Fruits', 'Nuts'],
    'vegan': ['Tofu', 'Quinoa', 'Chickpeas', 'Nuts', 'Vegetables'],
    'ectomorph': ['High-calorie foods', 'Healthy fats', 'Whole grains', 'Starchy vegetables', 'Protein shakes'],
    'endomorph': ['Lean proteins', 'Non-starchy vegetables', 'Whole grains', 'Fruits', 'Healthy fats'],
    'mesomorph': ['Balanced mix of proteins', 'Carbohydrates', 'Fats', 'Vegetables', 'Fruits']
};

const workoutsToGetDifferentBodyTypes = {
    'sporty': ['Running', 'Swimming', 'Cycling', 'Jumping Rope', 'HIIT'],
    'muscle_gain': ['Weightlifting', 'Bench Press', 'Squats', 'Deadlifts', 'Pull-ups'],
    'weight_loss': ['Cardio', 'Interval Training', 'Zumba', 'Kickboxing', 'Brisk Walking'],
    'toned': ['Pilates', 'Yoga', 'Resistance Training', 'Planks', 'Lunges'],
    'endurance': ['Long-distance Running', 'Rowing', 'Stair Climbing', 'Cycling', 'Swimming'],
    'balanced': ['Moderate Cardio', 'Strength Training', 'Yoga', 'Swimming', 'Walking'],
    'vegan': ['Yoga', 'Bodyweight Exercises', 'Running', 'Cycling', 'Pilates'],
    'ectomorph': ['Compound Lifts', 'Weight Training', 'Push-ups', 'Pull-ups', 'Squats'],
    'endomorph': ['Cardio Workouts', 'Strength Training', 'Circuit Training', 'Swimming', 'Walking'],
    'mesomorph': ['Mixed Training', 'Weight Training', 'HIIT', 'Running', 'Cycling']
};


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('infoForm').addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm();
    });
})


function showForm() {
    document.querySelector(".infoinputform").style.visibility = "visible";
}

function hideForm() {     
    document.querySelector(".infoinputform").style.visibility = "hidden";
}

function submitForm(event) {

    document.querySelector(".infoinputform").style.visibility = "hidden";

    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const bodyTypeGoal = document.getElementById("bodyTypeGoal").value;

    const foodList = document.querySelector("#food-list ul");
    foodList.innerHTML = ''; 

    if (age && height && bodyTypeGoal) 
        {
        const foodItems = (foodsByAge[age] || []).concat(foodsByHeight[height] || []).concat(foodsToGetDifferentBodyTypes[bodyTypeGoal] || []);
        
        //remove duplicates from the foodItems
        const uniqueFoodItems = [...new Set(foodItems)];
        console.log("Unique Food Items:", uniqueFoodItems);

        uniqueFoodItems.forEach((food) =>{
            const li = document.createElement("li");
            li.textContent = food;
            foodList.appendChild(li);
        });

         
         const type = document.getElementById("bodyTypeGoal").value;
         //remove all non alphabets
         let cleanType = type.replace(/_/g, " ");
         cleanType = cleanType.replace(/[^a-zA-Z ]/g, "");
         const formattedType = cleanType.replace(/\b\w/g, char => char.toUpperCase());

    localStorage.setItem('bodyTypeGoal', formattedType);


         const heading = document.createElement("h4");
         heading.style.textAlign="left";
         heading.style.marginLeft="10px";
         heading.style.color="black";
         heading.style.fontWeight="bold";
         heading.style.fontFamily="Trebuchet MS", "sans-serif";
         heading.textContent = "Body Type Aim: " + formattedType;
         const item2Div = document.querySelector(".item-2");
         item2Div.insertBefore(heading, foodList.parentNode); 
 
        const workoutList = document.querySelector(".item-4 ul");
        workoutList.innerHTML = "";

        const workoutItems = workoutsToGetDifferentBodyTypes[bodyTypeGoal] || [];
        workoutItems.forEach((workout) => {
            const li = document.createElement("li");
            li.textContent = workout;
            workoutList.appendChild(li);
        });

       const gen= document.getElementById("gender").value;
       const weight = document.getElementById("weight").value;

       if(gen=="male")
        {
            const bmr=66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
            document.getElementsByClassName("bmrvalue")[0].textContent = "Basal Metabolic Rate: " + bmr.toFixed(2) + " calories/day";
        }
        else
        {
            const bmr=655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
            document.getElementsByClassName("bmrvalue")[0].textContent = "Basal Metabolic Rate: " + bmr.toFixed(2) + " calories/day";
        }

    }


    BMI();

    //saveProfile(age, height, weight, gen, bodyTypeGoal, password);
    const gen= document.getElementById("gender").value;
    const weight = document.getElementById("weight").value;

    localStorage.setItem('age', age);
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);
    localStorage.setItem('gen', gen);
    localStorage.setItem('height', height);

}

function BMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const item5Div = document.querySelector(".item-5");
    const existingBmiText = item5Div.querySelector(".bmi-text");
    const existingBmiStatusText = item5Div.querySelector(".bmi-status-text");
    const existingBmiAdviceText = item5Div.querySelector(".bmi-advice-text");

    if (existingBmiText) item5Div.removeChild(existingBmiText);
    if (existingBmiStatusText) item5Div.removeChild(existingBmiStatusText);
    if (existingBmiAdviceText) item5Div.removeChild(existingBmiAdviceText);

    const bmiText = document.createElement("h4");
    bmiText.textContent = "BMI Value: " + bmi.toFixed(2);
    bmiText.classList.add("bmi-text");
    item5Div.appendChild(bmiText);

    const bmiRanges = [
        { min: 0, max: 16, status: "Very severely underweight" },
        { min: 16, max: 17, status: "Severely underweight" },
        { min: 17, max: 18.5, status: "Underweight" },
        { min: 18.5, max: 25, status: "Normal (healthy weight)" },
        { min: 25, max: 30, status: "Overweight" },
        { min: 30, max: 35, status: "Obese Class I (Moderately obese)" },
        { min: 35, max: 40, status: "Obese Class II (Severely obese)" },
        { min: 40, max: Infinity, status: "Obese Class III (Very severely obese)" }
    ];

    let bmiStatus = "";
    for (let i = 0; i < bmiRanges.length; i++) 
    {
        const range = bmiRanges[i];
        if (bmi >= range.min && bmi < range.max) 
        {
            bmiStatus = range.status;
            break;
        }
    }

    const bmiStatusText = document.createElement("h5");
    bmiStatusText.textContent = "BMI Status: " + bmiStatus;
    bmiStatusText.classList.add("bmi-status-text");
    item5Div.appendChild(bmiStatusText);

    let bmiAdvice = "";

    if (bmiStatus === "Very severely underweight" || bmiStatus === "Obese Class III (Very severely obese)") {
        bmiAdvice = "You should consult a doctor immediately!";
    } else if (bmiStatus === "Severely underweight" || bmiStatus === "Underweight" || bmiStatus.includes("Obese")) {
        bmiAdvice = "You should consider making significant lifestyle changes!";
    } else if (bmiStatus === "Overweight") {
        bmiAdvice = "You should consider losing weight!";
    } else if (bmiStatus === "Normal (healthy weight)") {
        bmiAdvice = "You are in good shape!";
    }

    const bmiAdviceText = document.createElement("h5");
    bmiAdviceText.textContent = "BMI Advice: " + bmiAdvice;
    bmiAdviceText.classList.add("bmi-advice-text");
    item5Div.appendChild(bmiAdviceText);

    const progressElement = document.getElementById("bmi");
    progressElement.value = bmi;
}

function updateSteps() {
    const progressElement = document.getElementById("steps");
    const progressValue = parseInt(progressElement.value, 10);
    const enteredSteps = parseInt(document.getElementById("steps-input").value, 10);

    if (!isNaN(enteredSteps) && enteredSteps > 0) {
        const newSteps = progressValue + enteredSteps;

        progressElement.value = newSteps;
        const setValue = document.getElementById("steps-value");
        setValue.innerHTML = newSteps + "/35000";

        localStorage.setItem("steps",newSteps);

        document.getElementById("steps-input").value = '';
    } else {
        alert("Please enter a valid number of steps.");
    }
 }



