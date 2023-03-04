
import { useState } from 'react'
import { FAB } from '@rneui/themed'
import { useNavigate } from 'react-router-native';
import { useSelector } from 'react-redux';

const selectUsername = state => state.username

export function CreateButton({  }) {
    const navigate = useNavigate()

    const userItem = useSelector(selectUsername)

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