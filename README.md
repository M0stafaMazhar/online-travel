
# Online Travel System

This project is an Online Travel System that focuses on the "Flight Results" screen, allowing users to search and filter flights based on their criteria. The application also includes several bonus features for enhanced functionality.

## Features

### Main Screens

1. **Home Component**: Welcomes users with a message and a button to navigate to the results page.
2. **Results Component**:

   - Contains a search bar to display searched data.
   - Filter component for filtering flights based on user-selected criteria.
   - Flight cards component displaying available flights.

3. **Selected Flight Component**:
   - Displays the flight path and details for each stop in the flight.
   - Shows the total price and a confirmation button.

### Components

- **Flight Card Component**: Displays the overall path and price of the flight. When clicked, it saves the flight data to local storage, allowing the user to navigate to the flight details page. Supports displaying two-way flights.
- **Flight Path Component**: Shows airport codes for departure and arrival airports and a line representing the flight stops (transit).

- **Dotted Line Component**: Visual representation of flight stops.

- **Loading Spinner**: Indicates loading progress.
- **Error Component**: Handles HTTP errors gracefully.
- **No Data Component**: Displays a message when no data is available after filtering.
- **Not Found Component**: Represents a 404 page.

### Directives

- **Disable Arabic Directive**: Validates the airport search in the filter form by disabling Arabic characters.

### Guards

- **Selected Flight Guard**: Redirects users to the results page if no flight data is stored in local storage.

### Interfaces

Defined interfaces for handling the response object from the data service.

### Services

- **Data Service**: Responsible for fetching data and filtering flights. The filter method uses flags for each filter option to combine them and retrieve data satisfying all criteria.

- **Language Service**: Handles language and layout changes by setting a default language and toggling it with each language switch.

## Packages Used

- Bootstrap
- Angular Material
- ngx-translate (This was my first experience with translation, so it might not be perfect, but It was an enjoyable challenge!)

## Live Demo

https://flight-app-99411.web.app

## Installation

To set up the project locally, clone the repository and install the dependencies:

```bash
git clone [repository-link]
cd online-travel
npm install
```

## Running the Application

To run the application, use the following command:

```bash
ng serve
```

Then navigate to `http://localhost:4200` in your browser.

## Conclusion

This project successfully implements the required features, along with additional functionality to enhance user experience. It is designed to be responsive and user-friendly, ensuring a smooth workflow for flight searches.
