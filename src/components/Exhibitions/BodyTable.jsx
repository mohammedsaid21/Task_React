const BodyTable = ({ data }) => {

  return (
    <>
      {
        data?.map((row) => <tr key={row.id} className="text-gray-700 tr-rows">
          <td className="px-2 py-3 border">
            {row.id}
          </td>

          <td className="px-2 py-2 border w">
            <p className="">{row.name}</p>
          </td>

          <td className="px-2 py-2 border">
            <ul className="flex ">{row.evaluation.map((Star) =>
              <li key={Math.random()} className="text-[#046C77] text-xl">
                <Star />
              </li>
            )}
            </ul>
          </td>

          <td className="px-2 py-2 border">
            <p className="text-center">{row.numberAccounts}</p>
          </td>

          <td className="px-2 py-2 border">
            <p className="text-center">{row.numArkan}</p>
          </td>

          <td className="px-2 py-2 border text-center">
            <p className="md:w-1/2 w-full mx-auto text-center">{row.dataStart}</p>
          </td>

          <td className="px-2 py-2 border text-center">
            <p className="md:w-1/2 w-full mx-auto text-center">{row.dataEnd}</p>
          </td>

          <td className="px-2 py-2 border">
            <ul className="flex items-center flex-wrap">
              {
                row.crud.map((item) =>
                  <li key={item.icon} className="mx-1 mb-2 cursor-pointer"
                    onClick={() => item.type({ id: row.id, name: row.name })}>
                    <img src={item.icon} alt="" />
                  </li>
                )}
            </ul>
          </td>

          <td className="px-2 py-2 border">
            {row.status ? (
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#046C77] peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-200"></div>
              </label>
            ) : (
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-0 peer-checked:after:border-white peer-checked:after:right-[22px] after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#046C77]"></div>
              </label>
            )
            }
          </td>
        </tr>
        )}
    </>
  );
}

export default BodyTable;