import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ListOfErrors from './ListOfErrors';

describe('ListOfErrors', () => {
  it('should render all errors received by props', () => {
    render(<ListOfErrors errors={["First error message", "Second error message"]} hasValue={true}/>)

    const first = screen.getByText("First error message");
    const second = screen.getByText("Second error message");

    expect(first).toBeTruthy()
    expect(second).toBeTruthy()
  })
  it('should render nothing if there isnt any value', () => {
    render(<ListOfErrors errors={["First error message", "Second error message"]} hasValue={false}/>)

    const first = screen.queryByText("First error message");
    const second = screen.queryByText("Second error message");

    expect(first).not.toBeTruthy()
    expect(second).not.toBeTruthy()
  })
  it('should render a button when there is a value but no errors', () => {
    render(<ListOfErrors errors={[]} hasValue={true}/>)

    const button = screen.getByRole('button', { name: "You are good to go!"});

    expect(button).toBeTruthy()
  })
})