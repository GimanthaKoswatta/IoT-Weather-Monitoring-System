# IoT-Weather-Monitoring-System
This Weather Monitoring System uses ESP32 microcontroller to measure temperature and humidity. The data is shown on an LCD screen and sent to a server for further processing and display on a website. It combines hardware and software to monitor the environment in real-time.

1.	Hardware Integration:
	•	ESP32: Handles both sensor data collection and data transmission.
	•	Sensors:
	•	DHT11: Connects to one of the ESP32’s GPIO pins to measure humidity.
	•	LM35: Connects to an analog pin on the ESP32 to measure temperature.
	•	Display:
	•	OLED or TFT Display: Consider using a display module compatible with the ESP32 to show real-time data.
	•	GSM Module (if Wi-Fi is unavailable): Connects to ESP32 for data transmission.
	2.	Software Development:
	•	ESP32 Programming:
	•	Use the Arduino IDE or PlatformIO to write code that collects sensor data and displays it on the screen.
	•	Implement HTTP POST requests to send data to the server.
	•	Backend Setup:
	•	Node.js server using Express to receive and store data.
	•	Database (like MongoDB) to store weather data.
	•	Frontend Development:
	•	React application with Tailwind CSS for a responsive design to visualize data.
	•	Fetch data from the server and display it in a user-friendly format.
	3.	Data Transmission:
	•	The ESP32 handles data collection and sends it directly to the server.
	•	Implement error handling for reliable data transmission.
	4.	Web Interface:
	•	Design a clean, responsive interface using React and Tailwind CSS.
	•	Ensure real-time data updates on the web interface.
