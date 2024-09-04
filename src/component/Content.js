import React from 'react'
import { jsonData, termsData } from './dummyData.js'
import CookieTable from './CookieTable.js';


export default function Content() {

    const lastUpdated = "‍Last Updated: October 12th 2023";
    return (
        <div className="w-3/4 mx-auto p-6 bg-white rounded-lg">
            <h1 className="text-2x2 font-bold mb-4">Last Updated: {lastUpdated}</h1>

            <div className="space-y-6">
                {termsData.map((val, i) => (
                    <section>
                        {val?.heading ? <> <p dangerouslySetInnerHTML={{ __html: val?.heading }} /> <br />  </> : ""}
                        {val?.subHeading ? <> <p dangerouslySetInnerHTML={{ __html: val?.subHeading }} /> <br /> </> : ""}
                        {val?.points && val?.points?.map((_val, i) => (
                            <div className="flex items-center space-x-2 ml-3 mt-2">
                                <span className="">{i + 1}.</span>
                                <p className="text-gray-800" key="{{ i }}" dangerouslySetInnerHTML={{ __html: _val }}></p>
                            </div>
                        ))}
                        {val?.text && <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: val?.text }} />}
                        {val?.content && <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: val?.content }} />}
                    </section>
                ))}
                {jsonData.length && jsonData?.map((val) => (
                    <CookieTable category={val.category} description={val.description} columns={val.columns} rows={val.rows} />
                ))}
            </div>
        </div>
    )
}