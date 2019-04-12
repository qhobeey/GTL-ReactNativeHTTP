import Reac
t from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

const PCard = ({name}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.pokeItemHeader}>{name}</Text>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}}
                        style={styles.pokeImage}/>
            </View>
        </TouchableOpacity>
    )
}


export default PCard;

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#000'
    },
    pokeItemHeader: {
        color: '#fff',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    }
})
