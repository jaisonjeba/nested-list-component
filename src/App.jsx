import React, { useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    name: "Applications",
    children: [
      {
        id: 2,
        name: "Office",
        children: [
          { id: 3, name: "Word" },
          { id: 4, name: "Excel" },
        ],
      },
      {
        id: 5,
        name: "Utilities",
        children: [{ id: 6, name: "Calculator" }],
      },
    ],
  },
  {
    id: 7,
    name: "Users",
    children: [
      {
        id: 8,
        name: "Guest",
        children: [
          { id: 9, name: "Documents" },
          { id: 10, name: "Downloads" },
        ],
      },
      {
        id: 11,
        name: "Shared",
        children: [{ id: 12, name: "Public Files" }],
      },
    ],
  },
];

const RecursiveList = ({ items, level = 0 }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ul className={`list level-${level}`}>
      {items.map((item) => (
        <li key={item.id} className="list-item">
          <div
            className="list-item-label"
            onClick={() => item.children && toggleExpand(item.id)}
          >
            {item.children && (
              <span className="expand-icon">
                {expanded[item.id] ? "-" : "+"}
              </span>
            )}
            {item.name}
          </div>
          {item.children && expanded[item.id] && (
            <RecursiveList items={item.children} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div className="hierarchy-container">
      <h1>File Hierarchy</h1>
      <RecursiveList items={data} />
    </div>
  );
};

export default App;
