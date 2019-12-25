import configureStore from "./configureStore";
import App from "./App";
import routes from "./routes";

const routesConfig = routes();

// 暴露给后端渲染用
export { configureStore, App, routesConfig };
