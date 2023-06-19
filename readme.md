# Car Marketplace

This Car Booking Service is a streamlined full-stack web application that provides a platform for users to book cars.
The backend server is developed using Node.js and Express, which interacts with a PostgreSQL database for efficient data management.

The frontend of the application is built with React, offering a responsive and intuitive user interface.
Navigation within the application is handled by React Router, offering a smooth user experience.

User authentication is ensured with JSON Web Tokens (JWT), providing a secure environment for users to interact with the service.
Users can register, log in, view car details, and book their preferred cars.

# Table of Contents
    Installation
    Usage
    Features
    Technologies Used


# Installation
    Clone the repository:
    git clone https://github.com/Volodymyrr-tech/car-marketplace.git

    Install dependencies:
    cd car-booking-service
    npm install

    Set up the database:
    CREATE DATABASE car_booking_service;

    Run the server:
    npm start

# Usage
Running the React frontend:

    Navigate to the client folder:
    cd client

    Install the dependencies:
    npm install

    Run the React app:
    npm start

# Features
    User Registration and Login: Users can create a new account and log into the application. Authentication is handled using JWTs.
    Car Viewing: Users can view a list of available cars and see their details.
    Car Booking: Logged in users can book cars by providing their personal information and booking details.

# Technologies Used
    Frontend: React.js, React Router, axios
    Backend: Node.js, Express.js
    Authentication: JSON Web Tokens (JWT)
    Database: PostgreSQL
    ORM: node-postgres (pg)
