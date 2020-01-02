import React from 'react'
import { render } from '@testing-library/react'
import List from '../list'

describe('<List/>', () => {
  it('renders content', () => {
    const { getByText } = render(<List />)

    const content = getByText('Sensor Plants')

    expect(content).toBeInTheDocument()
  })
})
