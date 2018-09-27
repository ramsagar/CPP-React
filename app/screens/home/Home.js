import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Content, Icon, Button, H3, Text } from "native-base";

import styles from "./styles";



class Home extends Component<Props> {
  render() {
    return (
      <Container>
          <StatusBar barStyle="light-content" />
        <Content>
            <View style={{marginLeft: 20, marginRight: 20, marginBottom: 10, marginTop: 10,backgroundColor: "transparent"}}>
              <View style={styles.logoContainer}>
                <Icon name="grid" />
              </View>
              <H3 style={styles.text}>App to showcase</H3>
              <View style={{ marginTop: 8 }} />
              <H3 style={styles.text}>NativeBase components</H3>
              <View style={{ marginTop: 8 }} />
            </View>
            <View style={{ marginBottom: 80 }}>
              <Button
                style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Text>Lets Go!</Text>
              </Button>
            </View>
          </Content>
      </Container>
    );
  }
}


export default Home;
