import React from "react";
import "./App.css";
import "./index.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
    return (
        <div className="App">
            {/* Sidebar */}
            <Sidebar />

            {/* Feed */}
            <Feed />

            {/* Widgets */}
            <Widgets />
        </div>
    );
}

export default App;
