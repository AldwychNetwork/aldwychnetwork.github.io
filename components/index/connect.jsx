import React, { Component } from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'
import LinkButton from '../link_button'

export default class Connect extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3' inverted>
          1. Connect to Aldwych
          <Header.Subheader>Aldwych RPC Services</Header.Subheader>
        </Header>
        <p>Deploy your own Full Node on Aldwych Network or use supplied RPC Endpoint:</p>
        <Header as='h4' content='Full Parity Node' inverted />
        <p>Aldwych Chain Spec & bootnodes.txt on Github</p>
        <pre><code>git clone https://github.com/aldwychnetwork/poa-chain-spec.git</code></pre>
        <p>Start parity w/ flags</p>
        <pre><code>parity --chain /path/to/spec.json --reserved-peers /path/to/bootnodes.txt</code></pre>
        <Button.Group>
          <LinkButton
            basic inverted
            to='https://parity.io'
            content='ParityTech Website'
          />
        </Button.Group>
        <Header as='h4' content='Custom RPC' inverted />
        <p>You can use Custom RPC Endpoint with all major Ethereum based wallets like; Metamask Desktop/Mobile, Nifty Wallet, MyEtherWallet, MyCrypto</p>
        <pre><code>https://rpc.aldwych.blaquetec.org</code></pre>
        <LinkButton
          basic inverted
          to='https://metamask.io'
          content='Metamask Website'
        />
      </Grid.Column>
    )
  }
}
