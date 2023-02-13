import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

interface ModelRenderProps {
	url: string;
}

function ModelRender({ url }: ModelRenderProps) {
	const geom = useLoader(STLLoader, url);
	console.log(geom);
	return (
		<mesh geometry={geom}>
			<meshPhongMaterial color="#aaa" />
		</mesh>
	);
}

export default function Model() {
	return (
		<div className="model">
			<Canvas
				style={{ height: '100%' }}
				camera={{
					position: [-1000, 1000, -1000],
					fov: 45,
					near: 0.1,
					far: 5000,
					//@ts-ignore
					orthographic: true,
				}}
			>
				<Suspense fallback={'loading...'}>
					<ModelRender url="./model/model.stl" />
				</Suspense>
				<OrbitControls panSpeed={0.5} rotateSpeed={0.4} />
				<spotLight
					intensity={1.5}
					angle={-5}
					penumbra={1}
					position={[450, 350, 500]}
				/>
				<spotLight
					intensity={1.5}
					angle={5}
					penumbra={1}
					position={[550, 150, -500]}
				/>
				<ambientLight intensity={0.3} color={'#fff'} />
			</Canvas>
		</div>
	);
}
