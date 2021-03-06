import React, { Component } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native'; 
import ImagePicker from "react-native-image-picker";

class PickImage extends Component {
    state = {
        pickedImage: null
    }
    pickImageHandler = () => {
        ImagePicker.showImagePicker({
            title: "Pick an Image"
        }, resp => {
            if (resp.didCancel) {
                console.log("User cancelled")
            } else if (resp.error) {
                console.log("Error", resp.err);
            } else {
                this.setState({
                    pickedImage: { uri: resp.uri}
                });
                this.props.onImagePicked({uri: resp.uri, base64: resp.data});
            }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                   <Image source={this.state.pickedImage} style={styles.previewImage} />
                </View> 
                <View style={styles.button}>
                    <Button title="Pick Image" 
                        onPress={ this.pickImageHandler }/>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({ 
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8, 
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})

export default PickImage;