import { ExternalLink } from 'lucide-react';
import { ST } from 'next/dist/shared/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react'

const CreatingALR = () => {

  const [activeTab, setActiveTab] = useState("Assignments");

  const rows = [
    {
      level: "4 – Excellent",
      desc:
        "The presentation is clear, engaging, and well-organized. All group members contribute meaningfully. Demonstrates deep understanding of the problem, thorough testing, and technically sound implementation. Code functionality is effectively demonstrated, with discussion of trade-offs and design decisions. Visuals support communication. Questions from the audience are handled confidently and thoughtfully. Presentation reflects outstanding collaboration, technical proficiency, and communication.",
    },
    {
      level: "3 – Good",
      desc:
        "The presentation is mostly clear and organized, with minor issues in delivery or transitions. Most group members participate. Technical content is solid, with minor oversights in explanation or testing. Demonstration is functional but may lack polish or depth in analysis. Visuals are adequate. Questions are answered reasonably well. The project shows evidence of good teamwork and preparation.",
    },
    {
      level: "2 – Satisfactory",
      desc:
        "Presentation is uneven or difficult to follow in places. Some group members do not contribute or seem underprepared. Explanation of technical components is vague or incomplete. Project may lack a complete demonstration or reveal partial implementation. Testing or reflection is superficial. Visual aids are used ineffectively. Responses to questions are limited. Collaboration appears unbalanced.",
    },
    {
      level: "1 – Needs Improvement",
      desc:
        "Presentation is unclear or disorganized. Minimal team coordination is evident. Significant technical misunderstandings or missing implementation. Demonstration does not function or is not attempted. Little or no discussion of testing or design choices. Visuals are missing or poorly executed. Group struggles to answer questions. Collaboration appears weak or absent.",
    },
  ];

  const criteria = [
    {
      name: 'Functionality & Accuracy',
      excellent: 'Program meets all requirements and runs error-free.',
      good: 'Minor issues but generally correct.',
      satisfactory: 'Program runs with errors or missing features.',
      needsImprovement: 'Fails to run or meet core requirements.',
      score: '/5',
    },
    {
      name: 'Code Structure & Modularity',
      excellent: 'Organized code with effective use of functions.',
      good: 'Some structure and modularity.',
      satisfactory: 'Limited use of functions; structure unclear.',
      needsImprovement: 'Poor structure; no functional decomposition.',
      score: '/5',
    },
    {
      name: 'Use of Control Structures',
      excellent: 'Correct and efficient use of conditionals/loops.',
      good: 'Mostly correct use.',
      satisfactory: 'Misuse or overuse of structures.',
      needsImprovement: 'Incorrect or absent control logic.',
      score: '/4',
    },
    {
      name: 'Style & Documentation',
      excellent: 'Clear comments, consistent formatting.',
      good: 'Mostly consistent with some comments.',
      satisfactory: 'Minimal comments or inconsistent style.',
      needsImprovement: 'No comments; poor formatting.',
      score: '/3',
    },
    {
      name: 'Testing & Output Evidence',
      excellent: 'Thorough testing with clear screenshots.',
      good: 'Testing shown but limited in scope.',
      satisfactory: 'Some evidence of testing.',
      needsImprovement: 'No testing or output shown.',
      score: '/3',
    },
  ];
  
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
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Creating Effective Assignments 
            </button>
            <button
              onClick={() => setActiveTab("labs")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "labs"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Best Practices for Designing CS Labs
            </button>
            <button
              onClick={() => setActiveTab("rubrics")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "rubrics"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Rubrics in Computer Science Higher Education 
            </button>
          </nav>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {activeTab === "Assignments" && (

            <div className='space-y-1.5'>
              <p>As a Graduate Teaching Assistant (TA), you may contribute to the development or refinement of course assignments. Assignments are not just evaluation tools, they are learning opportunities that reinforce course material, deepen understanding, and help students develop key skills. This section provides best practices for designing assignments that are pedagogically sound, equitable, and aligned with the course structure. </p>

              <h4 className="font-bold mt-4 text-lg">1. Align with Course Learning Outcomes </h4>
              <p>
                Every assignment should clearly support one or more of the course’s intended learning outcomes. These outcomes describe what students should be able to do by the end of the course and guide assessment design. 
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Use <strong>action verbs from Bloom’s Taxonomy </strong>that match the cognitive level of the outcome (e.g., . <em>identify, apply, analyze, evaluate, create)</em> 
                </li>
                <li>
                  Ensure there is a clear connection between the <strong>assignment task</strong> and the <strong>outcomes being assessed</strong>. 
                </li>
                <li>
                  Avoid over-assessing minor outcomes while neglecting major course objectives. 
                </li>
              </ul>

              <h4 className="font-bold mt-4 text-lg">2. Base on Covered Content and Scaffolding </h4>
              <p>
                Assignments should reinforce concepts and skills that have already been introduced in lectures, labs, or tutorials. 
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Do not assess material that students have not yet encountered. 
                </li>
                <li>
                  Include scaffolding—design assignments that build on previous tasks, helping students move from lower-order to higher-order thinking. 
                </li>
                <li>
                  Clearly reference relevant topics or readings and provide examples when introducing new assignment formats or expectations.  
                </li>
              </ul>

              <h4 className="font-bold mt-4 text-lg">3. Structure and Clarity</h4>
              <p>
                A well-structured assignment minimizes confusion and cognitive overload.
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Clearly state the <strong>purpose</strong>, <strong>task</strong>, <strong>format</strong>, <strong>due&nbsp;date</strong>, <strong>required length</strong>, and <strong>submission instructions</strong>.
                </li>
                <li>
                  Use <strong>headings</strong>, bullet points, and <strong>bolded keywords</strong> to improve readability.
                </li>
                <li>
                  Include an <em>estimated time-on-task</em> to help students plan their workload realistically.
                </li>
              </ul>

              <h4 className="font-bold mt-4 text-lg">4. Appropriate Weighting and Challenge</h4>
              <p>
                Assignments should reflect the level of difficulty appropriate to the course level and the type of thinking involved.
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Higher-order thinking tasks (e.g., <em>synthesis</em>, <em>evaluation</em>) should be given more <strong>weight</strong> than basic recall or comprehension questions.
                </li>
                <li>
                  Avoid assigning large portions of the final grade to minor, low-effort tasks unless they are part of a formative assessment strategy.
                </li>
                <li>
                  Provide a mix of question types (short answer, applied problems, projects) as appropriate for the discipline.
                </li>
              </ul>


              <h4 className="font-bold mt-4 text-lg">5. Rubrics and Success Criteria</h4>
              <p>
                Transparent and fair assessment depends on clearly defined evaluation criteria.
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Create a <strong>rubric</strong> that outlines how student work will be evaluated&mdash;indicating specific expectations for content, organization, depth, and originality.
                </li>
                <li>
                  Use <em>analytic</em>, <em>holistic</em>, or <em>single-point</em> rubrics, depending on the complexity of the task.
                </li>
                <li>
                  Share the rubric with students when the assignment is released to promote clarity and self-regulation.
                </li>
              </ul>

              <h4 className="font-bold mt-4 text-lg">6. Inclusive, Equitable, and Accessible Design</h4>
              <p>
                Assignments should support diverse learners and reduce barriers to participation.
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Use <strong>inclusive language</strong> and culturally relevant examples that reflect the diversity of your student population.
                </li>
                <li>
                  Ensure <strong>accessibility</strong>: avoid requiring specific software or formatting that may create barriers; consider alternate formats where possible.
                </li>
                <li>
                  Allow <em>flexible submission formats</em> (e.g., written reports, videos, infographics) where appropriate to support different learner strengths.
                </li>
              </ul>

              <h4 className="font-bold mt-4 text-lg">7. Academic Integrity and Expectations</h4>
              <p>
                Clarity around citation, collaboration, and use of generative AI is essential.
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  State expectations regarding <strong>individual&nbsp;vs.&nbsp;group work</strong>, <strong>collaboration</strong>, and permissible tools (e.g., calculators, coding aids, AI tools).
                </li>
                <li>
                  Include guidance on proper <strong>citation styles</strong> and how students can access support through writing centers or citation guides.
                </li>
                <li>
                  Provide practice opportunities for paraphrasing, referencing, or using tools ethically.
                </li>
              </ul>


              <h4 className="font-bold mt-4 text-lg">8. Additional Tips for TAs</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Pilot or peer review</strong>: Have a fellow TA or instructor review the assignment for clarity and alignment.
                </li>
                <li>
                  <strong>Estimate difficulty and workload</strong>: Ensure the scope of the assignment matches the credit weight and expected time commitment.
                </li>
                <li>
                  <strong>Provide student support</strong>: Offer reminders, Q&amp;A forums, and clarifications. Encourage students to start early and seek help if needed.
                </li>
              </ul>

              <h2 className="text-2xl mt-6 font-bold">
                SAMPLE ASSIGNMENT/PROJECT WITH RUBRIC
              </h2>

              <section className='space-y-0.5'>
                <h3 className="text-lg font-semibold mb-1">
                  Project 1 – First-Year Computer Science
                </h3>
                <p>
                  <strong>Course:</strong> CSCI 1XXX – Introduction to Programming
                </p>
                <p>
                  <strong>Project Title:</strong> Student Grading System – Conditional
                  Logic and Modularity
                </p>
                <p>
                  <strong>Due Date:</strong> Friday, October 4, 2025, by 11:59 PM (submit via Brightspace)
                </p>
                <p>
                  <strong>Weight:</strong> 10% of final grade
                </p>
                <p>
                  <strong>Estimated Time on Task:</strong> 6–8 hours
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mt-2 mb-1">Project Overview</h3>
                <p>
                  This project challenges you to design, implement, and test a simple student
                  grading system using Python. You will apply your understanding of
                  conditional logic, loops, and modular design to create a user-friendly
                  program that assigns letter grades based on numeric input.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-1">
                  Learning Outcomes Addressed
                </h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    Apply conditional statements to implement decision-making in a real-world
                    scenario (Apply – Bloom’s Level 3)
                  </li>
                  <li>
                    Write, test, and debug a modular Python program (Create – Bloom’s Level 6)
                  </li>
                  <li>
                    Demonstrate effective use of user input, output formatting, and control
                    structures (Understand/Apply – Bloom’s Levels 2–3)
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-1">Project Requirements</h3>
                <p className="mb-2">Your program should:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Prompt the user to input student names and numeric grades.</li>
                  <li>
                    Use if-elif-else statements to assign and display a letter grade (A–F)
                    based on each numeric score.
                  </li>
                  <li>Validate that grades fall within the range of 0 to 100.</li>
                  <li>Allow the user to process multiple students using a loop.</li>
                  <li>
                    Include at least one user-defined function to organize your code (e.g., a
                    function to calculate and return the letter grade).
                  </li>
                  <li>
                    Display final output for each student, showing name, numeric grade, and
                    letter grade.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-1">Submission Details</h3>
                <p className="mb-2">Submit the following via Brightspace:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>A <code>.py</code> file containing your Python code (well-commented).</li>
                  <li>
                    A short PDF with screenshots of at least three different test cases,
                    showing your program’s output.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-1">
                  Academic Integrity Reminder
                </h3>
                <p>
                  This is an individual project. You may discuss approaches with peers, but <strong>all code must be your own</strong>. Any external resources used for support must be cited in comments. Academic dishonesty will be reported in accordance with university policy. 
                </p>
              </section>

              <div className="container mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-6">Project Evaluation Rubric</h1>
                <table className="min-w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-gray-100">
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Criteria</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Excellent (5)</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Good (4)</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Satisfactory (3)</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Needs Improvement (1–2)</th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {criteria.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">{item.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.excellent}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.good}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.satisfactory}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.needsImprovement}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{item.score}</td>
                      </tr>
                    ))}
                    <tr className="font-bold bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">Total</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2 text-center">/20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                    className="font-semibold mt-4 block text-blue-800 hover:underline"
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
                  Include concrete examples of what is allowed vs not allowed (e.g., appropriate vs inappropriate use of Stack Overflow).
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
                    className="text-blue-800 underline inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creating Accessible Learning Resources
                  <ExternalLink className="ml-1 h-4 w-4" /></a>
                </li>
                <li>
                  Avoid relying on colour alone to convey meaning and ensure any video or multimedia content includes captions.
                </li>
                <li>
                  For additional support, contact&nbsp;
                  <a href="mailto:CSEd@dal.ca" className="text-blue-800 underline inline-flex items-center">
                    CSEd@dal.ca
                  <ExternalLink className="ml-1 h-4 w-4" /></a>
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
                  Centre for Teaching Excellence, University of Waterloo. (n.d.). <em>Best Practices for Online Labs</em>. Retrieved from <a href="https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/best-practices-online-labs" className="text-blue-800 underline inline-flex items-center" target="_blank" rel="noopener noreferrer">https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/best-practices-online-labs <ExternalLink className="ml-1 h-4 w-4" /></a>
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
                  Movafaghi, S., &amp; Pournaghshband, H. (2018). <em>Lab Based Curriculum for CIS and Related Technology</em>. <a href="https://doi.org/10.48550/arxiv.1801.06053" className="text-blue-800 underline inline-flex items-center" target="_blank" rel="noopener noreferrer">https://doi.org/10.48550/arxiv.1801.06053<ExternalLink className="ml-1 h-4 w-4" /></a>
                </li>
                <li>
                  Prince, M.&nbsp;J., &amp; Felder, R.&nbsp;M. (2006). Inductive teaching and learning methods: Definitions, comparisons, and research bases. <em>Journal of Engineering Education</em>, 95(2), 123–138. <a href="https://doi.org/10.1002/j.2168-9830.2006.tb00884.x" className="text-blue-800 underline inline-flex items-center" target="_blank" rel="noopener noreferrer">https://doi.org/10.1002/j.2168-9830.2006.tb00884.x <ExternalLink className="ml-1 h-4 w-4" /></a> 
                </li>
              </ul>
            </div>
          )}

          {activeTab === "rubrics" && (
            <div className='space-y-1.5'>
              <p className="mb-4">
                In Computer Science (CS) education, rubrics are critical for assessing assignments ranging from programming tasks to technical reports and presentations. They provide clarity to students, support consistent grading among multiple TAs, and align assessments with learning outcomes.
              </p>

              <p>
                There are three widely used types of rubrics: <strong>Analytic</strong>, <strong>Holistic</strong>, and <strong>Single-Point</strong>. Each offers distinct advantages depending on the nature of the task being evaluated.
              </p>
              
              <h4 className="font-bold mt-4 text-lg">1. Analytic Rubrics </h4>
              <p>
                <strong>Definition</strong>: Analytic rubrics break down an assignment into specific components, each evaluated separately. They are well-suited for assessing multifaceted tasks and offering detailed feedback. 
              </p>

              <p><strong>Example (Programming Assignment Rubric): </strong> Assignment: <i>Implement a sorting algorithm in Python.</i></p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      {["Criteria", "Excellent (5)", "Good (4)", "Fair (3)", "Poor (1-2)"]
                        .map((h) => (
                          <th
                            key={h}
                            className="border border-gray-300 px-4 py-2 font-semibold text-left"
                          >
                            {h}
                          </th>
                        ))}
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      {
                        criteria: "Correctness",
                        levels: [
                          "Program executes without errors and passes all test cases",
                          "Minor bugs; passes most test cases",
                          "Some bugs; passes half of test cases",
                          "Many bugs; few or no test cases passed",
                        ],
                      },
                      {
                        criteria: "Code Efficiency",
                        levels: [
                          "Optimal time and space complexity",
                          "Slightly inefficient but acceptable",
                          "Noticeably inefficient",
                          "Very inefficient or incorrect approach",
                        ],
                      },
                      {
                        criteria: "Readability & Style",
                        levels: [
                          "Code is well-commented, consistent, and easy to read",
                          "Minor issues with readability or style",
                          "Poor commenting and inconsistent style",
                          "Difficult to read and understand",
                        ],
                      },
                      {
                        criteria: "Documentation",
                        levels: [
                          "README is clear, complete, and professional",
                          "README mostly complete",
                          "README missing key sections",
                          "No README or very poor quality",
                        ],
                      },
                    ].map(({ criteria, levels }) => (
                      <tr key={criteria}>
                        <td className="border border-gray-300 px-4 py-2 font-medium">
                          {criteria}
                        </td>
                        {levels.map((text, i) => (
                          <td key={i} className="border border-gray-300 px-4 py-2">
                            {text}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-3 mt-4">
                <h4 className="text-lg font-bold">
                  2. Holistic Rubric
                </h4>

                <p>
                <strong>Definition</strong>: Holistic rubrics assess student work as a whole, assigning one overall score based on an overall impression. They are useful when detailed component scoring is not necessary. 
                </p>  

                <p className='font-bold '>Holistic Rubric Example – Capstone Project Final Presentation </p>

                <p className='font-semibold mb-[-2]'>Assignment context:</p>
                
                <p>Students present their final software development project, including problem definition, technical implementation, user testing, and reflection on teamwork.</p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Level
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map(({ level, desc }) => (
                        <tr key={level}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">
                            {level}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h5 className="font-semibold">When to use this Holistic Rubric</h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>End-of-term capstone or major project presentations, oral presentations, design critiques or reflective journals.  </li>
                  <li>Final deliverables where integration of content is more important than scoring individual parts.</li>
                  <li>Assessments where you want to provide a fast, but fair and transparent, global judgment of performance.</li>
                </ul>

                <h5 className="font-semibold">Best practices for Use</h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Share the rubric with students ahead of time to clarify expectations.</li>
                  <li>Consider using this rubric alongside <strong>written feedback or peer/self-assessment</strong> to enhance reflection.</li>
                  <li>Use in conjunction with formative feedback checkpoints throughout the term to guide student progress.</li>
                </ul>
              </div>

              <div className="space-y-3 mt-4">
                <h4 className="text-lg font-bold">
                  3. Single-Point Rubric 
                </h4>

                <p>
                  <strong>Definition</strong>: A single-point rubric includes only the target level of performance and leaves room for open-ended feedback on how students either exceed or fall short of expectations. 
                </p>

                <p className='mb-[-1]'><strong>Example (Code Review Assignment): </strong> </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-sm text-center">
                    <thead className="bg-gray-100">
                      <tr>
                        {["Exceeds Expectations", "Meets Expectations", "Below Expectations"].map(
                          (h) => (
                            <th
                              key={h}
                              className="border border-gray-300 px-4 py-2 font-semibold"
                            >
                              {h}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ height: "7rem" }}>
                        <td className="border border-gray-300 px-4 py-2 align-top" />
                        <td className="border border-gray-300 px-4 py-2 text-left">
                          Code follows consistent style, has meaningful variable names, no
                          duplication, and clear logic flow.
                        </td>
                        <td className="border border-gray-300 px-4 py-2 align-top" />
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 className="font-semibold">Feedback comments</h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <em>Above:</em> “Excellent use of functions to reduce redundancy.”
                  </li>
                  <li>
                    <em>Below:</em> “Add more inline comments to clarify logic.”
                  </li>
                </ul>

                <p className="text-sm">
                  <strong>When to use:</strong> Best for <strong>formative </strong>assessments or assignments focused on specific skill development, such as peer review, debugging exercises, or iterative development. 
                </p>

                <div className='space-y-1'>
                  <p className='font-semibold'>
                  Why Rubrics Matter in CS 
                  </p>
                  
                  <p>
                    Rubrics align assessments with course learning outcomes and industry expectations, including collaboration, documentation, ethical reasoning, and code quality. In collaborative grading environments, rubrics minimize subjectivity and provide a shared standard for evaluation, especially in large courses or multi-section labs. 
                  </p>
                </div>

                <h3 className='text-lg text-blue-800 font-semibold mt-3 mb-1'>
                    References:
                </h3>

                <p>
                Brookhart, S. M. (2013). <i>How to create and use rubrics for formative assessment and grading.</i> ASCD. 
                <a href='https://www.geocities.ws/bdktraining/pdfkur/How%20to%20Create%20and%20Use%20Rubrics%20for%20Formative%20Assessment%20and%20Grading%20(%20PDFDrive%20).pdf' className="text-blue-800 underline inline-flex items-center" target="_blank">https://www.geocities.ws/.../How%20to%20Create%20and%20Use%20Rubrics%20for%20Formative%20Assessment%20and%20Grading.pdf<ExternalLink className="ml-1 h-4 w-4" /></a>
                </p>

                <p>
                DELTA Teaching Resources. (2025). <i>Rubric best practices, examples, and templates.</i> NC State University. 
                <a href='https://teaching-resources.delta.ncsu.edu/rubric_best-practices-examples-templates/' className="text-blue-800 underline inline-flex items-center" target="_blank">https://teaching-resources.delta.ncsu.edu/rubric_best-practices-examples-templates/<ExternalLink className="ml-1 h-4 w-4" /></a>
                </p>

                <p>
                Goodrich, H. (1996). <i>Understanding rubrics.</i> <i>Teaching for Authentic Student Performance, 54</i>(4), 14-17. 
                <a href='https://www.ascd.org/el/articles/understanding-rubrics' className="text-blue-800 underline inline-flex items-center" target="_blank">https://www.ascd.org/el/articles/understanding-rubrics<ExternalLink className="ml-1 h-4 w-4" /></a>
                </p>

                <p>
                Gonzalez, J. (2014). <i>Know your terms: Holistic, Analytic, and Single-Point Rubrics.</i> Cult of Pedagogy. 
                <a href='https://www.cultofpedagogy.com/holistic-analytic-single-point-rubrics/' className="text-blue-800 underline inline-flex items-center" target="_blank">https://www.cultofpedagogy.com/holistic-analytic-single-point-rubrics/<ExternalLink className="ml-1 h-4 w-4" /></a>
                </p>

                <p>
                Miller, A. (2012). <i>Tame the beast: tips for designing and using rubrics.</i> Edutopia. 
                <a href='https://www.edutopia.org/blog/designing-using-rubrics-andrew-miller' className="text-blue-800 underline inline-flex items-center" target="_blank">https://www.edutopia.org/blog/designing-using-rubrics-andrew-miller<ExternalLink className="ml-1 h-4 w-4" /></a>
                </p>

                <p>
                Stevens, D. D., & Levi, A. (2013). <i>Introduction to rubrics: An assessment tool to save grading time, convey effective feedback, and promote student learning</i> (2nd ed.). Stylus.
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