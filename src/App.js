import React from "react";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BrowsePage from "./components/BrowsePage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ChatGptPage from "./components/ChatGptPage";
import MovieDetailsPage from "./components/MovieDetailsPage";

function App() {

  const Router = createBrowserRouter([
    // {
    //   path:"/",
    //   element:<Body/>
    // }, 
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/chatGpt",
      element:<ChatGptPage/>
    },
    {
      path:"/movieDetails/:movieId",
      element:<MovieDetailsPage/>
    }
  ])

  return (
    <Provider store={appStore}>
        <div>
            <RouterProvider router={Router}/>
        </div>
    </Provider>
  );
}

export default App;
