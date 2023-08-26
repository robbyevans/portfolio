import React, { useState } from "react";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div>
        {isOpen && (
          <div className="menu-modal">
            <div className="menu-content">
              <button className="menu-close" onClick={() => setIsOpen(false)}>
                X
              </button>
              <ul className="menu-list">
                <li>
                  <a href="#socials">Socials</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#blogs">Blogs</a>
                </li>
                <li>
                  <a href="#navigation">Navigation</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
