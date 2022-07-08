// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test } from 'vitest';

test('TypeError: activeElement.detachEvent is not a function', async () => {
  const MyComponent = () => {
    return (
      <>
        <input />
        <button type="submit">button</button>
      </>
    );
  };

  render(<MyComponent />);

  await userEvent.type(screen.getByRole('textbox'), 'foo');
  await userEvent.click(screen.getByRole('button'));
});
