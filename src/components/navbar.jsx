import React, { Component } from 'react';

//Stateless Functional Component sfc, by removing the class

const Navbar = (props) => {
    //class Navbar extends Component {  
        //render () {   }
            // }
        return (
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar <span className='badge badge-pill badge-secondary'>
                        {props.totalCounters}</span>
                    </a>
                </div>
            </nav>
        );
    }

 
export default Navbar;