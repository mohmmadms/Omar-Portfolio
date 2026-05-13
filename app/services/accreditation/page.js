"use client";

const standards = [
  {
    title: "ISO/IEC 17025",
    desc: "Testing and calibration laboratories: laboratory competence, measurement accuracy, and traceability.",
  },
  {
    title: "ISO/IEC 17020",
    desc: "Inspection bodies: inspection systems, procedures, independence, and impartiality.",
  },
  {
    title: "ISO/IEC 17065",
    desc: "Certification bodies: product and system certification schemes with governance controls.",
  },
];

const scope = [
  "Accreditation readiness assessment",
  "Documentation development",
  "System implementation",
  "Internal audits",
  "Method validation (for labs)",
  "Proficiency testing support",
  "Accreditation audit preparation",
];

export default function AccreditationPage() {
  return (
    <div className="site-gutter pt-28 pb-16 space-y-14">
      <section className="border border-ivory/10 p-7 md:p-10">
        <p className="text-[10px] tracking-[0.24em] uppercase text-brass font-mono">
          Accreditation & Conformity Assessment
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl tracking-tight leading-[1.05]">
          Accreditation & Conformity Assessment Systems
        </h1>
        <p className="mt-5 max-w-4xl text-ivory/75 text-base md:text-lg leading-relaxed">
          We support laboratories, inspection bodies, and certification entities in achieving accreditation
          and establishing robust conformity assessment systems aligned with ISO/IEC standards and
          international frameworks.
        </p>
      </section>

      <section className="glass p-6">
        <h2 className="text-2xl">Building Trusted Conformity Assessment Systems</h2>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          Accreditation ensures organizations performing testing, calibration, inspection, and certification
          operate competently and produce reliable results. We support full system development aligned with
          ISO/IEC standards and international best practices.
        </p>
      </section>

      <section>
        <h2 className="text-3xl">Standards We Support</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {standards.map((standard) => (
            <article key={standard.title} className="border border-ivory/10 p-5">
              <h3 className="text-xl text-brass">{standard.title}</h3>
              <p className="mt-3 text-sm text-ivory/75">{standard.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <article>
          <h2 className="text-3xl">Our Accreditation Approach</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            <li>- Gap assessment against ISO/IEC requirements</li>
            <li>- System design with structure, policies, and procedures</li>
            <li>- Documentation development (manual, procedures, records)</li>
            <li>- Implementation and staff training</li>
            <li>- Internal audits and gap closure</li>
            <li>- Accreditation body assessment readiness and support</li>
          </ul>
        </article>
        <article>
          <h2 className="text-3xl">Scope of Services</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            {scope.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Proficiency Testing & Interlaboratory Comparison</h2>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          We support laboratories and organizations in participating in and organizing proficiency testing
          (PT) and interlaboratory comparison (ILC) programs to demonstrate technical competence and ensure
          reliability of test and calibration results.
        </p>
        <ul className="mt-4 space-y-2 text-ivory/75">
          <li>- Design and coordination of PT schemes</li>
          <li>- Interlaboratory comparison programs</li>
          <li>- Performance evaluation and statistical analysis</li>
          <li>- Support in selecting appropriate PT providers</li>
          <li>- Guidance on corrective actions and improvement</li>
          <li>- Compliance with ILAC and ISO/IEC requirements</li>
        </ul>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Accreditation within Quality Infrastructure</h2>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          Accreditation and conformity assessment are key pillars of Quality Infrastructure and are tightly
          integrated with metrology systems, standardization frameworks, and regulatory systems. We align
          conformity assessment systems with national QI frameworks and international recognition systems
          (ILAC / IAF).
        </p>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Achieve Accreditation with Confidence</h2>
        <p className="mt-4 text-ivory/75">
          We support your organization in building competent, compliant, and internationally recognized
          systems.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/#contact" className="inline-flex border border-brass bg-brass/10 px-4 py-2 text-sm text-ivory hover:bg-brass/20">Request Consultation</a>
          <a href="/#contact" className="inline-flex border border-ivory/20 px-4 py-2 text-sm text-ivory/85 hover:text-ivory hover:border-brass/50">Start Accreditation Assessment</a>
        </div>
      </section>
    </div>
  );
}
