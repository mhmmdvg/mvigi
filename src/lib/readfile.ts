import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { ComponentType } from './labs';

const readFile = promisify(fs.readFile);

export async function readFilePath(filePath: string): Promise<string> {
	const fileContent = await readFile(
		path.join(process.cwd(), filePath),
		'utf8'
	);
	return fileContent.trim();
}

export async function getFilePathAndConfig(item: ComponentType) {
	const filePath = `/src/components/labs/${item.slug.replace(/\s+/g, '')}.tsx`;

	const code = await readFilePath(filePath).catch(() => {
		return `//${item.name} component not found`;
	});

	const uiLibrary = item.uiLibrary;

	return { code, uiLibrary };
}
