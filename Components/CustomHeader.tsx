import React, { useRef } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';


const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons style={styles.searchIcon} name='search-outline' size={20}  />
                <TextInput style={styles.input} placeholder='Restaurants, Groceries, Dishes' />
            </View>
            <Link href={'/'} asChild>
                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name="options-outline" size={25} color={Colors.primary}></Ionicons>
                </TouchableOpacity>
            </Link>
        </View>
    </View>
);

const CustomHeader = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const openModel = () => {
       bottomSheetRef.current?.present();
    }
  return (
    <SafeAreaView style={styles.safeArea}>
        <BottomSheet ref={bottomSheetRef}/>
        <View style = {styles.container}>
            <TouchableOpacity onPress={openModel}>
                <Image style={styles.bike} source={ require('@/assets/images/bike.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title} onPress={openModel}>Delivery · Now</Text>
                <View style={styles.locationName}>
                    <Text style={styles.subTitle}>London</Text>
                    <Ionicons name='chevron-down' size={20} color={Colors.primary} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
                <Ionicons name='person-outline' size={20} color={Colors.primary} />
            </TouchableOpacity>
        </View>
        <SearchBar />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create ({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    bike: {
        height: 30,
        width: 30
    },
    titleContainer: {
        flex: 1
    },
    title: {
        fontSize: 14,
        color: Colors.medium
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 5,
        borderRadius: 50,
    },
    locationName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchContainer :{
        backgroundColor: "#fff",
        height: 60,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 10
    },
    searchSection: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        color: Colors.mediumDark
    },
    input: {
        padding: 10,
        color: Colors.mediumDark
    },
    optionButton: {
        paddingTop: 5,
    }
})

export default CustomHeader