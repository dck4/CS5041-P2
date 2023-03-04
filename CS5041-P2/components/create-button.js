
import { useState } from 'react'
import { FAB } from '@rneui/themed'
import { useNavigate } from 'react-router-native';

export function CreateButton({  }) {
    const navigate = useNavigate()

    const [userItem, setUserItem] = useState(() => localStorage.getItem("username"));

    const goToCreate = () => {

        if (userItem == null) {
            alert("You must set a username before creating a post!")
            navigate("/LoginCreate")
            return
        }

        // navigation.push("CreatePost")
        navigate("/CreatePost")
    }

    return (
        <FAB onPress={goToCreate} placement="right" title="Create Post" color="#656bca"/>
    )
}