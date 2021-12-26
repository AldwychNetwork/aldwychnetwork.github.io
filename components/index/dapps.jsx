import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import LinkButton from '../link_button'

export default class Dapps extends Component {
  render () {
    return (
      <Grid.Column>
        <Header as='h3'>
          Dapps
          <Header.Subheader>Aldwych Foundation dapps</Header.Subheader>
        </Header>
        <LinkButton
          basic
          icon='github'
          content='View Dapps'
          to='https://aldwych.blaquetec.org/'
        />
        <br /><br />
        <p>Aldwych is evolving and there are exciting bleeding edge features coming soon to the Horizon. Learn more and contribute on Github.</p>
      </Grid.Column>
    )
  }
}

Dapps.propTypes = {

}
