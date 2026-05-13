import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitted(true)

      setForm({
        name: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 4000)

    } catch (error) {
      console.log(error)
      alert('Failed to send message')
    }

    setLoading(false)
  }

  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-12">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        Let's Connect
      </h2>

      <div className="flex flex-col md:flex-row items-center mt-10">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md mx-auto">

            {submitted && (
              <div className="mb-4 p-3 rounded-lg bg-[#1788ae]/20 border border-[#1788ae]/50 text-[#1788ae] text-sm text-center">
                ✓ Message sent successfully
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full"
            >

              {/* Name */}
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="bg-gray-800 border-2 outline-none border-gray-600 text-white text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 mb-4"
              />

              {/* Email */}
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="bg-gray-800 border-2 outline-none border-gray-600 text-white text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 mb-4"
              />

              {/* Message */}
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>

              <textarea
                name="message"
                rows={8}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                className="bg-gray-800 border-2 outline-none border-gray-600 text-white text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 mb-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-[#1788ae] hover:bg-[#1280a4] rounded-lg text-sm px-5 py-2.5 transition-colors duration-200"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}