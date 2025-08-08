import React from 'react';
import { Card, Image, Container, Header, Button, Icon } from 'semantic-ui-react';

const articles = [
  { title: 'React vs Vue', desc: 'React OR Vue', author: 'Jane Doe' },
  { title: 'Intro to NodeJS', desc: 'NodeJS', author: 'John Smith' },
  { title: 'React Hooks Deep Dive', desc: 'React Hooks', author: 'Emily Ray' },
];

const FeaturedArticles = () => (
  <Container textAlign="center" style={{ padding: '2em' }}>
    <Header as="h2">Featured Articles</Header>
    <Card.Group centered>
      {articles.map((a, i) => (
        <Card key={i}>
          <Image src={`https://picsum.photos/200/150?random=${i}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{a.title}</Card.Header>
            <Card.Meta>{a.desc}</Card.Meta>
            <Card.Description>
              <Icon name="star" color="yellow" /> 5 {a.author}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button style={{ marginTop: '1em' }}>See all articles</Button>
  </Container>
);

export default FeaturedArticles;
