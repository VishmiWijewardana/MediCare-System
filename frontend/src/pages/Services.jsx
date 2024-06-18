import { services } from '../assest/data/services';
import SerrviceCard from '../components/Services/SerrviceCard';


const Services = () => {
  return <section>
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
   {services.map((item,index) => (
    <SerrviceCard item={item} index={index} key={index}/>
    ))}
    </div>
  </div>
  </section>

  };
 


export default Services;