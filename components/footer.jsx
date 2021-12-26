import React, { Component } from 'react'
import { Icon, Container, Grid } from 'semantic-ui-react'

export default class Footer extends Component {
  render () {
    return (
      <Grid style={{ marginTop: '0' }}>
        <Grid.Column width={16} color='grey'>
          <Container>
            <Grid>
              <Grid.Column width={16} textAlign='center'>
                <Icon name='birthday' />
                Aldwych was launched on 6/30/18
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}
