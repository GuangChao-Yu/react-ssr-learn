import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Tabs, { Tab } from 'material-ui/Tabs'
// import Button from 'material-ui/Button'

import { AppState } from '../../store/app-state'
import Container from '../layout/container'
import TopicListItem from './list-item'

@inject('appState')
@observer
export default class TopicList extends React.Component {
  propTypes = {
    appState: PropTypes.instanceOf(AppState)
  }
  constructor() {
    super()
    this.state = {
      tabIndex: 0
    }
    this.changeTab = this.changeTab.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
  }

  componentDidMount() {
    // do something here
  }

  asyncBootstrap() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  changeTab(e, index) {
    this.setState({
      tabIndex: index
    })
  }

  /* eslint-disable */
  listItemClick() {}
  /* eslint-enable */

  render() {
    const tabData = ['全部', '分享', '工作', '问答', '精品', '测试']
    const topic = {
      title: 'title',
      username: 'Yugc',
      reply_conut: 20,
      visit_count: 30,
      create_at: '2018-03-02',
      tab: '分享'
    }
    const { tabIndex } = this.state
    return (
      <Container>
        <Helmet>
          <title>设置的标题</title>
          <meta name="description" content="this is description" />
        </Helmet>
        <Tabs value={tabIndex} onChange={this.changeTab}>
          {tabData.map(item => {
            return <Tab label={item} />
          })}
        </Tabs>
        <TopicListItem onClick={this.listItemClick} topic={topic} />
      </Container>
    )
  }
}
