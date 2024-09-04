import React from 'react'
import { termsData } from './dummyData.js'


export default function Content() {

    const lastUpdated = "‍Last Updated: October 12th 2023";
    return (
        <div className="w-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Last Updated: {lastUpdated}</h1>

            <div className="space-y-6">
                {termsData.map((val, i) =>(
                    <section>
                        {val?.heading ? <> <p dangerouslySetInnerHTML={{ __html: val?.heading }} /> <br/>  </> : "" }
                        {val?.text && <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: val?.text }} />}
                    </section>
                ))}
            </div>
        </div>
    )
}