import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import LinkButton from '../link_button'

export default class Faucet extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          2. Start using Aldwych
          <Header.Subheader>Kovan Faucet Services</Header.Subheader>
        </Header>
        <p>Receive ALD to any EIP-55 based address.</p>
        <Header as='h4' content='Receive ALD' inverted />
        <p>To start developing or experience the speed & convenience of Alwych Network, send request below.</p>
        <LinkButton to='faucet' content='Sign up for Icarus' basic inverted />
        <Header as='h4' content='Gitter Chat' inverted />
        <p>
          You can also request KETH in the 'faucet' Gitter channel.{' '}
          Prominent contributers can receive larger amounts of KETH.
        </p>
        <LinkButton to='https://gitter.im/kovan-testnet/faucet' content='Gitter Faucet' basic inverted />
        <Header as='h4' content='Alternative Faucets' inverted />
        <p>More Faucet services will become available over time. Watch this space!</p>
      </Grid.Column>
    )
  }
}
