import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ListTasks from "./components/ListTasks";
import ListCompleted from "./components/ListCompleted";
import ListWorking from "./components/ListWorking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ListTasks></ListTasks> },
      {path:'working',element:<ListWorking></ListWorking>},
      {path:'completed',element:<ListCompleted></ListCompleted>}
    ]
  }
]);
