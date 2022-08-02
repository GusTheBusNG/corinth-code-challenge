export const stubLoading = (message = 'loading') => {
  const random = jest.requireActual('../utils/randomPhrases');
  random.getLoadingQuote = jest.fn(() => message)
}

export const stubError = (message = 'error') => {
  const random = jest.requireActual('../utils/randomPhrases');
  random.getErrorQuote = jest.fn(() => message)
}