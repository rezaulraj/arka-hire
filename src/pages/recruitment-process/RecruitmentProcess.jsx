import React from 'react'
import HeroRecruitment from "./HeroRecruitment"
import RecuritmentStep from "./RecuritmentStep"
import WhyArka from "./WhyArka"
import WhyWorkUs from "./WhyWorkUs"
import LetsTalk from "../home/LetsTalk";
const RecruitmentProcess = () => {
  return (
    <div>
        <HeroRecruitment/>
        <RecuritmentStep/>
        <WhyArka/>
        <WhyWorkUs/>
        <LetsTalk />
    </div>
  )
}

export default RecruitmentProcess