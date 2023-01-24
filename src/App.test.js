import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color, and updates when clicked', () => {
  render(<App />);
  
  // find an element with a role of button and text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // click button 
  fireEvent.click(colorButton);

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent('Change to MediumVioletRed');
});

test('initial conditions', () => {
  render(<App />);

  // check that the buttons starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('check box is checked after being clicked and button is disabled', () => {
    render(<App />);

    // expect button to be enabled
    const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });
    expect(colorButton).toBeEnabled();

    // click checkbox and expect it to be checked
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    // expect button to be disabled when checked and color turns gray
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray'})
    expect(checkbox).toBeChecked();
    expect(colorButton).not.toBeEnabled();

    fireEvent.click(checkbox);

    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed'})
    expect(checkbox).not.toBeChecked();
    expect(colorButton).toBeEnabled();
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('works for more than 1 inner capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
});

// test('button turns blue when clicked', () => {
//   render(<App />);

//   const colorButton = screen.getByRole('button', { name: 'Change to blue' })
// });
