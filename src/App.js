import React from 'react';
import './App.css';

class App extends React.Component {

componentDidMount() {
  alert('very nice')
}

render() {

  const randomNumbah = () => {
    let num = Math.floor(Math.random() * 10 + 1)
    return <li>{num}</li>
  }

  return (
    <div className="home">
      welcome to the random numbers project, courtesy of mjm 2019
      <br/><br/>
    <h2>Current Number</h2>
    {randomNumbah()}
    <br/><br/>
    <h3>Past Numbers</h3>
    <ul>
    {randomNumbah()}
    {randomNumbah()}
    {randomNumbah()}
    </ul>
    </div>
  );
  }
}
export default App;