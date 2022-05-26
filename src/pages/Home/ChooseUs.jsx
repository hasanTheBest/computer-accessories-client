import React from "react";

const choosingReasons = [
  {
    subtitle: "Stick to your choice",
    title: `We Produce And Work For Social Development`,
    description: `Our people are our biggest asset but the only way to unlock their potential is to invest in the right business systems that encourage innovation. When you enable motivated people with the right tools, and the right ethical framework, the combination is powerful. We pursue new and better ways of working that help us lead the sector. Integrity is central to our values and the way we conduct our business. We work closely with third-party partners to focus on issues that are important to businesses and people`,
  },
  {
    subtitle: "Technical Solutions",
    title: `Sustainability Goals`,
    description: `A Company involved in servicing, maintenance and repairs of engines, prime movers and exhaust gas turbochargers. We are an integrated engineering company comprised of agile and experienced engineers skilled in different types of engineering work.`,
  },
  {
    subtitle: "Vision and hearing health",
    title: `Health and Safety`,
    description: ` Safety is one of the highest priorities within Steeler. It is imperative that everyone follows the policies and guidelines to ensure their own safety and the safety of others around them. We are providing different.`,
  },
  {
    subtitle: "Experience to offer",
    title: `Expert in electronic industries`,
    description: `Our people are our biggest For over 10 years working with SCG Industries on environmental contaminated sites they have continuously demonstrated excellent technical ability while ensuring superior customer service.  Their collaborative approach and real time flexibility in adapting to changing conditions has contributed to the success of many project goals. “t asset but the only way to unlock their potential is to invest in the right business systems that encourage innovation. When you enable motivated people with the right tools, and the right ethical framework, the combination is powerful. We pursue new and better ways of working that help us lead the sector.`,
  },
];

const ChooseUs = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-12 lg:py-24">
      <header className="mb-12 text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-10">
          Choose Us - meet your need
        </h2>
        <p className="max-w-3xl mx-auto">
          CA continues to provide outstanding service and excellent technical
          ability for various projects from small to large scope. Most
          importantly SCG strives to understand overall project objectives and
          offer practical and effective solutions. Their commitment to
          delivering exceptional service is evident in every task they take on.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:gap-14  lg:grid-cols-2 shadow max-w-screen-lg mx-auto">
        {choosingReasons.map(({ title, subtitle, description }, i) => (
          <div class="card w-full shadow-lg bg-base-100" key={i}>
            <div class="card-body">
              <h2 class="text-base">{subtitle}</h2>
              <h2 class="card-title">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
