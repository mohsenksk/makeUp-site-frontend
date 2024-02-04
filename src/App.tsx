
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import RootContainer from "./global/RootContainer";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
