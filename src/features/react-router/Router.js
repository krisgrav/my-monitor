import * as React from "react";
import { ReactDOM } from "react";

import {
    createBrowserRouter,
  } from "react-router-dom";

import { RootLayout } from "./Components/RootLayout";
import { HomePage } from "../../pages/HomePage";
import { RouterError } from "./Components/ErrorLayout";
import { DesignSystemPage } from "../../pages/DesignSystemPage";

export const Router = createBrowserRouter(
    [
        {
            path:'',
            element: <RootLayout/>,
            errorElement: <RouterError />,
            children:[
                {
                    index:true,
                    element: <HomePage />
                },
                {
                    path:"designsystem",
                    element: <DesignSystemPage />
                }
            ]
        }
        
    ]
)
