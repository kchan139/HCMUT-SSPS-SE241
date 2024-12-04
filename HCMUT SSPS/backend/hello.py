from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Example data structure
printers = [
    {"id": 1, "name": "A4 - 402: Printer 1", "status": "Available"},
    {"id": 2, "name": "A4 - 402: Printer 2", "status": "Unavailable"},
    {"id": 3, "name": "A4 - 402: Printer 3", "status": "Available"},
    {"id": 4, "name": "A4 - 402: Printer 4", "status": "Available"},
]

@app.route('/api/printers', methods=['GET'])
def get_printers():
    available_printers = [printer for printer in printers if printer['status'] == 'Available']
    
    return jsonify(available_printers)

@app.route('/api/printers-admin', methods=['GET'])
def get_printers_admin():
    
    return jsonify(printers)

@app.route('/api/printers/<int:printer_id>', methods=['PUT'])
def update_printer_status(printer_id):
    data = request.json
    for printer in printers:
        if printer['id'] == printer_id:
            printer['status'] = data.get('status', printer['status'])
            return jsonify(printer), 200
    return jsonify({"error": "Printer not found"}), 404

@app.route('/api/printers', methods=['POST'])
def add_printer():
    new_printer = request.json
    new_printer['id'] = len(printers) + 1
    printers.append(new_printer)
    return jsonify(new_printer), 201

if __name__ == '__main__':
    app.run(debug=True)
