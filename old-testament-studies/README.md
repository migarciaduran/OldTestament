# Old Testament Studies Website

A React-based website for displaying helpful guides, historical timelines, and detailed studies on books of the Old Testament.

![Old Testament Studies Website](https://via.placeholder.com/800x400?text=Old+Testament+Studies+Website)

## Overview

This project provides a clean, interactive interface for studying the Old Testament. It renders Markdown content with proper formatting for:

- Historical timelines
- Theological insights
- Verse-by-verse commentaries
- Cross-references and contextual information

Currently featuring studies on Isaiah and Kings of Judah, with plans to expand to other books of the Old Testament.

## Features

- **Markdown Rendering**: Properly displays formatted content including tables, headings, and lists
- **Multilingual Support**: Content available in English and Spanish with easy language switching
- **Study Selection**: Navigate between different books and studies
- **Responsive Design**: Works well on both desktop and mobile devices
- **Structured Content**: Organized content management for easy maintenance

## Tech Stack

- **Frontend**: React, TypeScript, Material UI
- **State Management**: React Context API
- **Data Fetching**: TanStack Query (React Query)
- **Internationalization**: i18next
- **Styling**: Material UI with CSS-in-JS
- **Formatting and Linting**: ESLint, Prettier

## Project Structure

```
src/
  features/                 # Domain-specific features grouped together
    studies/                # The studies feature
      components/           # UI components specific to studies
      context/              # Context providers for studies
      hooks/                # Custom hooks related to studies
      types/                # TypeScript types for the feature
  components/               # Shared/common components
  i18n/                     # Internationalization setup
    locales/                # Translation files by language
  public/content/           # Structured markdown content
    en/                     # English content
    es/                     # Spanish content
```

## Content Management

This project uses a structured content approach with:

- Markdown files organized by language in the `public/content` directory
- A content registry (`studies-registry.json`) that maps study IDs to their file paths
- Path aliases configured in TypeScript for cleaner imports
- A content management script in the `scripts` directory to help with translation verification and new study creation

## Getting Started

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Development

### Code Style

This project uses ESLint and Prettier for code quality and formatting:

```bash
# Run ESLint
npm run lint

# Run Prettier
npm run format
```

### Adding New Studies

To add a new study:

1. Use the content management script:

```bash
node scripts/content-manager.js create-study --id exodus --title-en "Studies in Exodus" --title-es "Estudios en Éxodo"
```

2. Edit the generated Markdown files in `public/content/en/` and `public/content/es/`
3. Verify translations: `node scripts/content-manager.js check-translations`

## Deployment

This project is deployed using Azure App Service with a CI/CD pipeline configured in GitHub Actions. The workflow in `.github/workflows/azure-static-web-apps.yml` handles:

1. Building the React application
2. Setting up a Node.js server to serve the static files
3. Deploying to Azure App Service

## License

This project is created for educational and personal study purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
