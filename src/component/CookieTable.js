import React from 'react';

const CookieTable = ({ category, description, columns, rows }) => {
    return (
        <div className="container mx-auto py-4 "  style={{ border: "1px solid black"}}>
            <h2 className="font-semibold text-lg px-4 mb-2">{category}</h2>
            <p className="text-sm text-gray-600 mb-4 px-4">{description}</p>
            <div className="overflow-x-auto">
            <table className="min-w-full table-auto w-auto max-w-screen-lg">
                <thead 
                // className="bg-gray-100"
                >
                    <tr className='border-b border-black'>
                        {columns.map((col, index) => (
                            <th key={index} className="px-4 py-3 text-left text-bold font-medium text-gray-500 uppercase tracking-wider ">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {rows.map((row, index) => (
                        <tr key={index} className={index === rows.length - 1 ? '' : 'border-b border-black'} >
                            <td className="px-4 py-2 text-sm font-medium text-gray-900">{row.Name}</td>
                            <td className="px-4 py-2 text-sm text-gray-500">{row.Provider}</td>
                            <td className="px-4 py-2 text-sm text-gray-500" >{row.Purpose}</td>
                            <td className="px-4 py-2 text-sm text-gray-500">{row["Maximum Storage Duration"]}</td>
                            <td className="px-4 py-2 text-sm text-gray-500">{row.Type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default CookieTable;
