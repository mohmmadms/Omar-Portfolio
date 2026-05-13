"use client";

const highlights = [
  "Information Management Framework",
  "BIM Governance & Compliance",
  "Project Lifecycle Integration",
  "Alignment with International Standards",
];

const whyItMatters = [
  {
    title: "Improved Collaboration",
    body: "Structured workflows between project stakeholders.",
  },
  {
    title: "Better Data Control",
    body: "Clear information requirements and governance.",
  },
  {
    title: "Risk Reduction",
    body: "Minimized errors and rework.",
  },
  {
    title: "Regulatory Alignment",
    body: "Compliance with international best practices.",
  },
];

const approach = [
  {
    title: "Assessment",
    items: [
      "Review current BIM and information practices",
      "Identify gaps against ISO 19650",
    ],
  },
  {
    title: "Framework Development",
    items: [
      "Define information management structure",
      "Establish roles and responsibilities",
    ],
  },
  {
    title: "Documentation",
    items: [
      "EIR (Exchange Information Requirements)",
      "BEP (BIM Execution Plan)",
      "Information protocols",
    ],
  },
  {
    title: "Implementation",
    items: [
      "Process deployment",
      "Workflow alignment",
      "Team onboarding",
    ],
  },
  {
    title: "Audit & Compliance",
    items: [
      "Internal audits",
      "Compliance verification",
      "Continuous improvement",
    ],
  },
];

const services = [
  "ISO 19650 framework implementation",
  "BIM information management",
  "Governance and roles definition",
  "Documentation development (EIR, BEP, MIDP, TIDP, protocols)",
  "Integration with ISO 9001 and quality systems",
  "Training and capacity building",
];

const audience = [
  "Government and infrastructure authorities",
  "Project owners and developers",
  "Engineering consultants",
  "Contractors",
  "Project Management Offices (PMO)",
];

export default function Iso19650Page() {
  return (
    <div className="site-gutter pt-28 pb-16 space-y-14">
      <section className="border border-ivory/10 p-7 md:p-10">
        <p className="text-[10px] tracking-[0.24em] uppercase text-brass font-mono">ISO 19650 Service</p>
        <h1 className="mt-4 text-4xl md:text-6xl tracking-tight leading-[1.05]">
          ISO 19650 for Digital Construction & Information Management
        </h1>
        <p className="mt-5 max-w-4xl text-ivory/75 text-base md:text-lg leading-relaxed">
          We support organizations in implementing ISO 19650 standards to manage information across the
          lifecycle of built assets, ensuring structured data, compliance, and efficient collaboration.
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-ivory/80">
          {highlights.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <article className="glass p-6">
          <h2 className="text-2xl">What is ISO 19650?</h2>
          <p className="mt-4 text-ivory/75 leading-relaxed">
            ISO 19650 is an international standard for managing information over the lifecycle of a built
            asset using Building Information Modeling (BIM). It provides a structured framework so
            information remains organized, secure, accessible, and aligned with project requirements.
          </p>
        </article>
        <article className="glass p-6">
          <h2 className="text-2xl">Why ISO 19650 Matters</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {whyItMatters.map((item) => (
              <div key={item.title} className="border border-ivory/10 p-4">
                <h3 className="text-brass">{item.title}</h3>
                <p className="mt-2 text-sm text-ivory/70">{item.body}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section>
        <h2 className="text-3xl">Our ISO 19650 Implementation Approach</h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-5 gap-4">
          {approach.map((step, index) => (
            <article key={step.title} className="border border-ivory/10 p-5">
              <p className="text-[10px] tracking-[0.22em] uppercase text-brass font-mono">
                0{index + 1}
              </p>
              <h3 className="mt-2 text-xl">{step.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-ivory/75">
                {step.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <article>
          <h2 className="text-3xl">Scope of Services</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            {services.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="text-3xl">Who Needs ISO 19650</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            {audience.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Integration with Quality Infrastructure (QI)</h2>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          We uniquely combine ISO 19650 with Quality Infrastructure systems, ensuring alignment between
          digital information management, standardization frameworks, quality management systems (ISO
          9001), regulatory compliance, and conformity assessment processes.
        </p>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          This integrated approach enhances both digital transformation and quality performance.
        </p>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Ready to Implement ISO 19650?</h2>
        <p className="mt-4 text-ivory/75">
          We help you establish structured, compliant, and efficient information management systems for
          your projects.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/#contact" className="inline-flex border border-brass bg-brass/10 px-4 py-2 text-sm text-ivory hover:bg-brass/20">Request Consultation</a>
          <a href="/#services" className="inline-flex border border-ivory/20 px-4 py-2 text-sm text-ivory/85 hover:text-ivory hover:border-brass/50">Start Your Assessment</a>
        </div>
      </section>
    </div>
  );
}
