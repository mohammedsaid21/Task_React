import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"

import ReactPaginate from 'react-paginate';

import Police from "../../assets/police-box.png"
import HandShake1 from "../../assets/handshake1.png"
import Eye from "../../assets/eye.png"
import Edit from "../../assets/edit.png"
import XCircle from "../../assets/x-circle.png"
// 
import FilterImg from "../../assets/filter.png"
import PlusImg from "../../assets/plus.png"
import PDFImg from "../../assets/file-pdf.png"
import XLSImg from "../../assets/file-XLS.png"

import "./index.css"
import BodyTable from "./BodyTable";
import ModalDelete from "../Modal/ModalDelete";
import { BiSortAlt2 } from "react-icons/bi";

function Table2() {
    const [showModal, setShowModal] = useState(false);
    const [idDelete, setIdDelete] = useState()
    const [nameDelete, setNameDelete] = useState()

    const dateFun = (id) => { console.log("date fun", id) }
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
            name: "معرض خاص بتقييم مساق المادة التعليمية الطبية في جامعة الامام عبد الرحمن بن فيصل",
            evaluation: [AiFillStar, AiFillStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "124",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: true
        },
        {
            id: "02",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "24",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: false
        },
        {
            id: "03",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "12",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: true
        },
        {
            id: "04",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "124",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: true
        },
        {
            id: "05",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "1",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: false
        },
        {
            id: "06",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiFillStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "124",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: true
        },
        {
            id: "07",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "124",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: false
        },
        {
            id: "08",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "124",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: false
        },
        {
            id: "09",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "124",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: true
        },
        {
            id: "10",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "124",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: false
        },
        {
            id: "11",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "124",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: false
        },
        {
            id: "12",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "124",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: true
        },
        {
            id: "13",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "100",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: true
        },
        {
            id: "14",
            name: "معرض خاص بعالم الاعشاب",
            evaluation: [AiOutlineStar, AiOutlineStar, AiFillStar, AiFillStar, AiFillStar],
            numberAccounts: "14",
            numArkan: "25",
            dataStart: "17/05/2023 11:00 م",
            dataEnd: "19/05/2023 11:00 م",
            crud: [{ icon: Police, type: (id) => dateFun(id) }, { icon: HandShake1, type: (id) => dealFun(id) }, { icon: Eye, type: (id) => infoFun(id) }, { icon: Edit, type: (id) => editFun(id) }, { icon: XCircle, type: (id) => deleteFun(id) }],
            status: true
        },
    ]

    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        scrollToTop()
    };

    const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);
    const offset = currentPage * ITEMS_PER_PAGE;

    const currentItems = data.slice(offset, offset + ITEMS_PER_PAGE);


    const [sortBy, setSortBy] = useState({ column: '', direction: 'asc' });
    // const [surveys, setSurveys] = useState(currentItems); // Your data array

    const sortData = () => {
        if (sortBy.column === '') {
            return currentItems; // Return original data if no sorting applied
        }

        const sortedData = [...currentItems].sort((a, b) => {
            if (sortBy.direction === 'asc') {
                return a[sortBy.column].localeCompare(b[sortBy.column]);
            } else {
                return b[sortBy.column].localeCompare(a[sortBy.column]);
            }
        });

        return sortedData;
    };

    const handleSort = (column) => {
        setSortBy((prevSortBy) => ({
            column,
            direction: prevSortBy.column === column && prevSortBy.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    const sortedData = sortData();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className="container mx-auto mt-6 mb-16 px-5 bg-white rounded-lg shadow-lg ">

            <ModalDelete showModal={showModal} setShowModal={setShowModal} idDelete={idDelete} setIdDelete={setIdDelete} nameDelete={nameDelete} setNameDelete={setNameDelete} />

            <div className="px- 5 py-5 flex justify-between items-center">
                <h2 className="text-[#046C77] text-2xl py-5 pt-10">قائمة المعارض</h2>

                <div className="flex justify-between">
                    <button className="border-2  border-[#24B3B9] p-3 rounded-md hover:bg-[#24b4b941] transition-all mr-3">
                        <img src={FilterImg} alt="" />
                    </button>
                    <button className="border-2 bg-[#24B3B9] border-[#24B3B9] p-3 rounded-md hover:bg-[#24b4b941] hover:border-[#24B3B941] transition-all mr-3">
                        <img src={PlusImg} alt="" />
                    </button>
                    <button className="border-2 bg-[#B91414] border-[#B91414] p-3 rounded-md hover:bg-[#B9141441] hover:border-[#B9141441] transition-all mr-3">
                        <img src={PDFImg} alt="" />
                    </button>
                    <button className="border-2 bg-[#138D5F] border-[#138D5F] p-3 rounded-md hover:bg-[#138D5F41] hover:border-[#138D5F41] transition-all mr-3">
                        <img src={XLSImg} alt="" />
                    </button>

                </div>
            </div>
            <div className="w-full px- mb-5 overflow-hidden ">
                <div className="w-full overflow-x-auto">
                    <table className="w-full  overflow-x-auto">
                        <thead>
                            <tr className="text-md text-right text-[#f9f9f9] bg-[#046C77] uppercase border-b border-gray-600">
                                <th className="px-2 py-3 text-center">#</th>
                                <th className="px-2 py-3 w">اسم المعرض</th>
                                <th className="px-2 py-3 text-center">التقييم</th>
                                <th className="px-2 py-3 text-center flex items-center cursor-pointer" onClick={() => handleSort('numberAccounts')}>
                                    <BiSortAlt2 className="ml-2" />
                                    <span>عدد المشاركين</span>
                                </th>
                                <th className="px-2 py-3 text-center">عدد الاركان</th>
                                <th className="px-2 py-3 text-center">تاريخ البدء</th>
                                <th className="px-2 py-3 text-center">تاريخ الانتهاء</th>
                                <th className="px-2 py-3 text-center">الاجراءات</th>
                                <th className="px-2 py-3 text-center">الحالة</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-[#a0a0a0a] text-sm">
                            <BodyTable data={sortedData} />
                        </tbody>
                    </table>
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        previousLinkClassName={'pagination__link__previous'}
                        nextLinkClassName={'pagination__link__next'}
                        disabledClassName={'pagination__link--disabled'}
                        activeClassName={'pagination__link--active'}
                    />
                </div>
            </div>
        </section>
    );
}

export default Table2;


