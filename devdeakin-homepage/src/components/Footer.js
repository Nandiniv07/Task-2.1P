import React from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react';

const Footer = () => (
  <>
    <Segment style={{ background: '#008b8b', color: 'white', padding: '2em' }}>
      <Grid columns={3} divided stackable textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <h4>Explore</h4>
            <p>Home</p>
            <p>Questions</p>
            <p>Articles</p>
            <p>Tutorials</p>
          </Grid.Column>
          <Grid.Column>
            <h4>Support</h4>
            <p>FAQs</p>
            <p>Help</p>
            <p>Contact Us</p>
          </Grid.Column>
          <Grid.Column>
            <h4>Stay connected</h4>
            <p>
              <Icon name="facebook f" size="large" link />
              <Icon name="instagram" size="large" link />
              <Icon name="linkedin" size="large" link />
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment textAlign="center" style={{ background: '#006666', color: '#eee' }}>
      DEV@Deakin 2022 | Privacy Policy | Terms | Code of Conduct
    </Segment>
  </>
);

export default Footer;
