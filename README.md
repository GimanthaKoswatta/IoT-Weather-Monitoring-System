# Weather Monitoring System

## Overview

The Weather Monitoring System is designed to provide real-time environmental data by integrating various hardware components and a full-stack software setup. The project uses the ESP32 microcontroller, a DHT11 temperature and humidity sensor, and an LCD display for local data visualization. Additionally, it includes an Express server and a React frontend styled with Tailwind CSS for remote data access and presentation.

## Components Used

- **ESP32 Microcontroller**: Central unit for handling data collection from sensors and managing the display.
- **DHT11 Sensor**: Measures temperature and humidity levels.
- **LCD Display**: A 16x2 LCD screen that shows real-time temperature and humidity data.
- **Express Server**: A backend server built with Node.js and Express to handle data reception and storage.
- **React Frontend**: A web application for displaying the collected weather data, styled with Tailwind CSS for a modern and responsive design.

## Process

1. **Data Collection**: The DHT11 sensor measures temperature and humidity and sends this data to the ESP32.
2. **Data Display**: The ESP32 processes the sensor data and updates the LCD display to show current readings.
3. **Data Transmission**: The ESP32 transmits sensor data to an Express server via HTTP POST requests.
4. **Data Storage**: The Express server receives the data, processes it, and stores it in a database.
5. **Data Access**: The React frontend fetches data from the Express server through APIs and displays it on a web interface.

## Software Components

- **Express Server**:
  - Developed using Node.js and Express.
  - Handles incoming data from the ESP32 and stores it in a database.
  - Provides APIs for retrieving weather data.

- **React Frontend**:
  - Developed using React for a dynamic and interactive user interface.
  - Styled with Tailwind CSS to ensure a responsive and visually appealing design.
  - Fetches data from the Express server and displays it in a user-friendly format.

