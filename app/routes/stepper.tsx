import type { MetaFunction } from '@remix-run/node';

import StepperItem from '~/components/StepperItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Stepper.' },
    { name: 'description', content: 'Preline 2. Stepper.' },
  ];
};

export default function Stepper() {
  return <StepperItem />;
}
