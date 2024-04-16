import streamlit as st
import os
import google.generativeai as genai


genai.configure(api_key=("AIzaSyCGXU9gfbpFo1sD_4WnjNOr-G-Q1JFKKQM"))


model=genai.GenerativeModel("gemini-pro")
chat=model.start_chat(history=[])

def get_gemini_response(question):
    response=chat.send_message(question,stream=True)
    return response

st.set_page_config(page_title="ItsMyHealth ChatBot")
st.header("ItsMyHealth ChatBot")


if 'chat_history' not in st.session_state:
    st.session_state['chat_history'] = []


input=st.text_input("What do you want to ask?",key="input")
submit=st.button("Submit")


if submit and input:
    response=get_gemini_response(input)
    st.session_state['chat_history'].append(("You", input))
    st.subheader("Here goes your answer!")
    for chunk in response:
        st.write(chunk.text)
        st.session_state['chat_history'].append(("Bot",chunk.text))
st.subheader("Check your history")
for role,text in st.session_state['chat_history']:
    st.write(f"{role}:{text}")
    