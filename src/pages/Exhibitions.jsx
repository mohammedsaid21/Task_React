import React from 'react'
import Table2 from '../components/Exhibitions/ExhibitionsTable';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';


const Exhibitions = () => {
  return (
    <>
      <Breadcrumb />

      <div className="container">
        <Table2 />
      </div>

    </>
  )
}

export default Exhibitions