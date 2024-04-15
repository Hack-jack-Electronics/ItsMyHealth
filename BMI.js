function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Convert height to meters if it's in centimeters
    if (height > 3) {
        height = height / 100; // Convert centimeters to meters
    }
    
    var bmi = weight / (height * height);

    // Determine the BMI category and display the result including the category
    var resultElement = document.getElementById('result');
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
        resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>' +
                                'Category: ' + category + '<br><br>' +
                                'For individuals who are underweight:<br>' +
                                '**Dietary Recommendations:**<br>' +
                                '- Eat calorie-dense foods like nuts, seeds, avocados, and whole grains.<br>' +
                                '- Consume protein-rich foods such as lean meats, dairy, legumes, and nuts.<br>' +
                                '- Include healthy fats from sources like olive oil, fatty fish, and nuts.<br>' +
                                '- Eat regular meals and snacks throughout the day.<br>' +
                                '- Stay hydrated with water, herbal teas, and low-fat milk.<br><br>' +
                                '**Exercise Recommendations:**<br>' +
                                '- Engage in strength training exercises like squats, lunges, and push-ups.<br>' +
                                '- Use resistance bands or free weights to build muscle mass.<br>' +
                                '- Gradually increase the intensity and duration of workouts.<br>' +
                                '- Allow adequate rest and recovery between sessions.<br>' +
                                '- Consider consulting a fitness professional for personalized guidance.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Healthy";
        resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>' +
                                'Category: ' + category + '<br><br>' +
                                'For individuals with a healthy weight:<br>' +
                                '**Diet:**<br>' +
                                '- Eat a balanced diet with a variety of fruits, vegetables, lean proteins, whole grains, and healthy fats.<br>' +
                                '- Consume adequate protein from sources like poultry, fish, tofu, legumes, and dairy.<br>' +
                                '- Include fiber-rich foods like fruits, vegetables, and whole grains to support digestion.<br>' +
                                '- Limit processed foods, sugary snacks, and excessive amounts of saturated fats and sugars.<br><br>' +
                                '**Exercise:**<br>' +
                                '- Engage in regular physical activity for at least 150 minutes per week, including aerobic exercises like walking, jogging, cycling, or swimming.<br>' +
                                '- Incorporate strength training exercises two to three times per week to maintain muscle mass and bone density.<br>' +
                                '- Include flexibility and balance exercises to improve range of motion and reduce the risk of injury.<br>' +
                                '- Find activities you enjoy and make them a regular part of your routine for overall health and well-being.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>' +
                                'Category: ' + category + '<br><br>' +
                                'For individuals who are overweight:<br>' +
                                '**Diet:**<br>' +
                                '- Focus on portion control and mindful eating to manage calorie intake.<br>' +
                                '- Choose nutrient-dense foods like fruits, vegetables, lean proteins, and whole grains.<br>' +
                                '- Limit processed foods, sugary snacks, fried foods, and sugary beverages.<br>' +
                                '- Incorporate plenty of fiber-rich foods to promote satiety and regulate digestion.<br>' +
                                '- Stay hydrated with water and avoid high-calorie beverages like sodas and sugary juices.<br><br>' +
                                '**Exercise:**<br>' +
                                '- Aim for at least 150 minutes of moderate-intensity aerobic exercise per week, such as brisk walking, cycling, or swimming.<br>' +
                                '- Include strength training exercises two to three times per week to build muscle mass and boost metabolism.<br>' +
                                '- Incorporate high-intensity interval training (HIIT) workouts to burn calories and improve cardiovascular fitness.<br>' +
                                '- Find enjoyable physical activities that you can stick to in the long term to support weight loss efforts.<br>' +
                                '- Consult with a healthcare professional or certified fitness trainer for personalized guidance.';
    } else {
        category = "Obesity";
        resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>' +
                                'Category: ' + category + '<br><br>' +
                                'For individuals who are obese:<br>' +
                                '**Diet:**<br>' +
                                '- Focus on portion control and reducing calorie intake to promote weight loss.<br>' +
                                '- Emphasize whole, unprocessed foods such as fruits, vegetables, lean proteins, and whole grains.<br>' +
                                '- Limit intake of high-calorie and high-fat foods, including fried foods, sugary snacks, and processed snacks.<br>' +
                                '- Monitor carbohydrate intake and choose complex carbohydrates over simple sugars.<br>' +
                                '- Consider seeking guidance from a registered dietitian or nutritionist for personalized meal planning and support.<br><br>' +
                                '**Exercise:**<br>' +
                                '- Aim for at least 150 minutes of moderate-intensity aerobic exercise per week, such as brisk walking, cycling, or swimming.<br>' +
                                '- Incorporate strength training exercises two to three times per week to build muscle mass and increase metabolism.<br>' +
                                '- Include activities that promote flexibility and balance, such as yoga or tai chi, to improve overall fitness and mobility.<br>' +
                                '- Gradually increase exercise intensity and duration as fitness levels improve.<br>' +
                                '- Consult with a healthcare professional or certified fitness trainer for safe and effective exercise recommendations tailored to individual needs and abilities.';
    }
}
function goBack() {
    window.history.back();
}




