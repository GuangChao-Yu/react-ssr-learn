import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  }
}

class MainAppBar extends React.Component {
  constructor() {
    super()
    this.onHomeIconClick = this.onHomeIconClick.bind(this)
    this.createButtonClick = this.createButtonClick.bind(this)
    this.loginButtonClick = this.loginButtonClick.bind(this)
  }
  /* eslint-disable */
  onHomeIconClick() {}
  createButtonClick() {}
  loginButtonClick() {}
  /* eslint-enable */
  render() {
    const { classes } = this.props
    return (
      <div>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <IconButton color="contrast" onClick={this.onHomeIconClick}>
              <HomeIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              JNode
            </Typography>
            <Button
              raiser="true"
              color="accent"
              onClick={this.createButtonClick}
            >
              新建话题
            </Button>
            <Button color="contrast" onClick={this.loginButtonClick}>
              登录
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainAppBar)
