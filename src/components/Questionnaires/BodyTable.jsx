import "./index.css"

const BodyTable = ({ data }) => {

  return (
    <>
      {
        data.map((row, index) =>
          <tr key={row.id} className={`text-gray-700 rounded-2xl mb-5 ${index % 2 == 1 ? "bg-gray-50" : "bg-white"} `}>
            <td className="px-2 py-3 rounded-s-xl border-t-2 border-b-2 border-s-2 border-gray-100">
              {row.id}
            </td>

            <td className="px-2 py-2 border-t-2 border-b-2 border-gray-100">
              <p className="">{row.name}</p>
            </td>

            <td className="px-2 md:py-2 py-[40px] border-t-2 border-b-2 border-gray-100 flex flex-wrap">
              {row.addressedTo.map((el) =>
                <span key={el} className="bg-[hsl(183,72%,83%)] ms-2 p-2 rounded-full text-[#046C77] text-sm font-sans my-3">{el}</span>
              )
              }
            </td>

            <td className="px-2 py-2 border-t-2 border-b-2 border-gray-100">
              <p className="">{row.numberAccounts}</p>
            </td>

            <td className="px-2 py-2 border-t-2 border-b-2 border-gray-100">
              <p className="">{row.numArkan}</p>
            </td>

            <td className="px-2 py-2 border-t-2 border-b-2 border-gray-100 text-center">
              <p className="md:w-1/2 w-full mx-auto text-center">{row.dataStart}</p>
            </td>

            <td className="px-2 py-2 border-t-2 border-b-2 border-gray-100 text-center">
              <p className="md:w-1/2 w-full mx-auto text-center">{row.dataEnd}</p>
            </td>

            <td className="px-2 py-2 border-t-2 border-b-2 border-gray-100 rounded-e-xl border-e-2">
              <ul className="flex items-center flex-wrap justify-evenly">
                {
                  row.crud.map((item) =>
                    <li key={item.icon} className="mx-1 mb-2 cursor-pointer"
                      onClick={() => item.type({ id: row.id, name: row.name })}>
                      <img src={item.icon} alt="" />
                    </li>
                  )}
              </ul>
            </td>

          </tr>
        )}
    </>
  );
}

export default BodyTable;