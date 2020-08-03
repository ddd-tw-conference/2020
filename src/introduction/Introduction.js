import React from 'react'
import PropTypes from 'prop-types'
import IntroductionComponent from './components/IntroductionComponent'

const Introduction = (props) => {
  const content = [
    {
      id: 0,
      title: '關於DDD年會',
      description: '<p>elm</p><p>elm2</p>',
      imgSrc: 'https://dummyimage.com/300x200/000/fff',
    },
    {
      id: 1,
      title: '關於我們',
      description: 'elm',
      imgSrc: 'https://dummyimage.com/300x200',
    },
  ]

  return (
    <div>
      <IntroductionComponent
        title={content[0].title}
        imgSrc={content[0].imgSrc}
        description={content[0].description}
      />
    </div>
  )
}

Introduction.propTypes = {}

export default Introduction
