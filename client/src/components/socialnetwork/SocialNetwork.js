import React from 'react';
 import './socialnetwork.css';


const SocialNetwork = () => {
  const animation = () => {
let navLinks = document.querySelectorAll('.social-network a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', (e) => {
let attrX = e.offsetX - 20;
let attrY = e.offsetY - 13;
link.style.transform = `translate(${attrX}px, ${attrY}px)`;
  })
  link.addEventListener('mouseleave', () => {
link.style.transform = '';
  })
})
}
    return (
        <div className="social-network" >
            <ul className="content">
            <a href="https://www.facebook.com/ecotawseel" target="_black"
            rel="noopener noreferrer" className="hover" onMouseOver={animation}>
              <li><i className="fab fa-facebook-f"></i></li>  
            </a>
           
            <a href="https://www.facebook.com/ecotawseel"  target="_blank"
            rel="noopener noreferrer" className="hover" onMouseOver={animation}>
              <li><i className="fab fa-instagram"></i></li>  
            </a>
           </ul>
        </div>
    );
};

export default SocialNetwork;