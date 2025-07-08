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

  // プロジェクト画像のマッピング
  const projectImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDTy93nWBi15Z1iLQF_RP6A1yeLC8BdNjak792VXzBJbY8XWKQAhpROiRXowbxORoVXuhD9GzHpYK1-D7RYh80o3adYhlHxmKqPRFLjfdvv8qdyHfBHdKYwc5XogOi8_cqhDLz6_WOiRGI3Ka6o7v9R62nFbMCbcbytOlNcDaZNjGAtgGfz1Q9ElzRAKhDb2cN4xFexECqFSmQbnIX1aLZoogD2FEzwIk2rK0tD7kUFpChEQOAigL57I9OzGjF-H2XnENVi42kSclg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDKPi7sga-xegUl6yqlqwH3zK7nlqLwrDtl7lQX64PMWxchPtZlCFKJ4H-TyoFMfleL0DZQ8y_6wOzHVbNWE4QcdSdQoXHhxS75SsfPyMTXFNdHAAy7mjsWKnO4Ndtp2sXF1essmbbIkPck7qDTuMjXREQpxfaP2nQxECf4U3RoxDWEB7eBbTbrmIRhIhNX2Md11o4r5SLWPG3VQhwFOlAprOga6vl78MW7ix9m-Ab7I_SF6CT87tE9wcju9B3wZfXlDU_vQF_0GPw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDGX4Ev1ZGp_Fw4lwa1JwzMBa6Z-AualCfDPoZbLZNlF5hZXy_uqNrO25tNWqhRhArF6l9VYjJxFjISyZWqNXA9OwzYNE3AVSl5ez0MO9ABUA2Wb3vA_0uAnGOKO7ckDfAIDm_wS-zGwh1ReHEPYxG8hKd32PvpTUFwShmvorzxFLKd5UuWNqsWIfdxMRfFp5J0OC3gb0Ecq3k-UAfVOjKjRPR1qD6eP0z3cUPyt30PE-9aJrcsamteEoxQZKumtlYMC5Pn0Jvo-E8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB5A7USmug1Ae761v-90aVFHor8atxMUfdeNldhJVMH3LwnASF6fwaAjwCRDzIj3dz6bqbUTuE06GCQPDdMBvIDurWwq2Aw2pThD8KKiFSAgBGr9ujxyQ9CocmSS8Ntv8sjU2r_qQfQSf3wTtPFIH2NrTHwrGuAhHiQNPTtUd676P888kGgpx9NFQLSUZtRr_4qBDqwldX-F-QNBXkdqE8asEXrgaVyjd_OLOnEwWrvAijXJS4d3clmMjvFzn2sZTRHkNoFgndzOh4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBMxXqW9vJYDR8ETP7I6hVbhtD5261bbNMk_hKIcPPWfsHHqi7wdRTf12y74g1giFSwdgYWH1hcc1JG6panfZUQT-BbWTCbDFqpFXkqSdxRpSgeVkQXvdhIcAXCTXi4GV4BXpedm2vRZyLxXzUyxRXXm7tZeVpzJKzTv8eyMHVxVYXvnrx3HKswLcDzjkWktdyemUn0LnBuFsMYLJorOUlTocEiY4bJqrnLrROOgDqwdIzj3Mo0SKnYVIO6r3DvRykw5IADKEyBXxk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDv7QVxG9Kkk0zwB_KHm3jfLDIHdCET8_tmIJEJHUh98zNOZcBGT6lh3VDuICROLdJevtCRlrQQGCA3j1PPV9xu3tvCYNY-YfaEbHOQOv39oOjG0kuLyYUE-P_R-uivOalamfaAT-RT7d3aHUo5qmgtL1xMFslPqSJSgx6t2d3uTOIs_TyAMSxZYeTtqf7-mHeAAvUTDQlah2gUFgQ1mMkjbxXU0hi6kTMG1WmiS9zabLQf4nayE2mp2zYgiPeImFfeTqaGlsIStpc"
  ]

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-neutral-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight">Portfolio</p>
                <p className="text-neutral-500 text-sm font-normal leading-normal">Explore a selection of projects and tools developed to enhance business efficiency.</p>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {portfolioItems.map((item, index) => (
                <div key={item._id} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{backgroundImage: `url("${projectImages[index % projectImages.length]}")`}}
                  ></div>
                  <div>
                    <p className="text-[#141414] text-base font-medium leading-normal">{item.title}</p>
                    <p className="text-neutral-500 text-sm font-normal leading-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a className="text-neutral-500 text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-neutral-500 text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <p className="text-neutral-500 text-base font-normal leading-normal">@2024 Efficiency Boost. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  )
}
