
import './App.css';
import { useState } from 'react';
import './components/FormC.css'; 
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes,useNavigate} from 'react-router-dom';
import Result from './components/Result';


import FormComponent from './components/FormC';
import ResultComponent from './components/Result';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1>Student Result Calculator</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      {formData && <ResultComponent formData={formData} />}
    </div>
  );
}

export default App;


