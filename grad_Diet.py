import gradio as gr
import google.generativeai as genai

def calc(age, gender, blood_sugar):
    genai.configure(api_key="AIzaSyCRNNpoN9VvqlNfqL4RHcH8punFFthQ5Y0")

    # Function to load gemini pro model and get responses 
    model = genai.GenerativeModel("gemini-pro")

    def get_gemini_response(question):
        response = model.generate_content(question)
        return response.text

    # Creating the input text for Gemini
    input_text = f'Suggest me the brief diet plan for {age} years old {gender} with current blood sugar level as {blood_sugar}'
    
    # Get response from Gemini
    response = get_gemini_response(input_text)

    return response

iface = gr.Interface(fn=calc, 
                      inputs=["number", "text", "number"], 
                      outputs="text", 
                      title="Medical Diet Plan Recommender",
                      description="Enter your age, gender, and blood sugar level to get a brief diet plan recommendation.")
iface.launch(share = True)



