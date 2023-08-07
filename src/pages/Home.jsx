import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-center text-2xl md:py-60 py-48'>
      <h2>الصفحة الرئيسية</h2>

      <ul className='bg-white flex justify-between md:flex-row flex-col md:w-[35%] w-[95%] mx-auto px-10 py-5 rounded-lg mt-10 '>
        <li className='mb-3'>
          <Link to="/exhibitions" className='text-red-400 transition-all hover:text-red-600 p-3  ' >
          صفحة قائمة المعارض 
          </Link>
        </li>
        <li>
          <Link to="/questionnaires" className='text-red-400 transition-all hover:text-red-600 p-3  ' >
          صفحة الاستبيانات
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home


