import FeatureAbout from '@/components/about/FeatureAbout';
import Goal from '@/components/about/Goal';
import Testimonial from '@/components/about/Testimonial';
import WeAre from '@/components/about/WeAre';
import Footer from '@/components/Footer';
import Abouts from '@/components/home/About';
import Newsletter from '@/components/home/Newsletter';
import MapGoogle from '@/components/MapGoogle';



const About = () => {
  return (
    <div className=''>
      <Abouts />
      <WeAre />
      <Goal />
      <FeatureAbout />
      <Testimonial />
      <Newsletter />
      <MapGoogle />
      <Footer />
    </div>
  )
}

export default About;