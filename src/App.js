import { Box, createMuiTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import React, { forwardRef, useContext } from "react";
import "./App.css";
import CCTooltip from "./Component";
import { AppContext } from "./Context/AppContext";
import logo from "./logo.svg";

const Message = forwardRef((props, ref) => {
  return (
    <Box>
      <Grid container direction={"column"}>
        <Grid item>김가나 (e4501230534)</Grid>
        <Grid item>01045436456</Grid>
        <Grid item>아이싱</Grid>
        <Grid item>금일 필히 아이싱!!!</Grid>
      </Grid>
    </Box>
  );
});

const App = () => {
  return (
    <div className="App">
      <Box>
        <Grid container justify={"center"}>
          <Grid item>
            <CCTooltip title={<Message />}>
              <img src={logo} width={200} height={200} alt={""} />
            </CCTooltip>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
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
