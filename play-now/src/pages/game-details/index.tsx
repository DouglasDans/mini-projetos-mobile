import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import styles from './index.style'
import { useRoute } from '@react-navigation/native'
import { Game } from '@/types'
import axios from 'axios'
import { SystemRequirements } from '../../types';

export default function GameDetails() {
  const route = useRoute()
  const { gameId } = route.params as any

  const [game, setGame] = useState<Game>()

  async function getGames() {
    const games = await axios.get("https://www.freetogame.com/api/game?id=" + gameId)
    setGame(games.data)
  }

  useEffect(() => {
    getGames()
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: game?.thumbnail }} />
      <View style={styles.content}>
        <Text style={styles.h1}>{game?.title}</Text>

        <View style={styles.card}>
          <Text style={styles.text}>Status: {game?.status}</Text>
          <Text style={styles.text}>Genero: {game?.genre}</Text>
          <Text style={styles.text}>Plataforma: {game?.platform}</Text>
          <Text style={styles.text}>Editora: {game?.publisher}</Text>
          <Text style={styles.text}>Desenvolvedora: {game?.developer}</Text>
          <Text style={styles.text}>Data de lançamento: {game?.release_date}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>{game?.description}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>Requisitos Mínimos</Text>
          <Text style={styles.text}>{game?.minimum_system_requirements.graphics}</Text>
          <Text style={styles.text}>{game?.minimum_system_requirements.memory}</Text>
          <Text style={styles.text}>{game?.minimum_system_requirements.os}</Text>
          <Text style={styles.text}>{game?.minimum_system_requirements.processor}</Text>
          <Text style={styles.text}>{game?.minimum_system_requirements.storage}</Text>
        </View>
      </View>
    </ScrollView>
  )
}