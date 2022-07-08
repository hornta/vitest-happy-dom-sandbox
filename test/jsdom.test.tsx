// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { test, describe } from 'vitest';

describe('jsdom', () => {
  test('TypeError: activeElement.detachEvent is not a function', async () => {
    const MyComponent = () => {
      return (
        <>
          <input />
          <button>button</button>
        </>
      );
    };

    render(<MyComponent />);

    await userEvent.type(screen.getByRole('textbox'), 'foo');
    await userEvent.click(screen.getByRole('button'));
  });

  test('onSubmit', async () => {
    const MyComponent = () => {
      const [submitted, setSubmitted] = useState(false);
      const handleSubmit = () => {
        setSubmitted(true);
      };

      return (
        <>
          {submitted && 'submitted'}
          <form onSubmit={handleSubmit}>
            <button>button</button>
          </form>
        </>
      );
    };

    render(<MyComponent />);

    await userEvent.click(screen.getByRole('button'));
    screen.getByText('submitted');
  });
});
