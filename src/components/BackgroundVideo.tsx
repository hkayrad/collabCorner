export default function BackgroundVideo() {
	return (
		<div className="bgVideo">
			<img src="/img/2023.svg" />
			<div className="cover"></div>
			<video
				style={{
					filter: `blur(${blur}px)`,
					WebkitFilter: `blur(${blur}px)`,
				}}
				//@ts-ignore
				autoPlay="autoplay"
				//@ts-ignore
				loop="loop"
				muted
				id="video-id"
				className="video"
			>
				<source src={'/bg/bg.webm'} type="video/webm" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
