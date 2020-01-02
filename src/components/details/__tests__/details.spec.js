import React from 'react'
import { render } from '@testing-library/react'
import Details from '../details'

describe('<Details/>', () => {
  it('renders content', () => {
    const props = {
      location: {
        state: {
          id: 1,
          name: 'lily',
          quality: 'HIGH'
        }
      }
    }
    const { getByText } = render(<Details {...props} />)

    const content = getByText('lily')

    expect(content).toBeInTheDocument()
  })
})
