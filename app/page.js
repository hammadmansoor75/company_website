import Service from "@/components/Service";
import Services from "@/components/Services";
import { BadgeCent, Cloud, LayoutGrid, Menu, PanelTop, PenLine } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex flex-col items-center justify-between text-center mx-20 mt-20">
            <h1 className="mainHeading">We make great digital products
            for <span className="green-text">innovative</span> brands.</h1>
            <p className="mt-5">Get your desired services from our talented team,
            around the world at a reasonable cost.</p>

            <div className="sm:flex sm:flex-col md:flex-row lg:flex-row items-center justify-center gap-4 mt-4">
              <input type="text" placeholder="Drop you email now!" className="rounded-lg p-2 text-center"></input>
              <button className="primary-btn sm:mt-4 md:mt-0">Book a Call</button>
            </div>
        </div>
      </section>
      <section className="container mx-auto mt-10">
       
        <div className="container mt-5 p-5 md:flex items-center justify-center gap-10">
          <div className="w-full md:w1/2 lg:w-1/2">
          <h1 className="text-center sectionHeading mb-2">About Us</h1>
            <p  className="text-center md:text-left">At [Your Company Name], we transform innovative ideas into powerful digital solutions. Our expert team specializes in custom software, mobile and web apps, UI/UX design, and cloud solutions. Since [Year], we have been dedicated to delivering high-quality, scalable, and secure technology to meet your business needs. Join us in creating exceptional digital experiences.</p>
          </div>
          <div className="">
            <Image src='/assets/hero-slide-3.jpg' className="mt-4 rounded-lg" width={400} height={400} alt="about-banner"/>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-aut0 mt-10 p-5 px-10">
        {/* <h1 className="sectionHeading text-center">Our Services</h1>
        <div className="mt-5 md:flex flex-wrap items-center justify-center gap-10">
          <Service serviceName='Web Development' serviceDesc='We specialize in crafting bespoke web solutions tailored to meet your unique business objectives. Our team of skilled developers leverages the latest technologies to deliver robust, scalable, and secure web applications—from front-end design to seamless integration. Partner with us to transform your digital presence and achieve your online goals effectively.' serviceIcon={<PanelTop size={40}/>} />
          <Service serviceName="Mobile App Development" serviceDesc='We specialize in creating tailored mobile applications that cater to your specific business needs. Our experienced team of developers utilizes cutting-edge technologies to build intuitive and scalable mobile solutions. From conceptualization to deployment, we ensure a seamless user experience across iOS and Android platforms.' serviceIcon={ <LayoutGrid size={40}/>}/>
          <Service serviceName='Cloud Solutions' serviceDesc=' We specialize in harnessing cloud technologies to optimize your business operations, enhance flexibility, and ensure robust security measures. Whether you are migrating to the cloud, managing infrastructure, or leveraging cloud-native applications, our expert team delivers tailored solutions that drive efficiency and innovation.' serviceIcon={<Cloud size={40}/>}/>
          <Service serviceName='UI/UX Design' serviceDesc='UI/UX design focuses on creating visually appealing and intuitive digital interfaces. UI design emphasizes the look and feel, including layout and visual elements, to align with brand identity and enhance aesthetics. Meanwhile, UX design focuses on optimizing user interactions through research, prototyping, and usability testing, ensuring a seamless and satisfying user experience.' serviceIcon={<PenLine size={40}/>} />
          <Service serviceName='Digital Marketing' serviceDesc='Elevate your online presence with our comprehensive digital marketing services. From SEO and PPC campaigns to engaging social media strategies and targeted content creation, we specialize in leveraging digital channels to maximize your brands reach and impact. Our tailored approach ensures strategic growth, increased visibility, and measurable results. Partner with us to drive conversions, build customer loyalty, and achieve your business goals in the digital age.' serviceIcon={<BadgeCent size={40}/>}/>
        </div> */}
        <Services/>
      </section>
    </>
  );
}
