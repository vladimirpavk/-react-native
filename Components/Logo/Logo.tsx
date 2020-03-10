import React from 'react';

import { Image } from 'react-native';

class Logo extends React.Component{
    render(){
        return(
            <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
        );
    }
        
}

export default Logo;