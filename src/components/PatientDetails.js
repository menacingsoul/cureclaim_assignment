export const PatientDetails=({data,setData})=>
{
    return  ( <section className="patient-details">
            <form class="w-full max-w-lg ml-auto mr-auto">
           < div> <h3 className=" ml-auto mr-auto text-2xl pb-4 pt-4 font-semibold ">Patient Details</h3></div> 
                <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          First Name
        </label>
        <input 
        onChange={(e)=>setData({...data,firstname: e.target.value})}
        value = {data.firstname}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "id="grid-first-name" type="text" />
       </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
        </label>
        <input 
        onChange={(e)=>setData({...data,lastname: e.target.value})}
        value = {data.lastname}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
      </div>
    </div>
    <div clas="block">
        <div class="w-full">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
                Past History
            </label>
            <textarea 
            onChange={(e)=>setData({...data,pasthistory: e.target.value})}
            value = {data.pasthistory}
            class="appearance-none block w-full h-28 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-past-illness" type="textarea" />
        </div>
        <div class="w-full">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
               Findings
            </label>
            <textarea
             onChange={(e)=>setData({...data,findings: e.target.value})}
             value = {data.findings}
            class="appearance-none block w-full h-28 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-past-illness" type="textarea" />
        </div>
        <div class="w-full">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
                Diagnosis
            </label>
            <textarea 
             onChange={(e)=>setData({...data,diagnosis: e.target.value})}
             value = {data.diagnosis}
            class="appearance-none block w-full h-28 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-past-illness" type="textarea" />
        </div>
        <div class="w-full">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
                Proposed Treatment
            </label>
            <textarea
             onChange={(e)=>setData({...data,proposal: e.target.value})}
             value = {data.proposal}
            class="appearance-none block w-full h-28 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4" id="grid-past-illness" type="textarea" />
        </div>

    </div>
            </form>
            
        </section>
    )
}