import React from 'react'
import { render, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import List from '../list'

const mockSuccessResponse = [
  {
    id: 1,
    name: 'lily'
  }
]
const mockJsonPromise = Promise.resolve(mockSuccessResponse)
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
})

describe('<List/>', () => {
  beforeEach(() => {
    fetch = jest.fn(() => mockFetchPromise)
  })

  it('fetches data from server when server returns a successful response', async () => {
    const { getByText } = render(<List />)
    await wait(() => expect(getByText('lily')).toBeInTheDocument())
  })
})
