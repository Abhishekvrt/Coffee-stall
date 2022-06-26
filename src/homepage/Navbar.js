import React from 'react'

export default function Navbar() {
  return (
    <header>
    <nav>
    <input id="nav-toggle" type="checkbox"/>
    <div class="logo">Strom<strong>In a coffeepot</strong></div>
    <ul class="links">
      <li><a href="#Services">Contact Us</a></li>
      <li><a href="#Contact Us">Get Direction</a></li>

    </ul>
    
    
    <label for="nav-toggle" class="icon-burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
  </nav>
  
  </header>
  )
}
