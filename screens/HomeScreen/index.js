import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen/index.js";

import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";


const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        LucyChat: { screen: MainScreenNavigator }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;
