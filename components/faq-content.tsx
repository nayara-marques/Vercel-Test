export function FAQContent() {
  const faqs = [
    {
      question: "What is Clade?",
      answer:
        "Clade is AI financial infrastructure for institutional judgment. It turns documents, meetings, and enterprise data at scale into durable context—so investment teams stop rebuilding understanding deal-by-deal and start compounding it.",
    },
    {
      question: "Who is Clade for?",
      answer:
        "Clade is built for investment teams operating in complex markets. If your work depends on pulling signals from fragmented data and turning it into capital decisions- while preserving judgment, institutional memory, and accountability- Clade is for you. Our clients include endowments, foundations, private equity funds, investment consultants, broker-dealers, family offices, OCIOs, etc.",
    },
    {
      question: "Where does Clade sit in our existing technology stack?",
      answer:
        "Above your data and inside your workflow. Clade doesn't replace systems of record, it works with everything you already use and makes it usable as a single intelligence layer.",
    },
    {
      question: "How does Clade differ from general-purpose AI?",
      answer:
        "General-purpose AI generates answers. Clade understands investments. It's a big distinction. Clade is designed around financial context, institutional workflows, and traceability—and can reason across far more context than a co-pilot chat box guessing what you meant.",
    },
    {
      question: "What does Clade know that our current tools don't?",
      answer:
        "Clade understands relationships across time: what was said, what changed, what mattered, and why. Most tools store information, which was fine in 2017, but not today. Clade remembers reasoning.",
    },
    {
      question: "What tasks can Clade help me automate?",
      answer:
        "Research synthesis across broad context windows, IDD/ODD analysis, meeting capture, portfolio monitoring, comparisons, and IC-ready memos. Clade compresses time-to-insight and surfaces patterns humans miss so teams can focus on judgment and uncovering alpha.",
    },
    {
      question: "What does Clade not try to do on purpose?",
      answer:
        "Clade doesn't try to automate the yes-or-no investment decision. That restraint is intentional. We bring clarity and context so you can make the call yourself- operating as a trusted advisor, never the decision-maker.",
    },
    {
      question: "Can Clade connect to our existing data systems?",
      answer:
        "Yes. Clade assumes your data already lives everywhere. It's built to work across CRM and RMS systems, 3rd party data sources, document repositories, and whatever else your stack includes.",
    },
    {
      question: "How customizable is Clade's automation?",
      answer:
        "Highly. Off-the-shelf Clade is powerful and ready-to-roll. When needed, our engineering and data science teams customize workflows to fit how clients actually work. We're solutions-first by design.",
    },
    {
      question: "Is the AI trained on our data?",
      answer:
        "No. Your data is never used to train internal or public models. Ever. It's used solely to serve your team and institution.",
    },
    {
      question: "Can we tune the AI to match our investment philosophy?",
      answer:
        'Yes. Clade adapts to your frameworks, language, and risk lens rather than imposing a generic view of "good investing." When useful, the system can absorb your policies, risk preferences, and standards so outputs reflect how your institution actually thinks.',
    },
    {
      question: "Is Clade secure for confidential investment data?",
      answer:
        "Absolutely. Clade is built with enterprise-grade security, granular permissions, and full auditability from the ground up. We are SOC 2 compliant and trusted by large, sophisticated financial institutions to operate in highly sensitive environments.",
    },
    {
      question: "Can Clade be used in regulated environments?",
      answer:
        "Yes. Clade is designed for use in highly regulated environments and is actively used by government entities, pensions, hedge funds, and other institutions with strict governance and compliance requirements.",
    },
    {
      question: "What happens to our data if we ever leave?",
      answer:
        "You retain full ownership of your data at all times. If you ever leave, your data can be exported cleanly and completely. Clade is built to eliminate data walls, not create new ones.",
    },
    {
      question: "How quickly can Clade be deployed?",
      answer:
        "In days, not months. Clade is deployed through configuration, not custom code, allowing teams to see value at T+1 rather than after a long implementation cycle.",
    },
    {
      question: "What support does Clade offer after onboarding?",
      answer:
        "Dedicated, white-glove customer success. We work directly with your team on a concrete roll-out plan to ensure Clade is understood, adopted, and used correctly across the organization, because AI only creates value when your colleagues actually know how to use it.",
    },
    {
      question: "How is Clade priced?",
      answer:
        "Clade is primarily priced on a per-seat basis. We care about supporting both smaller teams with budget constraints and large organizations that require enterprise pricing and deployment. Our goal is long-term alignment, not friction at the point of entry.",
    },
    {
      question: "Is a demo available?",
      answer:
        "Yes. We're always happy to give a demo tailored to your workflows and the problems you're actually trying to solve- either on Zoom or in person. To request a demo, you can reach us at contact@clade.co.",
    },
    {
      question: "Will Clade replace my job? (Be honest.)",
      answer:
        "It's often said: \"AI won't take your job, but someone fluent in AI will\". Clade gives you that fluency. Think of it as a chance to level up (and get promoted), not be replaced.",
    },
    {
      question: "What's the most surprising way clients use Clade?",
      answer:
        'Live, at the table, inside investment committee meetings. No one asks "Can you find the Key Man clause?" or "What did we promise last time?" or "How did they perform versus peers?" Clade already knows.',
    },
    {
      question: 'What does "good taste" mean in a financial software product?',
      answer:
        "Good taste means removing friction, not adding features. It's software that feels obvious once you're using it, and painful to go back from. We design Clade so users enjoy being in it. This is not bank middleware.",
    },
    {
      question: "If Clade were a person, what kind of colleague would it be?",
      answer:
        "Imagine recruiting a genius teammate who gets smarter over time, works seamlessly with everyone, and never gets poached or goes on vacation. That's Clade.",
    },
    {
      question: "Where does the Clade team get caffeinated?",
      answer:
        "Most often at Felix Roasting Co. on Park Ave. and 49th. Real cappuccinos, excellent matcha—and if you happen to be nearby, we're always happy to talk AI or walk through Clade there.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-surface-base">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-content-primary mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="pb-8">
              <p className="text-base text-content-primary mb-3">
                <span className="font-bold">{faq.question}</span>
              </p>
              <p className="text-base text-content-secondary">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
