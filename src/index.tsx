import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from '../vitest-example/HelloWorld.js';

createRoot(document.getElementById('root')!).render(
	<Suspense fallback="Suspended...">
		<HelloWorld name="Test" />
	</Suspense>,
);
