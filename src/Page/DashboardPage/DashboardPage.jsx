import { useState } from "react";

import "./DashboardPage.css";

import NavBar from "./../../Component/NavBar/NavBar.component";
import RecentProjectCard from "./../../Component/RecentProjectCard/RecentProjectCard.component";
import DashboardMetaCard from "./UtilsComponents/DashboardMetaCard/DashboardMetaCard.util";

const DashboardPage = () => {
  const [metaOption, setMetaOption] = useState(0);

  const meta = [
    {
      title: "user login at backend",
      board: "fron-end",
      projTitle: "bug - tracking",
      activity: "Updated",
      people: "aditya",
      type: "work",
    },
    {
      title: "user login at backend",
      board: "fron-end",
      projTitle: "bug - tracking",
      activity: "Updated",
      people: "aditya",
      type: "work",
    },
    {
      title: "user login at backend",
      board: "fron-end",
      projTitle: "bug - tracking",
      activity: "Updated",
      people: "aditya",
      type: "assign",
    },
  ];
  const prj = [
    {
      title: "bug",
      type: "Software development",
      issues: 2,
      boards: ["front-end", "back-end"],
    },
    {
      title: "myntra clone",
      type: "Software development",
      issues: 12,
      boards: ["front-end", "back-end"],
    },
    {
      title: "myntra clone",
      type: "Software development",
      issues: 2,
      boards: ["front-end", "back-end"],
    },
  ];
  return (
    <div className="dashboard-container">
      <NavBar />
      <div className="dashboard-content">
        <div className="dashboard-title ">Your Work</div>
        <div className="dashboard-recent-projects">
          <div
            className="util-title"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Recent projects
            <button className="view-proj-btn">View all projects</button>
          </div>
          <div className="recent-projects-container">
            {prj.map((obj) => {
              return (
                <RecentProjectCard
                  title={obj.title}
                  type={obj.type}
                  issues={obj.issues}
                  boards={obj.boards}
                />
              );
            })}
          </div>
        </div>

        <div className="dashboard-meta">
          <div className="meta-options" style={{ margin: "20px 0" }}>
            <span
              className={metaOption === 0 ? "active-meta-option" : ""}
              onClick={() => setMetaOption(0)}
            >
              Worked on
            </span>
            <span
              className={metaOption === 1 ? "active-meta-option" : ""}
              onClick={() => setMetaOption(1)}
            >
              Assigned to me
            </span>
          </div>
          <div className="meta-content">
            <span className="util-title">today</span>
            {metaOption === 0
              ? meta
                  .filter((ele) => ele.type === "work")
                  .map((obj) => {
                    return (
                      <DashboardMetaCard
                        title={obj.title}
                        board={obj.board}
                        projTitle={obj.projTitle}
                        activity={obj.activity}
                        people={obj.people}
                        type={obj.type}
                      />
                    );
                  })
              : meta
                  .filter((ele) => ele.type === "assign")
                  .map((obj) => {
                    return (
                      <DashboardMetaCard
                        title={obj.title}
                        board={obj.board}
                        projTitle={obj.projTitle}
                        activity={obj.activity}
                        people={obj.people}
                        type={obj.type}
                      />
                    );
                  })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
