import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface RouterProps {
  toggleDarkMode: () => void;
  isDark: boolean;
}

function Router({ isDark, toggleDarkMode }: RouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/react-crypto-tracker/:coinId"}>
          <Coin isDark={isDark} />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/"}>
          <Coins toggleDark={toggleDarkMode} isDark={isDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
