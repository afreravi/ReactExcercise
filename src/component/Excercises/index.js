import React from "react"
import {Grid} from "@material-ui/core"
import LeftPane from "./LeftPane"
import RightPane from "./RightPane"

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

export default props => (
  <Grid container spacing={2}>
    <Grid item xs>
      <LeftPane style={styles} />
    </Grid>
    <Grid item xs>
      <RightPane style={styles} />
    </Grid>
  </Grid>
)
