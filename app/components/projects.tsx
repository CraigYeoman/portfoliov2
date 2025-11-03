

export default function Projects() {

  return (
    <div>
      <div>
        <h3>
          Project 1
        </h3>
        <div>
          <h3>Zimmer Marketing Website</h3>
          <h4>Description</h4>
          <p>Led the complete redesign and development of Zimmer's marketing website, transforming designer mockups into a modern, performant web experience. Working from detailed Figma specifications, I architected and built the entire site from scratch delivering a fast-loading, responsive platform that enhanced the company's digital presence.</p>
          <a href="https://www.zimmermarketing.com/">zimmermarketing.com</a>
        </div>
        <div>
          <h3>66 RV Supply</h3>
          <h4>Description</h4>
          <p>Developed a custom e-commerce solution for 66 RV Supply, integrating seamlessly with their existing business infrastructure through 3rd party api's while maintaining operational continuity. The project required careful navigation of technical constraints to create a unified system that connected their current POS/inventory management software with a new customer-facing platform.</p>
          <a href="https://www.66rvsupply.com/">66rvsupply.com</a>
        </div>
        <div>
          <h3>Zimbot</h3>
          <h4>Description</h4>
          <p>Complete rewrite of our company's form validation software from the ground up. Built a modular, multi-tenant system that replaced scattered environment variables with a centralized database configuration.</p>
          <h4>Key Features</h4>
          <ul>
            <li><strong>Modular architecture</strong> - New validators and integrations can be added by simply due to design choices</li>
            <li><strong>Multi-tenant support</strong> - Each website has its own integration configuration (Basecamp projects, email recipients, Google Sheets) stored in the database</li>
            <li><strong>Concurrent processing</strong> - Forms validate and save immediately while integrations run asynchronously in the background</li>
            <li><strong>CI/CD pipeline</strong> - Automated deployments via GitHub Actions with proper database migrations</li>
            <li><strong>OAuth implementation</strong> - Built secure authentication for third-party integrations with system notifications for failures</li>
          </ul>
          <p><strong>Impact:</strong> Eliminated manual configuration deployments, enabled per-website customization, and made adding new CRM integrations (HubSpot, Salesforce, etc.) possible through the admin UI instead of code changes.</p>
        </div>

      </div>
    </div>
  )
}
