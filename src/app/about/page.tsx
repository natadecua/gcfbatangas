import type { Metadata } from 'next'
import Image from 'next/image'
import { UserGroupIcon, HeartIcon, BookOpenIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'About Us - GCF Batangas',
  description: 'Learn about Gospel City Fellowship Batangas - our mission, vision, values, and leadership team.',
}

const values = [
  {
    name: 'Biblical Truth',
    description: 'We believe in the authority and truth of God\'s Word as our foundation for faith and life.',
    icon: BookOpenIcon,
  },
  {
    name: 'Community',
    description: 'We are committed to building authentic relationships and caring for one another.',
    icon: UserGroupIcon,
  },
  {
    name: 'Compassion',
    description: 'We serve others with love, following Christ\'s example of selfless service.',
    icon: HeartIcon,
  },
  {
    name: 'Global Mission',
    description: 'We are dedicated to sharing the Gospel locally and around the world.',
    icon: GlobeAltIcon,
  },
]

const leadership = [
  {
    name: 'Pastor John Dela Cruz',
    role: 'Senior Pastor',
    bio: 'Pastor John has been serving at GCF Batangas for over 15 years. He is passionate about teaching God\'s Word and discipling others.',
    image: '/images/placeholder-pastor.jpg',
  },
  {
    name: 'Pastor Maria Santos',
    role: 'Associate Pastor',
    bio: 'Pastor Maria leads our women\'s ministry and counseling programs. She has a heart for helping people grow in their faith.',
    image: '/images/placeholder-pastor.jpg',
  },
  {
    name: 'Pastor Miguel Rodriguez',
    role: 'Youth Pastor',
    bio: 'Pastor Miguel is passionate about reaching young people and helping them discover their purpose in Christ.',
    image: '/images/placeholder-pastor.jpg',
  },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About GCF Batangas
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Gospel City Fellowship Batangas is a vibrant Christian community dedicated to making 
              disciples of Jesus Christ through worship, fellowship, and service to our community.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To make disciples of Jesus Christ who love God, love others, and transform communities 
                  through the power of the Gospel. We exist to glorify God by helping people take their 
                  next steps toward Jesus.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We believe that every person is created by God with purpose and value. Our mission is to 
                  help people discover that purpose through a relationship with Jesus Christ and to equip 
                  them to live it out in their daily lives.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Vision</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To be a church that reflects the heart of God for our city and beyond. We envision a 
                  community where people from all walks of life can encounter Jesus, grow in their faith, 
                  and make a lasting impact in the world.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We dream of seeing Batangas transformed by the love of Christ, with disciples who are 
                  actively engaged in their communities, workplaces, and families, bringing hope and 
                  healing wherever they go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Stand For
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core values guide everything we do as a church community and shape how we 
              relate to God, each other, and our world.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {values.map((value) => (
                <div key={value.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Gospel City Fellowship Batangas was founded in 2005 with a heart to reach the people of 
              Batangas with the love of Jesus Christ. What started as a small group of believers meeting 
              in a home has grown into a thriving community of faith.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <figure className="border-l border-primary-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  "We started with a simple vision: to create a place where people could encounter God's 
                  love and grow in their faith together. Today, we're amazed at how God has grown our 
                  church family and expanded our impact in the community."
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Pastor John Dela Cruz</div>
                    <div className="text-gray-600">Founding Pastor</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
              <p>
                Over the years, we've had the privilege of witnessing countless lives transformed by the 
                Gospel. From baptisms to weddings, from small group gatherings to community outreach 
                events, every milestone has been a testament to God's faithfulness.
              </p>
              <p className="mt-8">
                Today, GCF Batangas is home to hundreds of families from diverse backgrounds, all united 
                by our love for Jesus and our commitment to serving Him. We continue to grow, not just 
                in numbers, but in our understanding of what it means to be disciples of Christ.
              </p>
              <p className="mt-8">
                As we look to the future, we remain committed to our founding vision while adapting to 
                meet the changing needs of our community. We believe that God has great things in store 
                for GCF Batangas and for every person who calls this place home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our pastors and leaders are dedicated to serving God and shepherding our church family 
              with wisdom, compassion, and integrity.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {leadership.map((person) => (
              <li key={person.name}>
                <div className="aspect-[3/2] w-full rounded-2xl bg-gray-100"></div>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-primary-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Statement of Faith */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Believe
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our faith is grounded in the Bible and centered on Jesus Christ. Here are the core 
              beliefs that guide our church.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">The Bible</h3>
                <p className="text-gray-600">
                  We believe the Bible is the inspired, infallible Word of God and our final authority 
                  for faith and practice.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">God</h3>
                <p className="text-gray-600">
                  We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Jesus Christ</h3>
                <p className="text-gray-600">
                  We believe Jesus is fully God and fully man, who died for our sins and rose again 
                  to give us eternal life.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Salvation</h3>
                <p className="text-gray-600">
                  We believe salvation is by grace alone through faith alone in Christ alone, not by works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}