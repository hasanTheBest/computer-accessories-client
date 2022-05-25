import React from "react";

const stats = [
  {
    title: "Customers",
    stat: "10M+",
    subtitle: "served and helped all time",
  },
  {
    title: "Annual revenue",
    stat: "800M+",
    subtitle: "We are growing by minutes",
  },
  {
    title: "Reviews",
    stat: "33K+",
    subtitle: "The people showed respect",
  },
  {
    title: "Accessories",
    stat: "5K+",
    subtitle: "We are improving our capacities",
  },
  {
    title: "Warehouse",
    stat: "500+",
    subtitle: "You can get wholesale service",
  },
  {
    title: "Countries",
    stat: "80+",
    subtitle: "We are expanding our services",
  },
];

const BusinessSummary = () => {
  return (
    <section className="max-w-screen-xl mx-auto pb-12 lg:pb-24">
      <h2 className="text-3xl lg:text-5xl text-center font-semibold mb-8 lg:mb-16">
        Business Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow max-w-screen-md mx-auto">
        {stats.map(({ title, stat, subtitle }, i) => (
          <div className="stat text-center gap-4 shadow-lg border" key={i}>
            <div className="stat-title text-secondary font-semibold">
              {title}
            </div>
            <div className="stat-value">{stat}</div>
            <div className="stat-desc">{subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSummary;
