
// the button for adding a new reaction
// includes the popup for selecting which reaction,
// and sending the message to update the database

import { reactionlist } from "./emojis";
import 'react-grid-dropdown/dist/style.css'
import React from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useEffect } from "react";
import { ref, get, push, child, serverTimestamp } from 'firebase/database'
import { auth, database } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { signInAnonymously } from "firebase/auth";
import { reactionkey } from "../../keys";
import { useSelector } from "react-redux";

const selectUsername = state => state.username

export function AddReaction({ reactions, id }) {

    // hooks for auth
    const [user, authLoading, authError] = useAuthState(auth);

    // login
    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    // get the username
    const userItem = useSelector(selectUsername)

	const addReaction = (reaction) => {
		if (userItem == null) {
			alert("You must be logged in to add reactions!")
			return
		}

		if (reactions.some((react) => react.author==userItem && react.reaction==reaction)) {
			alert("Someone with this username already added this reaction!")
			return
		}

		push(child(user ? ref(database) : null, `/public/${user.uid}`), {
			type: reactionkey,
			created: serverTimestamp(),
			modified: serverTimestamp(),
			// use the post id as the message to easily find the reactions for different posts
			message: id,
			// record the username so a user can't spam the same reaction
			content: JSON.stringify({author:userItem,reaction:reaction})
		})

		// check for writing, if the post board finished, just delete it.
		get(child(user ? ref(database): null, `/public/${user.uid}`)).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());
			}
		})
	}

    return (
			<Select displayEmpty="true" renderValue={() => "+"} style={{fontSize:28,fontFamily:"Raleway"}} id="status-menu" label="+">
				{/* display a list of all emojis in the list to select from */}
				{reactionlist.map((reaction, i) =>
					<MenuItem key={i} onClick={() => addReaction(reaction)}>{reaction}</MenuItem>
				)}
			</Select>
    )
}