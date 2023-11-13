

import Intro from '../pages/Intro'



interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}


const routes: RouteType[] = [
    {
      path: "",
      component: Intro,
      name: "Intro Screen",
      protected: false,
    },







  ]

  export default routes