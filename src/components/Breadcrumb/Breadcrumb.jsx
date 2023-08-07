import React from 'react'
import { BiHomeAlt } from "react-icons/bi";

import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbData = [
    { path: '', label: '' },
    { path: 'exhibitions', label: 'قائمة المعارض' },
    { path: 'questionnaires', label: 'الاستبيانات' },
    // Add more routes and custom labels here
  ];

  const searchBreadcrumbByPath = (path) => {
    return breadcrumbData.find(item => item.path === path);
  };

  const result = searchBreadcrumbByPath(pathnames[0]);

  return (
    <nav className="w-full rounded-md py-7 pt-10 px-3 md:px-0">
      <div className="container">
        <ol className="list-reset flex items-center">
          <Link to='/'>
            <BiHomeAlt fontSize={20} color='#a3a3a3' />
          </Link>
          <li>
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
          </li>
          <li className="text-[#24B3B9]">{result.label}</li>
        </ol>
      </div>
    </nav>
  )
}
export default Breadcrumb