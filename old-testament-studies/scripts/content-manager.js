#!/usr/bin/env node

/**
 * Content Management Utility Script
 * 
 * This script helps manage multilingual Markdown content for the Old Testament Studies website.
 * 
 * Features:
 * - Check for missing translations
 * - Create new study templates in all supported languages
 * - Update the content registry
 * 
 * Usage:
 *   node content-manager.js check-translations
 *   node content-manager.js create-study --id <study-id> --title-en "English Title" --title-es "Spanish Title"
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const existsAsync = promisify(fs.exists);
const mkdirAsync = promisify(fs.mkdir);

// Configuration
const CONTENT_DIR = path.join(__dirname, '..', 'public', 'content');
const REGISTRY_PATH = path.join(CONTENT_DIR, 'studies-registry.json');
const SUPPORTED_LANGUAGES = ['en', 'es'];

// Command line argument parsing
const args = process.argv.slice(2);
const command = args[0];

/**
 * Check if all studies have translations in all supported languages
 */
async function checkTranslations() {
  try {
    const registry = JSON.parse(await readFileAsync(REGISTRY_PATH, 'utf8'));
    const studies = Object.values(registry.studies);
    
    console.log('Checking translations for all studies...\n');
    
    let missingCount = 0;
    
    for (const study of studies) {
      console.log(`Study: ${study.id} (${study.titleKey})`);
      
      for (const lang of SUPPORTED_LANGUAGES) {
        const filePath = path.join(CONTENT_DIR, lang, study.filePath);
        const exists = await existsAsync(filePath);
        
        if (exists) {
          console.log(`  ✓ ${lang.toUpperCase()}: ${filePath}`);
        } else {
          console.log(`  ✗ ${lang.toUpperCase()}: Missing translation at ${filePath}`);
          missingCount++;
        }
      }
      
      console.log('');
    }
    
    if (missingCount === 0) {
      console.log('All translations are complete!');
    } else {
      console.log(`Found ${missingCount} missing translation(s).`);
    }
  } catch (error) {
    console.error('Error checking translations:', error);
  }
}

/**
 * Create a new study template in all supported languages
 */
async function createStudy() {
  try {
    // Parse arguments
    const idIndex = args.indexOf('--id');
    const titleEnIndex = args.indexOf('--title-en');
    const titleEsIndex = args.indexOf('--title-es');
    
    if (idIndex === -1 || titleEnIndex === -1 || titleEsIndex === -1) {
      console.error('Missing required parameters. Usage:');
      console.error('  node content-manager.js create-study --id <study-id> --title-en "English Title" --title-es "Spanish Title"');
      return;
    }
    
    const studyId = args[idIndex + 1];
    const titleEn = args[titleEnIndex + 1];
    const titleEs = args[titleEsIndex + 1];
    
    // Create file paths
    const filePathEn = path.join(CONTENT_DIR, 'en', `${studyId}.md`);
    const filePathEs = path.join(CONTENT_DIR, 'es', `${studyId}.md`);
    
    // Check if study already exists
    if (await existsAsync(filePathEn) || await existsAsync(filePathEs)) {
      console.error(`A study with ID "${studyId}" already exists.`);
      return;
    }
    
    // Create English template
    const enTemplate = `# ${titleEn}

## Introduction

This is a template for a new study on ${titleEn}. Replace this text with your study content.

## Sections

Add your sections here.

### Section 1

Content for section 1.

### Section 2

Content for section 2.
`;
    
    // Create Spanish template
    const esTemplate = `# ${titleEs}

## Introducción

Esta es una plantilla para un nuevo estudio sobre ${titleEs}. Reemplace este texto con el contenido de su estudio.

## Secciones

Agregue sus secciones aquí.

### Sección 1

Contenido para la sección 1.

### Sección 2

Contenido para la sección 2.
`;
    
    // Write the templates to files
    await writeFileAsync(filePathEn, enTemplate, 'utf8');
    await writeFileAsync(filePathEs, esTemplate, 'utf8');
    
    // Update registry
    const registry = JSON.parse(await readFileAsync(REGISTRY_PATH, 'utf8'));
    
    registry.studies[studyId] = {
      id: studyId,
      titleKey: `studies.${studyId}.title`,
      descriptionKey: `studies.${studyId}.description`,
      filePath: `${studyId}.md`
    };
    
    await writeFileAsync(REGISTRY_PATH, JSON.stringify(registry, null, 2), 'utf8');
    
    console.log(`Study "${studyId}" created successfully!`);
    console.log(`English template: ${filePathEn}`);
    console.log(`Spanish template: ${filePathEs}`);
    console.log('\nRemember to add the following to your translation files:');
    console.log(`
"studies": {
  "${studyId}": {
    "title": "${titleEn}",
    "description": "Add a description here"
  }
}`);
  } catch (error) {
    console.error('Error creating study:', error);
  }
}

// Command router
if (command === 'check-translations') {
  checkTranslations();
} else if (command === 'create-study') {
  createStudy();
} else {
  console.log('Old Testament Studies Content Manager');
  console.log('\nAvailable commands:');
  console.log('  check-translations    Check for missing translations');
  console.log('  create-study          Create a new study in all languages');
  console.log('\nUsage examples:');
  console.log('  node content-manager.js check-translations');
  console.log('  node content-manager.js create-study --id exodus --title-en "Studies in Exodus" --title-es "Estudios en Éxodo"');
}