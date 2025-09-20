import type { Metadata } from 'next'
import { CalendarIcon, PlayIcon, ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sermons - GCF Batangas',
  description: 'Listen to inspiring messages from GCF Batangas. Browse our sermon archive and grow in your faith.',
}

const sermons = [
  {
    id: 1,
    title: 'Walking in Faith',
    speaker: 'Pastor John Dela Cruz',
    date: 'March 24, 2024',
    series: 'Living by Faith',
    duration: '35 min',
    description: 'Discover what it means to walk by faith and not by sight in our daily lives.',
    audioUrl: '#',
    videoUrl: '#',
    scripture: 'Hebrews 11:1-6',
  },
  {
    id: 2,
    title: 'The Power of Prayer',
    speaker: 'Pastor Maria Santos',
    date: 'March 17, 2024',
    series: 'Spiritual Disciplines',
    duration: '28 min',
    description: 'Understanding the importance and impact of prayer in the life of a believer.',
    audioUrl: '#',
    videoUrl: '#',
    scripture: 'Matthew 6:5-15',
  },
  {
    id: 3,
    title: 'Love in Action',
    speaker: 'Pastor Miguel Rodriguez',
    date: 'March 10, 2024',
    series: 'The Heart of the Gospel',
    duration: '32 min',
    description: 'How love should be demonstrated through our actions and service to others.',
    audioUrl: '#',
    videoUrl: '#',
    scripture: '1 John 3:16-18',
  },
  {
    id: 4,
    title: 'Finding Hope in Difficult Times',
    speaker: 'Pastor John Dela Cruz',
    date: 'March 3, 2024',
    series: 'Hope in Christ',
    duration: '40 min',
    description: 'God\'s promises provide hope and strength during life\'s challenges.',
    audioUrl: '#',
    videoUrl: '#',
    scripture: 'Romans 8:28-39',
  },
  {
    id: 5,
    title: 'The Joy of Serving',
    speaker: 'Pastor Maria Santos',
    date: 'February 25, 2024',
    series: 'Discovering Your Purpose',
    duration: '30 min',
    description: 'Finding fulfillment and joy through serving God and others.',
    audioUrl: '#',
    videoUrl: '#',
    scripture: 'Mark 10:42-45',
  },
  {
    id: 6,
    title: 'Building Strong Relationships',
    speaker: 'Pastor Miguel Rodriguez',
    date: 'February 18, 2024',
    series: 'Community Life',
    duration: '33 min',
    description: 'Biblical principles for building lasting, meaningful relationships.',
    audioUrl: '#',
    videoUrl: '#',
    scripture: 'Ephesians 4:25-32',
  },
]

const series = [
  { name: 'All Series', value: 'all' },
  { name: 'Living by Faith', value: 'living-by-faith' },
  { name: 'Spiritual Disciplines', value: 'spiritual-disciplines' },
  { name: 'The Heart of the Gospel', value: 'heart-gospel' },
  { name: 'Hope in Christ', value: 'hope-christ' },
  { name: 'Discovering Your Purpose', value: 'purpose' },
  { name: 'Community Life', value: 'community' },
]

export default function Sermons() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sermons
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Listen to inspiring messages that will encourage your faith and help you grow in your 
              relationship with God. New sermons are added weekly.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {/* Search Bar */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Search sermons..."
                className="block w-full rounded-md border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Filter by Series */}
            <div className="mt-6">
              <label htmlFor="series" className="block text-sm font-medium leading-6 text-gray-900">
                Filter by Series
              </label>
              <select
                id="series"
                className="mt-2 block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              >
                {series.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Sermon List */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {sermons.map((sermon) => (
                <article
                  key={sermon.id}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-x-4 text-xs">
                        <div className="flex items-center gap-x-2 text-gray-500">
                          <CalendarIcon className="h-4 w-4" />
                          <time dateTime={sermon.date}>{sermon.date}</time>
                        </div>
                        <div className="flex items-center gap-x-2 text-gray-500">
                          <ClockIcon className="h-4 w-4" />
                          <span>{sermon.duration}</span>
                        </div>
                        <span className="rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-600">
                          {sermon.series}
                        </span>
                      </div>
                      <div className="group relative mt-4">
                        <h3 className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-gray-600">
                          {sermon.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          by {sermon.speaker}
                        </p>
                        <p className="mt-3 text-base leading-6 text-gray-600">
                          {sermon.description}
                        </p>
                        {sermon.scripture && (
                          <p className="mt-2 text-sm font-medium text-primary-600">
                            Scripture: {sermon.scripture}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-0 sm:ml-8 flex flex-col sm:flex-row gap-3">
                      <button className="inline-flex items-center gap-x-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                        <PlayIcon className="h-4 w-4" />
                        Watch
                      </button>
                      <button className="inline-flex items-center gap-x-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Audio
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Load More Sermons
            </button>
          </div>
        </div>
      </div>

      {/* Current Series Highlight */}
      <div className="bg-primary-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Current Series: Living by Faith
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Join us as we explore what it means to live by faith in every area of our lives. 
              This series will challenge and encourage you to trust God more deeply.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Watch Latest Message
              </button>
              <button className="text-sm font-semibold leading-6 text-white">
                View All Messages <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Podcast Info */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Listen on Your Favorite Platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Subscribe to our podcast and never miss a message. Available on all major podcast platforms.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
                Apple Podcasts
              </button>
              <button className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500">
                Spotify
              </button>
              <button className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
                Google Podcasts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}