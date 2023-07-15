# Drag 'N' Drop

This is a React application that demonstrates drag and drop functionality between two drop zones.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `npm install` or `yarn install`.
3. Start the development server by running `npm start` or `yarn start`.
4. Open your browser and navigate to `http://localhost:3000` to view the application.

## How to Use

1. Drag and drop the items between the two drop zones.
2. Values of the inputs on the right side will be added to the table when you hit the "Save" button.
3. The table will display the selected items in the following columns: Name, Work Style, Email, Framework, and CSS Framework.

## Technologies Used

- React
- react-beautiful-dnd
- tailwindcss
- typescript
- Sass

## Components

The application consists of the following components:

- Name: Input field for entering a name.
- Email: Input field for entering an email.
- UITech: Input field for entering a UI technology.
- Work: Input field for entering a work style.
- Framework: Input field for entering a framework.
- StrictModeDroppable: Custom droppable component for handling the drag and drop functionality.
- ArrayList: Component that displays the selected items in a table.
