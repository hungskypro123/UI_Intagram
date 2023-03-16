
import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Follow_data from '../components/Follow_data';
import Ig_navi from '../components/Ig_navi';
import Story from '../components/Story';
import Username_info from '../components/Username_info';
import TabComponent from '../components/Tab'
import Posts from '../components/Posts';


// state = []
// dùng useEffect để gán mảng dữ liệu vào state

const Home = () => {
    const [listImage, setListImage] = useState([])

    return (
        <View style={styles.container}>
            <ScrollView>
                <Ig_navi />
                <Follow_data />
                <Username_info />
                <Story />
                <TabComponent />
                <Posts />
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 8,
        // paddingHorizontal: 16,
        backgroundColor: "white",
    },
});

export default Home;
