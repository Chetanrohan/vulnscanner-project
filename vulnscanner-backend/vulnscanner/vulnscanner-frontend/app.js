import React, { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);

  const handleScan = () => {
    fetch('http://localhost:8080/api/v1/scan')
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Java Vulnerability Scanner</h1>
      <button
        onClick={handleScan}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Run Scan
      </button>
      <ul>
        {results.map((dep, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <strong>{dep.name}</strong> v{dep.version} — CVE: {dep.cve} (CVSS: {dep.cvss})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
