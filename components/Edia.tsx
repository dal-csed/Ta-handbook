import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function EDIA() {
  const [activeTab, setActiveTab] = useState("EDIA");

  return (
    <div className="my-3 space-y-4">
      <div className="mb-6">
        <p className="mb-4">
          Creating an equitable, inclusive, and accessible learning environment
          is essential to student success and well-being. As a TA, your
          awareness and responsiveness to issues of equity, diversity, and
          inclusion help foster a classroom culture where all students feel
          respected, valued, and empowered to participate fully, regardless of
          their background, identity, or ability.
        </p>

        <p>
          Recognizing signs of distress and knowing how to respond with empathy
          and professionalism is equally important. Students may face a range of
          academic, personal, or mental health challenges, and your support can
          make a meaningful difference. In this section, you’ll find resources
          on inclusive teaching practices, accessibility considerations, and
          guidance on how to identify and refer students who may be struggling.
          By approaching your role with care and awareness, you contribute to a
          safer, more compassionate, and more effective learning environment for
          everyone.
        </p>
      </div>

      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("EDIA")}
              className={`py-2 ml-4 px-3 border-b-2 font-medium text-sm ${
                activeTab === "EDIA"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Dalhousie's Commitment to EDIA
            </button>

            <button
              onClick={() => setActiveTab("purple")}
              className={`py-2 ml-4 px-3 border-b-2 max-w-64 font-medium text-sm ${
                activeTab === "purple"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              <strong>Purple Folder</strong> – Responding to Disclosures of Sexualized Violence
            </button>

            <button
              onClick={() => setActiveTab("blue")}
              className={`py-2 ml-4 px-3 border-b-2 max-w-64 font-medium text-sm ${
                activeTab === "blue"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              <strong>Blue Folder</strong> – Recognizing and Responding to Students in Distress
            </button>
          </nav>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {activeTab === "EDIA" && (
            <div>
              <p className="mb-4">
                Dalhousie is guided by its institutional commitment to Equity,
                Diversity, Inclusion, and Accessibility (EDIA). These principles
                are not abstract—they are tied directly to the lived experiences
                of students, staff, and faculty across our campuses.
              </p>

              <p className="mb-4">
                At Dalhousie University, EDIA stands for Equity, Diversity,
                Inclusion, and Accessibility. It represents a commitment to
                creating a welcoming and inclusive environment for all members
                of the university community. This commitment is a core
                institutional priority, influencing the university's vision,
                mission, values, and actions.
              </p>

              <div className="space-y-3">
                <h4 className="font-bold mt-4">Core Principles</h4>

                <div className="space-y-1">
                  <p className="font-semibold">Equity:</p>
                  <p>
                    Addressing historical and ongoing systemic inequalities to
                    ensure fair access and opportunities for all. We must create
                    conditions that address systemic barriers to participation
                    and success.
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold">Diversity:</p>
                  <p>
                    Recognizing and valuing the diverse backgrounds,
                    experiences, and identities of all individuals in our
                    community.
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold">Inclusion:</p>
                  <p>
                    Creating a sense of belonging and engagement where everyone
                    feels valued and respected – that they matter!
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold">Accessibility:</p>
                  <p>
                    Ensuring that all members of the university community,
                    including those with disabilities (including physical), have
                    equal access to resources and opportunities. This means
                    access to physical spaces, digital resources, and
                    programming accessible to all. We need to ensure that all
                    students, regardless of disability or need, can fully engage
                    with course materials and learning activities.
                  </p>
                </div>
              </div>

              <p className="mt-4">
                In essence, EDIA at Dalhousie is about creating a community
                where everyone feels valued, respected, and has the opportunity
                to thrive, regardless of their background or identity.
              </p>

              <p className="mt-4">
                You can explore Dalhousie's full EDIA framework and strategic
                goals here:{" "}
                <a
                  href="https://www.dal.ca/about/mission-vision-values/equity-diversity-inclusion-and-accessibility.html"
                  className="text-blue-800 underline inline-flex items-center"
                  target="_blank"
                >
                  Dalhousie EDIA Commitments
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </p>
            </div>
          )}

          {activeTab === "purple" && (
            <div>
              <p>
                The Purple Folder serves as a confidential guide for Dalhousie
                staff, faculty, and community members when someone discloses an
                experience of sexualized violence. It is designed to facilitate
                empathetic, non-judgmental, and supportive responses while also
                guiding individuals to appropriate support systems.
              </p>

              <div className="my-2">
                <p className="font-semibold mb-1">Key Guidelines:</p>

                <ul className="list-disc pl-5">
                  <li>
                    <strong>What to say:</strong>
                    <ul className="list-inside list-disc pl-5">
                      <li>
                        Express belief and support:{" "}
                        <i>
                          "Thank you for sharing your experience with me. You
                          are not alone. I believe you."
                        </i>
                      </li>
                      <li>
                        Assess safety: <i>"Are you safe right now?"</i>
                      </li>
                      <li>
                        Offer information on supports and reporting options but
                        always allow choice.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>What not to say:</strong>
                    <ul className="list-inside list-disc pl-5">
                      <li>
                        Avoid victim-blaming questions or coercive suggestions
                        (e.g., “You should report this,” or “What were you
                        wearing?”).
                      </li>
                      <li>Do not minimize or dismiss their experience.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="my-3">
                <p className="font-semibold mb-1">Key Resources:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>On-Campus Support</strong>: Human Rights and Equity
                    Services (HRES), Sexualized Violence Advisor, Security
                    Services.
                  </li>
                  <li>
                    <strong>Community Support</strong>: Avalon Sexual Assault
                    Centre, Colchester SAC, SANE, and 24/7 crisis lines.
                  </li>
                </ul>
              </div>

              <div className="my-3">
                <p className="font-semibold mb-1">Reporting:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    A <strong>Disclosure</strong> is simply sharing information
                    and does not automatically trigger an investigation.
                  </li>
                  <li>
                    A <strong>Report</strong> is a formal process that includes
                    written allegations and may involve further institutional
                    steps.
                  </li>
                </ul>
              </div>

              <div className="my-3">
                <p className="font-semibold mb-1">Special Notes:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Individuals under 16 or under 19 (if abused by a guardian)
                    trigger mandatory legal reporting obligations.
                  </li>
                  <li>
                    Managers and supervisors must consult with HRES after
                    serious disclosures to ensure campus safety and appropriate
                    follow-up.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "blue" && (
            <div>
              <p>
                The <strong>Blue Folder</strong> is a tool to help faculty and
                staff recognize signs of student distress and respond with
                compassion and appropriate referrals. It applies broadly to
                academic and personal challenges that students may face, ranging
                from mental health to financial stressors.
              </p>

              <div className="my-2">
                <p className="font-semibold mb-1">Recognizing Distress:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Behavioral Signs</strong>: Withdrawal, irritability,
                    mood swings, falling asleep in class, disordered eating, or
                    personal hygiene changes.
                  </li>
                  <li>
                    <strong>Academic Signs</strong>: Drop in performance,
                    attendance issues, or communication difficulties.
                  </li>
                </ul>
              </div>

              <div className="my-3">
                <p className="font-semibold mb-1">How to Respond:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Approach students with genuine concern:{" "}
                    <i>
                      "I’ve noticed you seem withdrawn, is everything okay?"
                    </i>
                  </li>
                  <li>Listen actively and without judgment.</li>
                  <li>
                    Respect confidentiality and only escalate when safety is a
                    concern.
                  </li>
                </ul>
              </div>

              <div className="my-3">
                <p className="font-semibold mb-1">Referring Students:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Student Health & Wellness Centre</strong>: Offers
                    medical and mental health services, including same-day
                    counselling.
                  </li>
                  <li>
                    <strong>Student Support Team</strong> : A coordinated
                    service helping students navigate personal, financial, and
                    academic difficulties.
                  </li>
                  <li>
                    <strong>Specialized Offices</strong>: Accessibility Centre,
                    International Centre, Multifaith Services, Black/Indigenous
                    Student Advising Centres.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
