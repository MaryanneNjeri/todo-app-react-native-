import React from 'react';
import { Text, Container, Content } from 'native-base';

// eslint-disable-next-line react/prefer-stateless-function
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Hello world </Text>
        </Content>
      </Container>
    );
  }
}
