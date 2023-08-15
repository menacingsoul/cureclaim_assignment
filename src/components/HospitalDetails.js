export const HospitalDetails=({data,setData})=>
{
    return(
    <section>
         <form class="w-full max-w-lg ml-auto mr-auto">
      <div> <h3 className=" ml-auto mr-auto text-2xl pb-4 pt-4 font-semibold ">Hospital Details</h3></div> 
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Hospital Name
        </label>
        <input
        onChange={(e)=> setData({...data , hospitalname: e.target.value})}
        value = {data.hospitalname}
         class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "id="grid-hospital-name" type="text" required />
       
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        client ID
        </label>
        <input 
         onChange={(e)=>setData({...data,clientid: e.target.value})}
         value = {data.clientid}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-clientid" type="text" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-hospitalid">
          Hospital ID
        </label>
        <input 
         onChange={(e)=>setData({...data,hospitalid: e.target.value})}
         value = {data.hospitalid}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hospital-id" type="text" />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-insurer">
          Insurer Company Name
        </label>
        <input
         onChange={(e) => setData({...data,compname: e.target.value})}
         value = {data.compname}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-insurer" type="text" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          City
        </label>
        <input
         onChange={(e)=>setData({...data,city: e.target.value})}
         value = {data.city}
         class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          State
        </label>
        <input
         onChange={(e)=>setData({...data,state: e.target.value})}
         value = {data.state}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          Pincode
        </label>
        <input
        onChange={(e)=>setData({...data,pin: e.target.value})}
        value = {data.pin}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" />
      </div>
    </div>
  </form>
  </section>)
}