import React, { Component } from 'react'
import { Icon, Header, Button, Grid, Container } from 'semantic-ui-react'
import LinkButton from '../link_button'
import { config } from 'config'

import svgBackgrounds from '../../assets/svg-backgrounds.js'
export default class Masthead extends Component {
  render () {
    return (
      <Grid.Column>
        <div className='dark-area'>
          <Container text>
            <Header as={'h1'} icon inverted>
              <Icon name={'subway'} inverted circular color={config.theme} />
              <Header.Content>
                Aldwych Network
                <Header.Subheader content='The Fast and Reliable Ethereum Side-Chain' />
              </Header.Content>
            </Header>
            <p>Aldwych is a Proof of Authority (PoA) publicly accessible blockchain based on Ethereum Virtual Machine; created and maintained by a consortium of Blockchain developers, to aide the Blockchain developer community.</p>
          </Container>
        </div>
        <LinkButton content='Join Telegram' icon='telegram' to='https://t.me/aldwychnetwork' />
      </Grid.Column>
    )
  }
}
