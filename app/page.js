'use client'

import Sidebar from "./component/sidebar";
import Timer from "./component/timer";
import Controls from "./component/controls";
import { AppProvider } from "./context/appContext";

import { useEffect, useRef, useState } from "react";


export default function Home() {

  return (
    <AppProvider>
      <div className="mainContainer">
        <Sidebar/>
        <Timer/>
        <Controls/>
      </div>
    </AppProvider>
  );
}