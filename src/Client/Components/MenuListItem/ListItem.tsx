import React from "react";

interface ListItemProps {
  icon: string;
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, text }) => {
  return (
    <div className="list-item-container">
      <img src={icon} alt="icon" className="icon" />
      <span className="text">{text}</span>
    </div>
  );
};

export default ListItem;
