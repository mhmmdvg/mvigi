import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

async function getGeist() {
	try {
		const response = await fetch(
			new URL('/public/fonts/GeistVF.ttf', import.meta.url)
		);
		if (!response.ok) throw new Error('Failed to fetch font');
		return await response.arrayBuffer();
	} catch (error) {
		console.error('Error loading font:', error);
		return null;
	}
}

export async function GET(request: NextRequest) {
	try {
		const geistFont = await getGeist();

		if (!geistFont) {
			throw new Error('Failed to load Geist font');
		}

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
							fontFamily: 'Geist',
						}}
					>
						MVigi Frontend Developer
					</h1>

					<div
						style={{
							position: 'absolute',
							bottom: '20px',
							right: '20px',
							fontFamily: 'Geist',
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
				fonts: [
					{
						name: 'Geist',
						data: geistFont,
						style: 'normal',
					},
				],
			}
		);
	} catch (error) {
		console.error('Error generating image:', error);
		return new Response('Failed to generate image', {
			status: 500,
		});
	}
}
