import React from "react";
import { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { HospitalDetails } from "./HospitalDetails";
import { ClaimAmount } from "./ClaimAmount";
import { PatientDetails } from "./PatientDetails";

export function CreateClaim() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1); 
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const[data,setData] = useState({
    hospitalname:'',
    clientid:'',
    hospitalid:'',
    compname:'',
    city:'',
    state:'',
    pin:'',
    firstname:'',
    lastmname:'',
    pasthistory:'',
    findings:'',
    diagnosis:'',
    propoal:'',
    date:'',
    time:'',
    days:'0',
    cost:'0',
    icu:'0',
    ot:'0',
    specialist:'0',
    surgeon:'0',
    meds:'0',
      })
  
  return (
    <section>
      <div>
        <h2 className=" ml-auto mr-auto text-center font-extrabold pt-5 justify-center text-3xl">
          Submit claim
        </h2>
      </div>
    <div className="w-full py-10 px-32">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0) }>1</Step>
        <Step onClick={() => setActiveStep(1) }>2</Step>
        <Step onClick={() => setActiveStep(2) }>3</Step>
      </Stepper>
      </div>
      <div>
        {activeStep===0 && (<>
        <HospitalDetails data={data} setData={setData}/>
        </>)
        }
         {activeStep===1 && (<>
        <PatientDetails data={data} setData={setData}/>
        </>)
        }
         {activeStep===2 && (<>
        <ClaimAmount data={data} setData={setData}/>
        </>)
        }
      </div>
      
      <div className="mt-16 flex justify-between py-12 px-52">
        <Button onClick={handlePrev} disabled={isFirstStep} color="red">
          Prev
        </Button>
        <Button onClick={
        (e)=>{
          if(activeStep===2)
          {
            alert('form submitted')
            console.log(data)
          }
          else
          {
            handleNext();
          }
        }
        
        } color="green">
         {isLastStep? "Submit":"Next"}
        </Button>
      </div>
      </section>
    
  );
}