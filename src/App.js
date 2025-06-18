
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import appStore from './utils/appStore';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
function App() {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
      path:"/",
      element:<MainContainer/>
    },
    {
    path:"watch",
    element:<WatchPage/>
    },
    {
    path:"/demo",
    element:<Demo/>
    }
  ],
}])
  return (
    <Provider store={appStore}>
    <div >
    
    <Header/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
