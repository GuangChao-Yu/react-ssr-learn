import React from 'react'
import PropTypes from 'prop-types'

import ListItem from 'material-ui/List/ListItem'
import ListItemAvatar from 'material-ui/List/ListItemAvatar'
import ListItemText from 'material-ui/List/ListItemText'
// import Avatar from 'material-ui/Avatar'
import IconHome from 'material-ui-icons/Home'
import { withStyles } from 'material-ui/styles'
import { topicPrimaryStyle, topicSecondaryStyles } from './style'

const Primary = ({ classes, topic }) => {
  return (
    <div className={classes.root}>
      <span className={classes.tab}>{topic.tab}</span>
      <span className={classes.title}>{topic.title}</span>
    </div>
  )
}

const Secondary = ({ classes, topic }) => {
  return (
    <div className={classes.root}>
      <span className={classes.username}>{topic.username}</span>
      <span className={classes.count}>
        <span className={classes.accentColor}>{topic.reply_conut}</span>
        <span>/</span>
        <span>{topic.visit_count}</span>
      </span>
      <span>创建时间:{topic.create_at}</span>
    </div>
  )
}

const STyledPrimary = withStyles(topicPrimaryStyle)(Primary)
const SecondaryStyles = withStyles(topicSecondaryStyles)(Secondary)

Primary.PropTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

Secondary.PropTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

const TopicListItem = ({ onClick, topic }) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      {/* <Avatar src={topic.image} /> */}
      <IconHome />
    </ListItemAvatar>
    <ListItemText
      primary={<STyledPrimary topic={topic} />}
      secondary={<SecondaryStyles topic={topic} />}
    />
  </ListItem>
)

TopicListItem.PropTypes = {
  onClick: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired
}

export default TopicListItem
