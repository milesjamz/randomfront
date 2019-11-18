import React from 'react';
import './App.css';

class App extends React.Component {

componentDidMount() {
  console.log('hehe')}

render() {

  const randomNumbah = () => {
    let num = Math.floor(Math.random() * 10 + 1)
      let hmm = Date(Date.now())
        let today = hmm.toString()
    return <li>{today} - {num}</li>
  }

  return (
    <div className="home">
      <span className="yellow">welcome to the random numbers project -=-=-=-=- (c) MJM 2019</span>
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