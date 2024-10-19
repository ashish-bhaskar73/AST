# Rule Engine with AST

This project is a **Rule Engine** built using **Abstract Syntax Trees (AST)** to determine user eligibility based on different attributes (age, department, income, spend, etc.). It supports creating dynamic rules, combining them, and evaluating user data against the rules.

## Project Structure

This project is built using the **MERN** stack with **MySQL** for data storage instead of MongoDB.

- **Frontend**: React (Frontend client to interact with the API)
- **Backend**: Express.js and Node.js (Provides APIs to create, combine, and evaluate rules)
- **Database**: MySQL (Stores rules and application metadata)

## Features

- **Create Rules**: Create rules in the form of an AST (Abstract Syntax Tree) using user-defined conditions.
- **Combine Rules**: Combine multiple rules into a single AST.
- **Evaluate Rules**: Evaluate user data against the rules to check if the user satisfies the conditions.
- **Dynamic AST**: Modify rules dynamically and use operators like AND/OR in rules.
- **Validation**: Input validation using Zod.
  
## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Validation**: Zod


### Steps to Run the Project

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ashish-bhaskar73/AST.git
![Screenshot from 2024-10-20 00-55-22](https://github.com/user-attachments/assets/d8db171c-134e-44b0-a05f-0811da09b54e)
