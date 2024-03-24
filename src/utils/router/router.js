import NotFound from "../../pages/404/NotFound.js";
import Home from "../../pages/Home/Home.js";
import { JSRouter } from "./class/router.class.js";

export default function Router(DOM) {

const router = new JSRouter([
    {
      path: '/',
      element: () => {
          Home(DOM)
      },
      errorElement: ()=>{},
    },
    {
        path: '*',
        element: () => {
            NotFound(DOM)
        }
    }
  ]);
  router.navigate('');
}