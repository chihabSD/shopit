import "../styles/reset.scss";
import store from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Head from "next/head";
let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Shopit</title>
      <meta name="description" content="Shopit shopping online service for all of your need" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </>
  );
}
export default MyApp;

