import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"

import ReactPaginate from 'react-paginate';

import FileText from "../../assets/file-text.png"
import HandShake1 from "../../assets/handshake1.png"
import Eye from "../../assets/eye.png"
import Edit from "../../assets/edit.png"
import XCircle from "../../assets/x-circle.png"
// 
import FilterImg from "../../assets/filter.png"
import PlusImg from "../../assets/plus.png"
import PDFImg from "../../assets/file-pdf.png"
import XLSImg from "../../assets/file-XLS.png"

import "../Exhibitions/index.css"
import BodyTable from "./BodyTable";
import ModalDelete from "../Modal/ModalDelete";
import { BiSortAlt2 } from "react-icons/bi";

import ArrowRight from "../../assets/arrow-right.png"
import ArrowLeft from "../../assets/arrow-left.png"


const QuestionnairesTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [idDelete, setIdDelete] = useState()
  const [nameDelete, setNameDelete] = useState()

  const FileTextFun = (id) => { console.log("date fun", id) }
  const dealFun = (id) => { console.log("dealFun", id) }
  const infoFun = (id) => { console.log("infoFun", id) }
  const deleteFun = ({ id, name }) => {
    setShowModal(true);
    setIdDelete(id)
    setNameDelete(name)
  }
  const editFun = (id) => { console.log("editFun", id) }

  const data = [
    {
      id: "01",
      name: "استبيان خاص بعالم الاعشاب 2",
      addressedTo: ["المدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
    },
    {
      id: "02",
      name: "ب خاص بعالم الاعشاب",
      addressedTo: ["المدربين ", " المتدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
    },

    {
      id: "03",
      name: "استبيان تجريبي",
      addressedTo: ["المدربين ", " المتدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 12:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
    },

    {
      id: "04",
      name: "استبيان خاص بعالم الاعشاب",
      addressedTo: ["المدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 01:00 م",
      dataEnd: "19/05/2023 12:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "05",
      name: " ي استبيان خاص بعالم الاعشاب",
      addressedTo: ["المدربين ", " المتدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "06",
      name: "استبيان خاص بعالم الاعشاب",
      addressedTo: ["المدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "07",
      name: "استبيان خاص بعالم الاعشاب",
      addressedTo: ["المدربين ", " المتدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 03:00 م",
      dataEnd: "19/05/2023 09:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "08",
      name: " خاص بعالم الاعشاب",
      addressedTo: ["المدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "09",
      name: "استبيان خاص بعالم الاعشاب",
      addressedTo: ["المدربين ", " المتدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "10",
      name: "بعالم الاعشاب",
      addressedTo: ["المدربين"],
      numberAccounts: 140,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "11",
      name: "استبيان خاص بعالم الاعشاب",
      addressedTo: ["المدربين ", " المتدربين"],
      numberAccounts: 123,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "12",
      name: "س خاص بعالم الاعشاب",
      addressedTo: ["المدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "13",
      name: "استبيان خاص بعالم الاعشاب",
      addressedTo: ["المدربين"],
      numberAccounts: 724,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],

    },
    {
      id: "14",
      name: "استبيان خاص بعالم الاعشاب",
      addressedTo: ["المدربين ", " المتدربين"],
      numberAccounts: 124,
      numArkan: "25",
      dataStart: "17/05/2023 11:00 م",
      dataEnd: "19/05/2023 11:00 م",
      crud: [{ icon: FileText, type: (id) => FileTextFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
    },
  ]

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    scrollToTop()
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const [sortBy, setSortBy] = useState({ column: '', direction: 'asc' });

  const sortData = () => {
    if (sortBy.column === '') {
      return data;
    }

    const collator = new Intl.Collator('ar', {
      sensitivity: 'base',
      ignorePunctuation: true,
    });

    const sortedData = [...data].sort((a, b) => {
      const columnA = a[sortBy.column];
      const columnB = b[sortBy.column];

      if (typeof columnA === 'number' && typeof columnB === 'number') {
        return (sortBy.direction === 'asc' ? 1 : -1) * (columnA - columnB);
      } else {
        return sortBy.direction === 'asc' ? collator.compare(columnA, columnB) : -collator.compare(columnA, columnB);
      }
    })
    return sortedData;
  }

  const handleSort = (column) => {
    setSortBy((prevSortBy) => ({
      column,
      direction: prevSortBy.column === column && prevSortBy.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const sortedAndPaginatedData = sortData();

  const pageCount = Math.ceil(sortedAndPaginatedData.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;

  const currentItems = sortedAndPaginatedData.slice(offset, offset + ITEMS_PER_PAGE);

  // const sortedData = sortData();


  return (
    <section className="container mx-auto mt-6 mb-16 px-5 bg-white rounded-lg shadow-lg ">

      <ModalDelete showModal={showModal} setShowModal={setShowModal} idDelete={idDelete} setIdDelete={setIdDelete} nameDelete={nameDelete} setNameDelete={setNameDelete} />

      <div className="px- 5 py-5 flex justify-between items-center">
        <h2 className="text-[#046C77] text-2xl py-5 pt-10">الاستبيانات</h2>

        <div className="flex justify-between">
          <button className="border-2  border-[#24B3B9] p-3 rounded-md hover:bg-[#24b4b941] transition-all mr-3">
            <img src={FilterImg} alt="" />
          </button>
          <button className="border-2 bg-[#046C77] border-[#046C77] p-3 rounded-md hover:bg-[#24b4b941] hover:border-[#24B3B941] transition-all mr-3">
            <img src={PlusImg} alt="" />
          </button>
        </div>
      </div>
      <div className="w-full px- mb-5 overflow-hidden ">
        <div className="w-full overflow-x-auto">
          <table className="w-full gfg overflow-x-auto">
            <thead>
              <tr className="text-md text-right text-[#f9f9f9] bg-[#046C77] uppercase border-b border-gray-600">
                <th className="px-2 py-5 text-center">#</th>
                <th className="px-2 py-5 flex items-center cursor-pointer" onClick={() => handleSort('name')}>
                  <BiSortAlt2 className="ml-2" />
                  <span>عنوان الاستبيان</span>
                </th>
                <th className="px-2 py-5">موجه الى</th>
                <th className="px-2 py-5 text-center">عدد المشاركين</th>
                <th className="px-2 py-5 text-center">عدد الاركان</th>
                <th className="px-2 py-5 text-center  cursor-pointer " onClick={() => handleSort('dataStart')}>
                  <span>تاريخ البدء</span>
                  {/* <BiSortAlt2 className="ms-auto" /> */}
                </th>
                <th className="px-2 py-5 text-center  cursor-pointer" onClick={() => handleSort('dataEnd')}>
                  <span>تاريخ الانتهاء</span>
                  {/* <BiSortAlt2 className="ms-auto" /> */}
                </th>
                <th className="px-2 py-5 text-center">الاجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white text-[#a0a0a0a] text-sm ">
              <BodyTable data={currentItems} />
            </tbody>
          </table>

          <ReactPaginate
            previousLabel={<img src={ArrowLeft} alt="" />}
            nextLabel={<img src={ArrowRight} alt="" />}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            previousLinkClassName={'pagination__link__previous'}
            nextLinkClassName={'pagination__link__next'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active'}
            breakAriaLabels={true}
          />
        </div>
      </div>

    </section>
  );
}

export default QuestionnairesTable