import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ToolboxInstructionalStrategies() {
  const [activeTab, setActiveTab] = useState("active-learning");

  return (
    <div className="my-3 space-y-4">
      <div className="mb-6">
        <p className="mb-4">
          As you develop your expertise in various teaching and learning
          settings, you must develop your "Toolbox of Instructional Strategies"
          to be an effective educator. Below, are some instructional strategies
          that can be implemented to help organize the learning environment,
          assist your students with knowledge and skill acquisition and keep you
          organized in your approach! As always, you need to be intentional and
          choose strategies that will work for your specific context.
        </p>

        <p>
          In today's diverse classrooms, labs and tutorials, educators employ
          various instructional strategies to meet the unique needs of their
          students. Among these, (Explicit) Direct Instruction, Guided Practice,
          and Differentiation are pivotal in enhancing student comprehension and
          engagement whilst challenging them with learning activities and course
          outcome-related tasks. Universal Design for Learning must be
          intentionally woven into the fabric of engagement of students,
          representation of information and action and expression of outcomes,
          all in various forms so every learner can achieve success.
        </p>
      </div>

      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("active-learning")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "active-learning"
                  ? "border-blue-500 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Active Learning
            </button>
            <button
              onClick={() => setActiveTab("explicit-direct-instruction")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "explicit-direct-instruction"
                  ? "border-blue-500 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Explicit Direct Instruction for the Lab or Lectures
            </button>
          </nav>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {activeTab === "active-learning" && (
            <div>
              <h3 className="font-bold mb-2">What is Active Learning?</h3>
              <p className="mb-4">
                Active learning is a teaching approach that engages students in
                the learning process through meaningful activities and critical
                thinking. As a TA, facilitating active learning will help
                students develop a deeper understanding of course content and
                build essential skills. Below are tips and examples to
                incorporate active learning into your teaching practices.
              </p>

              <iframe
                src="https://www.youtube.com/embed/D8Wc3eSRaLE"
                allowFullScreen
                className="h-120 w-174 my-3"
              />
              <p className="">
                  Edutopia. (2017, October 4). What is active learning? [Video]. YouTube. {" "}
                  <a
                    href="https://www.youtube.com/watch?v=D8Wc3eSRaLE"
                    className="text-blue-800 underline inline-flex items-center"
                    target="_blank"
                  >
                    https://www.youtube.com/watch?v=D8Wc3eSRaLE {" "}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </p>

              <h4 className="font-semibold mt-4">1. Classes & Tutorials</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Think-Pair-Share:</strong> Pose a thought-provoking
                  question and give students a minute to think about their
                  answer. Then, have them discuss with a partner before sharing
                  with the group.
                </li>
                <li>
                  <strong>Case Studies:</strong> Present a real-world problem
                  and have students work in small groups to develop solutions,
                  discussing their reasoning.
                </li>
                <li>
                  <strong>Peer Teaching:</strong> Assign small groups to learn
                  and present specific concepts. This helps solidify their
                  understanding while also building presentation skills.
                </li>
                <li>
                  <strong>Concept Mapping:</strong> Have students create visual
                  representations of relationships between key ideas, either
                  individually or collaboratively.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">
                2. Labs (or classes where live coding or working on math
                problems with students is possible)
              </h4>
              <p className="mt-2">
                <strong>Guided Practice:</strong> is a teaching strategy where
                learners{" "}
                <strong>
                  {" "}
                  practice a new skill or concept with the support and direction
                  of an instructor or facilitator
                </strong>
                . It's an essential step between direct instruction (teaching or
                modeling) and independent practice (when learners try it on
                their own).
              </p>

              <h5 className="font-medium mt-3">
                What Guided Practice Looks Like:
              </h5>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>
                  The instructor works <strong>alongside students</strong>,
                  offering prompts, cues, or corrections.
                </li>
                <li>
                  Students try out a task or problem while receiving{" "}
                  <strong>immediate feedback</strong>.
                </li>
                <li>
                  The level of support is gradually <strong>reduced</strong> as
                  students gain confidence and understanding.
                </li>
              </ul>

              <h5 className="font-medium mt-3">Why It's Important:</h5>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Reinforces what was just taught.</li>
                <li>
                  Helps students catch and correct misunderstandings early.
                </li>
                <li>
                  Builds confidence before students are expected to work
                  independently.
                </li>
                <li>
                  Encourages<strong> active learning </strong>and{" "}
                  <strong>student engagement</strong>.
                </li>
              </ul>

              <p className="mt-3">
                <strong>Guided Inquiry:</strong> Instead of providing detailed
                instructions, give students a goal and challenge them to
                determine the steps to achieve it. Guide them as needed but
                encourage independent problem-solving.
              </p>

              <p className="mt-3">
                <strong>Lab Reports with Reflection:</strong> Have students not
                only report their findings but also reflect on their process and
                how they approached challenges.
              </p>

              <p className="mt-3">
                <strong>Interactive Demonstrations:</strong> Allow students to
                predict outcomes before performing a code-related task and then
                discuss the results.
              </p>

              <h4 className="font-semibold mt-4">Tips for Success</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Set Clear Expectations:</strong> Let students know
                  that active participation is essential.
                </li>
                <li>
                  <strong>Be Supportive:</strong> Encourage students to take
                  risks and make mistakes as part of the learning process.
                </li>
                <li>
                  <strong>Debrief Regularly:</strong> Always take a few minutes
                  at the end of an activity to reflect on what was learned and
                  how the process felt.
                </li>
              </ul>

              <div className="mt-4 pt-4 space-y-3 border-t border-gray-200">
                <h4 className="font-semibold">Reference</h4>
                <p className="">
                  Deslauriers, L., McCarty, L. S., Miller, K., Callaghan, K., & Kestin, G. (2019). Instructor strategies to aid implementation of active learning: a systematic literature review. International Journal of STEM Education, 6(1), 1–18.  {" "}
                  <a
                    href="https://doi.org/10.1186/s40594-021-00270-7"
                    className="text-blue-800 underline inline-flex items-center"
                    target="_blank"
                  >
                    https://doi.org/10.1186/s40594-021-00270-7{" "}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </p>

                <p className="">
                  Queen’s University Centre for Teaching and Learning. (n.d.). Active learning.  {" "}
                  <a
                    href="https://www.queensu.ca/ctl/resources/instructors/instructional-strategies/field-based-learning"
                    className="text-blue-800 underline inline-flex items-center"
                    target="_blank"
                  >
                    https://www.queensu.ca/ctl/resources/instructors/instructional-strategies/field-based-learning{" "}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </p>

                <p className="">
                  University of Minnesota. (n.d.). Active learning classroom activities for student innovators.  {" "}
                  <a
                    href="https://cei.umn.edu/support-services/tutorials/active-learning"
                    className="text-blue-800 underline inline-flex items-center"
                    target="_blank"
                  >
                    https://cei.umn.edu/support-services/tutorials/active-learning{" "}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          )}

          {activeTab === "explicit-direct-instruction" && (
            <div>
              <h3 className="font-bold mb-2">
                Overview of Direct Instruction (DI)
              </h3>
              <p className="mb-4">
                Direct Instruction (DI) is a teacher-led approach where the
                teacher controls the classroom activities and directs
                information to students in a structured and sequenced manner.
                There are various forms of DI, with some being more rigid than
                others. However, the Modern DI forms are much more effective,
                such as Explicit Direct Instruction (EDI), which is more
                flexible and involves eight didactic principles that enhance
                each other.
              </p>

              <h4 className="font-semibold mt-4">
                Eight Didactic Principles of EDI
              </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Learning Objectives:</strong> Clearly defined goals
                  that students can understand. "By the end of this session, you
                  will be able to…."
                </li>
                <li>
                  <strong>Activating Prior Knowledge:</strong> Connecting new
                  information to what students already know. "What do you
                  already know about "x"? Where have you seen it being used
                  before?"
                </li>
                <li>
                  <strong>Concept Development:</strong> Detailed explanation of
                  new concepts. How does this concept fit into the big picture
                  of what they are learning? For example, if functions and loops
                  are being taught, give a visual example of what it looks like
                  and what other contexts (areas or systems) where it can be
                  applied.
                </li>
                <li>
                  <strong>Skill Development:</strong> Demonstrating and
                  practicing new skills. Give a demonstration of the new skill.
                  Ensure that everyone can see what you are doing. You can also
                  record this so that students can refer back to it if they need
                  more support during the lab.
                </li>
                <li>
                  <strong>Guided Practice:</strong> Teacher-led practice
                  sessions. After the demonstration, take a problem and ask
                  students to suggest the next step. (Students can be in pairs
                  to discuss and suggest the next step to you). Question their
                  thinking along the way. Why do you think this is the step you
                  should take? Can anyone suggest another way?
                </li>
                <li>
                  <strong>Independent Practice:</strong> Students practice on
                  their own. Circulate around the room as students are working.
                  <strong> Pay attention </strong> to what is on their screens,
                  if you notice them making errors, ask them to pause and talk
                  through their choices. See if they can identify where they are
                  going wrong. If they can't, walk them back to where they
                  started making mistakes in their code or work, then provide
                  further guidance so they can achieve success. A good practice
                  is to have a digital resource bank on Brightspace, so they can
                  watch a tutorial on how to do "x" and then circle back to see
                  if they are on the right track after a few moments.
                </li>
                <li>
                  <strong>Lesson Closure:</strong> Assessing student
                  understanding through questions or small tasks. This can be
                  done by polls, small group discussion.
                </li>
                <li>
                  <strong>Lesson Importance:</strong> Explaining the relevance
                  of the lesson to students.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">Benefits of EDI</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Effectiveness:</strong> Research shows that EDI can be
                  more effective than exploratory methods, especially for weaker
                  students.
                </li>
                <li>
                  <strong>Equalizing Effect:</strong> EDI ensures all students
                  receive intentional instruction and opportunities to practice,
                  which can help bridge gaps in prior knowledge.
                </li>
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="">
                  <strong>Reference</strong>
                  <br />
                  Hermans, F., & Smit, M. (n.d.). Explicit Direct Instruction in
                  Programming Education.{" "}
                  <a
                    href="https://www.ppig.org/files/2018-PPIG-29th-hermans.pdf "
                    className="text-blue-800 underline inline-flex items-center"
                    target="_blank"
                  >
                    https://www.ppig.org/files/2018-PPIG-29th-hermans.pdf{" "}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
