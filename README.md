# Estate Explorer

![HomePage](https://github.com/V10codes/estate-explorer/blob/main/client/public/HomePage.png)

## Overview

**Estate Explorer** is a full-stack real estate application developed using the MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to explore property listings, view details, and authenticate securely. Estate Explorer provides an easy-to-navigate user interface and a robust backend for seamless property browsing.

## Features

- **Property Listings**: Browse a wide range of properties with detailed descriptions, prices, and images.
- **User Authentication**: Secure login and registration system using JWT and bcrypt.
- **Search and Filter**: Easily search properties based on location, type, and price range.
- **Responsive Design**: Optimized for both mobile and desktop viewing.
- **Data Storage**: Property data and user information are securely stored in MongoDB.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT for tokens, bcrypt for password hashing

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above)
- [MongoDB](https://www.mongodb.com/) (set up locally or use MongoDB Atlas)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/V10codes/estate-explorer.git
    ```

2. **Navigate to the client directory**:
    ```bash
    cd estate-explorer/client
    ```

3. **Install client-side dependencies**:
    ```bash
    npm install
    ```

4. **Navigate to the server directory**:
    ```bash
    cd ../api
    ```

5. **Install server-side dependencies**:
    ```bash
    npm install
    ```

6. **Environment Setup**: Create a `.env` file in the `server` directory with the following variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

7. **Start the Development Servers**:
    - In the `client` directory, run:
      ```bash
      npm run dev
      ```
    - In the `api` directory, run:
      ```bash
      npx nodemon app.js
      ```

8. **Access the Application**: Open a browser and go to `http://localhost:3000`.

## Usage

1. **Sign Up**: Register as a new user to gain access to property listings.
2. **Log In**: Access your account and save properties of interest.
3. **Explore Properties**: Browse or search for properties based on your requirements.
4. **View Property Details**: Click on a listing to view more information, including photos, price, and property specifications.



