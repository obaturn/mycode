import re
from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_mail import Mail, Message
from sqlalchemy.exc import IntegrityError, NoResultFound

from User import db, User
from configuration import Config
from urls import spotify

app = Flask(__name__)
app.config.from_object(Config)

# Extensions
CORS(app, resources={r"/*": {"origins": "*"}})

db.init_app(app)
bcrypt = Bcrypt(app)
mail = Mail(app)

with app.app_context():
    db.create_all()
print(Config.SQLALCHEMY_DATABASE_URI)


@app.route('/register', methods=['POST'])
def register():

    data = request.get_json()

    # Extract data
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Validate user input
    error_message = validate_registration_input(username, email, password)
    if error_message:
        return jsonify({"error": error_message}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    try:
        new_user = User(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        send_registration_email(username, email)
        return jsonify({"message": "User registered successfully"}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({"error": "Username or email already exists"}), 400


def validate_registration_input(username: str, email: str, password: str) -> str:
    if not username or not email or not password:
        return "All fields are required"

    if username == password:
        return "Username and password cannot be the same"

    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if not re.match(email_regex, email):
        return "Invalid email address"

    return None


def send_registration_email(username: str, email: str) -> None:
    subject = "Welcome to Our Platform!"
    body = f"""
    Hi {username},

    Thank you for registering with us. We're excited to have you on board!
    And Welcome To Spotify app we are glad to welcome you stay tunes and hear 
    your best excited music through out the whole worlds thanks for registering
    stay blessed

    If you have any questions, feel free to contact us.

    Best regards,
    The Team Board
    """
    try:
        msg = Message(subject, recipients=[email])
        msg.body = body
        mail.send(msg)
        print(f"Email sent to {email}")
    except Exception as e:
        print(f"Error sending email: {e}")

@app.route('/login', methods=['POST'])
def login():
    """
    API endpoint for user login.
    """
    data = request.get_json()
    username_or_email = data.get('username_or_email')  # Correcting the key
    password = data.get('password')

    # Validate user input
    if not username_or_email or not password:
        return jsonify({"error": "Both username/email and password are required"}), 400

    try:
        # Fetch the user by username or email
        user = db.session.query(User).filter(
            (User.username == username_or_email) |
            (User.email == username_or_email)
        ).one()
    except NoResultFound:
        return jsonify({"error": "Invalid username/email or password"}), 401

    # Verify password
    if bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"error": "Invalid username/email or password"}), 401
# Register blueprints
app.register_blueprint(spotify)


@app.route('/')
def hello_world():
    """
    Root endpoint.
    """
    return 'Hello World!'


if __name__ == '__main__':
    app.run(debug=True)
