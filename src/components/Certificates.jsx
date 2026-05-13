import React, { useEffect, useRef } from 'react'

// Add your certificate image imports here as you add them:
// import cert1 from '../assets/images/cert1.jpeg'

// Placeholder certificates — replace src values with real imports
const certificates = [
  {
    id: 1,
    src: null, // replace with: cert1
    alt: 'Certificate 1',
    title: 'Java Full Stack Development',
  },
  {
    id: 2,
    src: null,
    alt: 'Certificate 2',
    title: 'Web Development Fundamentals',
  },
  {
    id: 3,
    src: null,
    alt: 'Certificate 3',
    title: 'React.js Advanced Concepts',
  },
  // Add more certificates here
]

function CertPlaceholder({ title }) {
  return (
    <div
      className="w-full flex flex-col items-center justify-center rounded-lg border border-[#1788ae]/30 gap-3"
      style={{
        height: '250px',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f1a22 100%)',
        boxShadow: '0 0 30px rgba(23,136,174,0.1)',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
        fill="none" stroke="#1788ae" strokeWidth="1" opacity="0.5">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
      <span className="text-sm text-[#1788ae]/60 font-medium px-4 text-center">{title}</span>
      <span className="text-xs text-[#555]">Add certificate image in data/certificates</span>
    </div>
  )
}

export default function Certificates() {
  const swiperRef = useRef(null)
  const swiperInstanceRef = useRef(null)

  useEffect(() => {
    if (!window.Swiper) return

    const timer = setTimeout(() => {
      if (swiperRef.current && !swiperInstanceRef.current) {
        swiperInstanceRef.current = new window.Swiper('.certificateSwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        })

        // Stop autoplay on hover
        const container = swiperRef.current
        container.addEventListener('mouseover', () => swiperInstanceRef.current?.autoplay?.stop())
        container.addEventListener('mouseout', () => swiperInstanceRef.current?.autoplay?.start())
      }
    }, 300)

    return () => {
      clearTimeout(timer)
      swiperInstanceRef.current?.destroy?.()
      swiperInstanceRef.current = null
    }
  }, [])

  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-12">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        My Certificates
      </h2>

      <div ref={swiperRef} className="swiper certificateSwiper mt-8 py-8">
        <div className="swiper-wrapper">
          {certificates.map((cert) => (
            <div key={cert.id} className="swiper-slide certificate-slide">
              {cert.src ? (
                <img
                  src={cert.src}
                  alt={cert.alt}
                  style={{ height: '250px' }}
                  className="certificate-img"
                />
              ) : (
                <div className="w-full max-w-sm px-4">
                  <CertPlaceholder title={cert.title} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </section>
  )
}
