import Link from 'next/link';
import React, { useState } from 'react'

const CreatingALR = () => {

  const [activeTab, setActiveTab] = useState("Assignments");
  
  return (
    <div className="my-3 space-y-4">
      <div className="mb-6">
        
        <p className="mb-4">
          INTRO
        </p>
        
        
      </div>
      
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("Assignments")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "Assignments"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Assignments
            </button>
            <button
              onClick={() => setActiveTab("labs")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "labs"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Labs
            </button>
            <button
              onClick={() => setActiveTab("rubrics")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "rubrics"
                  ? "border-blue-500 font-semibold text-blue-600"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Rubrics
            </button>
          </nav>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {activeTab === "Assignments" && (
            <div>
              <h3 className="font-bold mb-2">What is Active Learning?</h3>
              <p className="mb-4">
                Creating inclusive classrooms is a foundational part of effective teaching. At Dalhousie University, we believe that every student deserves an educational experience where they feel welcomed, respected, supported, and challenged. Inclusion is not simply about compliance—it’s a commitment to building equitable spaces where all learners can thrive.  
              </p>

              <p className="mb-4">
                As Teaching Assistants (TAs), Demonstrators, Markers, Graduate Students, Instructors, and academic staff, you play a key role in shaping this environment. The choices you make around communication, course design, engagement strategies, and classroom norms and how you communicate to students orally and in writing significantly impact how students experience belonging in their classes and learning environments. 
              </p>
              
              <h4 className="font-semibold mt-4">Dalhousie’s Commitment to EDIA</h4>

              <p className="mb-4">
              Dalhousie is guided by its institutional commitment to Equity, Diversity, Inclusion, and Accessibility (EDIA). These principles are not abstract—they are tied directly to the lived experiences of students, staff, and faculty across our campuses.
              </p>

              <p className="mb-4">
              At Dalhousie University, EDIA stands for Equity, Diversity, Inclusion, and Accessibility. It represents a commitment to creating a welcoming and inclusive environment for all members of the university community. This commitment is a core institutional priority, influencing the university's vision, mission, values, and actions. 
              </p>

              <h2 className="text-lg font-bold">
                Here's a more detailed look at EDIA at Dalhousie: 
              </h2>

              <h2 className=" font-semibold">
                Core Principles  
              </h2>

              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Think-Pair-Share:</strong> Pose a thought-provoking question and give students a minute to think about their answer. Then, have them discuss with a partner before sharing with the group.</li>
                <li><strong>Case Studies:</strong> Present a real-world problem and have students work in small groups to develop solutions, discussing their reasoning.</li>
                <li><strong>Peer Teaching:</strong> Assign small groups to learn and present specific concepts. This helps solidify their understanding while also building presentation skills.</li>
                <li><strong>Concept Mapping:</strong> Have students create visual representations of relationships between key ideas, either individually or collaboratively.</li>
              </ul>
              
              <h4 className="font-semibold mt-4">2. Labs (or classes where live coding or working on math problems with students is possible)</h4>
              <p className="mt-2">
                <strong>Guided Practice:</strong> is a teaching strategy where learners <strong> practice a new skill or concept with the support and direction of an instructor or facilitator</strong>. It's an essential step between direct instruction (teaching or modeling) and independent practice (when learners try it on their own).
              </p>
              
              <h5 className="font-medium mt-3">What Guided Practice Looks Like:</h5>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>The instructor works <strong>alongside students</strong>, offering prompts, cues, or corrections.</li>
                <li>Students try out a task or problem while receiving <strong>immediate feedback</strong>.</li>
                <li>The level of support is gradually <strong>reduced</strong> as students gain confidence and understanding.</li>
              </ul>
              
              <h5 className="font-medium mt-3">Why It's Important:</h5>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Reinforces what was just taught.</li>
                <li>Helps students catch and correct misunderstandings early.</li>
                <li>Builds confidence before students are expected to work independently.</li>
                <li>Encourages<strong> active learning  </strong>and <strong>student engagement</strong>.</li>
              </ul>
              
              <p className="mt-3">
                <strong>Guided Inquiry:</strong> Instead of providing detailed instructions, give students a goal and challenge them to determine the steps to achieve it. Guide them as needed but encourage independent problem-solving.
              </p>
              
              <p className="mt-3">
                <strong>Lab Reports with Reflection:</strong> Have students not only report their findings but also reflect on their process and how they approached challenges.
              </p>
              
              <p className="mt-3">
                <strong>Interactive Demonstrations:</strong> Allow students to predict outcomes before performing a code-related task and then discuss the results.
              </p>
              
              <h4 className="font-semibold mt-4">Tips for Success</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Set Clear Expectations:</strong> Let students know that active participation is essential.</li>
                <li><strong>Be Supportive:</strong> Encourage students to take risks and make mistakes as part of the learning process.</li>
                <li><strong>Debrief Regularly:</strong> Always take a few minutes at the end of an activity to reflect on what was learned and how the process felt.</li>
              </ul>
            </div>
          )}
          
          {activeTab === "labs" && (
            <div>
              <h3 className="font-bold mb-2">Best Practices for Designing Computer Science Lab Documents in Higher Education </h3>
              <p className="mb-4">
                The following outlines best practices for Teaching Assistants (TAs) when creating lab documents for Computer Science (CS) courses in higher education. The goal is to provide students with a structured, pedagogically sound, and supportive learning experience.
              </p>
              
              <h4 className="font-semibold mt-4">1. Align Labs with Course Outcomes and Lecture Content </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Ensure each lab directly supports <strong>course learning outcomes</strong>  as outlined in the syllabus.
                </li>
                <li>
                  Sequence labs so they reinforce and expand on <strong>concepts covered in recent lectures.</strong> 
                </li>
                <li>
                  Make connections explicit: briefly note in the lab introduction which lecture topics are being reinforced. 
                </li>
                <li>
                  <strong>Collaborate with the course instructor</strong>  to review lab documents prior to the lab. Confirm alignment with lecture materials and learning outcomes to ensure consistency and relevance. 
                </li>
              </ul>
              
              <h4 className="font-semibold mt-4">2. Use Bloom’s Taxonomy to Guide Cognitive Challenge </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Design tasks to match appropriate cognitive levels (e.g., apply, analyze, create). 
                  <Link 
                    href="#section-15"
                    className="font-semibold mt-4 block text-blue-600 hover:underline"
                  >
                    See the information in the Bloom's Taxonomy section.
                  </Link>
                </li>
                <li>
                  Early labs may focus on understanding and applying concepts; later labs can increase in complexity. 
                </li>
                <li>
                  Consider using Bloom’s verbs in learning goals: e.g., “debug,” “design,” “optimize,” “implement,” “evaluate.” 
                </li>
              </ul>

              <h4 className="font-semibold mt-4">
                3. Structure Documents with Clarity and Consistency
              </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Use clear section headers such as <strong>Overview</strong>, <strong>Objectives</strong>, <strong>Tasks</strong>, <strong>Submission</strong>, and <strong>Resources</strong>.
                </li>
                <li>
                  Begin each lab with:
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>A brief contextual introduction</li>
                    <li>Learning objectives presented in bullet points</li>
                    <li>A note on expected completion time</li>
                  </ul>
                </li>
                <li>Break the lab into modular tasks that build in complexity.</li>
              </ul>

              {/* 4. Include Rubrics and Success Criteria */}
              <h4 className="font-semibold mt-4">
                4. Include Rubrics and Success Criteria
              </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Provide a clear grading rubric (see the rubrics section of this website) or checklist with criteria such as:
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Code correctness</li>
                    <li>Efficiency</li>
                    <li>Readability and documentation</li>
                    <li>Testing and debugging</li>
                    <li>Adherence to submission instructions</li>
                  </ul>
                </li>
                <li>Use rubric language aligned with course outcomes and Bloom’s taxonomy.</li>
              </ul>

              {/* 5. Build in Scaffolding and a Resource Bank */}
              <h4 className="font-semibold mt-4">
                5. Build in Scaffolding and a Resource Bank
              </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Include starter code or pseudocode.</li>
                <li>Add debugging or technology tips.</li>
                <li>
                  Provide reference links to relevant readings, documentation, or videos.
                </li>
                <li>
                  Offer a “What to do if you’re stuck” section with step-by-step self-help strategies.
                </li>
                <li>
                  Emphasize that reasonable struggle, persistence, and tenacity are part of the learning process.
                </li>
              </ul>

              {/* 6. Promote Reflective Thinking */}
              <h4 className="font-semibold mt-4">
                6. Promote Reflective Thinking
              </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Conclude labs with reflection prompts such as:
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>What was the most challenging part?</li>
                    <li>How would you apply this concept to another problem?</li>
                    <li>What did you learn from any bugs or failed approaches?</li>
                  </ul>
                </li>
              </ul>

              {/* 7. Clarify Expectations and Academic Integrity */}
              <h4 className="font-semibold mt-4">
                7. Clarify Expectations and Academic Integrity
              </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Clearly state expectations for collaboration, citations, and original work.</li>
                <li>
                  Include concrete examples of what is allowed vs.&nbsp;not allowed (e.g., appropriate vs.&nbsp;inappropriate use of Stack Overflow).
                </li>
              </ul>

              {/* 8. Ensure Accessibility */}
              <h4 className="font-semibold mt-4">
                8. Ensure Accessibility
              </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Use accessible formats (e.g., screen-reader-compatible PDFs, alt text for images, high-contrast colour schemes).&nbsp;
                  <a
                    href="https://example.com/creating-accessible-learning-resources"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Creating Accessible Learning Resources
                  </a>
                </li>
                <li>
                  Avoid relying on colour alone to convey meaning and ensure any video or multimedia content includes captions.
                </li>
                <li>
                  For additional support, contact&nbsp;
                  <a href="mailto:CSEd@dal.ca" className="underline">
                    CSEd@dal.ca
                  </a>
                  .
                </li>
              </ul>

              {/* 9. Solicit Feedback and Iterate */}
              <h4 className="font-semibold mt-4">
                9. Solicit Feedback and Iterate
              </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Ask students to provide feedback after the lab (e.g., a one-question anonymous poll).
                </li>
                <li>
                  Review student feedback with the course instructor and incorporate suggestions where appropriate.
                </li>
                <li>
                  Use feedback to refine future labs and support continuous improvement.
                </li>
              </ul>

              {/* Concluding Statement */}
              <p className="mt-4">
                By embedding these practices, lab documents become not merely tasks to complete
                but rich learning opportunities that foster independent problem-solving,
                critical thinking, and technical skill development in Computer Science students.
              </p>

              <h4 className="font-semibold mt-4">References</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Centre for Teaching Excellence, University of Waterloo. (n.d.). <em>Best Practices for Online Labs</em>. Retrieved from <a href="https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/best-practices-online-labs" className="underline" target="_blank" rel="noopener noreferrer">https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/best-practices-online-labs </a>
                </li>
                <li>
                  Conklin, J. (2005). <em>A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom’s Taxonomy of Educational Objectives Complete Edition</em>. <em>Educational Horizons</em>, 83(3), 154–159.
                </li>
                <li>
                  Biggs, J., &amp; Tang, C. (2011). <em>Teaching for Quality Learning at University</em> (4th&nbsp;ed.). Open University Press.
                </li>
                <li>
                  Felder, R.&nbsp;M., &amp; Brent, R. (2016). <em>Teaching and Learning STEM: A Practical Guide</em>. Jossey-Bass.
                </li>
                <li>
                  Movafaghi, S., &amp; Pournaghshband, H. (2018). <em>Lab Based Curriculum for CIS and Related Technology</em>. <a href="https://doi.org/10.48550/arxiv.1801.06053" className="underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.48550/arxiv.1801.06053</a>
                </li>
                <li>
                  Prince, M.&nbsp;J., &amp; Felder, R.&nbsp;M. (2006). Inductive teaching and learning methods: Definitions, comparisons, and research bases. <em>Journal of Engineering Education</em>, 95(2), 123–138. <a href="https://doi.org/10.1002/j.2168-9830.2006.tb00884.x" className="underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1002/j.2168-9830.2006.tb00884.x</a>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "rubrics" && (
            <div>
              <h3 className="font-bold mb-2">Overview of Direct Instruction (DI)</h3>
              <p className="mb-4">
                Direct Instruction (DI) is a teacher-led approach where the teacher controls the classroom activities and directs information to students in a structured and sequenced manner. There are various forms of DI, with some being more rigid than others. However, the Modern DI forms are much more effective, such as Explicit Direct Instruction (EDI), which is more flexible and involves eight didactic principles that enhance each other.
              </p>
              
              <h4 className="font-semibold mt-4">Eight Didactic Principles of EDI</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Learning Objectives:</strong> Clearly defined goals that students can understand. "By the end of this session, you will be able to…."
                </li>
                <li>
                  <strong>Activating Prior Knowledge:</strong> Connecting new information to what students already know. "What do you already know about "x"? Where have you seen it being used before?"
                </li>
                <li>
                  <strong>Concept Development:</strong> Detailed explanation of new concepts. How does this concept fit into the big picture of what they are learning? For example, if functions and loops are being taught, give a visual example of what it looks like and what other contexts (areas or systems) where it can be applied.
                </li>
                <li>
                  <strong>Skill Development:</strong> Demonstrating and practicing new skills. Give a demonstration of the new skill. Ensure that everyone can see what you are doing. You can also record this so that students can refer back to it if they need more support during the lab.
                </li>
                <li>
                  <strong>Guided Practice:</strong> Teacher-led practice sessions. After the demonstration, take a problem and ask students to suggest the next step. (Students can be in pairs to discuss and suggest the next step to you). Question their thinking along the way. Why do you think this is the step you should take? Can anyone suggest another way?
                </li>
                <li>
                  <strong>Independent Practice:</strong> Students practice on their own. Circulate around the room as students are working.<strong> Pay attention </strong> to what is on their screens, if you notice them making errors, ask them to pause and talk through their choices. See if they can identify where they are going wrong. If they can't, walk them back to where they started making mistakes in their code or work, then provide further guidance so they can achieve success. A good practice is to have a digital resource bank on Brightspace, so they can watch a tutorial on how to do "x" and then circle back to see if they are on the right track after a few moments.
                </li>
                <li>
                  <strong>Lesson Closure:</strong> Assessing student understanding through questions or small tasks. This can be done by polls, small group discussion.
                </li>
                <li>
                  <strong>Lesson Importance:</strong> Explaining the relevance of the lesson to students.
                </li>
              </ul>
              
              <h4 className="font-semibold mt-4">Benefits of EDI</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Effectiveness:</strong> Research shows that EDI can be more effective than exploratory methods, especially for weaker students.
                </li>
                <li>
                  <strong>Equalizing Effect:</strong> EDI ensures all students receive intentional instruction and opportunities to practice, which can help bridge gaps in prior knowledge.
                </li>
              </ul>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm italic">
                  <strong>Reference</strong><br />
                  Hermans, F., & Smit, M. (n.d.). Explicit Direct Instruction in Programming Education. <a href="https://www.ppig.org/files/2018-PPIG-29th-hermans.pdf " className="text-blue-600" target="_blank">
                  https://www.ppig.org/files/2018-PPIG-29th-hermans.pdf </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreatingALR