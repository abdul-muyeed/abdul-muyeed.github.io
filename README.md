# Abdul Muyeed - Personal Portfolio

This is the personal portfolio website of Abdul Muyeed, showcasing skills, projects, educational background, and professional experience.

**Live Demo:** [https://abdul-muyeed.github.io](https://abdul-muyeed.github.io)

## Tech Stack

*   **Frontend:** React, Vite, TypeScript
*   **Styling:** CSS (details in `src/App.css`)
*   **Icons:** React Icons
*   **Deployment:** GitHub Pages

## Features

*   **About Me:** A brief introduction and personal interests.
*   **Skills:** A categorized list of technical skills and technologies.
*   **Education:** Details about academic qualifications.
*   (Potential future sections: Projects, Achievements, Contact)

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abdul-muyeed/abdul-muyeed.github.io.git
    cd abdul-muyeed.github.io
    ```

2.  **Install dependencies:**
    Using yarn (as per `yarn.lock`):
    ```bash
    yarn install
    ```
    Or using npm:
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    yarn dev
    ```
    Or using npm:
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`.

## Available Scripts

*   `yarn dev`: Starts the development server.
*   `yarn build`: Builds the application for production (outputs to `dist/` directory).
*   `yarn lint`: Lints the codebase using ESLint.
*   `yarn predeploy`: Script that runs before deployment (currently runs `yarn build`).
*   `yarn deploy`: Deploys the built application to GitHub Pages using the `gh-pages` package.
*   `yarn preview`: Serves the production build locally for preview.

## Deployment

This project is deployed using GitHub Pages. The `yarn deploy` script handles the build process and pushes the contents of the `dist` folder to the `gh-pages` branch on GitHub.

## License

This project is open source. Feel free to use it as a template or inspiration. (Consider adding a specific license like MIT if desired).
