# **ItsMyHealth Web Application**
**ItsMyHealth** is an innovative web application designed to empower users with essential healthcare tools, all accessible for free. With features including counterfeit medicine detection, BMI calculation, and a specialized insulin level-based dietary plan generator, ItsMyHealth revolutionizes health management through technology.

# Features
**Counterfeit Medicine Detection**: Utilizing advanced image recognition technology, ItsMyHealth helps users verify the authenticity of their medications, safeguarding against counterfeit drugs.

**BMI Calculation**: Users can easily calculate their Body Mass Index (BMI) to gain insights into their weight status and overall health.

**Specialized Insulin Level-based Dietary Plan Generator**: ItsMyHealth offers personalized dietary plans based on users' insulin levels, promoting balanced nutrition and healthy eating habits.

# Future Aspects

**Nearby Legitimate Retail Stores**: ItsMyHealth will provide users with information about nearby legitimate retail stores where they can purchase genuine medications and healthcare products.

**Instant Body Part Health Measurement**: Users will be able to measure their body part health instantly by logging symptoms related to specific body parts, receiving real-time feedback and recommendations.

**Consultation with Physicians and Nutritionists**: ItsMyHealth will facilitate consultations with healthcare professionals such as physicians and nutritionists, allowing users to seek personalized advice and guidance for their health concerns.

# **Requirements**
To run ItsMyHealth web application, ensure you have the following dependencies installed:

>Python 3

>Pytesseract

>Gradio

>OpenCV-Python

>Pandas

>Numpy

>Tempfile

>Os

>Google.generativeai

# **Installation and Setup**

1. Clone the repository to your local machine:

> bash

> ```git clone [https://github.com/your_username/ItsMyHealth-webapp.git](https://github.com/hitesh-mehta/ItsMyHealth)```

2. Set up a virtual environment named 'demo':

>bash

>```python3 -m venv demo```

3. Activate the virtual environment:

For Windows:

> bash

>```demo\Scripts\activate```

For macOS/Linux:

> bash

>```source demo/bin/activate```

**Install all dependencies listed above using pip**:

> bash

>```pip install -r requirements.txt```

# **Usage**

Run the gradioFile.py script to deploy the counterfeit detection model over Gradio:

> bash

> ```python gradioFile.py```

Obtain the public shareable Gradio link (link1) provided in the terminal.

Similarly, run the grad_Diet.py script to deploy the dietary plan generation model:

> bash

> ```python grad_Diet.py```

Obtain the public shareable Gradio link for the dietary plan generator (link2).

Download all other HTML, CSS, and JS files from the repository.

Open scan.html and insert link1 within the iframe tag to deploy Gradio on the webpage.

Similarly, in insulin.html, insert link2 within the iframe tag.

Launch the index.html file over any local server (e.g., using Python's SimpleHTTPServer or any web server of your choice):

> bash

> ```python -m http.server 5500```

Access the ItsMyHealth website through your web browser at http://localhost:5500.

# **License**
ItsMyHealth is licensed under the Apache License 2.0, a permissive license that requires preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

For more information and updates, contact us at urbanai0209@gmail.com.
