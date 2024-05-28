import type { MetaFunction } from '@remix-run/node';

import StrongPasswordItem from '~/components/StrongPasswordItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Strong Password.' },
    { name: 'description', content: 'Preline 2. Strong Password.' },
  ];
};

export default function StrongPassword() {
  return <StrongPasswordItem />;
}
