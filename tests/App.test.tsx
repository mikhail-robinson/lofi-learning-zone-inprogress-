import { render, screen, fireEvent } from '@testing-library/react'
import App from '../client/components/App'
import { describe, it, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import AudioParent from '../client/components/Audio Components/AudioParent'

afterEach(() => {
  vi.clearAllMocks()
})

describe('App', () => {
  it('renders heading', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    // ACT
    const heading = screen.getByRole('heading')
    // ASSERT
    expect(heading.innerHTML).toMatch(/Study Zone/i)
  })
})

describe('AudioParent', () => {
  it('plays audio when the play button is clicked', () => {
    render(<AudioParent />)

    // Find the play button and click it
    const playButton = screen.getByRole('button', { name: /Play/i })
    fireEvent.click(playButton)

    const pauseButton = screen.getByRole('button', { name: /Pause/i })
    expect(pauseButton).toBeInTheDocument()
  })
})

// const mockedAnswer = 'Mocked answer'

// // Mock the module with the desired behavior
// vi.mock('../../apis/study', () => ({
//   studyQuestion: vi.fn().mockResolvedValue(mockedAnswer),
// }))

// describe('StudyBot', () => {
//   it('displays answer after form submission', async () => {
//     render(<StudyBot />)

//     // Fill the question and submit
//     fireEvent.change(screen.getByPlaceholderText('Ask me a question!'), {
//       target: { value: 'How are you?' },
//     })
//     fireEvent.click(screen.getByText('Ask'))

//     // Check the rendered answer
//     await waitFor(() => {
//       expect(screen.getByText(mockedAnswer)).toBeInTheDocument()
//     })
//   })

//   afterEach(() => {
//     vi.clearAllMocks()
//   })
// })
