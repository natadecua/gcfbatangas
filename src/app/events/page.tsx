import type { Metadata } from 'next'
import { CalendarIcon, ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Events - GCF Batangas',
  description: 'Stay up to date with all the events and activities happening at GCF Batangas. Join us for worship, fellowship, and community.',
}

const upcomingEvents = [
  {
    id: 1,
    title: 'Easter Celebration Service',
    date: '2024-03-31',
    time: '9:00 AM',
    location: 'Main Sanctuary',
    category: 'Worship Service',
    description: 'Join us for a special celebration of Christ\'s resurrection with inspiring worship, powerful messages, and fellowship.',
    registrationRequired: false,
    featured: true,
    image: '/images/easter-service.jpg',
  },
  {
    id: 2,
    title: 'Community Outreach Program',
    date: '2024-04-06',
    time: '2:00 PM',
    location: 'Batangas City Plaza',
    category: 'Outreach',
    description: 'Serving our community with love and compassion through food distribution and prayer ministry.',
    registrationRequired: true,
    featured: false,
  },
  {
    id: 3,
    title: 'Youth Camp Registration Opens',
    date: '2024-04-15',
    time: 'All Day',
    location: 'Church Office',
    category: 'Youth',
    description: 'Registration opens for our annual youth summer camp. Limited spots available!',
    registrationRequired: true,
    featured: true,
  },
  {
    id: 4,
    title: 'Women\'s Conference 2024',
    date: '2024-04-20',
    time: '9:00 AM - 4:00 PM',
    location: 'Fellowship Hall',
    category: 'Conference',
    description: 'A day of worship, teaching, and fellowship for women of all ages. Guest speaker: Dr. Grace Martinez.',
    registrationRequired: true,
    featured: false,
  },
  {
    id: 5,
    title: 'Men\'s Prayer Breakfast',
    date: '2024-04-27',
    time: '8:00 AM',
    location: 'Fellowship Hall',
    category: 'Men\'s Ministry',
    description: 'Monthly gathering for men to pray, fellowship, and encourage one another.',
    registrationRequired: false,
    featured: false,
  },
  {
    id: 6,
    title: 'Family Fun Day',
    date: '2024-05-04',
    time: '10:00 AM - 3:00 PM',
    location: 'Church Grounds',
    category: 'Family',
    description: 'A day of games, food, and fun for the whole family. Bring your friends and neighbors!',
    registrationRequired: false,
    featured: true,
  },
]

const recurringEvents = [
  {
    title: 'Sunday Worship Services',
    schedule: 'Every Sunday',
    time: '9:00 AM & 11:00 AM',
    location: 'Main Sanctuary',
    description: 'Join us for inspiring worship and biblical teaching.',
  },
  {
    title: 'Wednesday Prayer Meeting',
    schedule: 'Every Wednesday',
    time: '7:00 PM',
    location: 'Prayer Room',
    description: 'Corporate prayer for our church, community, and world.',
  },
  {
    title: 'Friday Youth Service',
    schedule: 'Every Friday',
    time: '7:00 PM',
    location: 'Youth Center',
    description: 'Dynamic worship and teaching for young people.',
  },
  {
    title: 'Saturday Bible Study',
    schedule: 'Every Saturday',
    time: '2:00 PM',
    location: 'Classroom A',
    description: 'Deep dive into God\'s Word with discussion and application.',
  },
]

const categories = [
  'All Events',
  'Worship Service',
  'Outreach',
  'Youth',
  'Conference',
  'Men\'s Ministry',
  'Women\'s Ministry',
  'Family',
]

export default function Events() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Events
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay connected with all the exciting events happening at GCF Batangas. From worship 
              services to community outreach, there's always something meaningful happening.
            </p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All Events'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't miss these special upcoming events at GCF Batangas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {upcomingEvents
              .filter((event) => event.featured)
              .map((event) => (
                <article
                  key={event.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[16/9] bg-gray-100"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-x-4 text-xs">
                      <span className="rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-600">
                        {event.category}
                      </span>
                      {event.registrationRequired && (
                        <span className="rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-600">
                          Registration Required
                        </span>
                      )}
                    </div>
                    <div className="group relative mt-4">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        {event.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {event.description}
                      </p>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPinIcon className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="w-full rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                        {event.registrationRequired ? 'Register Now' : 'Learn More'}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>

      {/* All Upcoming Events */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Upcoming Events
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-x-4 text-xs mb-3">
                        <span className="rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-600">
                          {event.category}
                        </span>
                        {event.registrationRequired && (
                          <span className="rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-600">
                            Registration Required
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-6">
                      <button className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                        {event.registrationRequired ? 'Register' : 'Details'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recurring Events */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Regular Activities
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us for these weekly activities that happen throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recurringEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-gray-400" />
                    {event.schedule}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-2 text-gray-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-2 text-gray-400" />
                    {event.location}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-primary-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Subscribe to our newsletter to receive updates about upcoming events, special announcements, 
              and ministry opportunities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}