import React, { Component } from 'react'
import { Divider, Grid, Header } from 'semantic-ui-react'

import IconColumn from '../icon_column'

export default class Advantages extends Component {
  render () {
    return (
      <Grid.Column>
        <Header inverted textAlign='center' as='h2'>
          Advantages
          <Header.Subheader content='Why should developers use Aldwych Network?' />
        </Header>
        <Divider hidden />
        <Grid doubling divided columns={6} textAlign='center'>
          <IconColumn
            header='Speed'
            subHeader='Consistent 4-second blocktimes for a superior developer experience'
            icon='lightning'
            inverted
          />
          <IconColumn
            header='Resilience'
            subHeader='POA Consensus prevents attacks from hindering development & bad actors'
            icon='shield'
            inverted
          />
          <IconColumn
            header='Reliability'
            subHeader='Independent Validators hosting secure & reliable, independent nodes'
            icon='users'
            inverted
          />
          <IconColumn
            header='Cheap'
            subHeader='Transactions on Aldwych Network are cheaper & quicker'
            icon='bar'
            inverted
          />
          <IconColumn
            header='Infrastructure'
            subHeader="Block explorer powered by POA's Blockscout client & load-balanced RPC nodes"
            icon='chain'
            inverted
          />
          <IconColumn
            header='Innovation'
            subHeader='Cross-chain bridge help transfer assets from chain-to-chain'
            icon='space shuttle'
            inverted
          />
        </Grid>
      </Grid.Column>
    )
  }
}
