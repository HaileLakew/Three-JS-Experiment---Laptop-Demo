import { Text, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function Model() {
    const Cat = useGLTF('/model/scene.gltf').scene

    const { camera } = useThree();
    camera.position.set(0, 5, 5);
    camera.rotation.x = -Math.PI / 4;

    return (
        <>
            {/* <Float floatIntensity={10}> */}
            <Text size={10} position={[2, 2, 2,]}>Hello, Welcome</Text>
                <primitive object={Cat} wireframe scale={2}/>
                <axesHelper/>
            {/* </Float> */}
        </>


    )
}