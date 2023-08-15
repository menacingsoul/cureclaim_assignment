import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';
export const ClaimAmount=({data,setData})=>
{

    
    return  ( <section className="claim-details">
            <form class="w-full max-w-lg ml-auto mr-auto">
            <div> <h3 className=" ml-auto mr-auto text-2xl pb-4 pt-4 font-semibold ">Claim Details</h3></div> 
                <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Date
        </label>
        <input value={data.date}  onChange={(e)=>setData({...data,date: e.target.value})}
            placeholder='DD/MM/YYYY'  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "id="grid-date" type="text" />
       </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Time 
        </label>
        <input
         onChange={(e)=>setData({...data,time: e.target.value})}
         value = {data.time}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-time" type="text" placeholder='HH:MM'/>
      </div>
    </div>
    <div clas="block">
        <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
               Expected days of stay
            </label>
            <input
             onChange={(e)=>setData({...data,days: e.target.value})}
             value = {data.days}
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-past-illness" type="number" />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
                Cost
            </label>
            <input
             onChange={(e)=>setData({...data,cost: e.target.value})}
             value = {data.cost}
            class="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-past-illness" type="number" />
        </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
               ICU charges
            </label>
            <input 
             onChange={(e)=>setData({...data,icu: e.target.value})}
             value = {data.icu}
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-past-illness" type="number" />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
                OT charges
            </label>
            <input
             onChange={(e)=>setData({...data,ot: e.target.value})}
             value = {data.ot}
            class="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-past-illness" type="number" />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
                Specialist charges
            </label>
            <input
             onChange={(e)=>setData({...data,specialist: e.target.value})}
             value = {data.specialist}
            class="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-past-illness" type="number" />
        </div>
        </div>
        <div class="w-full">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
                Surgeon charges
            </label>
            <input
             onChange={(e)=>setData({...data,surgeon: e.target.value})}
             value = {data.surgeon}
            class="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4" id="grid-past-illness" type="number" />
        </div>
        <div class="w-full">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-past-illness">
                Meds consumables charge
            </label>
            <input 
             onChange={(e)=>setData({...data,meds: e.target.value})}
             value = {data.meds}
            class="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4" id="grid-past-illness" type="number" />
        </div>

    </div>
            </form>
            
        </section>
    )
}