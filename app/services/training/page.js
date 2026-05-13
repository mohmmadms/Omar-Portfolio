"use client";

const trainingAreas = [
  {
    title: "ISO Management Systems",
    points: ["ISO 9001, 14001, 45001, 13485", "Implementation and interpretation", "Documentation and compliance"],
  },
  {
    title: "Internal Auditor Training",
    points: ["Audit principles and techniques", "Planning and conducting audits", "Reporting and corrective actions"],
  },
  {
    title: "Lead Auditor Training",
    points: ["Advanced audit skills", "Certification audit preparation", "Audit leadership and management"],
  },
  {
    title: "Quality Infrastructure (QI) Training",
    points: ["Standardization systems", "Metrology and measurement", "Accreditation and conformity assessment"],
  },
  {
    title: "Metrology and Laboratory Training",
    points: ["Calibration systems", "Measurement uncertainty", "ISO/IEC 17025 requirements"],
  },
  {
    title: "Customized Corporate Training",
    points: ["Tailored programs based on client needs", "Industry-specific training", "On-site or virtual delivery"],
  },
];

const approach = [
  "Needs assessment",
  "Program design",
  "Delivery through interactive sessions",
  "Evaluation of participant understanding",
  "Follow-up implementation support",
];

export default function TrainingPage() {
  return (
    <div className="site-gutter pt-28 pb-16 space-y-14">
      <section className="border border-ivory/10 p-7 md:p-10">
        <p className="text-[10px] tracking-[0.24em] uppercase text-brass font-mono">Training Services</p>
        <h1 className="mt-4 text-4xl md:text-6xl tracking-tight leading-[1.05]">
          Professional Training in Quality Infrastructure & ISO Systems
        </h1>
        <p className="mt-5 max-w-4xl text-ivory/75 text-base md:text-lg leading-relaxed">
          We deliver high-impact training programs designed to build internal capabilities in quality
          management, standardization, metrology, and international standards.
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-ivory/80">
          <li>- 1200+ Professionals Trained</li>
          <li>- Lead Auditor and Internal Auditor Programs</li>
          <li>- Practical, implementation-focused training</li>
          <li>- Customized corporate programs</li>
        </ul>
      </section>

      <section className="glass p-6">
        <h2 className="text-2xl">Training That Delivers Real Capability</h2>
        <p className="mt-4 text-ivory/75 leading-relaxed">
          Our training programs go beyond theory and focus on practical application. We help organizations
          develop internal expertise to manage quality systems, ensure compliance, and sustain continuous
          improvement.
        </p>
      </section>

      <section>
        <h2 className="text-3xl">Training Areas</h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {trainingAreas.map((area) => (
            <article key={area.title} className="border border-ivory/10 p-5">
              <h3 className="text-xl">{area.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-ivory/75">
                {area.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <article>
          <h2 className="text-3xl">Our Training Approach</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            {approach.map((step, index) => (
              <li key={step}>- {index + 1}. {step}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="text-3xl">Training Format</h2>
          <ul className="mt-4 space-y-2 text-ivory/75">
            <li>- On-site training</li>
            <li>- Virtual training</li>
            <li>- Workshops</li>
            <li>- Executive briefings</li>
          </ul>
          <h3 className="text-2xl mt-8">Who Should Attend</h3>
          <ul className="mt-3 space-y-2 text-ivory/75">
            <li>- Quality managers</li>
            <li>- Engineers and technical staff</li>
            <li>- Compliance and regulatory teams</li>
            <li>- Laboratory personnel</li>
            <li>- Government and institutional staff</li>
          </ul>
        </article>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Training Outcomes</h2>
        <ul className="mt-4 space-y-2 text-ivory/75">
          <li>- Improved internal capabilities</li>
          <li>- Better audit readiness</li>
          <li>- Stronger compliance with standards</li>
          <li>- Enhanced organizational performance</li>
          <li>- Reduced dependency on external consultants</li>
        </ul>
      </section>

      <section className="border border-ivory/10 p-7">
        <h2 className="text-3xl">Build Your Team's Capability Today</h2>
        <p className="mt-4 text-ivory/75">
          Empower your organization with the knowledge and skills required to manage quality systems
          effectively.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/#contact" className="inline-flex border border-brass bg-brass/10 px-4 py-2 text-sm text-ivory hover:bg-brass/20">Request Training Program</a>
          <a href="/#contact" className="inline-flex border border-ivory/20 px-4 py-2 text-sm text-ivory/85 hover:text-ivory hover:border-brass/50">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
