import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import ModalLayout from "./components/Layout/modalLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ChakraProvider>
        <ModalLayout />
        <App />
      </ChakraProvider>
    </Provider>
  </PersistGate>
);
