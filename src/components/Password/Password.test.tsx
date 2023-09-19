import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Password from './Password';
import { PossibleErrors, availableErrorsMessages } from '../../services/validation';

describe('Password', () => {
  it('should render password input field', () => {
    render(<Password passwordReqs={[]}/>)

    const input = screen.getByRole("textbox");

    expect(input).toBeTruthy()
  })
  it('should show all four errors', async () => {
    render(<Password passwordReqs={[PossibleErrors.hasUppercase, PossibleErrors.hasSpecialChar, PossibleErrors.hasNoConsecutiveLetters, PossibleErrors.hasNumber]}/>)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aaa' }});

    await waitFor(() => {
      const hasSpecialChar = screen.getByText(availableErrorsMessages["hasSpecialChar"])
      const hasNumber = screen.getByText(availableErrorsMessages["hasNumber"])
      const hasUppercase = screen.getByText(availableErrorsMessages["hasUppercase"])
      const hasNoConsecutiveLetters = screen.getByText(availableErrorsMessages["hasNoConsecutiveLetters"])
      expect(hasSpecialChar).toBeTruthy();
      expect(hasNumber).toBeTruthy();
      expect(hasUppercase).toBeTruthy();
      expect(hasNoConsecutiveLetters).toBeTruthy();
    })
  })
  it('should show an error if it isnt in the passwordReqs prop - hasUppercase', async () => {
    render(<Password passwordReqs={[PossibleErrors.hasSpecialChar, PossibleErrors.hasNoConsecutiveLetters, PossibleErrors.hasNumber]}/>)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aaa' }});

    await waitFor(() => {
      const hasSpecialChar = screen.getByText(availableErrorsMessages["hasSpecialChar"])
      const hasNumber = screen.getByText(availableErrorsMessages["hasNumber"])
      const hasUppercase = screen.queryByText(availableErrorsMessages["hasUppercase"])
      const hasNoConsecutiveLetters = screen.getByText(availableErrorsMessages["hasNoConsecutiveLetters"])
      expect(hasSpecialChar).toBeTruthy();
      expect(hasNumber).toBeTruthy();
      expect(hasUppercase).not.toBeTruthy();
      expect(hasNoConsecutiveLetters).toBeTruthy();
    })
  })
  it('should show an error if it isnt in the passwordReqs prop - hasNoConsecutiveLetters and hasSpecialChar', async () => {
    render(<Password passwordReqs={[PossibleErrors.hasUppercase, PossibleErrors.hasNumber]}/>)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aaA4' }});

    await waitFor(() => {
      const hasSpecialChar = screen.queryByText(availableErrorsMessages["hasSpecialChar"])
      const hasNumber = screen.queryByText(availableErrorsMessages["hasNumber"])
      const hasUppercase = screen.queryByText(availableErrorsMessages["hasUppercase"])
      const hasNoConsecutiveLetters = screen.queryByText(availableErrorsMessages["hasNoConsecutiveLetters"])
      expect(hasSpecialChar).not.toBeTruthy();
      expect(hasNumber).not.toBeTruthy();
      expect(hasUppercase).not.toBeTruthy();
      expect(hasNoConsecutiveLetters).not.toBeTruthy();
    })
  })
  it('should show every error but consecutive chars', async () => {
    render(<Password passwordReqs={[PossibleErrors.hasUppercase, PossibleErrors.hasSpecialChar, PossibleErrors.hasNoConsecutiveLetters, PossibleErrors.hasNumber]}/>)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'a' }});

    await waitFor(() => {
      const hasSpecialChar = screen.getByText(availableErrorsMessages["hasSpecialChar"])
      const hasNumber = screen.getByText(availableErrorsMessages["hasNumber"])
      const hasUppercase = screen.getByText(availableErrorsMessages["hasUppercase"])
      const hasNoConsecutiveLetters = screen.queryByText(availableErrorsMessages["hasNoConsecutiveLetters"])
      expect(hasSpecialChar).toBeTruthy();
      expect(hasNumber).toBeTruthy();
      expect(hasUppercase).toBeTruthy();
      expect(hasNoConsecutiveLetters).not.toBeTruthy();
    })
  })
  it('should show missing special char error', async () => {
    render(<Password passwordReqs={[PossibleErrors.hasUppercase, PossibleErrors.hasSpecialChar, PossibleErrors.hasNoConsecutiveLetters, PossibleErrors.hasNumber]}/>)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aA3' }});

    await waitFor(() => {
      const hasSpecialChar = screen.getByText(availableErrorsMessages["hasSpecialChar"])
      const hasNumber = screen.queryByText(availableErrorsMessages["hasNumber"])
      const hasUppercase = screen.queryByText(availableErrorsMessages["hasUppercase"])
      const hasNoConsecutiveLetters = screen.queryByText(availableErrorsMessages["hasNoConsecutiveLetters"])
      expect(hasSpecialChar).toBeTruthy();
      expect(hasNumber).not.toBeTruthy();
      expect(hasUppercase).not.toBeTruthy();
      expect(hasNoConsecutiveLetters).not.toBeTruthy();
    })
  })
  it('should show missing digit', async () => {
    render(<Password passwordReqs={[PossibleErrors.hasUppercase, PossibleErrors.hasSpecialChar, PossibleErrors.hasNoConsecutiveLetters, PossibleErrors.hasNumber]}/>)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aA@' }});

    await waitFor(() => {
      const hasSpecialChar = screen.queryByText(availableErrorsMessages["hasSpecialChar"])
      const hasNumber = screen.getByText(availableErrorsMessages["hasNumber"])
      const hasUppercase = screen.queryByText(availableErrorsMessages["hasUppercase"])
      const hasNoConsecutiveLetters = screen.queryByText(availableErrorsMessages["hasNoConsecutiveLetters"])
      expect(hasSpecialChar).not.toBeTruthy();
      expect(hasNumber).toBeTruthy();
      expect(hasUppercase).not.toBeTruthy();
      expect(hasNoConsecutiveLetters).not.toBeTruthy();
    })
  })
  it('should show missing uppercase', async () => {
    render(<Password passwordReqs={[PossibleErrors.hasUppercase, PossibleErrors.hasSpecialChar, PossibleErrors.hasNoConsecutiveLetters, PossibleErrors.hasNumber]}/>)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'a4@' }});

    await waitFor(() => {
      const hasSpecialChar = screen.queryByText(availableErrorsMessages["hasSpecialChar"])
      const hasNumber = screen.queryByText(availableErrorsMessages["hasNumber"])
      const hasUppercase = screen.getByText(availableErrorsMessages["hasUppercase"])
      const hasNoConsecutiveLetters = screen.queryByText(availableErrorsMessages["hasNoConsecutiveLetters"])
      expect(hasSpecialChar).not.toBeTruthy();
      expect(hasNumber).not.toBeTruthy();
      expect(hasUppercase).toBeTruthy();
      expect(hasNoConsecutiveLetters).not.toBeTruthy();
    })
  })
  it('should show consecutive chars error', async () => {
    render(<Password passwordReqs={[PossibleErrors.hasUppercase, PossibleErrors.hasSpecialChar, PossibleErrors.hasNoConsecutiveLetters, PossibleErrors.hasNumber]}/>)

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'aaA@5' }});

    await waitFor(() => {
      const hasSpecialChar = screen.queryByText(availableErrorsMessages["hasSpecialChar"])
      const hasNumber = screen.queryByText(availableErrorsMessages["hasNumber"])
      const hasUppercase = screen.queryByText(availableErrorsMessages["hasUppercase"])
      const hasNoConsecutiveLetters = screen.getByText(availableErrorsMessages["hasNoConsecutiveLetters"])
      expect(hasSpecialChar).not.toBeTruthy();
      expect(hasNumber).not.toBeTruthy();
      expect(hasUppercase).not.toBeTruthy();
      expect(hasNoConsecutiveLetters).toBeTruthy();
    })
  })
})