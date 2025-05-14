'use client'

import Sidebar from "./component/sidebar";
import Display from "./component/display";
import Controls from "./component/controls";
import { AppProvider } from "./context/appContext";

import { useEffect, useRef, useState } from "react";


export default function Home() {

  return (
    <AppProvider>
      <div className="mainContainer">
        <Sidebar/>
        <Display/>
        <Controls/>
      </div>
    </AppProvider>
  );
}