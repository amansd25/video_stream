import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from"./utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]

}])


function App() {
  return (
    <Provider store ={store}>
    <div> 
    <Head/>
    <RouterProvider router={appRouter}/>
    {/* {
      head
      body
       sidebar
       menuitems
       maincontainer
       Buttonlist
       videocontainer
       videocard
    } */}
    </div>
    </Provider>
  
  );
}

export default App;
