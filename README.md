# User Registration Application

## Overview
The User Registration Application is a web-based application built using React that allows users to create an account by providing necessary information such as their name, email address, phone number, and password. The application ensures data validation and provides feedback to users for successful or unsuccessful registration attempts. It also includes a simple UI for easy interaction.

## Features
- **User-friendly Interface**: The application features a clean and intuitive user interface that guides users through the registration process.
- **Form Validation**: Real-time validation ensures that all required fields are filled out correctly. This includes checking for valid email formats, password strength, and phone number format.
- **Responsive Design**: The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **State Management**: Utilizes React's `useState` hook to manage form data and validation states.
- **Submission Handling**: On form submission, the application displays appropriate messages to indicate success or failure.
- **Data Storage**: For demonstration purposes, user data can be temporarily stored in the component state or local storage. In a real-world application, this would typically involve sending data to a backend server.

## Components
1. **RegistrationForm**: The primary component that renders the registration form and handles user input and validation.
2. **FormInput**: A reusable input component that encapsulates label, input, and error message display.
3. **Button**: A reusable button component that triggers form submission.

### RegistrationForm Component
- **State**: Manages input values and validation errors.
- **Methods**: Handles input changes, form submission, and validation logic.
- **UI**: Renders input fields for name, email, phone number, and password, along with a submit button.

### FormInput Component
- **Props**: Receives label, type, name, value, onChange handler, and error message.
- **UI**: Renders a labeled input field with an optional error message.

### Button Component
- **Props**: Receives label and onClick handler.
- **UI**: Renders a button that can trigger form submission.

## Installation and Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/animeshkumar7717/user-register-react.git
    ```
2. Navigate to the project directory:
    ```bash
    cd user-registration-react
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and navigate to `http://localhost:3000`.