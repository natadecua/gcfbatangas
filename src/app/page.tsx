import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon, CalendarIcon, ClockIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Worship Services',
    description: 'Join us every Sunday for inspiring worship and biblical teaching.',
    icon: HeartIcon,
    time: 'Sundays at 9:00 AM & 11:00 AM',
  },
  {
    name: 'Small Groups',
    description: 'Connect with others in intimate settings for fellowship and growth.',
    icon: UserGroupIcon,
    time: 'Various times throughout the week',
  },
  {
    name: 'Youth Ministry',
    description: 'Engaging programs for young people to grow in faith and community.',
    icon: UserGroupIcon,
    time: 'Fridays at 7:00 PM',
  },
  {
    name: 'Prayer Meeting',
    description: 'Gather together in prayer and seek God\'s presence.',
    icon: ClockIcon,
    time: 'Wednesdays at 7:00 PM',
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Easter Celebration Service',
    date: 'March 31, 2024',
    time: '9:00 AM',
    description: 'Join us for a special celebration of Christ\'s resurrection.',
  },
  {
    id: 2,
    title: 'Community Outreach Program',
    date: 'April 6, 2024',
    time: '2:00 PM',
    description: 'Serving our community with love and compassion.',
  },
  {
    id: 3,
    title: 'Youth Camp Registration',
    date: 'April 15, 2024',
    time: 'All Day',
    description: 'Registration opens for our annual youth summer camp.',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to <span className="text-primary-600">GCF Batangas</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Gospel City Fellowship Batangas is a community committed to making disciples of Jesus Christ.
              Join us as we worship together, grow in faith, and serve our community with love.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/connect" className="btn-primary">
                Visit Us
                <ChevronRightIcon className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">What We Offer</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Come As You Are
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At GCF Batangas, we believe everyone is welcome. Join us for meaningful worship, 
              authentic community, and opportunities to serve and grow in faith.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                  <dd className="mt-1 text-sm font-medium text-primary-600">
                    {feature.time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Join us for these upcoming events and activities in our church community.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article key={event.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="flex items-center gap-x-2 text-gray-500">
                    <CalendarIcon className="h-4 w-4" />
                    <time dateTime={event.date}>{event.date}</time>
                  </div>
                  <div className="flex items-center gap-x-2 text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {event.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/events"
              className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
            >
              View all events <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Connect?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              We&apos;d love to have you join our church family. Come as you are and discover 
              what it means to be part of a loving, caring community.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/connect"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Plan Your Visit
              </Link>
              <Link href="/giving" className="text-sm font-semibold leading-6 text-white">
                Give Online <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}