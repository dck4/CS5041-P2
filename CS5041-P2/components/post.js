
import { Text } from 'react-native-paper';
import { View, Button } from "react-native";
import { Meta } from "./post/meta"
import { Game } from "./post/game"
import { PostMain } from "./post/main"
import { Reactions } from "./post/reaction-display"
import { AddReaction } from "./post/reaction-add"
import { styles } from "../styles/post-style"
import { GameDetails } from './post/game-details';

// this should return the display of an entire post
// taking the data of the post as input
// this should use sub-components defined in the "post" folder

export default function Post({ el, reactions, gameList }) {
    const content = JSON.parse(el[1].content)

    return (
        <View style={styles.postcontainer}>
            <View style={styles.leftContent}>
                <Meta author={content.author} date={el[1].created}/>
                <Game game={content.game}/>
            </View>
            <View style={styles.mainbox}>
                <View style={{flexDirection:"row"}}>
                    <PostMain title={el[1].message} body={content.body}/>
                </View>
                <View style={styles.reactionbox}>
                    <Reactions reactions={reactions}/>
                    <AddReaction reactions={reactions} id={el[0]}/>
                </View>
            </View>
            <GameDetails game={content.game} gameList={gameList} style={styles.leftContent}/>
        </View>
    )
}