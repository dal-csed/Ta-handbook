import { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import { ExternalLink } from "lucide-react";

export default function TADemonstratorMarkerTable() {
  const [activeTab, setActiveTab] = useState("checklist");

  return (
    <div>
      <div className="overflow-x-auto my-8">
        <h2 className="text-2xl font-bold mb-4">
          FCS TA / Demonstrator / Marker Structure
        </h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left w-1/4">Category</th>
              <th className="border p-2 text-left">Teaching Assistants</th>
              <th className="border p-2 text-left">Demonstrators – new!</th>
              <th className="border p-2 text-left">Markers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">Pay</td>
              <td className="border p-2">
                $30.05 per hour*
                <br />
                <em>paid in fixed installments</em>
              </td>
              <td className="border p-2">
                $24.00 per hour*
                <br />
                <em>variable hours, submit by timesheet</em>
              </td>
              <td className="border p-2">
                $24.00 per hour*
                <br />
                <em>hours worked submitted by timesheet</em>
              </td>
            </tr>

            <tr>
              <td className="border p-2 font-semibold">Total Hours</td>
              <td className="border p-2">
                25, 35, 45, 65, 90, 110, or 130 hours only*
              </td>
              <td className="border p-2">
                maximum of lab or tutorial time
                <br />
                <em>
                  plus minimal other duties: meetings, prep, tech, in-lecture
                  support, training
                </em>
              </td>
              <td className="border p-2">non-binding and unlimited at FCS</td>
            </tr>

            <tr>
              <td className="border p-2 font-semibold">Ratios</td>
              <td className="border p-2">
                60 students per TA,
                <br />
                <em>depends on duties and TA</em>
              </td>
              <td className="border p-2">
                60 students per TA/Demonstrator grouping
              </td>
              <td className="border p-2">1 hours per student enrolled</td>
            </tr>

            <tr>
              <td className="border p-2 font-semibold">Valid Use of Time</td>
              <td className="border p-2 space-y-1">
                <ul className="list-disc ml-4">
                  <li>interact with students, running labs/tutorials</li>
                  <li>attend administrative meetings</li>
                  <li>assessment testing/development</li>
                  <li>technology training and additional supports</li>
                </ul>
              </td>
              <td className="border p-2 space-y-1">
                <ul className="list-disc ml-4">
                  <li>Interact with students in lab/tutorial/lecture only</li>
                  <li>Attend coordination briefings</li>
                  <li>Assist in launch and shutdown procedures</li>
                  <li>Proctor (admin support and walk the room only)</li>
                </ul>
              </td>
              <td className="border p-2 space-y-1">
                <ul className="list-disc ml-4">
                  <li>Evaluate student work product</li>
                  <li>Attend coordination briefings</li>
                  <li>Edit closed captioning</li>
                  <li>Proctor (admin support and walk the room only)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="border p-2 font-semibold">
                Invalid Use of Time / Not permitted
              </td>
              <td className="border p-2">
                <ul className="list-disc ml-4">
                  <li>
                    Be hired to mark at the TA rate
                    <br />
                    <em>If a TA needs to do marking, add a Marker contract.</em>
                  </li>
                </ul>
              </td>
              <td className="border p-2">
                <ul className="list-disc ml-4">
                  <li>
                    Interact with students outside labs/tutorials including
                    text/email
                  </li>
                  <li>Lead labs/tutorials</li>
                  <li>
                    Invigilate (answer content-related questions during testing)
                  </li>
                </ul>
                <em>
                  If a Demonstrator needs to do marking, add a Marker contract.
                </em>
              </td>
              <td className="border p-2">
                <ul className="list-disc ml-4">
                  <li>Interact with students, including text/email</li>
                  <li>
                    Answer student questions about marked work outside
                    lab/tutorial/lecture
                  </li>
                  <li>
                    Invigilate (answer content-related questions during testing)
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4 text-sm">
          <strong>Source:</strong>{" "}
          <a
            href="https://3912.cupe.ca/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CUPE 3912 collective agreement
          </a>
        </p>
        <p className="text-sm italic">
          *Pay rates effective September 1, 2023.
        </p>
      </div>

      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("checklist")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "checklist"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Your Responsibilities as a Teaching Assistant
            </button>
            <button
              onClick={() => setActiveTab("Markers")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "Markers"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Marking and Feedback (for Markers)
            </button>

            <button
              onClick={() => setActiveTab("Demonstrator")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "Demonstrator"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              More Information On Demonstrator Role
            </button>

            <button
              onClick={() => setActiveTab("policies")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "policies"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Understanding Policies and Procedures
            </button>
          </nav>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {activeTab === "checklist" && (
            <div>
              <p>
                TA roles differ in tasks depending on the course and the
                professor you are working with. You must be clear on your
                responsibilities when you accept a role as TA. Understanding the
                role of a Teaching Assistant (TA) is the foundation of effective
                teaching and support for students. The responsibilities vary
                across institutions but generally include assisting faculty with
                course delivery, grading assignments, and supporting students'
                learning experiences.
              </p>

              <div className="mt-2 space-y-2">
                <h3 className="font-semibold text-lg">
                  Basic Responsibilities
                </h3>

                <ul className="list-disc list-inside">
                  <li>
                    <strong>Facilitation of Learning</strong>: Lead tutorials,
                    labs, or discussion sessions to clarify course content.
                  </li>

                  <li>
                    <strong>Grading and Feedback</strong>: Mark assignments,
                    quizzes, or exams, and provide constructive feedback to
                    support student learning.
                  </li>

                  <li>
                    <strong>Office Hours and Student Support</strong>: Host
                    regular office hours to address student concerns, clarify
                    concepts, and provide guidance.
                  </li>

                  <li>
                    <strong>Course Preparation</strong>: Collaborate with
                    instructors to prepare teaching materials, assignments, and
                    assessments.
                  </li>
                </ul>
              </div>

              <p className="mt-3">
                Every instructor will have their own needs and ideas for what
                they would like you to do and how they would like you to
                approach tasks. The first meeting with the instructor can be
                seen as an "Orientation Meeting." This meeting is an opportunity
                to start your role in a positive and clear direction. To ensure
                that you are successful in your role, a helpful checklist of
                questions in this section will help guide your discussion with
                the instructor of the class as you embark on your TA journey.
                You will be able to refer to it when you need clarity. Also, you
                can share specific information you have recorded with your
                teaching team.
              </p>

              <p className="mt-3">
                Whether you are a <strong>new Teaching Assistant (TA)</strong>{" "}
                or taking on a course that is new to you, it’s essential to
                clearly understand your responsibilities. The following
                questions will help you define your role and expectations,
                ensuring you are prepared for your duties. Link to{" "}
                <a
                  href="https://dalu-my.sharepoint.com/:b:/g/personal/sh412475_dal_ca/ET53akMBCmxMkoTy46W5yVgBpgpqRSfEcY7Gzxve-yBewA?e=QzWc5t"
                  target="_blank"
                  className="text-blue-800 underline inline-flex items-center"
                >
                  Teaching Assistant Checklist: Questions to Ask{" "}
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
                , taken from Centre for Teaching Excellence, University of
                Waterloo (2024).
              </p>

              <h3 className="text-lg font-semibold mt-4">
                Understanding the Course & Syllabus{" "}
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  The first step to understanding the course—its content,
                  learning outcomes, structure (lectures, labs, and tutorials),
                  and important policies—is to carefully read the course
                  syllabus. The first question you must ask the instructor is:{" "}
                  <i> May I please have a copy of the course syllabus?</i>
                </li>
                <li>
                  <i>
                    Also, you need to obtain the teaching materials to
                    familiarize yourself with the content and structure of the
                    learning materials.
                  </i>
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
                Understanding Your Role
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  What will my primary responsibilities be? Will I be lecturing,
                  leading discussions, running tutorials, conducting labs,
                  grading, or working in an online environment through the
                  course management system?
                </li>
                <li>
                  How frequently will I be performing each of these tasks?
                </li>
                <li>
                  How does my supervisor define my role? (For example, what
                  specifically is involved in running a tutorial?)
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
                Providing Assistance
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  If I am offering individual support, how much help is
                  appropriate without crossing boundaries?
                </li>
                <li>
                  What types of assistance are not permitted or advisable?
                </li>
                <li>
                  Should I consider organizing group help or review sessions?
                </li>
              </ul>

              <p className="mt-4">
                Taking the time to find answers to these questions will help you
                feel confident and prepared as you take on your TA
                responsibilities. Being proactive in gathering information will
                minimize unexpected challenges and ensure you can approach your
                new role with assurance and clarity.
              </p>

              <h3 className="font-semibold my-2 text-lg">
                Facilitating Discussions
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  If I am leading discussions, what is the best way to structure
                  the sessions?
                </li>
                <li>
                  Should I focus on sticking closely to the course text or
                  lectures?
                </li>
                <li>
                  Should I encourage broad student participation, or take on a
                  more directive role?
                </li>
                <li>
                  Is it appropriate to address only student problems during
                  discussions?
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">Conducting Labs</h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>What specific responsibilities do I have in the lab?</li>
                <li>Am I in charge of managing supplies and materials?</li>
                <li>Will I be responsible for designing or revising labs?</li>
                <li>
                  Am I expected to give demonstrations during lab sessions?
                </li>
                <li>
                  Are there any platforms that I need to know how to use to
                  conduct the lab (GitLab, IntelliJ, Codio, etc.) Is there
                  training for this?
                </li>
                <li>
                  What procedures should I follow in case of emergencies or
                  accidents?
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
                Grading and Evaluation
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  What assessments will I be grading (papers, projects, reports,
                  quizzes, exams, participation)?
                </li>
                <li>
                  Are the grading criteria and rubrics for final grades clearly
                  defined?
                </li>
                <li>Who will handle disputes over grades?</li>
                <li>How much time will I have to complete grading tasks?</li>
                <li>
                  Are there platforms that I need to learn for grading
                  (Crowdmark, Codio, Brightspace, etc.)?
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
                Technical and Logistical Support
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Will I need to post content, announcements etc., on the LMS
                  (Brightspace)?
                </li>
                <li>
                  What audiovisual or technical equipment will I be responsible
                  for using?
                </li>
                <li>
                  Will I need to book, collect, or return equipment to the CS
                  Help Desk, or will it be managed by someone else?
                </li>
                <li>
                  How much freedom do I have to introduce new ideas, employ
                  different teaching methods, or present perspectives that
                  differ from the instructor?
                </li>
                <li>
                  If one of the technical platforms that we are using doesn’t
                  work properly, who do I contact?
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
                Office Hours and Availability
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Do I hold any office hours? How many, and at what times?
                </li>
                <li>
                  Who will be supervising my work, and what criteria will be
                  used to evaluate my performance?
                </li>
                <li>
                  If I am unable to attend a class, lab, or tutorial, who should
                  I inform and what procedures should I follow?
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
                Additional Responsibilities
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Are there any other duties or expectations I should be aware
                  of?
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
                Final Thoughts on Questions to Clarify Your Role
              </h3>

              <p className="mb-3">
                Taking the time to find answers to these questions will help you
                feel confident and prepared as you take on your TA
                responsibilities. Being proactive in gathering information will
                minimize unexpected challenges and ensure you can approach your
                new role with assurance and clarity.
              </p>

              <CollapsibleSection
                id={10.1}
                title="Material Distribution, Turnaround Time, and Effective Feedback Strategies"
                content={
                  <div>
                    <p className="mt-3">
                      Effective material distribution, timely feedback, and
                      structured feedback mechanisms are essential for student
                      success. These components help ensure that students
                      receive the necessary resources, guidance, and corrections
                      that facilitate their learning process. This document
                      outlines best practices for distributing materials
                      efficiently, reducing turnaround time for feedback, and
                      implementing various forms of effective feedback. 
                    </p>

                    <h3 className="text-lg font-bold mt-3 mb-2 ">
                      1. Material Distribution: Ensuring Accessibility and
                      Efficiency {" "}
                    </h3>

                    <h3 className="text-md font-semibold mt-2 mb-1">
                      Importance of Organized Material Distribution 
                    </h3>

                    <p>
                      Students rely on timely access to lecture notes,
                      assignments, grading rubrics, and supplementary resources
                      to stay engaged in their courses. Inconsistent or delayed
                      distribution can lead to confusion, lack of preparedness,
                      and diminished academic performance. 
                    </p>

                    <h3 className="text-lg font-bold mt-3 mb-2">
                      2. Best Practices for Material Distribution 
                    </h3>

                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong>Use a Centralized Platform</strong>: Learning
                        Management Systems (LMS) like Brightspace should serve
                        as the primary location for all class materials. This
                        ensures consistency and accessibility. However, Teams is
                        often used for online meetings and organizing group and
                        project work. It has a Files feature where students can
                        share and work on files together.
                      </li>
                      <li>
                        <strong>Schedule Releases in Advance</strong>: Providing
                        students with a predictable timeline for when materials
                        will be available fosters better planning and
                        engagement. 
                        <i>
                          Check with the instructor for the course and read the
                          syllabus carefully as the instructor may have a policy
                          for this.
                        </i>
                      </li>
                      <li>
                        <strong>Categorize and Label Resources Clearly</strong>:
                        Proper organization, such as folders for each topic or
                        week, makes it easier for students to find the necessary
                        resources quickly. 
                      </li>
                      <li>
                        <strong>Provide Multiple Formats</strong>: Where
                        possible, provide PDFs, PowerPoints, video lectures, and
                        interactive content to cater to different learning needs
                        as outlined by{" "}
                        <a
                          href="https://www.cast.org/what-we-do/universal-design-for-learning/"
                          target="_blank"
                          className="text-blue-600"
                        >
                          Universal Design for Learning (UDL)
                        </a>
                        . We need to ensure we provide opportunities to engage
                        students, offer multiple means of representation of
                        course material and offer various ways for students to
                        express/demonstrate the learning outcomes.
                      </li>
                      <li>
                        <strong>Enable Offline Access</strong>: Some students
                        may have limited internet access; downloadable materials
                        ensure they can continue their studies without
                        disruption. 
                      </li>
                    </ul>

                    <h3 className="text-lg font-bold mt-3 mb-1">
                      3. Turnaround Time: Enhancing Student Engagement with
                      Timely Feedback 
                    </h3>

                    <p className="font-semibold mt-2 mb-1">
                      The Impact of Timely Feedback 
                    </p>
                    <p>
                      Timely feedback allows students to reflect on their
                      performance and improve before their next assessment.
                      Delays in returning graded assignments or feedback can
                      lead to frustration and hinder learning. 
                    </p>

                    <p className="text-md font-semibold mt-2 mb-1">
                      Strategies to Improve Turnaround Time 
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Set Clear Expectations</strong>: Inform students
                        of feedback timelines upfront (e.g., “Assignments will
                        be returned within two weeks”). 
                      </li>
                      <li>
                        <strong>Prioritize Key Assignments</strong>: Focus on
                        high-impact assessments while using automated tools for
                        smaller quizzes.   
                      </li>
                      <li>
                        <strong>Use Peer Reviews</strong>: Implement structured
                        peer review sessions to provide students with
                        preliminary feedback before instructor comments. 
                      </li>
                      <li>
                        <strong>Employ Digital Grading Tools</strong>: Platforms
                        such as CrowdMark or using Quizzes or Assignments in
                        Brightspace
                      </li>
                      <li>
                        <strong>Utilize Teaching Assistants (TAs)</strong>: If
                        you are the Head TA, assign TAs/Markers to specific
                        grading tasks or sections to distribute workload
                        efficiently. 
                      </li>
                    </ul>

                    <p className="text-lg font-bold mt-3 mb-2">
                      4. Forms of Effective Feedback: Constructive and
                      Actionable Guidance 
                    </p>

                    <p className="mt-2 mb-1">
                      <strong>Characteristics of Effective Feedback</strong>
                       (the Markers section has more details for marking
                      students’ work)
                    </p>

                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong>Specific and Actionable</strong>: Feedback
                        should clearly highlight what students did well and
                        areas needing improvement. Provide access to resources
                        to help them improve if necessary.
                      </li>
                      <li>
                        <strong>Timely and Ongoing</strong>: Providing feedback
                        while the material is still fresh enhances its
                        effectiveness.
                      </li>
                      <li>
                        <strong>Balanced and Constructive</strong>: Highlight
                        strengths before critiquing weaknesses.
                      </li>
                      <li>
                        <strong>Encourages Reflection</strong>: Guide students
                        to think critically about their performance and how to
                        improve.
                      </li>
                    </ul>

                    <p className="text-md font-bold mt-2 mb-1">
                      Types of Feedback and Their Applications 
                    </p>

                    <ol className="list-[lower-alpha] my-2 space-y-2 pl-5">
                      <li>
                        <strong>Formative Feedback (During Learning) </strong>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>
                            <strong>Purpose</strong>: Helps students adjust
                            their learning strategies before final assessments. 
                          </li>
                          <li>
                            <strong>Examples</strong>: Instructor/TA/Marker
                            written comments on a draft submission, interactive
                            discussions, verbal feedback during lab sessions.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Summative Feedback</strong>
                        (After Learning happens, these are the graded that
                        appear in the Gradebook as part of the final grade) 
                        <ul className="list-disc ml-6 space-y-1">
                          <li>
                            <strong>Purpose</strong>: Evaluates learning at the
                            end of an instructional unit. 
                          </li>
                          <li>
                            <strong>Examples</strong>: Final project grades,
                            comprehensive written evaluations (tests/exams) and
                            presentations.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Peer Feedback </strong>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>
                            <strong>Purpose</strong>: Enhances student
                            collaboration and critical thinking skills.
                          </li>
                          <li>
                            <strong>Implementation</strong>: Structured
                            peer-review sessions where students provide
                            constructive critiques based on a rubric.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Automated Feedback</strong>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>
                            <strong>Purpose</strong>: Provides immediate
                            feedback through quizzes and exercises. 
                          </li>
                          <li>
                            <strong>Tools</strong>: MS Forms, Kahoot, LMS
                            quizzes, WeBWork, or various coding platforms with
                            instant feedback features. 
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Verbal Feedback</strong>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>
                            <strong>Purpose</strong>: Quick, informal feedback
                            during discussions or labs.
                          </li>
                          <li>
                            <strong>Implementation</strong>: One-on-one feedback
                            during office hours or live class corrections.
                          </li>
                        </ul>
                      </li>
                    </ol>

                    <p className="my-1">
                      Effective material distribution, prompt feedback
                      turnaround, and structured feedback methods significantly
                      improve student learning outcomes. By implementing digital
                      tools, structured peer reviews, and diverse feedback
                      strategies, educators and their teams (TAs and Markers)
                      can create an engaging and supportive learning
                      environment.
                    </p>

                    <h3 className="text-lg font-bold mt-3 mb-2">References</h3>

                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        Centre for Teaching Excellence. (n.d.). TA Handbook.
                        University of Waterloo. Retrieved from{" "}
                        <a
                          className="text-blue-600"
                          target="_blank"
                          href="https://uwaterloo.ca/centre-for-teaching-excellence/support-graduate-students/ta-handbook"
                        >
                          https://uwaterloo.ca/centre-for-teaching-excellence/support-graduate-students/ta-handbook {" "}
                        </a>
                      </li>

                      <li>
                        Centre for Teaching Excellence. (n.d.). Receiving and
                        Giving Effective Feedback. University of Waterloo.
                        Retrieved from{" "}
                        <a
                          className="text-blue-600"
                          target="_blank"
                          href="https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/receiving-and-giving-effective-feedback"
                        >
                          https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/receiving-and-giving-effective-feedback {" "}
                        </a>
                      </li>

                      <li>
                        Institute for Academic Development. (n.d.). Assessment &
                        Feedback Basic Guidance. University of Edinburgh.
                        Retrieved from{" "}
                        <a
                          className="text-blue-600"
                          target="_blank"
                          href="https://institute-academic-development.ed.ac.uk/learning-teaching/staff/assessment/guidance"
                        >
                          https://institute-academic-development.ed.ac.uk/learning-teaching/staff/assessment/guidance 
                        </a>
                      </li>

                      <li>
                        Wiggins, G. (2012). Seven Keys to Effective Feedback.
                        Educational Leadership, 70(1), 10–16. 
                      </li>

                      <li>
                        Stenger, M. (2014). Meaningful Feedback for Students: 5
                        Research-Based Tips. Edutopia. Retrieved from{" "}
                        <a
                          className="text-blue-600"
                          target="_blank"
                          href="https://www.edutopia.org/blog/tips-providing-students-meaningful-feedback-marianne-stenger"
                        >
                          https://www.edutopia.org/blog/tips-providing-students-meaningful-feedback-marianne-stenger 
                        </a>
                      </li>

                      <li>
                        Ambrose, S. A., Bridges, M. W., DiPietro, M., Lovett, M.
                        C., & Norman, M. K. (2010). How Learning Works: Seven
                        Research-Based Principles for Smart Teaching. San
                        Francisco, CA: Jossey-Bass. 
                      </li>

                      <li>
                        Education Endowment Foundation. (n.d.). Feedback.
                        Retrieved from{" "}
                        <a
                          className="text-blue-600"
                          target="_blank"
                          href="https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/feedback"
                        >
                          https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/feedback
                        </a>
                      </li>

                      <li>
                        The Education Hub. (2016). How to Integrate Effective
                        Feedback into Your Classroom. Retrieved from{" "}
                        <a
                          className="text-blue-600"
                          target="_blank"
                          href="https://theeducationhub.org.nz/how-to-integrate-effective-feedback-into-your-classroom"
                        >
                          https://theeducationhub.org.nz/how-to-integrate-effective-feedback-into-your-classroom
                        </a>
                      </li>
                    </ul>
                  </div>
                }
              />
            </div>
          )}

          {activeTab === "Markers" && (
            <div className="mb-3 space-y-4">
              <p>
                This section is focused on maintaining consistency, fairness,
                and clarity in grading practices. The following key aspects are
                addressed:
              </p>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <strong>Providing Exemplars</strong>: When grading complex
                  projects, having exemplars of high-quality, average, and
                  below-average work can help markers make objective
                  comparisons. It also gives TAs a better understanding so they
                  can explain it well to students. Exemplars (a worked example)
                  should be selected or created and shared (with the
                  corresponding rubrics) with students to set clear
                  expectations. This practice not only aids students in
                  understanding expectations and helps them to gain clarity on
                  the success criteria applied to similar work of varying
                  quality but also guides markers on how to improve the
                  assessment of the work once it is completed and submitted6.
                </li>
                <li>
                  <strong>Establishing a Standard for Better Grading</strong>:
                  Markers should develop a clear, shared understanding of the
                  grading criteria before assessing student work. A great way to
                  do this is to carefully review the rubric for the assessment
                  that has been given and thoroughly discuss it with the
                  instructor or head TA/Marker. The marking team need to
                  understand how to apply the rubric criteria appropriately to
                  grade a piece of work. As highlighted above, using an exemplar
                  of the project or past submissions as calibration tools align
                  expectations and improves the consistency of evaluations
                  across all markers7
                </li>
                <li className="space-y-3">
                  <strong>Moderation Techniques</strong>: To maintain consistent
                  grading standards, markers should collaborate through
                  moderation sessions. These sessions involve collectively
                  grading a sample set of submissions and discussing any scoring
                  discrepancies.
                  <p className="mt-3">
                    A lead marker or instructor can select a few assessments
                    representing high, medium, and low outcomes to establish a
                    shared understanding of the standard and the rationale
                    behind specific success criteria in the rubric.{" "}
                  </p>
                  <p>
                    During the session, all markers grade the same assessment
                    using the rubric, then compare scores and feedback. This
                    process, known as "calibration," helps markers reach a
                    consensus on the grade and determine effective feedback to
                    guide student improvement. It is an essential strategy to
                    resolve grading differences and ensure consistent
                    application of rubrics.{" "}
                  </p>
                </li>
                <li>
                  <strong>Grading Policies</strong>: To ensure fairness and
                  adherence to academic standards, maintaining the anonymity of
                  student names (often called Blind Marking) is crucial to avoid
                  bias. Markers must adhere to deadlines for returning graded
                  assignments according to the grading policy set by the
                  instructor (this can often be found in the course syllabus)
                  and handle disputes or requests for re-evaluation. Markers
                  will be instructed on how to communicate feedback
                  constructively, maintain academic integrity, and keep records
                  of graded work for potential audits or appeals by the
                  instructor9.
                </li>
                <li>
                  <strong>Take Regular Breaks to Maintain Fairness</strong>:
                  Grading fatigue can lead to{" "}
                  <strong>inconsistent evaluation</strong> or{" "}
                  <strong>unfair grading</strong>. Taking breaks ensures that
                  every student receives a{" "}
                  <strong>fair and thoughtful assessment</strong>.
                </li>
                <li>
                  <strong>Be Thoughtful in Tone</strong>: Written feedback
                  should be encouraging and constructive, not just critical.
                  Write comments that you would want to receive as a student.
                </li>
                <li>
                  <strong>Prioritize Feedback on Key Issues</strong>: Since time
                  is limited, focus on the most important areas for improvement
                  rather than trying to correct every issue.
                </li>
                <li>
                  <strong>Comment Banks</strong>: Can save time and be effective
                  as comments can be curated. If you aren’t using CrowdMark a{" "}
                  <strong>list of common feedback</strong> that can be copied
                  and pasted to streamline grading can be useful. Refer students
                  to external resources (e.g., office hours, the FCS Learning
                  Centre, or Dal’s Writing Centre) for further learning.
                </li>
                <li>
                  <strong>Address Common Errors with the Entire Class</strong>:
                  Instead of repeating feedback individually,{" "}
                  <strong>discuss frequent mistakes in class</strong> to save
                  time and reinforce key learning points.
                </li>
              </ol>

              <h3 className="font-sans font-bold">
                GPS Model for Effective Feedback
              </h3>

              <p>
                Providing minimal feedback can frustrate students, even those
                who performed well. The <strong>GPS model</strong> ensures that
                feedback is clear, actionable, and supportive:
              </p>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <strong>G – Goal</strong>: Clearly define what success looks
                  like and what students should aim for.
                </li>
                <li>
                  <strong>P – Position</strong>: Help students understand where
                  they currently stand in relation to their goal.
                </li>
                <li>
                  <strong>S – Steps</strong>: Offer specific strategies and
                  guidance on how to improve and progress towards success.
                </li>
              </ul>

              <p>
                By implementing these principles and strategies, TAs can provide{" "}
                <strong>meaningful and effective feedback</strong> that supports
                student learning and development.
              </p>

              <p>
                By abiding by and implementing the above steps, markers can be
                equipped with the necessary tools to perform their
                responsibilities effectively, foster a transparent grading
                process, give feedback accordingly and contribute to a fair
                learning environment.
              </p>

              <p>
                Receiving and giving effective feedback | Centre for Teaching
                Excellence | University of Waterloo. (n.d.).{" "}
                <a
                  href="https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/receiving-and-giving-effective-feedback"
                  target="_blank"
                  className="text-blue-600"
                >
                  https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/receiving-and-giving-effective-feedback
                </a>
              </p>

              <p>
                Moderation guidance. (2024, February 26). The University of
                Edinburgh.
                https://institute-academic-development.ed.ac.uk/learning-teaching/staff/assessment/moderation-guidance#:~:text=This%20involves%20the%20first%20marker,agree%20a%20final%20single%20mark.
              </p>

              <p>
                Wimshurst, K., & Manning, M. (2012). Feed-forward assessment,
                exemplars and peer marking: evidence of efficacy. Assessment &
                Evaluation in Higher Education, 38(4), 451–465.
                https://doi.org/10.1080/02602938.2011.646236
              </p>

              <p>
                Wimshurst, K., & Manning, M. (2012b). Feed-forward assessment,
                exemplars and peer marking: evidence of efficacy. Assessment &
                Evaluation in Higher Education, 38(4), 451–465.
                https://doi.org/10.1080/02602938.2011.646236
              </p>
            </div>
          )}

          {activeTab === "policies" && (
            <div>
              <p>
                As a Teaching Assistant (TA) at Dalhousie University, it's
                essential to familiarize yourself with the university's policies
                and procedures to ensure compliance and uphold the institution's
                standards. This section provides an overview of key policies
                relevant to your role.
              </p>

              <h3 className=" font-semibold my-2">
                University Policies Overview
              </h3>
              <p className="my-2">
                Dalhousie University maintains a comprehensive repository of
                policies that govern various aspects of university life. These
                policies are designed to provide direction and ensure
                consistency across the university community. You can access the
                full list of policies categorized by area on the{" "}
                <a
                  href="https://www.dal.ca/about/leadership-governance/university-policies.html"
                  target="_blank"
                  className="text-blue-800 underline inline-flex items-center"
                >
                  University Policies <ExternalLink className="ml-1 h-4 w-4" />
                </a>{" "}
                page.
              </p>

              <h3 className="text-lg font-bold my-2">
                Key Policies Relevant to TAs
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>
                    <a
                      href="https://www.dal.ca/content/dam/www/about/leadership-and-governance/governing-bodies/code-student-conduct.pdf"
                      className="text-blue-800 underline inline-flex items-center"
                      target="_blank"
                    >
                      Code of Student Conduct{" "}
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </strong>
                  : This policy outlines the expectations for student behaviour
                  and the procedures for addressing misconduct. As a TA,
                  understanding this code is crucial for managing classroom
                  behaviour and addressing any issues that may arise.
                </li>

                <li>
                  <strong>
                    <a
                      href="https://www.dal.ca/about/leadership-governance/academic-integrity.html"
                      className="text-blue-800 underline inline-flex items-center"
                      target="_blank"
                    >
                      Academic Integrity{" "}
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </strong>
                  : Dalhousie is committed to upholding the highest standards of
                  academic integrity. Familiarize yourself with the policies
                  related to plagiarism, cheating, and other forms of academic
                  dishonesty to effectively guide and assess students.
                </li>

                <li>
                  <strong>
                    <a
                      href="https://www.dal.ca/content/dam/www/about/leadership-and-governance/university-policies/sexualized-violence-policy.pdf"
                      className="text-blue-800 underline inline-flex items-center"
                      target="_blank"
                    >
                      Sexualized Violence Policy{" "}
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </strong>
                  : This policy defines sexualized violence and outlines the
                  university's approach to prevention, support, and response. As
                  a TA, you should be aware of the resources available and the
                  procedures for reporting incidents.
                </li>

                <li>
                  <strong>
                    <a
                      href="https://www.dal.ca/content/dam/www/about/leadership-and-governance/university-policies/Privacy-Policy.pdf"
                      className="text-blue-800 underline inline-flex items-center"
                      target="_blank"
                    >
                      Privacy Policy <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </strong>
                  : This policy governs the collection, use, and disclosure of
                  personal information within the university. TAs often handle
                  sensitive student information, so it's important to understand
                  your responsibilities under this policy.
                </li>

                <li>
                  <strong>
                    <a
                      href="https://www.dal.ca/content/dam/www/about/leadership-and-governance/university-policies/environmental-health-and-safety-policy.pdf"
                      className="text-blue-800 underline inline-flex items-center"
                      target="_blank"
                    >
                      Environmental Health and Safety Policy{" "}
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </strong>
                  : This policy outlines the university's commitment to
                  providing a safe and healthy environment. If your TA duties
                  involve laboratories or other specialized settings, adherence
                  to safety procedures is mandatory.
                </li>
              </ul>

              <h3 className="text-lg font-bold my-2">
                Procedures and Guidelines
              </h3>

              <p className="my-2">
                In addition to formal policies, Dalhousie provides procedures
                and guidelines to assist in the implementation of these
                policies. These documents offer detailed instructions and best
                practices for various situations you may encounter as a TA.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Academic Accommodation Policy</strong>: Guidelines for
                  providing accommodations to students with disabilities to
                  ensure equitable access to education.
                </li>
                <li>
                  <strong>Grading Practices Policy</strong>: Standards and
                  procedures for fair and consistent grading across the
                  university.
                </li>
                <li>
                  <strong>Syllabus Policy</strong>: Requirements for course
                  syllabi, including essential components and distribution
                  timelines.
                </li>
              </ul>

              <p className="mt-2">
                By familiarizing yourself with Dalhousie University's policies
                and procedures, you contribute to a respectful, safe, and
                effective learning environment for all members of the university
                community.
              </p>
            </div>
          )}

          {activeTab === "Demonstrator" && (
            <div>
              <ul className="list-disc pl-6 space-y-1.5 my-2">
                <li>
                  $24.00 per hour paid by timesheet (separate from Marker
                  timesheet).
                </li>
                <li>
                  A non-binding, scheduled casual position impacted by student
                  attendance.
                </li>
                <li>60 students per TA/Demonstrator grouping.</li>
                <li>
                  Demonstrators support the TA in delivering Lab/Tutorials,
                  answer questions from students.
                </li>
                <li>
                  Grandfather clause: TAs returning to the same course cannot be
                  paid Demonstrator rate for same work as previous term(s) and
                  are therefore rehired as TAs.This is course-specific.
                </li>
              </ul>

              <h3 className="text-lg font-semibold">Demonstrators may:</h3>

              <ul className="list-disc pl-6 space-y-1.5 my-2">
                <li>Assist in launch and shutdown procedures</li>
                <li>Attend coordination briefings</li>
                <li>Interact with students in Lab/Tutorial/Lecture only</li>
                <li>
                  Proctor (admin support and walk the room; may not answer
                  content-related questions)
                </li>
              </ul>

              <h3 className="text-lg font-semibold">Demonstrators may not:</h3>

              <ul className="list-disc pl-6 space-y-1.5 my-2">
                <li>Lead Labs or Tutorials</li>
                <li>
                  Interact with students outside Labs/Tutorials, including
                  messaging via Teams/email/BrightSpacediscussions/etc.
                </li>
                <li>
                  Invigilate (answer content-related questions during
                  testing/examinations)
                </li>
              </ul>

              <h3 className="text-lg font-semibold">Resource Allocation:</h3>

              <ul className="list-disc pl-6 space-y-1.5 my-2">
                <li>
                  Restricted list of duties that Demonstrators may perform.
                </li>
                <li>
                  Hourly amounts for each will be detailed in their contract
                  (like we do for TA contracts).
                </li>
                <li>Meetings</li>
                <li>Lab time</li>
                <li>Tutorial time</li>
                <li>Tech setup/support</li>
                <li>Prep time (expected to be minimal)</li>
                <li>In-lecture support time</li>
                <li>Training (on an exceptional basis)</li>
              </ul>

              <h3 className="text-lg font-semibold">
                Demonstrator Eligibility:
              </h3>

              <ul className="list-disc pl-6 space-y-1.5 my-2">
                <li>
                  New hires are excellent candidates for the Demonstrator
                  position.
                </li>
                <li>
                  If TAd the course before, said TA may not be hired as a
                  Demonstrator. This is course-specific.
                </li>
                <li>
                  If TAdbefore but not for this course, they are a Demonstrator
                  unless TA-only duties are required.
                </li>
                <li>
                  Proctor (admin support and walk the room; may not answer
                  content-related questions)
                </li>
              </ul>

              <h3 className="text-lg font-semibold">Marking:</h3>

              <ul className="list-disc pl-6 space-y-1.5 my-2">
                <li>If marking, a Marker contract will be added.</li>
              </ul>

              <h3 className="text-lg font-semibold">Reference:</h3>
              <p>
                <a
                  href="https://dal.brightspace.com/d2l/le/content/136347/viewContent/4757580/View"
                  className="text-blue-800 underline inline-flex items-center"
                  target="_blank"
                >
                  [Source:
                  https://dal.brightspace.com/d2l/le/content/136347/viewContent/4757580/View]
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
