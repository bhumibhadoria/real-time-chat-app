# Real-Time Chat Application

This is a simple real-time chat application built using **Spring Boot**, **WebSockets**, and **STOMP** for message broadcasting. The frontend is implemented with **HTML**, **CSS**, **Bootstrap**, and **JavaScript** to provide an interactive user experience.

## Features

- Real-time messaging between users
- WebSocket-based communication using Spring Boot and STOMP
- Simple and responsive UI built with Bootstrap
- User authentication via name input
- Ability to log in, send messages, and log out

## Technologies Used

- **Backend**: Spring Boot, Spring WebSocket
- **Frontend**: HTML, CSS, JavaScript, Bootstrap, jQuery
- **WebSocket Communication**: STOMP, SockJS

## Project Setup

### Prerequisites

Make sure you have the following installed:

- **Java 21** (or above)
- **Maven** for dependency management
- **IDE** (e.g., IntelliJ IDEA, Eclipse)
- **Git** for version control

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/bhumibhadoria/real-time-chat-app.git

## Project Structure

### Backend (`src/main/java/com/chat/app/chatroomapp/`)

- **`MessageController.java`**: Handles incoming WebSocket messages and broadcasts them to the clients.
- **`Config.java`**: Configures WebSocket and STOMP endpoints for handling client-server communication.

### Resources (`src/main/resources/`)

- **`application.properties`**: Configuration file for application settings.

### Frontend (`src/main/webapp/`)

- **`index.html`**: The main page where users can input their name and start chatting. Contains the structure of the user interface for login and chat functionality.
- **`style.css`**: Custom styling for the application, enhancing the visual appearance of the frontend.
- **`script.js`**: JavaScript that handles WebSocket communication, UI interactions, and message sending/receiving between users.

