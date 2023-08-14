import App from '../client/components/App'

import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  it('renders headline', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    const headline = screen.getByText(/Study Zone/i)
    expect(headline).toBeInTheDocument()
  })
})

// jest.mock('../actions')
// const fetchFruits_ = fetchFruits as jest.Mock<ReturnType<typeof fetchFruits>>
// const mockStore = store as jest.Mocked<typeof store>

// fetchFruits_.mockImplementation(() => async () => {})
// test('page header includes fruit', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   )
//   const heading = screen.getByRole('heading')
//   expect(heading.innerHTML).toMatch(/Fruit/)
// })

// test('renders an <li> for each fruit', () => {
//   const fruits = ['orange', 'persimmons', 'kiwi fruit']
//   jest.spyOn(store, 'getState')
//   mockStore.getState.mockImplementation(() => ({ fruits }))

//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   )
//   const li = screen.getAllByRole('listitem')
//   expect(li).toHaveLength(3)
// })

// test('dispatches fetchFruits action', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   )
//   expect(fetchFruits).toHaveBeenCalled()
// })
