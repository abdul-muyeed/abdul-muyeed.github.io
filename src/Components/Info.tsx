import { useState } from "react";
import About from "./About";
import Skill from "./Skill";
import Education from "./Education";


export default function Info() {
  // const navItems = ["About", "Skill", "Education", "Projects", "Achievments", "Contact"];
  const navItems = ["About", "Skill", "Education"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => () => {
    setActiveIndex(index);
  };
  return (
    <>
      <main className="info-container">
      <nav className="navbar">
          <ul className="navbar-list">
            {
              navItems.map((item, index) => (
                <li className="navbar-item" key={item} onClick={handleClick(index)}>
                  <button className={`navbar-link ${activeIndex === index ? 'active' : ''}`} >{item}</button>
                </li>
              ))
            }
            
          </ul>
        </nav>
          {activeIndex === 0 && <About/>}
          {activeIndex === 1 && <Skill/>}
          {activeIndex === 2 && <Education/>}
          {activeIndex === 3 && <About/>}
          {activeIndex === 4 && <About/>}
          {activeIndex === 5 && <About/>}
      </main>
    </>
  );
}
