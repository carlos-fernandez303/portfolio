import "./Projects.css";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects projects-row-1">
        <div className="project-item project-item-1">
          <img src="./nba-stats.png" alt="nba-stats thumbnail" />
          <h2>NBA Stats</h2>
          <p>
            Up-to-date statistics for the current NBA season! Includes season
            averages for all current players.
          </p>
          <div className="github-demo-row-1">
            <a
              href="https://github.com/carlos-fernandez303/nba-stats"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="github github-1" icon="akar-icons:github-fill" />
            </a>
            <Button
              className="demo-btn"
              variant="dark"
              href="https://react-nba-stats.netlify.app/"
              target="_blank"
            >
              Live Demo
            </Button>
          </div>
        </div>

        <div className="project-item project-item-2">
          <img src="./netflix-clone.png" alt="netflix-clone thumbnail" />
          <h2>Netflix Clone</h2>
          <p>
            An interactive web application that replicates the Netflix platform.
          </p>
          <div className="github-demo-row-1">
            <a
              href="https://github.com/carlos-fernandez303/react-netflix-clone"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="github github-1" icon="akar-icons:github-fill" />
            </a>
            <Button
              className="demo-btn"
              variant="dark"
              href="https://netflix-clone-b8867.firebaseapp.com/"
              target="_blank"
            >
              Live Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="projects projects-row-2">
        <div className="project-item project-item-3">
          <img
            src="./pg-spatial-analysis.png"
            alt="pg-spatial-analysis thumbnail"
          />
          <h2>Spatial Analysis on Prince George's County Car Accidents</h2>
          <div className="github github-demo-row-1">
            <Button
              className="demo-btn"
              variant="dark"
              href="https://drive.google.com/file/d/1xKmxIyn93-gr-Kb5JvmOLkPVeF28HZFX/view?usp=sharing"
              target="_blank"
            >
              Visit
            </Button>
          </div>
        </div>

        <div className="project-item project-item-4">
          <img src="./raster-quadtree.jpg" alt="raster-quadree thumbnail" />
          <h2>Representing Raster Images through Region Quadtrees</h2>
          <div className="github-demo-row-1">
            <a
              href="https://github.com/carlos-fernandez303/raster-quadtree"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="github github-1" icon="akar-icons:github-fill" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
