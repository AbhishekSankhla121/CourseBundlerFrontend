
Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/todo-app.git
cd todo-app
2. Install Dependencies
Backend:
Navigate to the backend directory and install the required Node.js dependencies.

bash
Copy code
cd backend
npm install
Frontend:
Navigate to the frontend directory and install the React dependencies.

bash
Copy code
cd ../frontend
npm install
Running the Application
1. Start the Backend Server
In the backend directory, run the following command:

bash
Copy code
npm start
The server will start on http://localhost:5000.

2. Start the Frontend Development Server
In the frontend directory, run:

bash
Copy code
npm start
The React development server will start on http://localhost:3000.

3. Access the Application
Open your web browser and go to http://localhost:3000. You should see the To-Do application running.

Project Structure
php
Copy code
todo-app/
│
├── backend/
│   ├── controllers/
│   │   └── taskController.js   # Task controller with CRUD operations
│   ├── middlewares/
│   │   └── catchAsyncError.js  # Middleware for handling errors
│   ├── routes/
│   │   └── taskRoutes.js       # API routes
│   ├── app.js                  # Express app configuration
│   ├── server.js               # Server setup
│   └── package.json            # Backend dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js       # Navbar component
│   │   ├── App.js              # Main React component
│   │   └── index.js            # Entry point for React
│   ├── public/                 # Public assets
│   └── package.json            # Frontend dependencies
│
└── README.md                   # Project documentation
API Endpoints
Base URL: http://localhost:5000/api/v1
GET /task

Description: Fetch all tasks.
Response: 200 OK - Returns an array of tasks.
POST /task

Description: Create a new task.
Body Parameters: title (string), completed (boolean)
Response: 201 Created - Returns the created task.
PUT /task/

Description: Update an existing task.
Body Parameters: title (string), completed (boolean)
Response: 200 OK - Returns the updated task.
DELETE /task/

Description: Delete a task.
Response: 200 OK - Returns a success message.
