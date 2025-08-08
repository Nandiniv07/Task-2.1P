import React from 'react';
import { Card, Image, Container, Header, Button, Icon } from 'semantic-ui-react';

const tutorials = [
  { title: 'JS6 Essentials', desc: 'JS6', user: 'nandini', rating: 5 },
  { title: 'React Router Guide', desc: 'React Router', user: 'devguy', rating: 5 },
  { title: 'Express Crash Course', desc: 'Express', user: 'backendpro', rating: 4.9 },
];

const FeaturedTutorials = () => (
  <Container textAlign="center" style={{ padding: '2em' }}>
    <Header as="h2">Featured Tutorials</Header>
    <Card.Group centered>
      {tutorials.map((t, i) => (
        <Card key={i}>
          <Image src={`https://picsum.photos/200/150?random=${i + 3}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{t.title}</Card.Header>
            <Card.Meta>{t.desc}</Card.Meta>
            <Card.Description>
              <Icon name="star" color="yellow" /> {t.rating} {t.user}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button style={{ marginTop: '1em' }}>See all tutorials</Button>
  </Container>
);

export default FeaturedTutorials;
