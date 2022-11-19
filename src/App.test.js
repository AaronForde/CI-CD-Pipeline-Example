import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Button is rendered', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId(`generateButton`)
  expect(button.innerHTML).toContain("Generate some new text!")
});

test('Header text is rendered', () => {
  const { getByTestId } = render(<App />);
  const text = getByTestId(`headerText`)
  expect(text.innerHTML).toBe("Initial text")
});

test('Clicking button changes text', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId(`generateButton`)
  let text = getByTestId(`headerText`)

  expect(text.innerHTML).toBe("Initial text")

  fireEvent.click(button)
  text = getByTestId(`headerText`)

  expect(text.innerHTML).not.toBe("Initial text")
});