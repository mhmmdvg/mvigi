import { ImageResponse } from 'next/og';
import React from 'react';

export const runtime = 'edge';

async function getGeist() {
	const response = await fetch(
		new URL('/public/fonts/GeistVF.ttf', import.meta.url)
	);

	const geistSans = await response.arrayBuffer();

	return geistSans;
}

export async function GET(request: Request) {
	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					backgroundColor: '#fdfcfd',
					height: '100%',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<h1
					style={{
						fontSize: 42,
						fontWeight: 500,
						// fontFamily: 'Geist',
					}}
				>
					MVigi Frontend Developer
				</h1>

				<div
					style={{
						position: 'absolute',
						bottom: '20px',
						right: '20px',
						// fontFamily: 'Geist',
						fontSize: '1rem',
					}}
				>
					<p>— MVIGI</p>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			// fonts: [
			// 	{
			// 		name: 'Geist',
			// 		data: await getGeist(),
			// 		style: 'normal',
			// 	},
			// ],
		}
	);
}
