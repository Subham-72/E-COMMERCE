import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const About = () => {



  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to FOREVER, where fashion meets individuality. We are passionate about helping you express yourself through style that lasts. Our mission is to provide a curated selection of high-quality clothing that celebrates diversity, confidence, and timeless elegance.</p>
          <p>At FOREVER, we believe fashion is more than trends—it's about creating looks that make you feel empowered and unique. From everyday essentials to statement pieces, our collections are designed to cater to every mood, occasion, and personality.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Our mission is to inspire confidence and self-expression through timeless fashion. At FOREVER, we strive to create a community where everyone feels seen, celebrated, and empowered to embrace their unique style.</p>
        </div>
      </div>

      <div className="text-xl py-4"> 
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">At FOREVER, quality is at the heart of everything we do. From selecting premium fabrics to ensuring impeccable craftsmanship, we are committed to delivering clothing that not only looks great but feels great too.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Shopping with FOREVER is designed to be as effortless as your style. We understand the importance of saving time while enjoying a seamless experience, which is why we’ve prioritized convenience every step of the way.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">At FOREVER, our customers are at the heart of everything we do. We are committed to providing a seamless and delightful shopping experience, ensuring your journey with us is nothing short of exceptional.</p>
        </div>
      </div>

      <NewsletterBox />
    
    </div>
  )
}
export default About