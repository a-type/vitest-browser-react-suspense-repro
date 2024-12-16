import { Suspense } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import HelloWorld from './HelloWorld.jsx';

test('renders name', async () => {
	const { getByText } = render(<HelloWorld name="Vitest" />, {
		wrapper: ({ children }) => (
			<Suspense fallback={<div>Suspended!</div>}>{children}</Suspense>
		),
	});
	await expect.element(getByText('Hello Vitest!')).toBeInTheDocument();
});
