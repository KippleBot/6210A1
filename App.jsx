import React, {useState, useEffect} from 'react';
import Nav from './Nav.jsx';
import SCP from './SCP1.jsx';
import "./style.css"

async function fetchData() {
  try {
    const response = await fetch("./scp.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return console.log(data);
  } catch (error) {
    return console.error('Error fetching data:', error);
  }
}




function App() {
    const [scpData, setSCP] = useState([]);
    const [selectedSCP, setSelectedSCP] = useState(null);

  
    useEffect(
    ()=>{
        fetchData().then(data => setSCP(data));
    }, []);
return (
<div>
        <Nav scp={scpData} onSelect={setSelectedSCP} />
        <h1>SCP Website</h1>
        {selectedSCP && <SCP selectedSCP={selectedSCP} />}
</div>
);
}
export default App;