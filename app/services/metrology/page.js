"use client";

const services = [
  {
    title: "Legal Metrology Systems",
    points: [
      "Development of regulatory frameworks",
      "Market surveillance support",
      "Compliance with OIML recommendations",
      "Inspection and enforcement systems",
    ],
  },
  {
    title: "Industrial Metrology",
    points: [
      "Measurement systems evaluation",
      "Calibration systems setup",
      "Process measurement control",
      "Equipment verification",
    ],
  },
  {
    title: "Laboratory Systems (ISO/IEC 17025)",
    points: [
      "Laboratory setup and development",
      "Accreditation readiness",
      "Quality system implementation",
      "Method validation and documentation",
    ],
  },
  {
    title: "Measurement Traceability",
    points: [
      "Establishing traceability chains",
      "Calibration hierarchy development",
      "Alignment with international standards",
    ],
  },
  {
    title: "Metrology Strategy and Advisory",
    points: [
      "National metrology strategies",
      "Institutional development",
      "Capacity building programs",
    ],
  },
];

export default function MetrologyPage() {
  return (
    <div className="site-gutter pt-28 pb-16 space-y-14">
      <section className="border border-ivory/10 p-7 md:p-10">
        <p className="text-[10px] tracking-[0.24em] uppercase text-brass font-mono">Metrology Services</p>
        <h1 className="mt-4 text-4xl md:text-6xl tracking-tight leading-[1.05]">
          Metrology Systems for Accuracy, Compliance & Trust
        </h1>
        <p className="mt-5 max-w-4xl text-ivory/75 text-base md:text-lg leading-relaxed">
          We support organizations and national authorities in establishing reliable metrology systems
          aligned with international standards (BIPM, OIML) to ensure measurement accuracy, traceability,
          and regulatory compliance.
        </p>
      </section>

      <section className="glass p-6">
        <h2 className="text-2xl">What is Metrology?</h2>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          Metrology is the science of measurement and a core pillar of Quality Infrastructure. It ensures
          measurements are accurate, reliable, and traceable to international standards, supporting
          industry, trade, safety, and regulatory compliance.
        </p>
      </section>

      <section>
        <h2 className="text-3xl">Our Metrology Services</h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map((service) => (
            <article key={service.title} className="border border-ivory/10 p-5">
              <h3 className="text-xl">{service.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-ivory/75">
                {service.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <article>
          <h2 className="text-3xl">Our Metrology Implementation Approach</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            <li>- Assessment: evaluate current measurement systems and capabilities</li>
            <li>- Framework development: define structure, policies, and procedures</li>
            <li>- System implementation: establish calibration and measurement processes</li>
            <li>- Validation and verification: ensure accuracy and traceability</li>
            <li>- Compliance and improvement: support audits and continuous improvement</li>
          </ul>
        </article>
        <article>
          <h2 className="text-3xl">Who Needs Metrology Services</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            <li>- Government and regulatory authorities</li>
            <li>- Standards and metrology bodies</li>
            <li>- Testing and calibration laboratories</li>
            <li>- Industrial and manufacturing companies</li>
            <li>- Energy and utilities sector</li>
          </ul>
        </article>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Metrology within Quality Infrastructure</h2>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          Metrology is a fundamental pillar of Quality Infrastructure, integrated with standardization,
          accreditation, and conformity assessment frameworks. We ensure measurement systems align with
          national and international QI frameworks, enhancing reliability, compliance, and trade
          facilitation.
        </p>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Strengthen Your Measurement Systems Today</h2>
        <p className="mt-4 text-ivory/75">
          We support organizations in building reliable, traceable, and compliant metrology systems aligned
          with international best practices.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/#contact" className="inline-flex border border-brass bg-brass/10 px-4 py-2 text-sm text-ivory hover:bg-brass/20">Request Consultation</a>
          <a href="/#contact" className="inline-flex border border-ivory/20 px-4 py-2 text-sm text-ivory/85 hover:text-ivory hover:border-brass/50">Start Metrology Assessment</a>
        </div>
      </section>
    </div>
  );
}
