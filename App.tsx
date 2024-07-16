import { View, Text } from 'react-native'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from './src/Model'
import useControls from "r3f-native-orbitcontrols"

const App = () => {
  const [OrbitControls, events] = useControls()
  return (
    <View style={{flex:1}} {...events}>
     <Canvas style={{flex:1}}>
      <OrbitControls enablePan={true}/>
      <directionalLight position={[0.5,1,10]} args={['#9e9e9e',2]}/>
      <directionalLight position={[-1,1,10]} args={['#9e9e9e',2]}/>
      <directionalLight position={[1,1,10]} args={['#9e9e9e',2]}/>

      <Suspense fallback={null}>
        <Model/>
      </Suspense>
     </Canvas>
    </View>
  )
}

export default App