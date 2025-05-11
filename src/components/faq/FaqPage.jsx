import Banner from './Banner'
import FaqForm from './FaqForm'
import Faqs from './Faqs'

export default function FaqPage() {
  return (
    <div className='max-w-6xl mx-auto px-8'>
        <Banner />
        <Faqs />
        <FaqForm />
    </div>
  )
}
