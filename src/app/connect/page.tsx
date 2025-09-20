import type { Metadata } from 'next'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Connect - GCF Batangas',
  description: 'Connect with GCF Batangas. Plan your visit, get in touch, and learn how to get involved in our church community.',
}

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Location',
    details: ['123 Church Street', 'Batangas City, Batangas 4200', 'Philippines'],
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: ['(043) 123-4567', '(0917) 123-4567'],
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['info@gcfbatangas.org', 'pastor@gcfbatangas.org'],
  },
  {
    icon: ClockIcon,
    title: 'Office Hours',
    details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 12:00 PM', 'Sunday: Closed'],
  },
]

const serviceSchedule = [
  {
    time: '9:00 AM',
    service: 'First Service',
    description: 'Traditional worship with hymns and contemporary songs',
    audience: 'All ages welcome',
  },
  {
    time: '11:00 AM',
    service: 'Second Service',
    description: 'Contemporary worship with full band and modern songs',
    audience: 'All ages welcome',
  },
  {
    time: '11:00 AM',
    service: 'Kids Church',
    description: 'Age-appropriate activities and lessons for children',
    audience: 'Ages 3-12',
  },
]

const nextSteps = [
  {
    icon: UserGroupIcon,
    title: 'Join a Small Group',
    description: 'Connect with others in an intimate setting for Bible study and fellowship.',
    action: 'Find a Group',
  },
  {
    icon: QuestionMarkCircleIcon,
    title: 'Attend New Members Class',
    description: 'Learn more about our church, beliefs, and how to get involved.',
    action: 'Sign Up',
  },
  {
    icon: CalendarIcon,
    title: 'Serve in Ministry',
    description: 'Use your gifts and talents to serve God and others in our community.',
    action: 'Explore Ministries',
  },
]

export default function Connect() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connect With Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're excited to meet you! Whether you're visiting for the first time or looking to 
              get more involved, we're here to help you take your next step.
            </p>
          </div>
        </div>
      </div>

      {/* Plan Your Visit */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Plan Your Visit
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We can't wait to welcome you to GCF Batangas! Here's what you can expect when you visit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {serviceSchedule.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">{service.time}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.service}</h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <p className="text-sm font-medium text-primary-600">{service.audience}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Welcoming Atmosphere</h4>
                  <p className="text-gray-600 text-sm">
                    Come as you are! Our greeters will help you find parking, childcare, and seating.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Inspiring Worship</h4>
                  <p className="text-gray-600 text-sm">
                    Experience meaningful worship through music, prayer, and biblical teaching.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Connect & Fellowship</h4>
                  <p className="text-gray-600 text-sm">
                    Stay after service for coffee and fellowship. We'd love to meet you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions or need more information? We're here to help and would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <item.icon className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="mt-2 block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="mt-2 block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-2 block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-2 block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                >
                  <option>General Inquiry</option>
                  <option>First Time Visit</option>
                  <option>Prayer Request</option>
                  <option>Ministry Information</option>
                  <option>Event Information</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  className="mt-2 block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Take Your Next Step
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to get more involved? Here are some great ways to connect deeper with our church family.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {nextSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center"
              >
                <step.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <button className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                  {step.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're conveniently located in the heart of Batangas City. Free parking is available.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be embedded here</p>
              <p className="text-sm text-gray-500 mt-2">
                123 Church Street, Batangas City, Batangas 4200
              </p>
              <button className="mt-4 inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}