import React from "react";
import ReactDOM from "react-dom/client";
import { VirtualList } from "./components/VirtualList";
import "./styles/list.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VirtualList />
  </React.StrictMode>
);