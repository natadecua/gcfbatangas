import type { Metadata } from 'next'
import { 
  HeartIcon, 
  GiftIcon, 
  CreditCardIcon, 
  BanknotesIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Online Giving - GCF Batangas',
  description: 'Support the ministry of GCF Batangas through secure online giving. Your generosity helps us serve our community and spread the Gospel.',
}

const givingOptions = [
  {
    title: 'One-Time Gift',
    description: 'Make a single donation to support our ministry.',
    icon: GiftIcon,
    features: ['Any amount', 'Immediate impact', 'Simple process'],
  },
  {
    title: 'Recurring Giving',
    description: 'Set up automatic monthly or weekly donations.',
    icon: ClockIcon,
    features: ['Convenient', 'Consistent support', 'Easy to manage'],
  },
  {
    title: 'Special Projects',
    description: 'Support specific ministry projects and initiatives.',
    icon: HeartIcon,
    features: ['Targeted giving', 'Project updates', 'Clear impact'],
  },
]

const ministryFunds = [
  {
    name: 'General Fund',
    description: 'Supports overall church operations, staff, and general ministry needs.',
    allocation: 'Operations, staff salaries, utilities, maintenance',
  },
  {
    name: 'Missions Fund',
    description: 'Supports local and global missions, evangelism, and church planting.',
    allocation: 'Missionary support, outreach programs, evangelism training',
  },
  {
    name: 'Building Fund',
    description: 'Helps maintain and improve our church facilities and infrastructure.',
    allocation: 'Facility maintenance, improvements, equipment upgrades',
  },
  {
    name: 'Benevolence Fund',
    description: 'Assists church members and community members in times of need.',
    allocation: 'Emergency assistance, food programs, community support',
  },
]

const paymentMethods = [
  {
    name: 'Credit/Debit Card',
    icon: CreditCardIcon,
    description: 'Visa, Mastercard, American Express accepted',
    processing: 'Instant processing',
  },
  {
    name: 'Bank Transfer',
    icon: BanknotesIcon,
    description: 'Direct bank-to-bank transfer',
    processing: '1-2 business days',
  },
  {
    name: 'GCash',
    icon: CreditCardIcon,
    description: 'Mobile wallet payment',
    processing: 'Instant processing',
  },
]

const securityFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Secure Encryption',
    description: 'All transactions are protected with bank-level security',
  },
  {
    icon: CheckCircleIcon,
    title: 'Verified Platform',
    description: 'We use trusted, industry-standard payment processors',
  },
  {
    icon: ClockIcon,
    title: 'Instant Confirmation',
    description: 'Receive immediate confirmation for all donations',
  },
]

export default function Giving() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Online Giving
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Your generosity makes a difference in our church and community. Thank you for 
              partnering with us in ministry through your faithful giving.
            </p>
          </div>
        </div>
      </div>

      {/* Why We Give */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why We Give
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Giving is an act of worship and obedience to God. When we give, we participate 
              in God's work and express our trust in His provision.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="bg-primary-50 rounded-2xl p-8 mb-12">
              <blockquote className="text-center">
                <p className="text-xl font-medium text-gray-900 mb-4">
                  "Each of you should give what you have decided in your heart to give, not reluctantly 
                  or under compulsion, for God loves a cheerful giver."
                </p>
                <cite className="text-primary-600 font-semibold">2 Corinthians 9:7</cite>
              </blockquote>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <HeartIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Worship</h3>
                <p className="text-gray-600">
                  Giving is an expression of our love and devotion to God, acknowledging Him as 
                  the source of all blessings.
                </p>
              </div>
              <div className="text-center">
                <GiftIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ministry</h3>
                <p className="text-gray-600">
                  Your gifts enable us to carry out God's work, reach our community, and 
                  support those in need.
                </p>
              </div>
              <div className="text-center">
                <CheckCircleIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600">
                  Giving helps us grow in faith, trust, and dependence on God while storing 
                  treasures in heaven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giving Options */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ways to Give
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the giving option that works best for you. Every gift, regardless of size, 
              makes a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {givingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <option.icon className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-2 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-md bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                  Give Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ministry Funds */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Where Your Gifts Go
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe in financial transparency. Here's how your donations support our various 
              ministry areas and community outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {ministryFunds.map((fund, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{fund.name}</h3>
                <p className="text-gray-600 mb-4">{fund.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Allocation:</p>
                  <p className="text-sm text-gray-600">{fund.allocation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Online Giving Form */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Give Online
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Complete your donation securely through our online giving platform.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900 mb-4">
                    Giving Type
                  </label>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                      <input type="radio" name="giving-type" value="one-time" className="sr-only" defaultChecked />
                      <span className="flex flex-1">
                        <span className="flex flex-col">
                          <span className="block text-sm font-medium text-gray-900">One-Time</span>
                          <span className="mt-1 flex items-center text-sm text-gray-500">Single donation</span>
                        </span>
                      </span>
                    </label>
                    <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                      <input type="radio" name="giving-type" value="recurring" className="sr-only" />
                      <span className="flex flex-1">
                        <span className="flex flex-col">
                          <span className="block text-sm font-medium text-gray-900">Recurring</span>
                          <span className="mt-1 flex items-center text-sm text-gray-500">Monthly giving</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                    Amount (PHP)
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      placeholder="0.00"
                      className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[500, 1000, 2000, 5000].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        ₱{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="fund" className="block text-sm font-medium leading-6 text-gray-900">
                    Designation
                  </label>
                  <select
                    id="fund"
                    name="fund"
                    className="mt-2 block w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  >
                    <option>General Fund</option>
                    <option>Missions Fund</option>
                    <option>Building Fund</option>
                    <option>Benevolence Fund</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900 mb-4">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    {paymentMethods.map((method, index) => (
                      <label
                        key={index}
                        className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                      >
                        <input type="radio" name="payment-method" className="sr-only" defaultChecked={index === 0} />
                        <method.icon className="h-6 w-6 text-gray-400 mr-4" />
                        <span className="flex flex-1 justify-between">
                          <span className="flex flex-col">
                            <span className="block text-sm font-medium text-gray-900">{method.name}</span>
                            <span className="mt-1 text-sm text-gray-500">{method.description}</span>
                          </span>
                          <span className="text-sm text-gray-500">{method.processing}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Trust */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Safe & Secure
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your financial information is protected with the highest level of security.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Ways to Give */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Other Ways to Give
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Prefer to give in person or through other methods? We offer several options 
              for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">During Service</h3>
              <p className="text-gray-600 mb-4">
                Drop your offering in the collection boxes during our Sunday services.
              </p>
              <p className="text-sm text-gray-500">Cash or check accepted</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mail</h3>
              <p className="text-gray-600 mb-4">
                Send your check or money order to our church office.
              </p>
              <p className="text-sm text-gray-500">123 Church Street, Batangas City 4200</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bank Transfer</h3>
              <p className="text-gray-600 mb-4">
                Transfer directly to our church bank account.
              </p>
              <p className="text-sm text-gray-500">Contact office for account details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}