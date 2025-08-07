import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function FosteringInclusiveClassrooms() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="my-3 space-y-4">
      <div className="mb-6">
        <p className="mb-4">
          Creating inclusive classrooms is a foundational part of effective
          teaching. At Dalhousie University, we believe that every student
          deserves an educational experience where they feel welcomed,
          respected, supported, and challenged. Inclusion is not simply about
          compliance—it's a commitment to building equitable spaces where all
          learners can thrive.
        </p>

        <p>
          As Teaching Assistants (TAs), Demonstrators, Markers, Graduate
          Students, Instructors, and academic staff, you play a key role in
          shaping this environment. The choices you make around communication,
          course design, engagement strategies, and classroom norms and how you
          communicate to students orally and in writing significantly impact how
          students experience belonging in their classes and learning
          environments.
        </p>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <div>
          <h3 className="font-bold mb-2">Dalhousie's Commitment to EDIA</h3>
          <p className="mb-4">
            Dalhousie is guided by its institutional commitment to Equity,
            Diversity, Inclusion, and Accessibility (EDIA). These principles are
            not abstract—they are tied directly to the lived experiences of
            students, staff, and faculty across our campuses.
          </p>

          <p className="mb-4">
            At Dalhousie University, EDIA stands for Equity, Diversity,
            Inclusion, and Accessibility. It represents a commitment to creating
            a welcoming and inclusive environment for all members of the
            university community. This commitment is a core institutional
            priority, influencing the university's vision, mission, values, and
            actions.
          </p>

          <h4 className="font-semibold mt-4">Core Principles</h4>

          <div className="mt-3">
            <p className="font-medium">Equity:</p>
            <p className="ml-4">
              Addressing historical and ongoing systemic inequalities to ensure
              fair access and opportunities for all. We must create conditions
              that address systemic barriers to participation and success.
            </p>
          </div>

          <div className="mt-3">
            <p className="font-medium">Diversity:</p>
            <p className="ml-4">
              Recognizing and valuing the diverse backgrounds, experiences, and
              identities of all individuals in our community.
            </p>
          </div>

          <div className="mt-3">
            <p className="font-medium">Inclusion:</p>
            <p className="ml-4">
              Creating a sense of belonging and engagement where everyone feels
              valued and respected – that they matter!
            </p>
          </div>

          <div className="mt-3">
            <p className="font-medium">Accessibility:</p>
            <p className="ml-4">
              Ensuring that all members of the university community, including
              those with disabilities (including physical), have equal access to
              resources and opportunities. This means access to physical spaces,
              digital resources, and programming accessible to all. We need to
              ensure that all students, regardless of disability or need, can
              fully engage with course materials and learning activities.
            </p>
          </div>

          <p className="mt-4">
            In essence, EDIA at Dalhousie is about creating a community where
            everyone feels valued, respected, and has the opportunity to thrive,
            regardless of their background or identity.
          </p>

          <p className="mt-4">
            You can explore Dalhousie's full EDIA framework and strategic goals
            here:{" "}
            <a
              href="https://www.dal.ca/about/mission-vision-values/equity-diversity-inclusion-and-accessibility.html"
              className="text-blue-800 underline inline-flex items-center"
              target="_blank"
            >
              Dalhousie EDIA Commitments
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </p>

          <h4 className="font-semibold mt-4">
            Setting the Tone: Respectful Discourse and Belonging
          </h4>
          <p className="mt-2">
            A truly inclusive classroom begins with respectful discourse.
            Dalhousie emphasizes the importance of open, civil, and constructive
            dialogue—even when opinions differ. This is especially relevant in
            classes where sensitive topics, cultural differences, or difficult
            discussions are likely to arise.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">
            Practical Strategies for Inclusive Teaching
          </h3>

          <div className="mt-4">
            <h4 className="font-semibold">
              Inclusive Language and Communication
            </h4>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Avoid gendered or ableist language; use terms like "they/them,"
                "everyone," or "folks."
              </li>
              <li>
                Ask students (if comfortable) to share their preferred name and
                pronouns.
              </li>
              <li>Avoid slang or idioms without context.</li>
              <li>
                Refer to Dalhousie's{" "}
                <a
                  href="https://www.dal.ca/about/mission-vision-values/respectful-discourse.html"
                  className="text-blue-800 underline inline-flex items-center"
                  target="_blank"
                >
                  Respectful Discourse Guidelines.
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Accessible Course Materials</h4>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Use the
                <a
                  href="https://caul-cbua.pressbooks.pub/creatingaccessiblelearningresources/"
                  className="text-blue-800 underline inline-flex items-center"
                  target="_blank"
                >
                  {" "}
                  Creating Accessible Learning Resources: A Practical Guide
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>{" "}
                to help you learn how to create accessible learning resources,
                high-contrast visuals, captioned videos, and
                screen-reader-friendly documents.
              </li>
              <li>
                Create resources that are digital. This helps those students who
                may need to enlarge documents or use screen readers to access
                the content.
              </li>
              <li>Upload lecture slides or notes in advance.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Curriculum Representation and Content
            </h4>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Use diverse sources from underrepresented groups.</li>
              <li>Avoid defaulting to Eurocentric examples.</li>
              <li>Address power, privilege, and systemic inequality.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Recognizing and Addressing Power Dynamics
            </h4>
            <p className="mt-2">
              As a TA or Demonstrator, you hold power in the classroom—often
              more than you realize. Being mindful of that power dynamic means
              avoiding public callouts unless necessary, i.e., where a situation
              in the learning environment may cause undue harm to another
              individual or groups of individuals. Read Harvard's Calling In and
              Calling Out Guide to familiarize yourself with what to do in
              specific situations where inappropriate behaviours in a learning
              space need to be addressed.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">
              Building Community in Your Classroom
            </h4>
            <p className="mt-2">
              Inclusivity thrives in classrooms where students feel seen.
              Consider using small group discussions, weekly check-ins, and
              anonymous suggestion forms to build trust and inclusivity.
            </p>
            <p className="mt-2">
              Dalhousie's Student Support Team is also available to help if you
              notice a student who may need more targeted support. Don't
              hesitate to reach out or refer a student when necessary.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">
            Supporting Mental Health and Wellness in the Classroom
          </h3>
          <p className="mb-4">
            Inclusion also means supporting the emotional and mental well-being
            of students. University life can be overwhelming, especially for
            international students, first-generation learners, or students
            dealing with trauma, discrimination, or financial stress.
          </p>

          <h4 className="font-semibold mt-3">Tips to integrate wellness:</h4>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              If a wellness statement and/or resource list has been shared in
              the course syllabus, be sure to direct students to it or the
              supports listed below.
            </li>
            <li>
              Remind students that it's okay to ask for help and that Dalhousie
              has confidential and free support available to them.
            </li>
            <li>
              Be flexible with deadlines where reasonable; rigidity can
              disproportionately harm students who may need extra time due to
              health concerns or those with accommodation plans.
            </li>
          </ul>

          <h4 className="font-semibold mt-4">Resources you can share:</h4>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <a
                className="text-blue-800 underline inline-flex items-center"
                target="_blank"
                href="https://www.dal.ca/campus_life/health-and-wellness/my-health/mental-health.html"
              >
                Mental Health Supports
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                className="text-blue-800 underline inline-flex items-center"
                target="_blank"
                href="https://dalu.sharepoint.com/sites/hr/SitePages/wellness.aspx"
              >
                Wellness Hub for Staff and Faculty
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="font-bold mb-2">
              Recognizing and Addressing Power Dynamics
            </h3>

            <p>
              As a TA or Demonstrator, you hold power in the classroom—often
              more than you realize. Being mindful of that power dynamic means
              avoiding public callouts unless necessary, i.e., where a situation
              in the learning environment may cause undue harm to another
              individual or groups of individuals. Read{" "}
              <a
                href="https://edib.harvard.edu/files/dib/files/calling_in_and_calling_out_guide_v4.pdf"
                className="text-blue-800 underline inline-flex items-center"
                target="_blank"
              >
                Harvard’s Calling In and Calling Out Guide{" "}
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
              to familiarize yourself with what to do in specific situations
              where inappropriate behaviours in a learning space need to be
              addressed.
            </p>

            <h3 className="font-bold mb-2">
              Building Community in Your Classroom
            </h3>

            <p>
              Inclusivity thrives in classrooms where students feel seen.
              Consider using small group discussions, weekly check-ins, and
              anonymous suggestion forms to build trust and inclusivity.
            </p>
            <p>
              Dalhousie’s{" "}
              <a
                href="https://dalu.sharepoint.com/sites/shw/SitePages/Student-Support-Team.aspx"
                className="text-blue-800 underline inline-flex items-center"
                target="_blank"
              >
                Student Support Team <ExternalLink className="ml-1 h-4 w-4" />
              </a>
              is also available to help if you notice a student who may need
              more targeted support. Don’t hesitate to reach out or refer a
              student when necessary.
            </p>

            <p className="mb-4">
              Inclusive teaching isn’t about perfection—it’s about intention and
              growth. Mistakes will happen. But if your students see that you
              care, that you’re learning, and that you’re willing to listen and
              adapt, they will respond with trust and engagement. 
            </p>

            <h4 className="font-semibold mt-3">
              Here's how you can keep growing:
            </h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Attend EDIA workshops or teaching seminars at Dal.</li>
              <li>Seek feedback from students and peers.</li>
              <li>
                Reflect on your assumptions and teaching style after each term.
              </li>
            </ul>

            <h4 className="font-semibold mt-4">Want help?</h4>
            <ul className="list-none pl-1 space-y-2 mt-2">
              <li>
                📩 Contact the Student Support Team:{" "}
                <a
                  href="https://dalu.sharepoint.com/sites/shw/SitePages/Student-Support-Team.aspx"
                  className="text-blue-800 underline inline-flex items-center"
                  target="_blank"
                >
                  Student Support Team
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                📚 Explore Dalhousie EDIA Resources:{" "}
                <a
                  target="_blank"
                  href="https://www.dal.ca/about/mission-vision-values/equity-diversity-inclusion-and-accessibility.html"
                  className="text-blue-800 underline inline-flex items-center"
                >
                  EDIA Resources
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                🧠 Share Mental Health Resources:{" "}
                <a
                  target="_blank"
                  href="https://www.dal.ca/campus_life/health-and-wellness/my-health/mental-health.html"
                  className="text-blue-800 underline inline-flex items-center"
                >
                  Mental Health Resources
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
