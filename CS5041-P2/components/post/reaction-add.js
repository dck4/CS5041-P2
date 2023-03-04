
// the button for adding a new reaction
// includes the popup for selecting which reaction,
// and sending the message to update the database

import { reactionlist } from "./emojis";
import 'react-grid-dropdown/dist/style.css'
import React from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { ref, get, push, child, serverTimestamp, remove, update } from 'firebase/database'
import { auth, database } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { signInAnonymously } from "firebase/auth";
import { reactionkey } from "../../keys";

export function AddReaction({ content, id }) {

    // hooks for auth
    const [user, authLoading, authError] = useAuthState(auth);

    // login
    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    // get the username
    const [userItem, setUserItem] = useState(() => localStorage.getItem("username"));

	const addReaction = (reaction) => {
		// if (userItem == null) {
		// 	alert("You must be logged in to add reactions!")
		// 	return
		// }

		const postData = content
		if (!postData.reactions) postData.reactions = []
		
		let length = postData.reactions.length
		// remove the reaction if it already existed
		postData.reactions = postData.reactions.filter((react) => react.author != userItem && react.reaction != reaction)
		if (postData.reactions.length == length) {
			postData.reactions.push({author:userItem, reaction:reaction})
		}

		update(child(ref(database),`/public/${id}`), {
			modified: serverTimestamp(),
			content: JSON.stringify(postData)
		})

		// check for writing, if the post board finished, just delete it.
		get(child(user ? ref(database): null, `/public/${user.uid}`)).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());
			}
		})
	}

    return (	
        <Select id="status-menu" label="+">
            {reactionlist.map((reaction, i) =>
                <MenuItem key={i} onClick={() => addReaction(reaction)}>{reaction}</MenuItem>
            )}
        </Select>
    )
}