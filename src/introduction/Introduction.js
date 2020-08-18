import React from 'react'
import IntroductionComponent from './components/IntroductionComponent'

const Introduction = () => {
  const content = [
    {
      id: 0,
      title: '關於DDD年會',
      description:
        '<p>第一屆的年會，我們的主軸會希望能讓更多人知道何謂領域驅動設計(DDD)，以及讓更多人意識到其實 DDD 真的不是只是一票技術人員寫寫程式，關注程式碼本身結構性的問題而已，所以預計會有演講與工作坊並進的方式來進行。</p><p>今年我們預計有機會邀請到來自 DDD_Eu 、中國等地的講者，並且同時結合台灣對於領域驅動設計長年有研究並且有意願與大家分享的老朋友們，一起與大家共同探討這個已經出生了10多年的老方法能給大家帶來的新體驗與感受。</p>',
      imgSrc: '/img/conference.png',
    },
    {
      id: 1,
      title: '關於我們',
      description:
        '<p>Domain Driven Design Taiwan (DDD Taiwan)是一個鼓勵所有熱愛解決問題的大家一起群體共創的地方，在這裡我們將試著進行更多的交流活動，一起探索從Problem Domain去催生出 Solution Domain</p>',
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
