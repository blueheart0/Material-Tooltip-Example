import { Box, createMuiTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import React, { useContext } from "react";
import "./App.css";
import CCTooltip from "./Component";
import { AppContext } from "./Context/AppContext";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Box>
        <Grid container justify={"center"}>
          <Grid item>
            <CCTooltip
              open={true}
              title={<span style={{ color: "red" }}> TEST TOOLTIP!!!</span>}
            >
              <img src={logo} width={200} height={200} alt={""} />
            </CCTooltip>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
const WrapApp = props => {
  const { appContext } = useContext(AppContext);
  console.log(appContext);
  return (
    <ThemeProvider theme={createMuiTheme(appContext.theme)}>
      <App {...props} />
    </ThemeProvider>
  );
};

export default WrapApp;
