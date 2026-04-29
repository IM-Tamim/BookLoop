import { FaBookOpen, FaBolt, FaLock, FaSyncAlt } from "react-icons/fa";

const reasons = [
  {
    icon: FaBookOpen,
    title: "10,000+ Books",
    description:
      "Explore a massive collection across Story, Tech, Science and more categories.",
  },
  {
    icon: FaBolt,
    title: "Instant Access",
    description:
      "Borrow any book digitally and start reading within seconds, no waiting.",
  },
  {
    icon: FaLock,
    title: "Secure & Private",
    description:
      "Your data is fully protected. We never share your reading history with anyone.",
  },
  {
    icon: FaSyncAlt,
    title: "Easy Returns",
    description:
      "Return books anytime with a single click. No late fees, no hassle ever.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-base-200 py-14">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Why Choose BookLoop?</h2>
          <p className="text-base-content/60 mt-2">
            Everything you need in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;

            return (
              <div
                key={i}
                className="card bg-base-100 shadow hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="card-body items-center gap-3">
                  <Icon className="text-5xl text-primary" />
                  <h3 className="card-title text-lg">{reason.title}</h3>
                  <p className="text-sm text-base-content/60">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;