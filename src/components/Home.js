import React, {useEffect, useState} from 'react';

import { StyleSheet, ScrollView} from 'react-native';

// React Native Paper
import { Provider as PaperProvider, Card, Title, Text } from 'react-native-paper';

export default function Home ( { navigation }) {


    return(
        
        <ScrollView>
            <PaperProvider>

                <Card
                style={styles.kortti}
                onPress={ () => navigation.navigate("CoinMarket")}
                >
                    <Card.Content>
                        <Title
                        style={styles.otsikko}
                        >Market</Title>
                    </Card.Content>
                    <Card.Cover source={require ('../img/market.png') } />
                    
                </Card>

            
                <Card
                style={styles.kortti}
                onPress={ () => navigation.navigate("MarketSentiment")}
                >
                    <Card.Content>
                        <Title
                        style={styles.otsikko}
                        >Market Sentiment</Title>
                    </Card.Content>
                    <Card.Cover source={require ('../img/marketsentiment.png') } />
                    
                </Card>


                <Card
                style={styles.kortti}
                onPress={ () => navigation.navigate("News")}
                >
                    <Card.Content>
                        <Title
                        style={styles.otsikko}
                        >News</Title>
                    </Card.Content>
                    <Card.Cover source={require ('../img/news.png') } />
                </Card>

                <Card
                style={styles.kortti}
                onPress={ () => navigation.navigate("Reddit")}
                >
                    <Card.Content>
                        <Title
                        style={styles.otsikko}
                        >Reddit</Title>
                    </Card.Content>
                    <Card.Cover 
                    style={styles.cover}
                    source={require ('../img/streetbets.png') } />
                </Card>
    
                
                <Text style={styles.attribute}>Copyright 2021 janipalomaki</Text>
            </PaperProvider>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    kortti : {
        padding : 3,
        margin : 5,
        marginTop : 1,
    },
    otsikko : {
        textAlign : 'center',
        fontSize : 18,
        marginTop : -15,
        padding : 3
    },
    attribute : {
        textAlign : 'center',
        fontSize : 12,
        marginTop : 10,
        marginBottom : 15
    }
  });
  

  