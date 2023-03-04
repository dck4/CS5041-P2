
import { useState } from 'react'
import { FAB } from '@rneui/themed'

export function CreateButton({ navigation }) {

    const [userItem, setUserItem] = useState(() => localStorage.getItem("username"));

    const goToCreate = () => {

        if (userItem == null) {
            alert("You must set a username before creating a post!")
            navigation.push("LoginCreate")
            return
        }

        navigation.push("CreatePost")
    }

    return (
        <FAB onPress={goToCreate} placement="right" title="Create Post" color="#656bca"/>
    )
}