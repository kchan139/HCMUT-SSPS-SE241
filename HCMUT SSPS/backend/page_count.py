from flask import Flask, jsonify, request, send_file, abort, Blueprint
from flask_cors import CORS
import os
from pdf2image import convert_from_path
from PIL import Image
import io
import shutil
from PyPDF2 import PdfReader
from docx import Document
import win32com.client
import pythoncom
# Define a Blueprint for the page count functionality
page_count_bp = Blueprint('page_count_bp', __name__)

def convert_docx_to_pdf(docx_path, pdf_path):
    try:
        pythoncom.CoInitialize()
        word = win32com.client.Dispatch("Word.Application")
        word.Visible = False
        doc = word.Documents.Open(docx_path)
        doc.SaveAs(pdf_path, FileFormat=17)  # FileFormat=17 is for PDF
        doc.Close()
        word.Quit()
        return True
    except Exception as e:
        print("Error during conversion:", e)
        return False

@page_count_bp.route('/api/pages-count', methods=['POST'])
def get_page_count():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    uploaded_file = request.files['file']
    file_extension = uploaded_file.filename.split('.')[-1].lower()

    base_dir = os.path.abspath(os.path.dirname(__file__))  # Get the directory of the script
    temp_file_path = os.path.join(base_dir, "temp_file.docx")
    pdf_path = os.path.join(base_dir, "temp.pdf")

    try:
        if file_extension == "pdf":
            uploaded_file.save(temp_file_path)
            with open(temp_file_path, 'rb') as pdf_file:
                reader = PdfReader(pdf_file)
                page_count = len(reader.pages)
            return jsonify({"page_count": page_count})

        elif file_extension == "docx":
            uploaded_file.save(temp_file_path)

            if not convert_docx_to_pdf(temp_file_path, pdf_path):
                return jsonify({"error": "Failed to convert .docx to PDF"}), 500

            with open(pdf_path, 'rb') as pdf_file:
                reader = PdfReader(pdf_file)
                page_count = len(reader.pages)

            return jsonify({"page_count": page_count})

        else:
            return jsonify({"error": "Unsupported file type. Please upload a .docx or .pdf file"}), 400

    finally:
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)
        if os.path.exists(pdf_path):
            os.remove(pdf_path)