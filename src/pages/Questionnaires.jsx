import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import QuestionnairesTable from '../components/Questionnaires/QuestionnairesTable'

const Questionnaires = () => {
  return (
    <>
      <Breadcrumb />

      <div className="container">
        <QuestionnairesTable />
      </div>

    </>
  )
}

export default Questionnaires