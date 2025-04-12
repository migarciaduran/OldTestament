# Old Testament Studies Project

This repository contains resources and a web application for studying books of the Old Testament.

## Repository Structure

- **[old-testament-studies/](./old-testament-studies/)**: React web application for displaying Old Testament study guides
- **Markdown Files**: Source content for biblical studies

## Web Application

The main component of this repository is a React-based website that renders Markdown files containing detailed studies of Old Testament books. The application provides a user-friendly interface for navigating through different studies.

### Features

- Interactive display of Old Testament study materials
- Support for tables, lists, and other Markdown elements
- Easily expandable to include studies of additional books

## Getting Started

To run the web application:

1. Navigate to the application directory: `cd old-testament-studies`
2. Install dependencies: `npm install`
3. Start the application: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contributing

To add new study materials:

1. Create Markdown files for your study content
2. Place them in the `old-testament-studies/public/` directory
3. Update the studies configuration in `App.js` to include your new study

## License

This project is created for educational and personal study purposes.

## Using Material-UI

This project uses Material-UI (MUI) for styling and components. To use Material-UI in your components:

1. Import the required MUI components and styles in your files. For example:

   ```tsx
   import Button from '@mui/material/Button';
   import Typography from '@mui/material/Typography';
   ```

2. Refer to the [Material-UI documentation](https://mui.com/) for detailed usage and examples.

3. Customize the theme by wrapping your application in a `ThemeProvider` and providing a custom theme if needed.
