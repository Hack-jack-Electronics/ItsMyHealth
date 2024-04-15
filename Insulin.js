document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bloodSugarForm');
    const resultDiv = document.getElementById('result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const bloodSugarInput = document.getElementById('bloodSugar');
      const bloodSugarLevel = parseInt(bloodSugarInput.value);
  
      if (!isNaN(bloodSugarLevel)) {
        let message = '';
        if (bloodSugarLevel < 70) {
          message += '<p>Your blood sugar level indicates Hypoglycemia. Please be cautious and consider having a snack.</p>';
          message += '<p>Diet for Hypoglycemia:</p>';
          message += '<ul>';
          message += '<li>Eat small, frequent meals throughout the day to help maintain steady blood sugar levels.</li>';
          message += '<li>Include complex carbohydrates such as whole grains, fruits, vegetables, and legumes in your meals and snacks to provide a gradual release of glucose.</li>';
          message += '<li>Pair carbohydrates with protein and healthy fats to slow down the absorption of sugar into the bloodstream.</li>';
          message += '<li>Limit or avoid sugary foods and beverages that can cause rapid spikes and crashes in blood sugar levels.</li>';
          message += '<li>Carry a source of fast-acting carbohydrates (e.g., fruit juice, glucose tablets) to treat low blood sugar episodes quickly when needed.</li>';
          message += '</ul>';
        } else if (bloodSugarLevel >= 70 && bloodSugarLevel <= 99) {
          message += '<p>Your blood sugar level indicates prediabetes. Consider making dietary and lifestyle changes.</p>';
          message += '<p>Diet for Prediabetes:</p>';
          message += '<ul>';
          message += '<li>Follow a balanced diet that emphasizes whole, nutrient-dense foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats.</li>';
          message += '<li>Choose carbohydrates with a low glycemic index to help regulate blood sugar levels.</li>';
          message += '<li>Control portion sizes to manage calorie intake and promote weight loss if necessary.</li>';
          message += '<li>Limit intake of refined carbohydrates, sugary foods, and beverages.</li>';
          message += '<li>Increase fiber intake from foods like fruits, vegetables, whole grains, and legumes to improve blood sugar control and promote satiety.</li>';
          message += '</ul>';
        } else if (bloodSugarLevel >= 100 && bloodSugarLevel <= 125) {
          message += '<p>Your blood sugar level indicates prediabetes. Consider making dietary and lifestyle changes.</p>';
          message += '<p>Diet for Prediabetes:</p>';
          message += '<ul>';
          message += '<li>Follow a balanced diet that emphasizes whole, nutrient-dense foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats.</li>';
          message += '<li>Choose carbohydrates with a low glycemic index to help regulate blood sugar levels.</li>';
          message += '<li>Control portion sizes to manage calorie intake and promote weight loss if necessary.</li>';
          message += '<li>Limit intake of refined carbohydrates, sugary foods, and beverages.</li>';
          message += '<li>Increase fiber intake from foods like fruits, vegetables, whole grains, and legumes to improve blood sugar control and promote satiety.</li>';
          message += '</ul>';
        } else if (bloodSugarLevel >= 126) {
          message += '<p>Your blood sugar level indicates diabetes. Please consult a healthcare professional for guidance.</p>';
          message += '<p>Diet for Diabetes:</p>';
          message += '<ul>';
          message += '<li>Follow a well-balanced diet that includes a variety of nutrient-rich foods from all food groups.</li>';
          message += '<li>Monitor carbohydrate intake and distribute them evenly throughout the day to help regulate blood sugar levels.</li>';
          message += '<li>Choose carbohydrates with a low glycemic index, such as whole grains, non-starchy vegetables, fruits, and legumes.</li>';
          message += '<li>Limit intake of added sugars, sugary foods, and beverages.</li>';
          message += '<li>Include lean proteins, healthy fats, and fiber-rich foods to promote satiety and stabilize blood sugar levels.</li>';
          message += '<li>Monitor portion sizes and consider working with a registered dietitian to develop a personalized meal plan.</li>';
          message += '</ul>';
        }
        resultDiv.innerHTML = message;
      } else {
        resultDiv.innerHTML = '<p>Please enter a valid non-negative blood sugar level.</p>';
      }
    });
  });
  