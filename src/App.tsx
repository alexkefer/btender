import { useCallback, useEffect, useState } from "@lynx-js/react";
import Header from "./components/Header.tsx";
import "./App.css";
export function App(props: { onRender?: () => void }) {
  return (
    <view>
      <view className="container" />
      <view className="App">
        <Header />
        <view className="Content">
          <text className="Description">Tap the logo and have fun!</text>
        </view>
      </view>
    </view>
  );
}
