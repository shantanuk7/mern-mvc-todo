# Model View Controller Architecture Demo

This is a simple Todo list application that demonstrates the use of Model view and controller architecture. It is uses the following tech stack:

- MongoDB --> Model
- React --> View
- Node.js --> Controller

## MVC Concepts:

1. The Model:
- It manages the data, logic, and business rules.
- It doesn't know the user exists; it only knows how to store, retrieve, and calculate data.

2. The View:
- It’s what the user sees (HTML, UI components, etc.).
- It just displays what it's told and sends user inputs back to the controller.

3. The Controller:
- It takes input from the View, tells the Model to update, and then tells the View what to show next.

## MVC Patterns:
1. Observer Pattern:
- In simple terms, the Observer pattern in MVC is a system where the Model (data) acts as a "publisher" and the Views (UI) act as "subscribers". 
- Whenever the data in the Model changes, it automatically notifies all registered Views, which then update themselves to show the new information.
- Without the Observer pattern, the View might have to constantly ask the Model, "Has data changed?" thousands of times a second.

2. Data Binding:
- Data binding is the automatic process that synchronizes data between the Model (the application's data and business logic) and the View (the user interface elements)
- There are mainly two types of data binding:
    - One-way binding (Data flows in a single direction, typically from the model to the view. React primarily follows this)
    - Two-way binding (Data flows in both directions. Angular follows this approach)

3. Thin vs. Fat Components:
- In Model-View-Controller (MVC) architecture, the goal is to separate concerns to make code easier to maintain and test.
- It is an approach to structure the application's logic.
- **Thin Controller and Fat model** means the majority of the application's complex logic, such as data handling, business rules, validation, and database interactions, should reside in the Model, while the Controller should be kept minimal, handling only basic request routing and coordination