import React from "react"
import {Paper, Tab, Tabs} from "@material-ui/core"

export default porps => (
  <Paper square>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
)
