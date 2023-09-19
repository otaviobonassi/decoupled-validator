import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Password from './Password';
import { availableErrors } from '../../services/validation';

describe('Password', () => {
  it('should render password input field', () => {
    render(<Password />)

    const input = screen.getByRole("textbox");

    expect(input).toBeTruthy()
  })
  it('should show every error but consecutive chars', async () => {
    render(<Password />)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'a' }});

    await waitFor(() => {
      const specialChar = screen.getByText(availableErrors["specialChar"])
      const hasNumber = screen.getByText(availableErrors["hasNumber"])
      const hasUppercase = screen.getByText(availableErrors["hasUppercase"])
      const hasNoConsecutiveLetters = screen.queryByText(availableErrors["hasNoConsecutiveLetters"])
      expect(specialChar).toBeTruthy();
      expect(hasNumber).toBeTruthy();
      expect(hasUppercase).toBeTruthy();
      expect(hasNoConsecutiveLetters).not.toBeTruthy();
    })
  })
  it('should show all four errors', async () => {
    render(<Password />)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aaa' }});

    await waitFor(() => {
      const specialChar = screen.getByText(availableErrors["specialChar"])
      const hasNumber = screen.getByText(availableErrors["hasNumber"])
      const hasUppercase = screen.getByText(availableErrors["hasUppercase"])
      const hasNoConsecutiveLetters = screen.getByText(availableErrors["hasNoConsecutiveLetters"])
      expect(specialChar).toBeTruthy();
      expect(hasNumber).toBeTruthy();
      expect(hasUppercase).toBeTruthy();
      expect(hasNoConsecutiveLetters).toBeTruthy();
    })
  })
  it('should show missing special char error', async () => {
    render(<Password />)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aA3' }});

    await waitFor(() => {
      const specialChar = screen.getByText(availableErrors["specialChar"])
      const hasNumber = screen.queryByText(availableErrors["hasNumber"])
      const hasUppercase = screen.queryByText(availableErrors["hasUppercase"])
      const hasNoConsecutiveLetters = screen.queryByText(availableErrors["hasNoConsecutiveLetters"])
      expect(specialChar).toBeTruthy();
      expect(hasNumber).not.toBeTruthy();
      expect(hasUppercase).not.toBeTruthy();
      expect(hasNoConsecutiveLetters).not.toBeTruthy();
    })
  })
  it('should show missing digit', async () => {
    render(<Password />)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aA@' }});

    await waitFor(() => {
      const specialChar = screen.queryByText(availableErrors["specialChar"])
      const hasNumber = screen.getByText(availableErrors["hasNumber"])
      const hasUppercase = screen.queryByText(availableErrors["hasUppercase"])
      const hasNoConsecutiveLetters = screen.queryByText(availableErrors["hasNoConsecutiveLetters"])
      expect(specialChar).not.toBeTruthy();
      expect(hasNumber).toBeTruthy();
      expect(hasUppercase).not.toBeTruthy();
      expect(hasNoConsecutiveLetters).not.toBeTruthy();
    })
  })
  it('should show missing uppercase', async () => {
    render(<Password />)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'a4@' }});

    await waitFor(() => {
      const specialChar = screen.queryByText(availableErrors["specialChar"])
      const hasNumber = screen.queryByText(availableErrors["hasNumber"])
      const hasUppercase = screen.getByText(availableErrors["hasUppercase"])
      const hasNoConsecutiveLetters = screen.queryByText(availableErrors["hasNoConsecutiveLetters"])
      expect(specialChar).not.toBeTruthy();
      expect(hasNumber).not.toBeTruthy();
      expect(hasUppercase).toBeTruthy();
      expect(hasNoConsecutiveLetters).not.toBeTruthy();
    })
  })
  it('should show consecutive chars error', async () => {
    render(<Password />)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aaA@5' }});

    await waitFor(() => {
      const specialChar = screen.queryByText(availableErrors["specialChar"])
      const hasNumber = screen.queryByText(availableErrors["hasNumber"])
      const hasUppercase = screen.queryByText(availableErrors["hasUppercase"])
      const hasNoConsecutiveLetters = screen.getByText(availableErrors["hasNoConsecutiveLetters"])
      expect(specialChar).not.toBeTruthy();
      expect(hasNumber).not.toBeTruthy();
      expect(hasUppercase).not.toBeTruthy();
      expect(hasNoConsecutiveLetters).toBeTruthy();
    })
  })
})