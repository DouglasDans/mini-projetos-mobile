import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './index.style'
import axios from 'axios'
import { GameItem } from '@/types'
import GameCard from '@/components/game-card'

type Props = {}

export default function Home({ navigation }: Props) {
  const [games, setGames] = useState<GameItem[]>([])

  async function getGames() {
    const games = await axios.get("https://www.freetogame.com/api/games")
    setGames(games.data)
  }

  useEffect(() => {
    getGames()
  }, []);

  return (
    <ScrollView style={styles.container}>
      {games.map(item => {
        return (<GameCard game={item} navigation={navigation} />)
      })}
    </ScrollView>
  )
}