import React from 'react'

import { GameItem } from '@/types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './index.style'

type Props = {
  game: GameItem
}

export default function GameCard({ game, navigation }: Props) {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate("Details", { gameId: game.id }) }} style={styles.container}>
      <Image style={styles.image} source={{ uri: game.thumbnail }} />
      <View style={styles.content}>
        <Text style={styles.h1}>{game.title}</Text>
        <Text style={styles.text}>{game.short_description}</Text>
        <Text style={styles.text}>Editora: {game.publisher}</Text>
        <Text style={styles.text}>Desenvolvedora: {game.developer}</Text>
        <Text style={styles.text}>Plataforma: {game.platform}</Text>
      </View>
    </TouchableOpacity >
  )
}