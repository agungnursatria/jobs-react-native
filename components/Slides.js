import React, { Component } from 'react';
import {  View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {
    renderLastSlides(index){
        if (index === this.props.data.length -1){
            return (
                <Button
                    title="Onwards!"
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
            );
        }
    }
    
    renderSlides(){
        return this.props.data.map((slide, index) => {
            return (
                <View 
                    key={slide.text} 
                    style={[styles.slide, { backgroundColor: slide.color }]}
                >
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {this.renderLastSlides(index)}
                </View> 
            );
        });
    }

    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
                pagingEnabled
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    slideText: {
        fontSize: 30,
        color: 'white',
        marginBottom: 15
    },
    buttonStyle: {
        backgroundColor: '#0288D1'
    }
};