import "./scp.json"
function SCP({ id, containment, description, image, class: type }){
    
    return(
    <div>
        <h1>Item#:{selectedSCP.item}</h1>
        <h2>Class:{selectedSCP.type}</h2>
        <h3>How to Contain {selectedSCP.item}:</h3>
        <p>{selectedSCP.containment}</p>
        <h3>Description:</h3>
        <p>{selectedSCP.description}</p>
        <img src={selectedSCP.image} alt={selectedSCP.item}></img>
    </div>);
}

export default SCP;