import type { Metadata } from 'next'
import { 
  UserGroupIcon, 
  HeartIcon, 
  MusicalNoteIcon, 
  BookOpenIcon,
  AcademicCapIcon,
  ClockIcon,
  GlobeAltIcon,
  HomeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Ministries - GCF Batangas',
  description: 'Discover the various ministries at GCF Batangas and find your place to serve and grow in community.',
}

const ministries = [
  {
    name: 'Youth Ministry',
    description: 'Empowering young people to grow in their faith and make a difference in their generation.',
    icon: UserGroupIcon,
    details: 'Ages 13-25 • Fridays 7:00 PM',
    features: ['Youth services', 'Small groups', 'Camps and retreats', 'Leadership development'],
    leader: 'Pastor Miguel Rodriguez',
    contact: 'youth@gcfbatangas.org',
  },
  {
    name: 'Children\'s Ministry',
    description: 'Creating a fun and safe environment where children can learn about God\'s love.',
    icon: HeartIcon,
    details: 'Ages 3-12 • Sundays during service',
    features: ['Age-appropriate lessons', 'Games and activities', 'Vacation Bible School', 'Family events'],
    leader: 'Teacher Sarah Lim',
    contact: 'kids@gcfbatangas.org',
  },
  {
    name: 'Worship Ministry',
    description: 'Leading the congregation in heartfelt worship through music and creative arts.',
    icon: MusicalNoteIcon,
    details: 'Various age groups • Rehearsals Thursdays 7:00 PM',
    features: ['Vocal team', 'Instrumental team', 'Sound and media', 'Dance ministry'],
    leader: 'Mark Gonzales',
    contact: 'worship@gcfbatangas.org',
  },
  {
    name: 'Women\'s Ministry',
    description: 'Encouraging women to grow in their relationship with God and each other.',
    icon: BookOpenIcon,
    details: 'All ages • Saturdays 2:00 PM',
    features: ['Bible studies', 'Conferences and retreats', 'Mentorship programs', 'Service projects'],
    leader: 'Pastor Maria Santos',
    contact: 'women@gcfbatangas.org',
  },
  {
    name: 'Men\'s Ministry',
    description: 'Building strong, godly men who lead with integrity in their families and communities.',
    icon: AcademicCapIcon,
    details: 'All ages • First Saturday monthly 8:00 AM',
    features: ['Men\'s breakfasts', 'Discipleship groups', 'Service projects', 'Outdoor activities'],
    leader: 'Deacon Carlos Reyes',
    contact: 'men@gcfbatangas.org',
  },
  {
    name: 'Prayer Ministry',
    description: 'Interceding for our church, community, and world through organized prayer efforts.',
    icon: ClockIcon,
    details: 'All ages • Wednesdays 7:00 PM',
    features: ['Corporate prayer', 'Prayer chains', 'Healing prayer', 'Prayer workshops'],
    leader: 'Elder Grace Mendoza',
    contact: 'prayer@gcfbatangas.org',
  },
  {
    name: 'Missions Ministry',
    description: 'Sharing the Gospel locally and globally through evangelism and humanitarian efforts.',
    icon: GlobeAltIcon,
    details: 'All ages • Various times',
    features: ['Local outreach', 'Mission trips', 'Community service', 'Evangelism training'],
    leader: 'Pastor David Cruz',
    contact: 'missions@gcfbatangas.org',
  },
  {
    name: 'Small Groups',
    description: 'Building authentic relationships and growing in faith through intimate fellowship.',
    icon: HomeIcon,
    details: 'All ages • Various locations and times',
    features: ['Home-based groups', 'Bible study', 'Fellowship meals', 'Life application'],
    leader: 'Small Groups Coordinator',
    contact: 'smallgroups@gcfbatangas.org',
  },
]

const volunteerOpportunities = [
  {
    title: 'Ushers and Greeters',
    description: 'Be the first friendly face people see when they visit our church.',
    commitment: 'Once a month on Sundays',
  },
  {
    title: 'Sound and Media Team',
    description: 'Help with audio, video, and presentation technology during services.',
    commitment: 'Training provided • Flexible schedule',
  },
  {
    title: 'Parking Ministry',
    description: 'Guide and assist with parking, especially during busy services.',
    commitment: 'Sunday mornings • Weather dependent',
  },
  {
    title: 'Coffee and Hospitality',
    description: 'Serve refreshments and create a welcoming environment for fellowship.',
    commitment: 'Setup and cleanup • Sunday mornings',
  },
]

export default function Ministries() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ministries
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find your place to serve, grow, and connect with others. Whether you're looking to 
              serve or simply wanting to get involved, there's a ministry for you.
            </p>
          </div>
        </div>
      </div>

      {/* Ministries Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Ministries
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Each ministry is designed to help you grow in your faith while serving others and 
              building meaningful relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {ministries.map((ministry) => (
              <div
                key={ministry.name}
                className="relative bg-white p-8 shadow-sm ring-1 ring-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ministry.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{ministry.name}</h3>
                    <p className="mt-1 text-sm text-primary-600">{ministry.details}</p>
                    <p className="mt-3 text-base text-gray-600">{ministry.description}</p>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900">What We Offer:</h4>
                      <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                        {ministry.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div>
                          <p className="text-sm text-gray-900">
                            <span className="font-medium">Led by:</span> {ministry.leader}
                          </p>
                          <p className="text-sm text-gray-600">{ministry.contact}</p>
                        </div>
                        <div className="mt-3 sm:mt-0">
                          <button className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                            Get Involved
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Volunteer Opportunities
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Looking for a way to serve? These volunteer opportunities are perfect for getting 
              started or trying something new.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {volunteerOpportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{opportunity.title}</h3>
                  <p className="mt-2 text-gray-600">{opportunity.description}</p>
                  <p className="mt-3 text-sm font-medium text-primary-600">
                    Commitment: {opportunity.commitment}
                  </p>
                  <button className="mt-4 text-sm font-semibold text-primary-600 hover:text-primary-500">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Involved?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Whether you're new to church or have been attending for years, there's a place for 
              you to serve and grow. Take the next step today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Contact Us
              </button>
              <button className="text-sm font-semibold leading-6 text-white">
                Fill Out Interest Form <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ministry Leadership */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Questions About Ministries?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our ministry leaders are here to help you find the right place to serve and grow. 
              Don't hesitate to reach out with any questions.
            </p>
            <div className="mt-10">
              <button className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                Contact Ministry Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}