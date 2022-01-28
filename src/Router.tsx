import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface RouterProps {
  toggleDarkMode: () => void;
  isDark: boolean;
}

function Router({ isDark, toggleDarkMode }: RouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
