import React from 'react'
import IntroductionComponent from './components/IntroductionComponent'
import { useTranslation } from 'react-i18next'

const Introduction = () => {
  const { t } = useTranslation()
  const content = [
    {
      id: 0,
      title: t('introduction.about-ddd-conf.title'),
      description: t('introduction.about-ddd-conf.description'),
      imgSrc: '/img/conference.png',
    },
    {
      id: 1,
      title: t('introduction.about-ddd.title'),
      description: t('introduction.about-ddd.description'),
      imgSrc: '/img/ddd.png',
    },
  ]

  return (
    <div>
      <div className="container-fluid" id="ddd-conference">
        <IntroductionComponent
          title={content[0].title}
          imgSrc={content[0].imgSrc}
          description={content[0].description}
        />
      </div>
      <div className="container-fluid" id="about-us">
        <IntroductionComponent
          title={content[1].title}
          imgSrc={content[1].imgSrc}
          description={content[1].description}
        />
      </div>
    </div>
  )
}

export default Introduction
