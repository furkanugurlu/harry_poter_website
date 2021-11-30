import { Provider } from "react-redux";
import store from "../reducers/store";

import Layout from "../component/Layout";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};
export default MyApp;
