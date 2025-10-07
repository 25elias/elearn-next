import Banner from './Banner'
import FaqForm from './FaqForm'
import Faqs from './Faqs'

export default function FaqPage() {
  return (
    <div className='max-w-6xl mx-auto px-8'>
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-4">
        <Banner />
        <Faqs className="order-first sm:order-second"/>
      </div>
        <FaqForm />
    </div>
  )
}
