import React from "react";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BrowsePage from "./components/BrowsePage";

function App() {

  const Router = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/browse",
      element:<BrowsePage/>
    }
  ])

  return (
    <div>
        <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
