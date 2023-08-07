import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastBannerProvider, ToastBannerPresenter } from "react-native-toast-banner";
import { SplashtagContext, useTheme } from "./components";
import "./i18n";
import { ok } from "./utils/promise";
import { MainView } from "./views";

const App = () => {
  const theme = useTheme();

  const [ready, setReady] = useState(false);
  const [splatfont, setSplatfont] = useState(false);

  useEffect(() => {
    ok(
      Font.loadAsync({
        Lucide: require("lucide-static/font/lucide.ttf"),
        MPLUSRounded1cExtraBold: require("@expo-google-fonts/m-plus-rounded-1c/MPLUSRounded1c_800ExtraBold.ttf"),
      })
    ).then(() => {
      setReady(true);
    });
    ok(
      Font.loadAsync({
        Splatfont:
          "https://cdn.jsdelivr.net/gh/frozenpandaman/frozenpandaman.github.io/Splatoon1.otf",
      })
    ).then((res) => {
      setSplatfont(res);
    });
  });

  return (
    <SafeAreaProvider style={theme.backgroundStyle}>
      <ToastBannerProvider>
        <SplashtagContext.Provider value={{ splatfont }}>
          <StatusBar style={theme.colorScheme === "light" ? "dark" : "light"} />
          {ready && <MainView />}
          <ToastBannerPresenter />
        </SplashtagContext.Provider>
      </ToastBannerProvider>
    </SafeAreaProvider>
  );
};

export default App;
