import React from "react"
import {AppBar, Toolbar, Typography} from "@material-ui/core"

export default porps => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit">
        Excercise Database
      </Typography>
    </Toolbar>
  </AppBar>
)
