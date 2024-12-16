import { use } from 'react';

let fakeCacheLoaded = false;
const fakeCacheLoadPromise = new Promise<void>((resolve) => {
	setTimeout(() => {
		fakeCacheLoaded = true;
		resolve();
	}, 100);
});

export default function HelloWorld({ name }: { name: string }) {
	if (!fakeCacheLoaded) {
		use(fakeCacheLoadPromise);
	}

	return (
		<div>
			<h1>Hello {name}!</h1>
		</div>
	);
}
