# Contributing Guidelines

Thank you for your interest in contributing to the Old Testament Studies project! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please create an issue with the following information:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (browser, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:
- A clear, descriptive title
- Detailed explanation of the proposed enhancement
- Any relevant examples or mockups

### Adding or Translating Content

We welcome contributions of new biblical studies or translations:

1. Fork the repository
2. Use the content management script to create content templates:
   ```
   node scripts/content-manager.js create-study --id study-id --title-en "English Title" --title-es "Spanish Title"
   ```
3. Edit the generated Markdown files in the appropriate language directories
4. Run `node scripts/content-manager.js check-translations` to verify all translations exist
5. Submit a pull request

### Code Contributions

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make your changes following our coding standards
4. Test your changes
5. Run linting and formatting checks:
   ```
   npm run lint
   npm run format
   ```
6. Submit a pull request

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Pull Request Process

1. Ensure your code passes all tests and lint checks
2. Update documentation if needed
3. Make sure your PR description clearly describes the changes
4. Link any related issues in the PR description

## Coding Standards

We use ESLint and Prettier to maintain code quality and consistency:

- Follow the TypeScript guidelines in the tsconfig.json
- Use the existing code style throughout the project
- Write meaningful comments for complex logic
- Include appropriate tests for new functionality

## Commit Message Guidelines

Please use clear, descriptive commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests when appropriate

Thank you for contributing!