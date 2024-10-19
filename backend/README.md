# Rule Engine with AST

A **Rule Engine** backend built using the **MERN stack (Node.js and Express)** with **MySQL** as the database. This project utilizes **Abstract Syntax Tree (AST)** to dynamically evaluate rules based on user-defined conditions (like age, department, income, etc.).

## Project Structure

rule-engine-ast-backend/ │ ├── config/ │ ├── config.js # Contains configuration for environment variables │ └── db.js # Configures and initializes the Sequelize MySQL connection │ ├── controllers/ │ └── ruleController.js # Handles rule creation, combination, and evaluation logic │ ├── middlewares/ │ └── errorHandler.js # Centralized error handling middleware │ ├── models/ │ └── Rule.js # Sequelize model for Rule │ ├── routes/ │ └── ruleRoutes.js # Defines the API routes for rule management │ ├── utils/ │ ├── astUtils.js # Utility functions for AST parsing, combination, and evaluation │ ├── validation/ │ └── ruleValidation.js # Zod validation schema for rule input validation │ ├── .env # Environment variables for database connection, etc. ├── .gitignore # Ignoring unnecessary files for Git (e.g., node_modules) ├── package.json # Project dependencies and scripts ├── app.js # Main Express app configuration ├── server.js # Server entry point, starts the application └── README.md # Documentation for the project



## Features

- **Create Rule:** Users can define rules based on conditions (e.g., age, department).
- **Combine Rules:** Multiple rules can be combined into a single Abstract Syntax Tree (AST).
- **Evaluate Rule:** The system evaluates the AST against user attributes to determine eligibility.
- **Zod Validation:** Validation for incoming rule requests.
- **Sequelize with MySQL:** Stores rule metadata and AST structures.

## Technologies Used

- **Node.js** with **Express.js**: Backend framework.
- **MySQL**: Relational database for storing rules.
- **Sequelize**: ORM for interacting with MySQL.
- **Zod**: Schema validation.
- **Abstract Syntax Tree (AST)**: Used to represent and evaluate rules.

## Setup Instructions

### Prerequisites

- Node.js installed
- MySQL database

### Environment Variables

Create a `.env` file in the root directory:


### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/rule-engine-ast-backend.git
cd rule-engine-ast-backend


npm install


npm install



npm start


