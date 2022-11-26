import './App.css';

function App() {
  
  const firstName = "Toto";
  const lastname = "Bright";

  const getfullName = () => {
    return `${firstName} ${lastname}`;
  }

  return (
    <div className="App">
      <h3>FullName: {getfullName()}</h3>
      <p>Age: 23</p>
      <p>Job: Anonymous</p>

      <input placeholder='Enter Data' />
    </div>

  );
}

export default App;
