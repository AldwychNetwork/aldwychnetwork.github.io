import React, { Component } from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'
import LinkButton from '../link_button'

const MetamaskConfig = `Network Name: Aldwych Mainnet
New RPC URL: https://rpc.aldwych.blaquetec.org
Chain ID: *
Currency Symbol: ALD
Block Explorer URL: https://explorer.aldwych.blaquetec.org/`

export default class Connect extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          1. Connect to Aldwych
          <Header.Subheader>Aldwych RPC Services</Header.Subheader>
        </Header>
        <p>Deploy your own Full Node on Aldwych Network or use our supplied RPC Endpoint below:</p>
        <Header as='h4' content='Full OpenEthereum Node' inverted />
        <p>Aldwych Chain Spec & bootnodes on Github</p>
        <pre><code>git clone https://github.com/aldwychnetwork/poa-chain-spec.git</code></pre>
        <p>Start OpenEthereum w/ flags</p>
        <pre><code>openethereum --chain /repo/path/spec.json --reserved-peers /repo/path/bootnodes.txt</code></pre>
        <Button.Group>
          <LinkButton
            basic inverted
            to='https://github.com/openethereum/openethereum'
            content='OpenEthereum Repository'
          />
        </Button.Group>
        <Header as='h4' content='Aldwych RPC Provider' inverted />
        <p>Connect your web3 wallet to Aldwych Mainnet using Custom RPC Provider Config below.</p>
        <pre>{MetamaskConfig}</pre>
        <LinkButton
          basic inverted
          to='https://metamask.io'
          content='Metamask Website'
        />
      </Grid.Column>
    )
  }
}
