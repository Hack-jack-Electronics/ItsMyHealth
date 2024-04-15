import pytesseract
import cv2
import pandas as pd
import tempfile
import os
def file_to_path(img_obj):
    temp = tempfile.mkdtemp()
    temp_path = os.path.join(temp,'image.jpg')
    img_obj.save(temp_path)
    return temp_path
def convert(path):

    path = file_to_path(path)
    #intialising the pytesseract library
    pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe"

    #reading the database
    file = pd.read_csv(r"C:\Users\Hp\Desktop\Medicine_prediction\medicines_data.csv")
    #reading the input image
    image = cv2.imread(path)
    flag = 1


    def find(text,file,flag):
        ans = ""
        bow=0
        if(flag==1):
            med_set = set(file['drug_name'])
            for i in text.split():
                #modify the text
                i = i.lower()
                while(i!="" and (i[0]<'a' or i[0]>'z')):
                    i=i.lstrip(i[0])
                while(i!="" and (i[len(i)-1]<'a' or i[len(i)-1]>'z')):
                    i = i.rstrip(i[len(i)-1])
                if(i!="" and i[len(i)-1]=='s'):
                    try:
                        i=i.rstrip('s')
                    except:
                        i=i
                if i!="" and i  in med_set:
                    ans = (file.loc[file['drug_name']==i].iloc[0])
                    final_ans = "Drug name: "+str(ans[0])+"\n\nMedical Condition: "+str(ans[1])+"\n\nSide Effects: "+str(ans[2])+"\n\nGeneric name: "+str(ans[3])+"\n\nDrug Class: "+str(ans[4])+"\n\nBrand Names: "+str(ans[5])+"\n\nActivity: "+str(ans[6])+"\n\nRx/OTC: "+str(ans[7])+"\n\nPregnancy Category: "
                    if (ans[8]=='A'):
                        final_ans+="No risk in human studies"
                    elif (ans[8]=="B"):
                        final_ans+="No risk in animal studies, but there are no studies in pregnant women"
                    elif ans[8]=="C":
                        final_ans+="Risk cannot be ruled out, and animal studies have shown risk to the fetus"
                    elif ans[8]=="X":
                        final_ans +="Contraindicated, and/or human or animal studies have shown fetal abnormalities, and the risks of the drug outweigh the potential benefits"
                    elif ans[8]=="D":
                        final_ans+="Drug that has been shown to pose a risk to the fetus, but the potential benefits may outweigh the risk"
                    final_ans+="\n\nRelated drugs: "+str(ans[11])+"\n\nRating: "+str(ans[12])+"\n"
                    ans = final_ans
                    bow=1
                    break
                
        return bow,ans


    config = ('-l eng — oem 3 — psm 3')
    text = pytesseract.image_to_string(image,config = config)
    bow, ans = find(text,file,flag)
    if(text=="" or bow==0):
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        text = pytesseract.image_to_string(gray,config = config)
        bow, ans = find(text,file,flag)
        if(text==""or bow==0):
            noise=cv2.medianBlur(gray,3)
            thresh = cv2.threshold(noise, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
            text = pytesseract.image_to_string(thresh,config = config)
            bow, ans = find(text,file,flag)
            if(text==""or bow==0):
                flag=0
                if text=="":
                    ans = "No text detected"
                else:
                    ans  = "Suspected Counterfeit"
    return ans


