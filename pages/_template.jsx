import React, { PropTypes, Component } from 'react'

import '../semantic/dist/semantic.css'

import SideMenu from '../components/side_menu'
import Footer from '../components/footer'

export default class IndexTemplate extends Component {
  render () {
    return (
      <SideMenu>
        {this.props.children}
        <Footer>
          <p>This is a test!!!!!!!!</p>
        </Footer>
      </SideMenu>
    )
  }
}

IndexTemplate.propTypes = {
  children: PropTypes.object
}
