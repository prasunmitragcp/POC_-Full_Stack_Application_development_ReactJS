import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


function App() {

  return (
    <div>
      <h1>This is my React JS application POC</h1>
      <p>This is my ReactJSprogram</p>
      <p>I am creating a POC on entair web development application</p>
      <Header name="Prasun Mitra" title="First Card"/>
      <hr/>
      <Header name="Mr. Mitra" title="Second Card"/>
      <hr/>
      <Header name="Mr. P Mitra" title="Last Card" />
      <hr/>
      <Header name="Mr. Pinku Mitra" title="Footer" />
    </div>
    );
}

export default App;
