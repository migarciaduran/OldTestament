import { useState } from 'react';
import './App.css';
import MarkdownViewer from './components/MarkdownViewer';

// Configuration for the Old Testament studies
const studiesConfig = [
  {
    id: 'isaiah',
    title: 'Studies in Isaiah',
    filename: 'StudiesInIsaiah.md',
    description: 'A comprehensive study of the book of Isaiah'
  },
  // You can add more studies here in the future
];

function App() {
  const [selectedStudy, setSelectedStudy] = useState(studiesConfig[0]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Old Testament Studies</h1>
        <p>Helpful guides for studying the books of the Old Testament</p>
      </header>
      
      <main className="App-main">
        <div className="study-selector">
          <h2>Available Studies</h2>
          <ul>
            {studiesConfig.map(study => (
              <li key={study.id}>
                <button 
                  className={selectedStudy.id === study.id ? 'active' : ''}
                  onClick={() => setSelectedStudy(study)}
                >
                  {study.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="study-content">
          <h2>{selectedStudy.title}</h2>
          <p>{selectedStudy.description}</p>
          <MarkdownViewer filePath={`/${selectedStudy.filename}`} />
        </div>
      </main>
      
      <footer className="App-footer">
        <p>© {new Date().getFullYear()} Old Testament Studies</p>
      </footer>
    </div>
  );
}

export default App;
