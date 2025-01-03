import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Model } from '../component/Model'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Laptop Demo</title>
        <meta name="description" content="Generated for learning sesh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Canvas
          camera={{ position: [0, 0, 10] }}
          style={{ height: '100vh', width: '100vw' }}
        >
          <Environment files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr'} ground={{ height: 5, radius: 40, scale: 20 }} />
          <color attach="background" args={['white']}/>
          <pointLight position={[0, 10, 10]} />
          <Model/>
          <OrbitControls/>
        </Canvas>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
