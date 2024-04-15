from dotenv import load_dotenv
load_dotenv()    

import streamlit as st
import os
import google.generativeai as genai

genai.configure(api_key="AIzaSyBMUakw5FhJH1jYMkKxf2PUZqLz-GLwAig")


model = genai.GenerativeModel("gemini-pro")
def get_gemini_response(question):
    response=model.generate_content(question)
    return response.text

st.set_page_config(page_title="Any medical doubts ask here")
st.header("Medcheck")
input=st.text_input("Input: ",key="input")
submit=st.button("Search")

#when submit button is clicked

if submit:
    response=get_gemini_response(input)
    st.subheader("The Response is")
    st.write(response)
    