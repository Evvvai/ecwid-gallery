import './App.scss'

import { FC, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import Gallery from './gallery/Gallery'

////////////////////////////////////////////////////////////////////////////////////////////////////
const App: FC = () => {
  return (
    <Fragment>
      <main className="main">
        <Routes>
          <Route path="/" element={<Gallery photos={photos} margin={5} rowHeight={200} />} />
        </Routes>
      </main>
    </Fragment>
  )
}

export default App

export const photos = [
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550746.jpg',
    width: 640,
    height: 426,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964007.jpg',
    width: 1920,
    height: 1200,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550739.jpg',
    width: 640,
    height: 426,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964009.jpg',
    width: 436,
    height: 650,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550740.jpg',
    width: 600,
    height: 400,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964008.jpg',
    width: 509,
    height: 339,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964011.jpg',
    width: 900,
    height: 450,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550755.jpg',
    width: 480,
    height: 640,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964013.jpg',
    width: 472,
    height: 640,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550745.jpg',
    width: 640,
    height: 425,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964014.jpg',
    width: 240,
    height: 320,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964016.jpg',
    width: 540,
    height: 337,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg',
    width: 1600,
    height: 1000,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964010.jpg',
    width: 1506,
    height: 575,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550754.jpg',
    width: 1280,
    height: 1276,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964021.jpg',
    width: 1280,
    height: 800,
  },
  {
    src: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964012.jpg',
    width: 787,
    height: 787,
  },
]