import Link from 'next/link'
import { getAllPortfolioProjects, PortfolioProject } from '@/lib/sanity-queries'

export default async function PortfolioPage() {
  // Sanityからデータを取得、エラーの場合はフォールバックデータを使用
  let sanityProjects: PortfolioProject[] = []

  try {
    sanityProjects = await getAllPortfolioProjects()
  } catch (error) {
    console.error('Failed to fetch portfolio projects from Sanity:', error)
  }

  // フォールバックデータ（Sanityにデータがない場合）
  const fallbackProjects = [
    {
      _id: '1',
      title: 'Workflow Automation for Retail',
      slug: { current: 'workflow-automation-retail' },
      description: 'Automated order processing and inventory updates for a retail business.',
      technologies: ['Next.js', 'Node.js', 'MongoDB'],
      category: 'automation'
    },
    {
      _id: '2',
      title: 'Inventory Management System',
      slug: { current: 'inventory-management-system' },
      description: 'Developed a system to track and manage inventory levels in real-time.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      category: 'management'
    },
    {
      _id: '3',
      title: 'Customer Relationship Management Tool',
      slug: { current: 'customer-relationship-management' },
      description: 'Customized a CRM tool to streamline customer interactions and support.',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      category: 'crm'
    },
    {
      _id: '4',
      title: 'Sales Forecasting Dashboard',
      slug: { current: 'sales-forecasting-dashboard' },
      description: 'Created a dashboard to visualize sales trends and forecast future performance.',
      technologies: ['React', 'D3.js', 'Python'],
      category: 'analytics'
    },
    {
      _id: '5',
      title: 'Project Management Platform',
      slug: { current: 'project-management-platform' },
      description: 'Implemented a platform to manage project timelines, tasks, and resources.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
      category: 'management'
    },
    {
      _id: '6',
      title: 'Data Analysis and Reporting',
      slug: { current: 'data-analysis-reporting' },
      description: 'Analyzed business data to identify inefficiencies and provide actionable insights.',
      technologies: ['Python', 'Pandas', 'Tableau'],
      category: 'analytics'
    }
  ]

  // Sanityからデータが取得できた場合はそれを使用、そうでなければフォールバックデータを使用
  const portfolioItems = sanityProjects.length > 0 ? sanityProjects : fallbackProjects

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a selection of projects and tools developed to enhance business efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {portfolioItems.map((item) => (
              <div key={item._id} className="group">
                <div className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-primary-700">
                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">{item.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary-600 bg-primary-100 rounded-full mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Link
                      href={`/portfolio/${item.slug.current}`}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help streamline your business operations and boost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
