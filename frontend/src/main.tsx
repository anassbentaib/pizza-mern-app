import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.ts";
import SignupModal from "./components/model/SignupModal.tsx";
import SigninModal from "./components/model/SignInModel.tsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ChakraProvider>
        <App />
        <SignupModal />
        <SigninModal />
      </ChakraProvider>
    </Provider>
  </PersistGate>
);
