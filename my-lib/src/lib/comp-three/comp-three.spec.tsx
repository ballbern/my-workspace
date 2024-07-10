import { render } from '@testing-library/react';

import CompThree from './comp-three';

describe('CompThree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompThree />);
    expect(baseElement).toBeTruthy();
  });
});
