import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import LinkButton from '../link_button'

export default class Faucet extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          2. Start using Aldwych
          <Header.Subheader>Aldwych Faucet Services</Header.Subheader>
        </Header>
        <p>Receive ALD to any EIP-55 based address to start developing dapps on Aldwych Network today.</p>
        <Header as='h4' content='Request ALD by email' inverted />
        <p>To start developing or experience the speed & convenience of Alwych Network, send request below.</p>
        <LinkButton to='mailto:devops@aldwych.network' content='Request Free ALD' basic inverted />
        <Header as='h4' content='Request in Telegram Chat' inverted />
        <p>
          You can also request ALD in the Aldwych Telegram channel.{' '}
          Prominent contributers can receive larger amounts of ALD for larger projects.
        </p>
        <LinkButton to='https://t.me/AldwychNetwork' content='Request ALD in Telegram' basic inverted />
        <Header as='h4' content='Alternative Faucets' inverted />
        <p>Automated Faucet Services will be available for use soon! For now, please request ALD using any method above.</p>
      </Grid.Column>
    )
  }
}
