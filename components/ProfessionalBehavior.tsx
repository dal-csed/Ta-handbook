import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TAProfessionalBehavior() {
  const [activeTab, setActiveTab] = useState("boundaries");

  return (
    <div className="my-3 space-y-4">
      <div className="my-4">
        <p>
          As a Teaching Assistant, you play a vital role in supporting student
          learning and maintaining a positive classroom environment. To
          demonstrate professional behaviour, it’s important to be punctual (on
          time), reliable, and respectful in all your interactions with
          students, professors, and fellow TAs. Adhering to{" "}
          <a
            href="https://www.dal.ca/about/leadership-governance/university-policies.html"
            target="_blank"
            className="text-blue-800 underline inline-flex items-center"
          >
            Dalhousie University Policies{" "}
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          , maintaining confidentiality, and demonstrating cultural sensitivity
          are key aspects of your role. Be mindful of using{" "}
          <a
            href="https://pros.educ.queensu.ca/blog/inclusivelanguage"
            target="_blank"
            className="text-blue-800 underline inline-flex items-center"
          >
            inclusive language <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          , and practicing active listening to create a welcoming and respectful
          atmosphere. Take advantage of training opportunities that focus on
          communication skills, conflict resolution, and ethical behaviour, as
          these will help you develop confidence and professionalism in your
          interactions.
        </p>
      </div>

      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("boundaries")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "boundaries"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Boundaries with Students
            </button>

            <button
              onClick={() => setActiveTab("communication")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "communication"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Communication with Professors
            </button>
          </nav>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {activeTab === "boundaries" && (
            <div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Maintaining Professional Boundaries with Students{" "}
                </h2>
                <p>
                  As a Teaching Assistant (TA), you play a crucial role in
                  supporting students’ academic success while also contributing
                  to a positive and respectful learning environment. Building
                  rapport with students is important, but it's equally essential
                  to maintain professional boundaries. These boundaries help
                  preserve academic integrity, prevent misunderstandings, and
                  support an inclusive and equitable classroom for all.
                </p>
                <p className="mt-3">
                  Crossing or blurring professional boundaries—even
                  unintentionally—can lead to ethical concerns, conflicts of
                  interest, or discomfort for both the TA and the student. The
                  following tips are designed to help you navigate your role
                  with clarity and confidence.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">
                  Top Tips for Maintaining Boundaries{" "}
                </h3>

                <ol className="list-decimal pl-6 space-y-2 my-2">
                  <li>
                    <strong>Be Friendly, Not a Friend</strong>– Be approachable
                    and supportive, but maintain a professional tone in your
                    interactions. Avoid overly personal conversations or
                    becoming socially entangled with students during the term.
                  </li>
                  <li>
                    <strong>Communicate Clearly</strong> – Set expectations
                    early on about your availability (e.g., office hours,
                    response times), the scope of your role, and how you will
                    interact with students (e.g., via university email only).
                  </li>
                  <li>
                    <strong>Avoid Favouritism</strong> – Treat all students
                    equitably. Refrain from giving any student special
                    treatment, such as extra help or leniency, unless it is
                    formally arranged through accommodations.
                  </li>
                  <li>
                    <strong>Keep Communication Transparent</strong> – Use
                    official university communication channels and keep records
                    of student interactions when discussing grades, feedback, or
                    sensitive topics.
                  </li>
                  <li>
                    <strong>Respect Privacy</strong> – Do not share students'
                    personal information or academic performance with others. If
                    a student discloses something serious, refer them to
                    appropriate university support services or your course
                    instructor.
                  </li>
                  <li>
                    <strong>Avoid Dual Relationships</strong> – f you already
                    have a personal relationship with a student (e.g., friend,
                    partner, relative), disclose this to the course instructor.
                    Avoid grading or tutoring them if possible.
                  </li>
                  <li>
                    <strong>Limit Social Media Contact</strong> – Do not add or
                    follow students on personal social media accounts. Maintain
                    your digital boundaries to support professionalism.
                  </li>
                  <li>
                    <strong>Know When to Refer</strong> – If a student is in
                    distress or you feel unsure about how to handle a situation,
                    consult the course instructor or a university support office
                    (link to the section on supporting students in distress).
                    You are not expected to counsel students.
                  </li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === "communication" && (
            <div className="space-y-2.5">
              <h2 className="text-2xl font-semibold mb-3">
                Keeping the Instructor Informed & What To Do When You Don’t know
                What To Do{" "}
              </h2>

              <p>
                When interacting with professors, maintain open and respectful
                communication, keeping them informed of any challenges or
                concerns when they happen. Do not wait until a situation becomes
                an even bigger problem! At times, you may feel shy or nervous to
                discuss issues with the instructor, but early resolutions to
                issues are appreciated. This will also help you to develop your
                communication skills! Be proactive in discussing your
                responsibilities and expectations, and seek clarification
                whenever needed. Always maintain professionalism, even when
                sharing feedback or discussing classroom challenges.
              </p>

              <p className="my-3">
                Teaching Assistants (TAs) play a crucial role in supporting
                course instructors and enhancing student learning experiences.
                However, situations may arise that are beyond your scope of
                responsibility or expertise, necessitating consultation with the
                course instructor. Here are key scenarios when a TA should
                contact the instructor:
              </p>

              <h3 className="font-semibold text-xl mt-5">
                Clarification of Duties and Expectations
              </h3>

              <p>
                At the semester's outset, it's crucial for TAs to have a clear
                understanding of their duties. If there's ambiguity regarding
                tasks—such as grading policies, leading discussions, or holding
                office hours—TAs should seek clarification from the instructor
                to ensure alignment with course objectives. Please see the{" "}
                <Link
                  href={"#section-1"}
                  className="text-blue-800 underline mx-1 inline-flex items-center"
                >
                  Teaching Assistant Checklist{" "}
                </Link>
              </p>

              <h3 className="font-semibold text-xl mt-5">
                Addressing Student Concerns Beyond TA Expertise
              </h3>

              <div className="space-y-2">
                <p>
                  Students may approach TAs with issues that exceed their
                  authority or expertise, including:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Academic Accommodations</strong> Requests related to
                    disabilities, special needs, student accommodation plans,
                    etc., should be directed to the instructor to ensure
                    compliance with institutional policies.
                  </li>

                  <li>
                    <strong>Personal Matters</strong> : If a student shares
                    personal challenges affecting their academic performance,
                    the TA should inform the instructor who can provide
                    appropriate support or referrals. Also see the section on
                    <Link
                      href="#section-14"
                      className="text-blue-800 underline mx-1 inline-flex items-center"
                    >
                      Student Supports at Dal
                    </Link>
                    if the student relates personal issues of another nature.
                  </li>
                </ul>

                <p>
                  Prompt communication ensures that students receive accurate
                  guidance and support.
                </p>
              </div>

              <div className="my-3">
                <h3 className="font-semibold">
                  Suspected Academic Integrity Violations
                </h3>

                <p>
                  In cases of suspected academic dishonesty, such as plagiarism
                  or cheating, TAs must report these incidents to the instructor
                  immediately. The instructor can then initiate investigations
                  and initialize the process with the Academic Integrity Team,
                  sanctions may be given in accordance with university policies.
                  In such cases, the instructor relies on the TA
                </p>
              </div>

              <div className="my-3">
                <h3 className="font-semibold">
                  Content-Related Questions Beyond TA Knowledge
                </h3>

                <p>
                  When TAs encounter student inquiries about course material
                  that they cannot confidently address, it's advisable to
                  consult the instructor. This approach ensures that students
                  receive accurate information and maintains the integrity of
                  the course content.
                </p>
              </div>

              <div className="my-3">
                <h3 className="font-semibold">Logistical or Policy Changes</h3>

                <p>
                  Any proposed alterations to course logistics—such as changes
                  in assignment deadlines, exam schedules, or grading
                  criteria—should be discussed with the instructor before
                  implementation. This coordination maintains consistency and
                  fairness across the course.
                </p>
              </div>

              <div className="my-3">
                <h3 className="font-semibold">
                  Personal Emergencies or Absences
                </h3>

                <p>
                  TAs should notify instructors as soon as possible about
                  personal emergencies or situations that might affect their
                  availability, such as illnesses or unforeseen events. Early
                  communication allows the instructor to make necessary
                  adjustments to minimize disruptions to the course.
                </p>
              </div>

              <div className="my-3">
                <h3 className="font-semibold">
                  Professional Boundaries and Ethical Concerns
                </h3>

                <p>
                  Situations that challenge professional boundaries or ethical
                  standards—such as conflicts of interest, inappropriate student
                  behavior, or harassment—should be promptly reported to the
                  instructor. Addressing these issues ensures a safe and
                  respectful learning environment for all participants.
                </p>
              </div>

              <div className="my-3">
                <h3 className="font-semibold">
                  Continuous Feedback and Performance Evaluation
                </h3>

                <p className="mb-1">
                  Regular communication with the instructor provides
                  opportunities for feedback on teaching performance. TAs should
                  seek guidance on improving their instructional methods and
                  address any challenges faced during the course. This ongoing
                  dialogue contributes to professional development and enhances
                  the overall educational experience.
                </p>

                <p>
                  In all these scenarios, proactive and transparent
                  communication between TAs and instructors is essential. It
                  ensures that issues are addressed promptly, supports student
                  success, and fosters a collaborative teaching environment.
                </p>
              </div>

              <div className="my-3">
                <h3 className="font-semibold">
                  What to do when you don’t know what to do!
                </h3>

                <p>
                  There will always be times when you aren’t quite sure about….
                </p>

                <ul className="list-disc ml-6 space-y-1">
                  <li>how to proceed in a particular situation</li>
                  <li>who to go to when “x” happens</li>
                  <li>where to find a learning resource</li>
                  <li>which platform you need to use for assignments</li>
                  <li>what to do when you catch someone cheating</li>
                  <li>how do I learn to use Crowdmark</li>
                  <li>……</li>
                </ul>

                <p>
                  The answer to the above is always to be proactive and ASK!
                  Reading this handbook will provide you with some information,
                  connecting with other TAs and if you can’t find the answer,
                  ask the course instructor.
                </p>
              </div>

              <h3 className="font-semibold text-xl mt-5">
                Interacting with other TAs
              </h3>

              <p>
                In your interactions with other TAs, foster a spirit of
                collaboration and support. Respect each other's ideas and
                perspectives and avoid gossip or unprofessional discussions
                about students or faculty. Share resources and strategies that
                have been effective in your work and be willing to learn from
                your peers. Approach group tasks with a cooperative attitude and
                take responsibility for your share of the workload. If conflicts
                arise, address them directly and respectfully, or seek mediation
                if needed (meaning inform the instructor of the course of the
                issue). Building strong, positive relationships with your fellow
                TAs & Demonstrators will enhance your professional growth and
                contribute to a more cohesive and supportive teaching team.
              </p>
            </div>
          )}
        </div>
      </div>

      <h3 className="font-bold text-lg mt-6">References</h3>
      <p className="text-sm">
        Elements of course design for TAs&nbsp;| Centre for Teaching and
        Learning. (n.d.).{" "}
        <a
          target="_blank"
          className="text-blue-800 underline inline-flex items-center"
          href="https://www.queensu.ca/ctl/resources/graduate-student-post-doctoral-and-ta/teaching-assistant-toolkit/elements-course-design"
        >
          https://www.queensu.ca/ctl/resources/graduate-student-post-doctoral-and-ta/teaching-assistant-toolkit/elements-course-design{" "}
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </p>
      <p className="text-sm">
        Smith, J. (2024, October&nbsp;3). Communication Techniques for Classroom
        Assistants. Portobello Institute.{" "}
        <a
          target="_blank"
          className="text-blue-800 underline inline-flex items-center"
          href="https://blog.portobelloinstitute.com/communication-techniques-for-classroom-assistants"
        >
          https://blog.portobelloinstitute.com/communication-techniques-for-classroom-assistants{" "}
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </p>
      <p className="text-sm">
        Teaching Continuity for Graduate Teaching Assistants&nbsp;-
        Communicating with Students. (2023, July&nbsp;10). Taylor Institute for
        Teaching and Learning.{" "}
        <a
          target="_blank"
          className="text-blue-800 underline inline-flex items-center"
          href="https://taylorinstitute.ucalgary.ca/resources/teaching-continuity-for-graduate-teaching-assistants-communicating-with-students"
        >
          {" "}
          https://taylorinstitute.ucalgary.ca/resources/teaching-continuity-for-graduate-teaching-assistants-communicating-with-students{" "}
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </p>
      <p className="text-sm">
        Working with Teaching Assistants&nbsp;| Computer Science Instructional
        Support Group. (n.d.). University of Waterloo.{" "}
        <a
          target="_blank"
          className="text-blue-800 underline inline-flex items-center"
          href="https://uwaterloo.ca/computer-science-instructional-support-group/instructor-support/guidelines-cs-instructors/working-teaching-assistants"
        >
          {" "}
          https://uwaterloo.ca/computer-science-instructional-support-group/instructor-support/guidelines-cs-instructors/working-teaching-assistants{" "}
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </p>
      <p className="text-sm">
        Teaching Assistants' Training Program. (2024, May&nbsp;29). Course
        Instructor–Teaching Assistant Relationship&nbsp;- Teaching Assistants'
        Training Program.{" "}
        <a
          target="_blank"
          className="text-blue-800 underline inline-flex items-center"
          href="https://tatp.utoronto.ca/resources/course-instructor-teaching-assistant-relationship/"
        >
          {" "}
          https://tatp.utoronto.ca/resources/course-instructor-teaching-assistant-relationship/{" "}
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </p>
      <p className="text-sm">
        Learning Module: Teaching Assistant Orientation&nbsp;- Lesson&nbsp;5.
        (2023, February&nbsp;16). Taylor Institute for Teaching and Learning.{" "}
        <a
          target="_blank"
          className="text-blue-800 underline inline-flex items-center"
          href="https://taylorinstitute.ucalgary.ca/resources/module/teaching-assistant-orientation/professionalism"
        >
          {" "}
          https://taylorinstitute.ucalgary.ca/resources/module/teaching-assistant-orientation/professionalism{" "}
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </p>
    </div>
  );
}
