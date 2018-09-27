import React, { Component } from "react";
import {
  Container,
  Title,
  Header,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Content,
  List,
  ListItem
} from "native-base";
import MainHeader from "../common/mainHeader";
import styles from "./styles";

class Form extends Component<Props> {
  render() {
    return (
        <Container style={styles.container}>
          <MainHeader {...this.props} title={'Form'}/>
          <Content>

            
          </Content>
        </Container>
    );
  }
}


export default Form;
