import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.ts";
import SignupModal from "./components/model/SignupModal.tsx";
import SigninModal from "./components/model/SignInModel.tsx";
import { PersistGate } from "redux-persist/integration/react";
import CallModal from "./components/model/CallsModal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ChakraProvider>
        <App />
        <SignupModal />
        <CallModal />
        <SigninModal />
      </ChakraProvider>
    </Provider>
  </PersistGate>
);
