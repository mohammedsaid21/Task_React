import React from 'react'
import Payment from "../../assets/payment.png"
import SocialMedia from "../../assets/socialmedia.png"

const Footer = () => {

  return (
    <footer
      className="bg-[#2E3E5F] text-neutral-200 text-center lg:text-right pt-5 ">
      <div className='container'>

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="col-span-2">
              <h6
                className="flex items-center justify-center uppercase md:justify-start text-[#24B3B9] text-3xl mb-5 font-normal ">
                عن طب اكس
              </h6>
              <p className='text-sm text-right'>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام
              </p>
            </div>

            <div className="md:text-right text-center text-sm md:col-span-1 col-span-2 ">
              <h6
                className="flex justify-center uppercase md:justify-start text-[#24B3B9] text-3xl mb-5 font-normal ">
                الوصول السريع
              </h6>
              <ul className='pt-2'>
                <li className="mb-1">
                  <a href="#!" className=" text-neutral-200">من نحن</a>
                </li>
                <li className="mb-1">
                  <a href="#!" className=" text-neutral-200"
                  >توصل معنا</a>
                </li>
                <li className="mb-1">
                  <a href="#!" className=" text-neutral-200"
                  >المدربين المحترفين</a>
                </li>
                <li>
                  <a href="#!" className=" text-neutral-200"
                  >الدورات التدريبية</a>
                </li>
              </ul>
            </div>

            <div className="md:text-right text-center flex flex-col justify-end text-sm md:col-span-1 col-span-2 ">
              <p className="mb-1">
                <a href="#!" className="text-neutral-200"
                >انضم الينا</a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-neutral-200"
                >الشركاء</a>
              </p>
              <p className="mb-1">
                <a href="#!" className="text-neutral-200"
                >الأسئلة الشائعة</a>
              </p>
              <p>
                <a href="#!" className="text-neutral-200"
                >تذاكر الدعم</a>
              </p>
            </div>

            <div className='text-right md:col-span-1 col-span-2 mx-auto'>
              <h6
                className="flex justify-center uppercase md:justify-start text-[#24B3B9] text-3xl mb-5 font-normal">
                نقبل الدفع عبر
              </h6>
              <img className='md:mx-0 mx-auto md:mb-0 mb-5' src={Payment} alt="" />
              <h6
                className="flex justify-center uppercase md:justify-start text-[#24B3B9] text-2xl mb-5 font-normal">
                تابعنا على
              </h6>
              <img className='md:mx-0 mx-auto' src={SocialMedia} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 text-sm text-center bg-[#243351]">
        <span>جميع الحقوق محفوظة لموقع طب اكس 2023</span>
      </div>

    </footer>
  )
}

export default Footer