# Car Lease Portal

**Car Lease Portal** is a modern Angular-based web application designed to display leasing offers for vehicles. This project integrates the latest Angular features, including standalone components, Tailwind CSS, and Flowbite for UI components. The application also incorporates API calls to dynamically fetch and display leasing offers, with fallback example data when the API is inaccessible.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Development](#development)
- [Version Control with GitHub](#version-control-with-github)
- [Code Linting and Formatting](#code-linting-and-formatting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Angular Standalone Components**: The application is built using Angular's latest standalone components for a modular and scalable architecture.
- **Tailwind CSS**: Utilizes Tailwind CSS for styling, allowing for rapid UI development with utility-first CSS.
- **Flowbite Integration**: Flowbite is used for interactive UI components such as buttons, modals, and navigation menus.
- **API Integration**: Fetches vehicle leasing offers from an external API, with fallback to example data for testing purposes.
- **Responsive Design**: Ensures the application is fully responsive and accessible on various devices.

## Technologies Used

- **Angular 18.2+**: A powerful framework for building web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Flowbite**: A library for building interactive UI components with Tailwind CSS.
- **TypeScript**: Provides type safety and modern JavaScript features.
- **ESLint & Prettier**: Tools for maintaining code quality and consistent formatting.
- **RxJS**: For managing asynchronous data streams and API calls.

## Setup Instructions

### 1. Install Necessary Tools

#### **1.1 Node.js and npm**

Ensure you have Node.js and npm installed on your system. If not, download and install them from [Node.js' official website](https://nodejs.org/).

Verify installation:

```bash
node -v
npm -v
```

#### **1.2 Angular CLI**

Install Angular CLI globally to create and manage Angular projects:

```bash
npm install -g @angular/cli
```

Verify installation:

```bash
ng version
```

#### **1.3 Git**

Install Git for version control from [Git's official website](https://git-scm.com/).

Verify installation:

```bash
git --version
```

#### **1.4 Visual Studio Code**

Download and install [Visual Studio Code](https://code.visualstudio.com/), a lightweight but powerful code editor.

### 2. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/car-lease-portal.git
cd car-lease-portal
```

### 3. Install Project Dependencies

Install all necessary dependencies for the project:

```bash
npm install
```

### 4. Tailwind CSS Setup

Tailwind CSS is already configured in the project. The main configuration files include `tailwind.config.mjs` and `postcss.config.mjs`.

### 5. ESLint and Prettier Setup

ESLint and Prettier are configured to ensure code quality and consistency.

1. **Initialize ESLint:**

   ```bash
   npx eslint --init
   ```

   - Choose "Syntax and Problems" for linting.
   - Choose "JavaScript modules (import/export)" for the module type.
   - Specify that your code runs in the browser.
   - Choose not to use a framework when asked (since Angular is managed differently).
   - Select a configuration file format (e.g., JSON).

2. **Install ESLint and Prettier plugins:**

   ```bash
   npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
   ```

3. **ESLint and Prettier Configuration:**
   Ensure your `.eslintrc.mjs` file looks like this:

   ```javascript
   export default {
     env: {
       browser: true,
       es2021: true,
     },
     extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
     parser: "@typescript-eslint/parser",
     parserOptions: {
       ecmaVersion: 12,
       sourceType: "module",
     },
     plugins: ["@typescript-eslint", "prettier"],
     rules: {
       "prettier/prettier": "error",
       "@typescript-eslint/no-explicit-any": "off",
     },
   };
   ```

   And your `.prettierrc.json`:

   ```json
   {
     "singleQuote": true,
     "trailingComma": "all"
   }
   ```

### 6. Configure Angular for Standalone Components

When creating new components, ensure to use the `--standalone` flag:

```bash
ng generate component your-component-name --standalone
```

### 7. Set Up the Environment

Ensure your Angular environment variables are configured properly. If needed, set up environment-specific variables in `src/environments/`.

### 8. Version Control with GitHub

Follow these steps to commit and push changes to GitHub:

1. **Add and commit changes:**

   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

### 9. Running the Application

Start the development server:

```bash
ng serve --open
```

The application should automatically open in your browser at `http://localhost:4200/`.

## Project Structure

- **src/app/**: Contains the main application components, services, and models.

  - **about/**: Component for the About page.
  - **car-detail/**: Component for displaying detailed information about a car.
  - **contact/**: Component for the Contact page.
  - **footer/**: Footer component.
  - **header/**: Header component, containing the main navigation.
  - **home/**: Home component that displays the list of car offers.
  - **lease-form/**: Component for the lease application form.
  - **services/**: Contains the API service for fetching offers.
  - **models/**: TypeScript interfaces defining data models (e.g., `offer.model.ts`).

- **public/img/**: Directory for storing images, such as the application logo.

## API Integration

The application integrates with an external API to fetch vehicle leasing offers. The API service (`offer.service.ts`) handles GET requests to retrieve offer data. When the API is inaccessible due to CORS issues or other errors, the application falls back to displaying example data.

- **Example API Call**: `https://your-api-url.com/api/offers/?apikey=YOUR_API_KEY`
- **Fallback Data**: If the API call fails, the application will show example offers for testing purposes.

## Development

### Code Quality

The project uses ESLint and Prettier for code linting and formatting. Ensure that your editor is configured to use these tools. The ESLint and Prettier configurations are found in `.eslintrc.mjs` and `.prettierrc.json`.

### Adding New Components

To add a new component, use Angular's CLI with the `--standalone` flag:

```bash
ng generate component your-component-name --standalone
```

### Handling API Calls

All API interactions are managed through services. To add new API calls, update the appropriate service or create a new service in the `services` directory.

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
