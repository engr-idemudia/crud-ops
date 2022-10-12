import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
     
    render() { 
        const {onReset, counters, onDelete, onIncrement} = this.props;
           //object destructuring above

        return ( 
            <div>
            <button 
            onClick={onReset}
            className='btn btn-primary btn-sm m-2'>Reset</button>
                { counters.map(counter => ( 
                <Counter 
                    key={counter.id} 
                     //use by react internally
                    onDelete={onDelete}
                    onIncrement={onIncrement} 
                    //  value={counter.value} 
                    //  id={counter.id}
                    
                    counter={counter} 
                />
                 ))}
            </div>
        );
    }
 }
export default Counters;
//   using the counter object as the best approach avoid repetitions 
//  <h4>Counter #{counter.id}</h4> to set dynamically 