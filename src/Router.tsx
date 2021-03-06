import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDarkMode: () => void;
  isDark: boolean;
}

function Router({ isDark, toggleDarkMode }: IRouterProps) {
  return (
    <BrowserRouter basename="/react-crypto-tracker">
      <Switch>
        <Route path={"/:coinId"}>
          <Coin isDark={isDark} />
        </Route>
        <Route path={"/"}>
          <Coins toggleDark={toggleDarkMode} isDark={isDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
