import React from 'react'
import { render, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Details from '../details'

const mockSuccessResponse = {
  id: 1,
  name: 'lily',
  quality: 'LOW'
}

const mockJsonPromise = Promise.resolve(mockSuccessResponse)
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
})

describe('<Details/>', () => {
  beforeEach(() => {
    fetch = jest.fn(() => mockFetchPromise)
  })

  it('fetches data from server when server returns a successful response', async () => {
    const props = { id: '2' }
    const { getByText } = render(<Details {...props} />)
    await wait(() => expect(getByText('lily')).toBeInTheDocument())
  })
})
