from dotenv import load_dotenv
load_dotenv() ##1 .landing all the enviroment variables

import streamlit as st
import os
import google.generativeai as genai

def calc(age,gender,blood_sugar):
    genai.configure(api_key="AIzaSyBMUakw5FhJH1jYMkKxf2PUZqLz-GLwAig")


    ## function to load gemini pro model and get responses 
    model=genai.GenerativeModel("gemini-pro")
    def get_gemini_response(question):
        response = model.generate_content(question)
        return response.text
    age = int(input("Enter the age"))
    gender = str(input("Enter the gender"))
    blood_sugar = float(input("Enter the blood sugar level"))


    #Initialising our streamlit app
    st.set_page_config(page_title="Q&A Demo")
    st.header("Ask your medical doubts here")
    input = f'Suggest me the brief diet plan for {age} years old {gender} with current blood sugar level as {blood_sugar}'

    #When submit is clicked 

    response=get_gemini_response(input)
    st.subheader("The response is")
    st.write(response)