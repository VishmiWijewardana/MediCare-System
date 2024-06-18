
import { formateDate } from '../../utills/formateDate';

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About of
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                Subash Dewapriya
                </span>
            </h3>
            <p className="text_para">
                Mr.Subash Dewapriya is the cardiologist doctor in the Ragama General Hospital.He is a medical graduate of Peradeniya University
                 with many years of Experience. He has worked in several hoapitals and provides the current services in our center.He works
                  as a Cardiologist.
            </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>

            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        {formateDate(15-4-2009)} - {formateDate(15- 4-2011)}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            PHD in Cardiologist
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                          Yale Medical School, Australia                          
                        </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                           {formateDate(10- 3-2004)} - {formateDate(10- 3-2008)}
                        </span>
                        <p className="text-[15px] leading-6 font-medium text-textColor">
                            Bsc.Hons in  (Cardiologist)
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                          University of Peradeniya                          
                        </p>
                </li>
                
            </ul>
        </div>


        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold"> Experience</h3>

            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                           {formateDate(10- 3-2010)} - {formateDate(10- 3-2014)}
                    </span>
                    <p className="text-[15px] leading-6 font-medium text-textColor">
                           Sr. Cardiologist
                        </p>
                    
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                          Ragama General Hospital                          
                    </p>
                </li>
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                           {formateDate(10- 3-2010)} - {formateDate(10- 3-2014)}
                    </span>
                    <p className="text-[15px] leading-6 font-medium text-textColor">
                           Sr. Cardiologist
                        </p>
                    
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                          Ragama General Hospital                          
                    </p>
                </li>
            </ul>
        </div>

        
    </div>
  );
};

export default DoctorAbout;