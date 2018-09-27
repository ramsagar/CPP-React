import React, { Component } from "react";
import { connect } from 'react-redux';
import {Container, Content,Header,Title,Button,Icon,Text,Left,Right,Body} from "native-base";


class MainHeader extends Component{




  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body padder>
            <Title>Form</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="notifications" />
            </Button>
            <Button transparent>
              <Icon name="share" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}


export default MainHeader;
