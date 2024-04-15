import gradio as gr
from image_to_text import convert

with gr.Blocks(theme = gr.themes.Soft()) as demo:
    image = gr.Image(type = 'pil', label = 'Image')
    label = gr.Text(label = "Output")
    image.upload(
        convert,
        [image],
        [label]
    )
if __name__ == '__main__':
    demo.launch(share = True)
