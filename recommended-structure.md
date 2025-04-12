# Recommended Project Structure

```
src/
  features/                       # Group code by domain/feature
    studies/                      # Feature: Biblical studies
      components/                 # UI components for this feature
        StudyList/                # Each component in its own directory
          index.tsx               # Component implementation
          StudyList.module.css    # Component-specific styles (scoped)
          StudyList.test.tsx      # Component tests
        StudyViewer/
          index.tsx
          StudyViewer.module.css
          StudyViewer.test.tsx
          components/             # Sub-components (if needed)
            StudyHeader.tsx
      hooks/                     # Custom hooks for this feature
        useStudyContent.ts
        useStudyNavigation.ts
      api/                       # API/data fetching for this feature
        studiesApi.ts
      utils/                     # Feature-specific utilities
        studyFormatters.ts
      types/                     # TypeScript types for this feature
        Study.types.ts
      context/                   # Feature-specific context providers
        StudiesContext.tsx
    settings/                    # Another feature area
      components/
      hooks/
      api/
  
  shared/                        # Shared/common code
    components/                  # Reusable components
      Button/
      Card/
      Modal/
    hooks/                       # Shared hooks
      useLocalStorage.ts
      useTranslation.ts
    utils/                       # Shared utilities
      formatting.ts
    api/                         # API client setup, request helpers
      client.ts
    types/                       # Shared TypeScript types
      common.types.ts
    context/                     # App-wide context providers
      AppContext.tsx
  
  assets/                        # Static assets
    images/
    icons/
    fonts/
  
  styles/                        # Global styles only
    variables.css                # CSS variables, theming
    global.css                   # Global styles
    mixins.scss                  # If using Sass
  
  config/                        # App configuration
    routes.ts                    # Route definitions
    i18n.ts                      # i18n configuration
  
  App.tsx                        # Root App component
  index.tsx                      # Entry point
```

This structure is designed to scale with your application while keeping related code together.
