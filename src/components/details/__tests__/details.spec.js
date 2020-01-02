import React from 'react'
import { render } from '@testing-library/react'
import Details from '../details'

describe('<Details/>', () => {
  it('renders content', () => {
    const { getByText } = render(<Details />)

    const content = getByText('Details')

    expect(content).toBeInTheDocument()
  })
})
