export default function BackgroundVideo(children: any) {
	return (
		<div className="bgVideo">
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
				{/* TODO make it accept multiple media types */}
				<source src={'/bg/bgVid.mp4'} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
