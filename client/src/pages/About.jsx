// import React from 'react'

// export default function About() {
//   return (
//     <div className='py-20 px-4 max-w-6xl mx-auto'>
//       <h1 className='text-3xl font-bold mb-4 text-slate-800'>About j&j Estate</h1>
//       <p className='mb-4 text-slate-700'>j&j Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
//       <p className='mb-4 text-slate-700'>
//       Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
//       </p>
//       <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
//     </div>
//   )
// }
import React from 'react';
import houseImage from '../assets/house1.jpg'; // Add your image to the assets folder

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h1>
        <div className="flex pl-2 h-auto justify-between flex-row mt-3 mx-1 ml-2 border-1 rounded-md flex-wrap ">
                <div className="bgimg bg-no-repeat bg-cover  h-[68vh] pl-3 flex justify-center border-solid w-[56%] rounded-md  ">
                    <img className="  shadow-lg shadow-slate-300 rounded-lg" src={houseImage} alt='' />
                </div>

                <div className=" m-1 w-[42%] font-serif bg-gradient-to-r from-sky-50 via-slate-100 to-slate-200">
                    <div className=" mt-32 ml-8 text-2xl text-left font-medium text-blue-900 animate-bounce">  Welcome to j&j Estate </div>
                    <div className=" ml-12 text-3xl pr-5 text-left font-bold text-blue-900 uppercase">  helping people<br/> find their perfect <br />home
                    </div>
                </div>
            </div>
        {/* <div className="flex flex-col md:flex-row mb-10">
          <div className="md:w-1/2">
            <img src={houseImage} alt="House" className="rounded-lg shadow-lg mb-6 md:mb-0" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-gray-700 mb-4">
              Welcome to <span className="font-semibold">j&j Estate</span>, your premier destination for buying, selling, and renting properties. Our mission is to provide a seamless and stress-free real estate experience for our clients. With years of industry expertise and a passion for helping people find their perfect home, we are dedicated to delivering outstanding service and exceptional results.
            </p>
            <p className="text-gray-700">
              At <span className="font-semibold">j&j Estate</span>, we believe in building lasting relationships based on trust, integrity, and transparency. Our comprehensive suite of services includes property management, home staging, and professional photography, ensuring that your property stands out in the competitive market.
            </p>
          </div>
        </div> */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">How Our Site Works</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Creating Users</h3>
              <p className="text-gray-700">
                Users can create an account by providing their basic information such as name, email, and password. Once registered, users can log in to their personalized dashboard.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Uploading House Data</h3>
              <p className="text-gray-700">
                Registered users can upload details of the houses they want to sell or rent. The process involves filling out forms with property details such as location, price, size, and uploading high-quality images of the property.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Searching and Filtering</h3>
              <p className="text-gray-700">
                Visitors can search for properties using various filters such as location, price range, and property type. Our advanced search functionality ensures that users can find the properties that best match their needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Contacting Sellers</h3>
              <p className="text-gray-700">
                Interested buyers or renters can contact sellers directly through the site. Our messaging system ensures that communication between buyers and sellers is secure and efficient.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800">500+</h3>
            <p className="text-gray-700">Properties Listed</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800">100+</h3>
            <p className="text-gray-700">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800">50+</h3>
            <p className="text-gray-700">Cities Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
