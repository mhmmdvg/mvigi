/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

async function getGeist() {
	const response = await fetch(
		new URL('/public/fonts/Geist-SemiBold.ttf', import.meta.url)
	);

	const geistSans = await response.arrayBuffer();

	return geistSans;
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const hasTitle = searchParams.has('title');
	const title = hasTitle
		? searchParams.get('title')?.slice(0, 100)
		: 'mvigi Frontend Developer';

	const iconData = await fetch(
		new URL('/public/icons/mvigi.png', import.meta.url)
	).then((res) => res.arrayBuffer());

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
						fontWeight: 600,
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
						bottom: '40px',
						right: '60px',
					}}
				>
					<img height={64} width={64} src={iconData} alt="mvigi" />
					<div
						style={{
							fontFamily: 'Geist',
							fontWeight: 600,
							fontSize: '2rem',
							color: '#71717a',
						}}
					>
						vigi
					</div>
				</div>
			</div>
		),
		{
			emoji: 'twemoji',
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
