import { makeStyles, Tooltip } from "@material-ui/core";
import React, { forwardRef } from "react";

const useStyle = makeStyles(
  theme => ({
    root: {},
    tooltip: {
      borderRadius: "8px",
      boxShadow:
        "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
      backgroundColor: "rgba(0, 0, 0, 0.54)"
    }
  }),
  { name: "CCToolTip" }
);

const CCTooltip = forwardRef((props, ref) => {
  const { children, ...others } = props;
  const classes = useStyle();
  return (
    <Tooltip ref={ref} {...others} classes={{ tooltip: classes.tooltip }}>
      {props.children}
    </Tooltip>
  );
});

export default CCTooltip;
