import React from "react";
import { View } from "react-native";
import Demo from "./src/screens/Demo";

import Home from "./src/screens/Home";


const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <Home />
      {/* <Demo /> */}
    </View>
  );
};

export default App;
