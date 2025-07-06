import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Boost Your Business
                <span className="block text-primary-600">Efficiency</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Streamline your operations and maximize productivity with our tailored solutions for individual entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Get Started
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Productivity Dashboard</h3>
                      <p className="text-sm text-gray-600">Real-time insights</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Task Completion</span>
                      <span className="text-sm font-semibold text-green-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Efficiency Score</span>
                      <span className="text-sm font-semibold text-primary-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of services designed to optimize your workflow and help you achieve your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Time Management */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Time Management</h3>
              <p className="text-gray-600 mb-6">
                Efficiently manage your time and prioritize tasks to maximize productivity.
              </p>
              <Link href="/services" className="text-primary-600 font-medium hover:text-primary-700">
                Learn More →
              </Link>
            </div>

            {/* Performance Analysis */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analysis</h3>
              <p className="text-gray-600 mb-6">
                Gain insights into your business performance with detailed analytics and reporting.
              </p>
              <Link href="/services" className="text-primary-600 font-medium hover:text-primary-700">
                Learn More →
              </Link>
            </div>

            {/* Client Relationship Management */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Relationship Management</h3>
              <p className="text-gray-600 mb-6">
                Build and maintain strong relationships with your clients through effective communication and support.
              </p>
              <Link href="/services" className="text-primary-600 font-medium hover:text-primary-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how our solutions have transformed businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah's Business Transformation</h4>
                  <p className="text-sm text-gray-600">Freelance Writer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Sarah, a freelance writer, increased her output by 40% using our time management tools."
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary-600">40%</div>
                <div className="text-sm text-gray-600">Productivity Increase</div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mark's Productivity Boost</h4>
                  <p className="text-sm text-gray-600">Consultant</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Mark, a consultant, saw client satisfaction increase by 25% with our CRM solutions."
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary-600">25%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
              <p className="text-xl text-gray-600">
                Stay updated with the latest tips and insights.
              </p>
            </div>
            <Link href="/blog" className="btn-secondary hidden md:block">
              View All Posts
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Streamlining Your Workflow: Essential Tools for Freelancers
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the top software and apps that can help you manage your projects, clients, and finances more efficiently.
                </p>
                <Link href="/blog" className="text-primary-600 font-medium hover:text-primary-700">
                  Read More →
                </Link>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mastering Time Management: Techniques for Increased Productivity
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn proven strategies to prioritize tasks, eliminate distractions, and make the most of your working hours.
                </p>
                <Link href="/blog" className="text-primary-600 font-medium hover:text-primary-700">
                  Read More →
                </Link>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Building a Strong Online Presence: Tips for Personal Branding
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore effective ways to showcase your skills, connect with potential clients, and establish yourself as an expert in your field.
                </p>
                <Link href="/blog" className="text-primary-600 font-medium hover:text-primary-700">
                  Read More →
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/blog" className="btn-secondary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who have transformed their businesses with our efficiency solutions.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
