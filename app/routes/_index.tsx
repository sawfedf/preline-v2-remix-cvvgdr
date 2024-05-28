import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Remix.' },
    { name: 'description', content: 'Preline 2. Remix.' },
  ];
};

export default function Index() {
  return <>Go through the menu items...</>;
}
