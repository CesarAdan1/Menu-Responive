import React, { Component } from 'react';

class Header extends Component {

	productsFilter = () => {
		console.log("damian");
		const nav__mobil = document.querySelector(".nav__mobil") 
		nav__mobil.classList.toggle("nav__mobil__visible");
	}

  render() {
    //console.log(this.props.category)
    
    //const url =  '/product/'+ this.props.idProduct
    return (
      <div className='nav'>
      <h1 onClick={ () => { this.productsFilter()  } } className='titulo'>Esto es el icono de barras</h1>
        <div className='nav__menu'>

        	<ul>
        		<li>Menu 1</li>
        		<li>Menu 2</li>
        		<li>Menu 3</li>
        	</ul>
        
        </div>
        <div className='nav__mobil '>
        	<ul className=''>
        		<li>Menu 1</li>
        		<li>Menu 2</li>
        		<li>Menu 3</li>
        	</ul>
        </div>
      </div>
    );
  }
}

export default Header;