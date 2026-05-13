"use client";

const standards = [
  "ISO 9001 - Quality Management Systems",
  "ISO 14001 - Environmental Management",
  "ISO 45001 - Occupational Health & Safety",
  "ISO 13485 - Medical Devices",
];

const scope = [
  "Gap analysis and readiness assessment",
  "Documentation development",
  "System implementation",
  "Internal audit and compliance",
  "Certification preparation",
  "Post-certification support",
];

export default function IsoConsultancyPage() {
  return (
    <div className="site-gutter pt-28 pb-16 space-y-14">
      <section className="border border-ivory/10 p-7 md:p-10">
        <p className="text-[10px] tracking-[0.24em] uppercase text-brass font-mono">ISO Consultancy</p>
        <h1 className="mt-4 text-4xl md:text-6xl tracking-tight leading-[1.05]">
          ISO Systems Implementation for Compliance & Performance
        </h1>
        <p className="mt-5 max-w-4xl text-ivory/75 text-base md:text-lg leading-relaxed">
          We support organizations in implementing ISO management systems to achieve certification,
          strengthen processes, and enhance operational performance in alignment with international
          standards.
        </p>
      </section>

      <section className="glass p-6">
        <h2 className="text-2xl">What We Do</h2>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          We provide comprehensive ISO consultancy services covering the full lifecycle of implementation,
          from initial assessment to certification. Our approach builds practical systems aligned with your
          operations, ensuring compliance while improving performance and efficiency.
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <article>
          <h2 className="text-3xl">ISO Standards We Support</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            {standards.map((standard) => (
              <li key={standard}>- {standard}</li>
            ))}
            <li>- Optional extension: ISO 22000 and ISO/IEC 17025</li>
          </ul>
        </article>
        <article>
          <h2 className="text-3xl">Our ISO Implementation Approach</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            <li>- Gap assessment against ISO requirements</li>
            <li>- System design with processes and structure</li>
            <li>- Documentation development (policies, procedures, records)</li>
            <li>- Implementation and staff awareness</li>
            <li>- Internal audits and corrective actions</li>
            <li>- Certification readiness and audit support</li>
          </ul>
        </article>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <article>
          <h2 className="text-3xl">Scope of Services</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            {scope.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="text-3xl">Who Needs ISO Services</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            <li>- Manufacturing companies</li>
            <li>- Construction and engineering firms</li>
            <li>- Healthcare and pharmaceutical organizations</li>
            <li>- Logistics and warehousing providers</li>
            <li>- Government and public sector entities</li>
          </ul>
        </article>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">ISO within Quality Infrastructure</h2>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          We integrate ISO management systems within the broader Quality Infrastructure framework, ensuring
          alignment with standardization, metrology, accreditation, conformity assessment, and regulatory
          compliance.
        </p>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Ready to Achieve ISO Certification?</h2>
        <p className="mt-4 text-ivory/75">
          We support your organization in building effective, compliant, and sustainable management systems.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/#contact" className="inline-flex border border-brass bg-brass/10 px-4 py-2 text-sm text-ivory hover:bg-brass/20">Request Consultation</a>
          <a href="/#contact" className="inline-flex border border-ivory/20 px-4 py-2 text-sm text-ivory/85 hover:text-ivory hover:border-brass/50">Start ISO Assessment</a>
        </div>
      </section>
    </div>
  );
}
