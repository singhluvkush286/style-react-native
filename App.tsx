import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './Component/FlatCards'
import Elevated from './Component/Elevated'
import Fancy from './Component/Fancy'
import Action from './Component/Action'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards/>
          <Elevated/>
          <Fancy />
          <Action/>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default App