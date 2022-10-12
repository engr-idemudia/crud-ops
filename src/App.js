import React, {Component} from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

import './App.css';

class App extends Component{

  state = { 
    counters: [
        { id: 1, value: 97 },
        { id: 2, value: 8 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 }
    ]
 };
 handleIncrement = counter => { 
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value ++;
    this.setState({counters});
 };

 handleDelete = (counterid) => {
    // console.log( " to be deleted !!", counterid);
    const counters = this.state.counters.filter(e => e.id !== counterid);
    this.setState({counters: counters});
 };
 handleReset = () => {
     let counters = this.state.counters.map( (e) => {
            e.value = 0;
            return e;
     });
     this.setState( { counters });   
 };

  render() {  
  return (
    <div>
      <Navbar totalCounters={this.state.counters.filter(e => e.value > 0).length}/>
      <main className='container'></main>
      <Counters
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      />
    </div>
  );
}
}

export default App;
