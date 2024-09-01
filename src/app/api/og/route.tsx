/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

async function getGeist() {
	const response = await fetch(
		new URL('/public/fonts/Geist-Medium.ttf', import.meta.url)
	);

	const geistSans = await response.arrayBuffer();

	return geistSans;
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const hasTitle = searchParams.has('title');
	const title = hasTitle
		? searchParams.get('title')?.slice(0, 100)
		: 'MVigi Frontend Developer';

	const iconData = await fetch(
		new URL('/public/icons/mvigi.png', import.meta.url).toString()
	);

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
				<h2
					tw="text-5xl text-primary"
					style={{
						fontWeight: 500,
						fontFamily: 'Geist',
					}}
				>
					{title}
				</h2>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						position: 'absolute',
						bottom: '20px',
						right: '20px',
					}}
				>
					<img height={64} width={64} src={iconData} alt="mvigi" />
					<div
						style={{
							fontFamily: 'Geist',
							fontWeight: 400,
							fontSize: '2rem',
						}}
					>
						MVIGI
					</div>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Geist',
					data: await getGeist(),
					style: 'normal',
				},
			],
		}
	);
}
