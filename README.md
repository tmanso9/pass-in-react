# pass.in

pass.in is a React.js application that complements the [pass.in backend application](https://github.com/tmanso9/pass-in-api.git) for managing participants in in-person events.

<img width="1234" alt="Screenshot 2024-04-10 at 00 05 22" src="https://github.com/tmanso9/pass-in-react/assets/77019593/31e843e8-5075-4d65-a5bc-6133083d9635">

## Introduction

pass.in Front-end provides a user-friendly interface for interacting with the pass.in back-end. It allows organizers to search for participants registered to an event and filter them by query or pagination.

## Features

- **Search Participants**: Search for participants registered to an event by their name or email address.
- **Pagination**: Navigate through large lists of participants with ease using pagination controls.

## Getting Started

To get started with pass.in Front-end, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/tmanso9/pass-in-react
   ```

2. Navigate to the project directory

   ```bash
   cd pass-in-react
   ```
3. Install dependencies

   ```bash
   npm install
   ```

4. Ensure the [pass.in back-end application](https://github.com/tmanso9/pass-in-api.git) is running on port 3000.

5. Start the development server

   ```bash
   npm run dev
   ```
6. Open the application in your browser

   http://localhost:5173

## Usage

- Search Participants: Enter a participant's name or email address in the search bar to search for them.
- Pagination: Navigate between pages of participants using the pagination controls at the bottom of the list.

## Tech Stack

- Framework: React.js with Typescript
- Styling: CSS Tailwind
- HTTP Requests: Fetch API
