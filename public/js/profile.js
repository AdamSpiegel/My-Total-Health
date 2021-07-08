//Form for submitting exercises
const exerciseFormHandler = async (event) => {
    event.preventDefault();

    const strength_training = document.querySelector('#strength-training').value.trim();
    const cardio = document.querySelector('#cardio').value.trim();
    const flexibility = document.querySelector('#flexibility').value.trim();
    const mindset = document.querySelector('#mindset').value.trim();
    const lifestyle = document.querySelector('#lifestyle').value.trim();

    if (strength_training || cardio || flexibility || mindset || lifestyle) {
        const response = await fetch(`/api/exercises`, {
            method: 'POST',
            body: JSON.stringify({ strength_training, cardio, flexibility, mindset, lifestyle }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to post exercise data');
        }
    }
};

//Form for submitting biometrics
const biometricsFormHandler = async (event) => {
    event.preventDefault();

    const weight = document.querySelector('#weight').value.trim();
    const height = document.querySelector('#height').value.trim();
    const bloodpressure = document.querySelector('#blood-pressure').value.trim();
    const rhr = document.querySelector('#rhr').value.trim();
    const bmi = document.querySelector('#bmi').value.trim();
    const bodyfat = document.querySelector('#bodyfat').value.trim();

    if (weight || height || bloodpressure || rhr || bmi || bodyfat) {
        const response = await fetch(`/api/biometrics`, {
            method: 'POST',
            body: JSON.stringify({ weight, height, avg_blood_pressure, resting_heart_rate, bmi, body_fat }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to post biometrics data');
        }
    }
};

//Form for submitting nutrition
const nutritionFormHandler = async (event) => {
    event.preventDefault();

    const foodlog = document.querySelector('#food-log').value.trim();
    const water = document.querySelector('#water').value.trim();
    const calorie = document.querySelector('#calorie').value.trim();

    if (foodlog || water || calorie) {
        const response = await fetch(`/api/nutrition`, {
            method: 'POST',
            body: JSON.stringify({ food_log, cups_water, caloric_intake }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to post nutrition data');
        }
    }
};

document
    .querySelector('.exercise-form')
    .addEventListener('submit', exerciseFormHandler);

document
    .querySelector('.biometrics-form')
    .addEventListener('submit', biometricsFormHandler);

document
    .querySelector('.nutrition-form')
    .addEventListener('submit', nutritionFormHandler);