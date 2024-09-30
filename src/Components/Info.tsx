import { useState } from "react";


export default function Info() {
  const navItems = ["Home", "Skill", "Education", "Projects", "Achievments", "Contact"];
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
                <li className="navbar-item" key={item}>
                  <button className={`navbar-link ${activeIndex === index ? 'active' : ''}`} onClick={handleClick(index)}>{item}</button>
                </li>
              ))
            }
            
          </ul>
        </nav>
      </main>
    </>
  );
}
