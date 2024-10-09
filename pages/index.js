import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Exemplary Well Informed Tapir</title>
          <meta property="og:title" content="Exemplary Well Informed Tapir" />
        </Head>
        <Navbar8
          page4Description={
            <Fragment>
              <span className="home-text10 thq-body-small">
                Get in touch with us for any inquiries or collaborations.
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text11">Explore Products</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text12 thq-link thq-body-small">
                Products
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text13 thq-body-large">Home</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text14 thq-link thq-body-small">Home</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text15 thq-body-large">Contact Us</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text16 thq-body-large">About Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text17 thq-link thq-body-small">About</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text18 thq-body-small">
                Welcome to Raga Tex India Private Limited - Your Home Textiles
                Partner
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text19 thq-body-small">
                Learn more about Raga Tex India Private Limited and our journey
                in the Home Textiles industry.
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text20 thq-link thq-body-small">
                Contact
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text21 thq-body-large">Products</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text22 thq-body-small">
                Explore our wide range of high-quality home textile products.
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text23">Contact Us</span>
            </Fragment>
          }
          logoSrc="/raga_textile_india_private_limited_cover-1500h.jpg"
          rootClassName="navbar8root-class-name"
        ></Navbar8>
        <Hero17
          action2={
            <Fragment>
              <span className="home-text24 thq-body-small">Contact Us</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text25 thq-body-small">
                Explore Our Products
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text26 thq-heading-1">
                Welcome to Raga Tex India Private Limited
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text27 thq-body-large">
                Explore our high-quality home textiles manufacturing and
                exporting services. Based in Coimbatore, India, we are dedicated
                to providing top-notch products to our clients worldwide.
              </span>
            </Fragment>
          }
          image8Src="https://images.unsplash.com/photo-1545042746-ec9e5a59b359?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHRleHRpbGV8ZW58MHx8fHwxNzI4NDQ4NTI4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image9Src="https://images.unsplash.com/photo-1542044801-30d3e45ae49a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM1fHx0ZXh0aWxlfGVufDB8fHx8MTcyODQ0ODYxNXww&amp;ixlib=rb-4.0.3&amp;w=1500"
          image10Src="https://images.unsplash.com/photo-1481325545291-94394fe1cf95?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHRleHRpbGV8ZW58MHx8fHwxNzI4NDQ4NTI4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image11Src="https://images.unsplash.com/photo-1701188516145-6576bf9d68bc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDczfHx0ZXh0aWxlfGVufDB8fHx8MTcyODQ1MTE1Mnww&amp;ixlib=rb-4.0.3&amp;w=1500"
          image12Src="https://images.unsplash.com/photo-1660733099398-0542eb149e43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwOHx8dGV4dGlsZXxlbnwwfHx8fDE3Mjg0NTExODB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image1Src="https://images.unsplash.com/photo-1718002877039-66877e1141b4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyM3x8dGV4dGlsZXxlbnwwfHx8fDE3Mjg0NTExOTd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image2Src="https://images.unsplash.com/photo-1676956969614-a90a61930604?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0OHx8dGV4dGlsZXxlbnwwfHx8fDE3Mjg0NTEyMjd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image3Src="https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGZhYnJpY3xlbnwwfHx8fDE3Mjg0NTEyNTh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image4Src="https://images.unsplash.com/photo-1581345331996-2496ba69a92e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxmYWJyaWN8ZW58MHx8fHwxNzI4NDUxMjY5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image5Src="https://images.unsplash.com/photo-1527650003412-4c330a38fdf5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcxfHxmYWJyaWN8ZW58MHx8fHwxNzI4NDUxMjg0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image6Src="https://images.unsplash.com/photo-1524404886881-0beaa13c7b78?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU4fHxmYWJyaWN8ZW58MHx8fHwxNzI4NDUxMjg0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        ></Hero17>
        <Features24
          feature3Description={
            <Fragment>
              <span className="home-text28 thq-body-small">
                Proximity to Various Textile Centers
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text29 thq-heading-2">
                Advantageous Location
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text30 thq-body-small">
                Weaving Unit at Jambai, Erode
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text31 thq-heading-2">
                Corporate Office and Sewing Unit
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text32 thq-body-small">
                Located at Coimbatore, India
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text33 thq-heading-2">
                Diversified Manufacturing Units
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          heading1={
            <Fragment>
              <span className="home-text34 thq-heading-2">Contact Us</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text35 thq-body-large">
                Reach out to us for all your home textiles manufacturing and
                exporting needs.
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text36">Get in touch</span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature3Description={
            <Fragment>
              <span className="home-text37 thq-body-small">
                With our strong exporting capabilities, we cater to clients
                worldwide with our premium home textile products.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text38 thq-body-small">
                We specialize in manufacturing high-quality home textiles
                including bed linens, curtains, and towels.
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text39 thq-heading-2">
                Customized Designs
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text40 thq-heading-2">
                Quality Home Textiles
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text41 thq-body-small">
                We offer a wide range of customized design options to meet the
                unique preferences of our customers.
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text42 thq-heading-2">
                Global Exporting
              </span>
            </Fragment>
          }
          feature1ImgSrc="https://images.unsplash.com/photo-1524404794194-16bae22718c0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHRleHRpbGV8ZW58MHx8fHwxNzI4NDQ4NTI4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        ></Features25>
        <Steps2
          step1Description={
            <Fragment>
              <span className="home-text43 thq-body-small">
                Raga Tex India Private Limited has its Corporate Office and
                sewing unit located at Coimbatore, India.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text44 thq-body-small">
                Raga Tex India Private Limited has set up a weaving unit at
                Jambai, near Bhavani at Erode, Tamil Nadu.
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text45 thq-heading-2">
                Proximity to Textile Centers
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text46 thq-body-small">
                The company&apos;s location near textile centers like Palladam,
                Tirupur, Erode, Salem, and Karur provides easy access to raw
                materials and sourcing needs.
              </span>
            </Fragment>
          }
          step1Title={
            <Fragment>
              <span className="home-text47 thq-heading-2">
                Corporate Office and Sewing Unit
              </span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text48 thq-heading-2">
                Weaving Unit at Jambai
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text49 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text50 thq-heading-2">Step 4</span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          author2Position={
            <Fragment>
              <span className="home-text51 thq-body-small">
                Purchasing Manager, XYZ Home Goods
              </span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text52 thq-body-small">
                CEO, ABC Textiles Inc.
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text53 thq-body-large">John Doe</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text54 thq-body-large">
                Michael Johnson
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text55 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text56 thq-body-large">Jane Smith</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text57 thq-body-small">
                Interior Designer, PQR Designs
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text58 thq-body-large">Sarah Brown</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text59 thq-body-small">
                Raga Tex India Private Limited has been our trusted partner for
                years. Their quality of products and timely delivery have always
                exceeded our expectations.
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text60 thq-body-small">
                Director of Operations, LMN Furnishings Co.
              </span>
            </Fragment>
          }
          review1={
            <Fragment>
              <span className="home-text61 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text62 thq-heading-2">Testimonials</span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text63 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text64 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text65 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="home-text66 thq-body-large">
                Located at Coimbatore, India
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text67 thq-heading-2">Contact Us</span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text68 thq-body-large">
                Set up at Jambai, near Bhavani at Erode, Tamil Nadu
              </span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text69 thq-heading-3">
                Corporate Office and Sewing Unit
              </span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text70 thq-heading-3">Weaving Unit</span>
            </Fragment>
          }
          location2ImageSrc="/bhavanisagar-dam-1657114748_60dabc6810de828bd48f-1400w.webp"
          location1ImageSrc="/coimbatore1-1400w.png"
        ></Contact10>
        <Footer4
          link5={
            <Fragment>
              <span className="home-text71 thq-body-small">Link 5</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text72 thq-body-small">Link 3</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text73 thq-body-small">Link 1</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text74 thq-body-small">
                Terms of Service
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text75 thq-body-small">Link 2</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text76 thq-body-small">Link 4</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text77 thq-body-small">
                Cookies Settings
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text78 thq-body-small">Privacy Policy</span>
            </Fragment>
          }
          logoSrc="/raga_textile_india_private_limited_cover-1500h.jpg"
          logoAlt="Company Logo"
          rootClassName="footer4root-class-name"
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text14 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text15 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text16 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text21 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
            text-align: center;
          }
          .home-text27 {
            display: inline-block;
            text-align: center;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
            text-align: center;
          }
          .home-text44 {
            display: inline-block;
            text-align: center;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
            text-align: center;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
            text-align: center;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
            text-align: left;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
            text-align: center;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
            text-align: left;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
            text-align: left;
          }
          .home-text64 {
            display: inline-block;
            text-align: left;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
            text-align: center;
          }
          .home-text70 {
            display: inline-block;
            text-align: center;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-text76 {
            display: inline-block;
          }
          .home-text77 {
            display: inline-block;
          }
          .home-text78 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
