import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const names = ["Hello", "Lavanya", "Greshma", "Aditya", "Purushotham", "Sasi Kanth", "Sathwik"];


  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Search Filter Example</h1>
      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "5px", marginBottom: "20px" }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredNames.map((name, index) => (
          <li key={index} style={{ padding: "5px 0" }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
