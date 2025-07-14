import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LabTranscripts from "./LabPostertranscripts";
import TaLabTranscripts from "./TaPosterTranscripts";

export default function TheLab() {
  const [activeTab, setActiveTab] = useState("considerations");

  return (
    <div className="my-3 space-y-4">
      <div className="my-4">
        <p>
          <strong>In the Lab</strong>: TAs should foster a supportive atmosphere
          where students feel comfortable asking questions and engaging with the
          material. The importance of preparation, clear communication, active
          listening, and providing constructive feedback are crucial to your
          effectiveness in the lab. TAs are encouraged to circulate the room,
          monitor student progress, and facilitate group discussions (when
          appropriate) to enhance collaborative learning.
        </p>

        <p className="mt-2">
          <strong className="text-red-600">No Phones!</strong> Unless you are
          using your mobile phone to communicate with your instructor locate a
          resource, or use the timer for activities, you should not be scrolling
          on your mobile phone. Your job in labs, classes and tutorials is to be
          attentive to students. This means engaging with them and carefully
          observing them as they work. Eyes on the class, not on your phone!
        </p>

        <p className="mt-2">
          You may be leading a teaching team of TAs and Demonstrators. We do
          encourage you to be collegial with one another and develop positive
          relationships, but the purpose of lab and tutorial times are to focus
          on the learning. Be mindful that students will be reticent to approach
          you for help if you and others leading the sessions are deep in
          conversation! Always be present, welcoming and observant.
        </p>
      </div>

      <div className="my-4">
        <h3 className="font-bold text-lg">
          Creating a Sense of Belonging for Students
        </h3>

        <p className="mt-2">
          It's important that students feel a sense of belonging. You need to
          facilitate this!
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            Start by sharing your name and the names of any Demonstrators in the
            room. Share something about yourself with your students. Perhaps
            your course of study, where you are from, your favourite hobby, etc.
            Even something about your own journey as a CS student. This helps
            students get to know you and develops a sense of familiarity.
          </li>
          <li>
            Remind your students that, as a TA, your role is to support their
            learning, which means approaching interactions differently than you
            would as a peer.
          </li>
          <li>
            You need to make an effort to learn students' names. A good way of
            doing this is to have students write their names on labels and wear
            them on their lapel the first couple of classes or create name tents
            (folding a piece of paper in half, students write their names on one
            half, then prop up the paper next to them). Also, encourage students
            to share their names with other students when they engage with each
            other for paired or group work.
          </li>
          <li>
            If a student asks a clarifying question after a demonstration or if
            it is relevant for the whole class, repeat it for everyone in the
            class to hear before you respond.
          </li>
          <li>
            Use students' names when speaking to them. If you do not know it,
            ask them and then repeat it before you respond. "Great question,
            Ammar….."
          </li>
        </ul>
      </div>

      <div className="my-4">
        <h3 className="font-bold text-lg">More Resources</h3>

        <p className="mt-2">
          The University of Michigan's CRLT page on lab teaching provides a
          range of resources designed to assist TAs in effectively teaching
          laboratory classes. Some of these resources aim to enhance
          instructional practices and support TAs in creating an engaging and
          productive learning environment that can also be effective in the
          computer science context. Key materials include guidelines for
          preparing to teach lab sections, checklists for logistics, sample
          syllabi, strategies for effective teaching, and best practices for
          grading laboratory reports. The resources aim to enhance instructional
          practices and support TAs in creating an engaging and productive
          learning environment.
        </p>

        <p className="mt-2">
          Lab Teaching | CRLT. (n.d.).
          <a
            href="https://crlt.umich.edu/resources/lab-teaching"
            className="text-blue-800 underline inline-flex items-center"
          >
            https://crlt.umich.edu/resources/lab-teaching
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </p>
      </div>

      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("considerations")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "considerations"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Important Considerations for a Lab Class
            </button>
            <button
              onClick={() => setActiveTab("strategic")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "strategic"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              4 Strategic Questions Poster
            </button>
            <button
              onClick={() => setActiveTab("taing")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "taing"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              TA-ing in the CS Lab
            </button>
          </nav>
        </div>

        <div className="mt-4 p-4 bg-gray-50 h-auto rounded-lg">
          {activeTab === "considerations" && (
            <div>
              <p>
                When Teaching Assistants (TAs) in Computer Science are
                responsible for lab classes, there are several important
                considerations to keep in mind to ensure a smooth and productive
                learning environment. Here's a breakdown of the key areas to
                focus on:
              </p>

              <h4 className="font-semibold mt-4">1. Technical Preparedness</h4>

              <p className="font-medium mt-2">Software and Hardware Setup:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Make sure that all required software is installed, configured,
                  and updated before the lab session.
                </li>
                <li>
                  Verify that hardware components are functioning properly if
                  you need them (this includes audio/visual equipment).
                </li>
              </ul>

              <p className="font-medium mt-2">Backup and Recovery Plans:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Prepare contingency plans in case of technical failures (e.g.,
                  server crashes or corrupted files). Also, if students
                  experience issues with their laptops, one can be borrowed from
                  the CS Help Desk on the first floor of the Goldberg. Student
                  ID is required.
                </li>
                <li>
                  Keep backup copies of essential software and data and know how
                  to restore the environment quickly.
                </li>
              </ul>

              <p className="font-medium mt-2">Lab Environment Consistency:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Ensure that all students receive the same information
                  regarding what it is they need to access/download either
                  before or at the beginning of the lab to avoid confusion.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">
                2. Clear Instructions and Demonstrations
              </h4>

              <p className="font-medium mt-2">Lab Introduction:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Start each session with a brief overview of the objectives and
                  tasks for the day.
                </li>
                <li>
                  Clearly explain the expected outcomes and deliverables
                  (introduce any rubrics and exemplars at this time if you have
                  them).
                </li>
              </ul>

              <p className="font-medium mt-2">Demonstrations:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Demonstrate essential skills or concepts and specific
                  programming functions, especially those that students may
                  struggle with, such as debugging techniques.
                </li>
                <li>
                  Use visual aids, code snippets, and live coding to make
                  explanations clear and engaging.
                </li>
              </ul>

              <p className="font-medium mt-2">Written Guidelines:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Provide step-by-step instructions or handouts that students
                  can refer to during the lab.
                </li>
                <li>
                  Make sure these documents are available digitally through the
                  learning management system (LMS). This helps with
                  accessibility as students can enlarge the text or use screen
                  readers.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">
                3. Supporting Student Learning
              </h4>

              <p className="font-medium mt-2">Encourage Problem-Solving:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  After any demonstrations have been given,{" "}
                  <strong>guide</strong> students through problem-solving
                  processes rather than giving direct answers. This means that
                  you will be asking "Guiding Questions" and pointing to where
                  you may see the problem.
                </li>
                <li>
                  Encourage students to think critically about code errors or
                  debugging challenges.
                </li>
              </ul>

              <p className="font-medium mt-2">Prompt and Clear Assistance:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Move around the lab to offer support while maintaining
                  awareness of the whole group.{" "}
                  <strong>Observe what students are doing!</strong> Sometimes,
                  students struggle with implementing a concept but feel anxious
                  to put their hands up. Just because the room or a particular
                  student is quiet, doesn’t mean that they aren’t struggling
                  with implementing a concept. If you notice a student isn’t
                  progressing in their work, stop and ask them questions. Be
                  supportive and kind in your approach.{" "}
                </li>
                <li>
                  Use open-ended questions to prompt students to explain their
                  thought processes. If you notice that students are reluctant
                  to respond, pair them up to discuss a response first, then
                  give feedback to you with an answer or give a means to respond
                  in writing or digitally.{" "}
                </li>
              </ul>

              <p className="font-medium mt-2">Group Work and Collaboration:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Foster collaborative problem-solving while ensuring that each
                  student is actively participating. Often, students learn
                  better when they can discuss problems in groups. Ensure you
                  incorporate some group work during labs.
                </li>
                <li>
                  Monitor for potential issues, such as unequal contribution
                  among group members.
                </li>
                <li>
                  Students can record their contributions to problem-solving and
                  feedback in various ways (audio, text, on paper or via digital
                  means)
                </li>
                <li>
                  See the section on{" "}
                  <a className="text-blue-800 underline inline-flex items-center">
                    Active Learning <ExternalLink className="ml-1 h-4 w-4" />
                  </a>{" "}
                  for some helpful tips{" "}
                </li>
              </ul>

              <h4 className="font-semibold mt-4">4. Managing Challenges</h4>

              <p className="font-medium mt-2">Technical Issues:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Be prepared to troubleshoot common errors, such as compilation
                  issues, dependency conflicts, or network failures.
                </li>
                <li>
                  Have a list of common problems and their solutions readily
                  available.
                </li>
              </ul>

              <p className="font-medium mt-2">Time Management:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Allocate time efficiently to address individual questions
                  without neglecting the group. It can be helpful to inform
                  students of a time frame for them to complete a task.
                </li>
                <li>
                  Use <strong>timers or visual cues on the board</strong> to
                  indicate progress on activities and keep the class on
                  schedule. This provides a sense of urgency and purpose in the
                  learning environment.{" "}
                </li>
              </ul>

              <p className="font-medium mt-2">
                Student Confidence and Anxiety:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Be patient and supportive, especially with students who feel
                  overwhelmed or unsure. Suggesting that students approach
                  larger tasks in smaller chunks can help keep them on task and
                  confident.
                </li>
                <li>
                  Offer encouragement and acknowledge effort, even when students
                  encounter difficulties. Use phrases like: "Well Tried!",
                  "You're not quite there yet. Have another go at it!", "Would a
                  further demonstration help?"
                </li>
                <li>
                  Having a set of <strong>recorded tutorials</strong> or a{" "}
                  <strong>resource bank</strong> for students to refer to can be
                  very helpful in reducing stress and anxiety. Try the{" "}
                  <a
                    href="https://projects.cs.dal.ca/justintime/dist/index.php"
                    className="text-blue-800 underline inline-flex items-center"
                  >
                    Just in Time Resources
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>{" "}
                  created by the CSEd Instructional Support Team. If you would
                  like to contribute to that resource contact{" "}
                  <a
                    href="mailto:csed@dal.ca"
                    className="text-blue-800 underline inline-flex items-center"
                  >
                    csed@dal.ca
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>{" "}
                  or create a resource bank for the course.{" "}
                </li>
              </ul>

              <h4 className="font-semibold mt-4">
                5. Safety and Ethical Considerations
              </h4>

              <p className="font-medium mt-2">Data and Privacy:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Emphasize the importance of protecting personal data and
                  adhering to privacy regulations when working with datasets.
                </li>
              </ul>

              <p className="font-medium mt-2">
                Ethical Coding Practices and Academic Integrity:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Discuss the ethical implications of programming choices, such
                  as bias in algorithms or data misuse when it's appropriate for
                  a task.
                </li>
                <li>
                  Ensure that students are aware that they must submit their own
                  work. Reference the{" "}
                  <a
                    href="https://dal.brightspace.com/d2l/home/178166"
                    target="_blank"
                    className="text-blue-800 underline inline-flex items-center"
                  >
                    FCS Academic Integrity
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>{" "}
                  course for Computer Science students. All students are
                  expected to complete the course. This will give them the
                  knowledge they need to understand the importance of academic
                  integrity.{" "}
                </li>
              </ul>

              <p className="font-medium mt-2">Health and Safety:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Ensure that students are aware of ergonomics to reduce strain
                  during long coding sessions. Adjustable seats, standing to
                  take a stretch etc.
                </li>
                <li>
                  Although there aren’t harmful chemicals to deal with in
                  computer science labs, it is important to take into account
                  the <strong>physical environment</strong>. Encourage students
                  to be mindful of trailing laptop cables, tucking backpacks
                  under tables and placing jackets on the backs of seats. These
                  are all possible <strong>tripping hazards</strong>; keeping
                  the space organized can help prevent accidents.{" "}
                </li>
                <li>
                  Promote good practices like taking short "
                  <strong>Bio-breaks</strong>!" to reduce screen fatigue and
                  allow the students to stretch their legs, use the washroom,
                  get a drink of water, etc.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">6. Assessment and Feedback</h4>

              <p className="font-medium mt-2">Grading and Evaluation:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Be consistent and fair when assessing student work, following
                  clearly defined rubrics. If you aren’t grading the work, you
                  still need to be aware of how the piece of work is assessed
                  and be able to explain this to the students.{" "}
                </li>
                <li>
                  Offer constructive feedback that highlights both strengths and
                  areas for improvement. If needed, highlight to the student
                  where they can revise the topic (Module 2, topic 3) or include
                  a video link in written responses.
                </li>
              </ul>

              <p className="font-medium mt-2">Student Reflection:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Encourage students to reflect on their learning after each lab
                  and discuss what they found challenging or insightful. If they
                  need to improve in a certain area, they should know where to
                  find resources and make a plan to learn it.{" "}
                </li>
              </ul>

              <h4 className="font-semibold mt-4">
                7. Communication and Professionalism
              </h4>

              <p className="font-medium mt-2">Maintain Approachability:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Create a welcoming environment where students feel comfortable
                  asking questions.
                </li>
                <li>
                  Ensure that students are polite and respectful to each other.
                  Remind them of the{" "}
                  <a
                    href="https://www.dal.ca/content/dam/www/about/leadership-and-governance/governing-bodies/code-student-conduct.pdf"
                    target="_blank"
                    className="text-blue-800 underline inline-flex items-center"
                  >
                    Student Code of Conduct
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>{" "}
                  If there are negative behaviours in the lab, address them
                  immediately and inform the instructor of the course if they
                  persist.{" "}
                </li>
              </ul>

              <p className="font-medium mt-2">Professional Conduct:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Be punctual, prepared, and responsive to student inquiries.
                </li>
                <li>
                  Maintain confidentiality and respect students' privacy when
                  discussing grades or performance.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">8. Debrief and Follow-Up</h4>

              <p className="font-medium mt-2">Review Lab Outcomes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Summarize key takeaways and reinforce the learning objectives
                  at the end of each session.
                </li>
              </ul>

              <p className="font-medium mt-2">Post-Lab Support:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Make yourself available for follow-up questions during office
                  hours or through online forums (if that time has been
                  allocated to you by the instructor).
                </li>
                <li>
                  Share recorded demonstrations, additional resources or further
                  practice problems on the LMS (Brightspace).
                </li>
              </ul>
            </div>
          )}

          {activeTab === "strategic" && (
            <div>
              <a
                href="https://www.canva.com/design/DAGivQP_-Nc/aNCLhTun55NppYm2ysh5Lw/edit?utm_content=DAGivQP_-Nc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                className="text-blue-800 underline inline-flex items-center"
                target="_blank"
              >
                View poster on Canva
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
              <div className="flex flex-row py-2 gap-3">
                <div className="flex items-center w-[650px] h-[1350px] relative justify-center overflow-auto">
                  <Image
                    fill
                    className="h-auto w-auto"
                    src="/labPoster.png"
                    alt="TA Poster"
                  />
                </div>
                <LabTranscripts />
              </div>
            </div>
          )}

          {activeTab === "taing" && (
            <div>
              <a
                href="https://www.canva.com/design/DAGivQP_-Nc/aNCLhTun55NppYm2ysh5Lw/edit?utm_content=DAGivQP_-Nc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                className="text-blue-800 underline inline-flex items-center"
                target="_blank"
              >
                View poster on Canva
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
              <div className="flex flex-row py-2 gap-3">
                <div className="flex items-center w-[650px] h-[1350px] relative justify-center overflow-auto">
                  <Image
                    fill
                    src="/taPoster.png"
                    className="h-auto w-auto"
                    alt="Ta Poster"
                  />
                </div>
                <TaLabTranscripts />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
