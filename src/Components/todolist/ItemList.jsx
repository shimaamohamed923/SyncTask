import React, { useState } from "react";
import TodoItem from "./Item";

export default function ItemList({ list, deleteTask, handleEdit, handleCheckboxChange
}) {
  const [filter, setFilter] = useState("all");
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabClick = (index) => {
    setSelectedTab(index);
    setFilter(index === 0 ? "all" : index === 1 ? "active" : "completed");
  }
  return (
    <div className="container">
      <div className="m-auto col-md-5 tabs">
        <div className="nav nav-pills border-bottom ">
          <div className={`nav-link ${selectedTab === 0 ? "active" : ""}`} onClick={() => handleTabClick(0)}>
            All
          </div>
          <div className={`nav-link ${selectedTab === 1 ? "active" : ""}`} onClick={() => handleTabClick(1)}>
            Active
          </div>
          <div className={`nav-link ${selectedTab === 2 ? "active" : ""}`} onClick={() => handleTabClick(2)}>
            Completed
          </div>
        </div>
      </div>
      <div className="m-auto col-md-5 list">
        {filter === "completed" && (
          <ul className="p-0">
            {list.length > 0
              ? list
                .filter((task) => task.isChecked === true)
                .map((task) => (
                  <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    handleEdit={handleEdit}
                    isChecked={task.isChecked}
                    handleCheckboxChange={handleCheckboxChange}

                  />
                ))
              : "Not Found Tasks"}
          </ul>
        )}
        {filter === "active" && (
          <ul className="p-0">
            {list.length > 0
              ? list
                .filter((task) => task.isChecked === false)
                .map((task) => (
                  <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    handleEdit={handleEdit}
                    isChecked={task.isChecked}
                    handleCheckboxChange={handleCheckboxChange}


                  />
                ))
              : "Not Found Tasks"}
          </ul>
        )}
        {filter === "all" && (
          <ul className="p-0">
            {list.length > 0
              ? list.map((task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  handleEdit={handleEdit}
                  isChecked={task.isChecked}
                  handleCheckboxChange={handleCheckboxChange}

                />
              ))
              : "Not Found Tasks"}
          </ul>
        )}
      </div>
    </div>
  );
}
