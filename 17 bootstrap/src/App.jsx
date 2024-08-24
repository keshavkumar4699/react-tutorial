import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div class="d-flex gap-2 justify-content-center py-5">
        <button class="btn btn-primary rounded-pill px-3" type="button">
          Primary
        </button>
        <button class="btn btn-secondary rounded-pill px-3" type="button">
          Secondary
        </button>
        <button class="btn btn-success rounded-pill px-3" type="button">
          Success
        </button>
        <button class="btn btn-danger rounded-pill px-3" type="button">
          Danger
        </button>
        <button class="btn btn-warning rounded-pill px-3" type="button">
          Warning
        </button>
        <button class="btn btn-info rounded-pill px-3" type="button">
          Info
        </button>
        <button class="btn btn-light rounded-pill px-3" type="button">
          Light
        </button>
        <button class="btn btn-dark rounded-pill px-3" type="button">
          Dark
        </button>
        <button class="btn btn-link rounded-pill px-3" type="button">
          Link
        </button>
      </div>
    </div>
  );
}

export default App;
