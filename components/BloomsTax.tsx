import Image from 'next/image';
import React from 'react'

const BloomsTax = () => {
  return (
    <div className='mt-3 space-y-2'>
        <p>
        As a Teaching Assistant (TA) in the Faculty of Computer Science, part of your role may involve supporting instructors in the development or delivery of assignments and labs. Designing these learning activities with <strong> clear, measurable outcomes </strong> helps ensure students understand what is expected and how their work will be assessed. One effective approach is to use <strong>Bloom’s Taxonomy</strong>, a framework that categorizes learning objectives according to cognitive complexity.
        </p>

        <div className='flex flex-row'>
            

            <div className='space-y-1 flex-1'>
                <h3 className='text-lg text-blue-500 font-semibold mt-3 mb-1'>
                What is Bloom’s Taxonomy?
                </h3>

                <p>
                Bloom’s Taxonomy classifies cognitive skills into six hierarchical levels:
                </p>

                <ol className="list-decimal pl-6 space-y-1.5 my-2">
                    <li>
                        <strong>
                        Remember
                        </strong>
                        – Recall facts and basic concepts (e.g., define, list)
                    </li>
                    <li>
                        <strong>
                        Understand
                        </strong>
                        – Explain ideas or concepts (e.g., describe, summarize)
                    </li>
                    <li>
                        <strong>
                        Apply 
                        </strong>
                        – Use information in new situations (e.g., implement, solve)
                    </li>
                    <li>
                        <strong>
                        Analyze
                        </strong>
                        – Draw connections among ideas (e.g., differentiate, debug)
                    </li>
                    <li>
                        <strong>
                        Evaluate
                        </strong>
                        – Justify a decision or position (e.g., critique, recommend)
                    </li>
                    <li>
                        <strong>
                        Create
                        </strong>
                        – Produce new or original work (e.g., design, develop)
                    </li>
                </ol>

                <p>
                This hierarchy supports the design of tasks that move beyond memorization and foster deeper learning, particularly important in computer science where problem-solving, analysis, and creation are essential skills.
                </p>
            </div>

            <div className='w-[40%] relative'>
                <div>
                  <Image fill alt='Blooms Taxonomy' src='/Blooms-Taxonomy.jpg' />
                </div>

                <p>
                [Source: <a href='https://www.vanderbilt.edu/advanced-institute/' className="text-blue-600 hover:underline" target="_blank">cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/</a>]
                </p>
            </div>
        </div>

        <h3 className='text-lg text-blue-500 font-semibold mt-3 mb-1'>
        Writing Clear Learning Outcomes
        </h3>

        <p>
        When creating assignments or labs, begin by articulating the <strong>intended learning outcomes </strong> using active verbs aligned with Bloom’s Taxonomy. For example:
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-2 ">
            <li>
            <i>“Students will be able to debug a recursive function to identify logical errors.”</i> (Analyze)
            </li>
            <li>
            <i>“Students will design and implement a simple RESTful API using Flask.”</i> (Create, Apply)
            </li>
        </ul>

        <p>
        Avoid vague outcomes like <i>“understand recursion” </i> — instead, specify what students should be able to do with that understanding.
        </p>

        <h3 className='text-lg text-blue-500 font-semibold mt-3 mb-1'>
        Aligning Assignments and Labs
        </h3>

        <p>
            To ensure alignment
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
                <strong>
                Match task complexity
                </strong>
                 to the course level. First-year labs may focus on “Apply” while upper-year projects may emphasize “Analyze” and “Create.”
            </li>
            <li>
                <strong>
                Use scaffolded tasks
                </strong>
                . Start with recall or application-based exercises and build toward more complex analysis or design problems.
                </li>
            <li>
                <strong>
                Provide rubrics or checklists 
                </strong>
                 that mirror the outcomes, helping students focus on what's expected.
            </li>
        </ul>

        <BloomsTable />

        <h3 className='text-lg text-blue-500 font-semibold mt-3 mb-1'>
            Why it Matters
        </h3>

        <p>
        Assignments built on clearly defined cognitive goals help students engage meaningfully with course content. For TAs, using Bloom’s Taxonomy supports fair evaluation, improves feedback clarity, and contributes to consistent expectations across course sections
        </p>

        <h3 className='text-lg text-blue-500 font-semibold mt-3 mb-1'>
            References:
        </h3>

        <p>
        Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). <i>A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives.</i> Longman.
        </p>

        <p>
        Krathwohl, D. R. (2002). A revision of Bloom’s taxonomy: An overview. Theory into Practice, 41(4), 212-218. <a href='https://doi.org/10.1207/s15430421tip4104_2' className="text-blue-600 hover:underline" target="_blank" >https://doi.org/10.1207/s15430421tip4104_2</a>
        </p>

        <p>
        ACM Committee for Computing Education in Community Colleges. (2023). <i>Bloom’s for Computing: Enhancing Bloom's Revised Taxonomy with Verbs for Computing Disciplines.</i> <a href='https://ccecc.acm.org/assessment/blooms-for-computing' className="text-blue-600 hover:underline" target="_blank">https://ccecc.acm.org/assessment/blooms-for-computing</a>
        </p>
    </div>
  )
}


const bloomsData = [
  {
    level: "Remember",
    outcome: 'Define key terms such as "array" and "linked list".',
    task: "Create a glossary of fundamental data structures with definitions.",
  },
  {
    level: "Understand",
    outcome: "Explain the difference between a stack and a queue.",
    task: "Write a short essay comparing stacks and queues, including use cases.",
  },
  {
    level: "Apply",
    outcome: "Implement a binary search algorithm in Python.",
    task: "Develop a program that performs binary search on a sorted list.",
  },
  {
    level: "Analyze",
    outcome: "Debug a recursive function to identify logical errors.",
    task: "Given a faulty recursive function, identify and correct the errors.",
  },
  {
    level: "Evaluate",
    outcome: "Assess the efficiency of different sorting algorithms.",
    task:
      "Compare the performance of quicksort and mergesort on large datasets and discuss the results.",
  },
  {
    level: "Create",
    outcome: "Design and implement a simple RESTful API using Flask.",
    task:
      "Build a RESTful API for a to-do list application, including endpoints for creating, reading, updating, and deleting tasks.",
  },
];

const BloomsTable = () => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 font-semibold">Bloom’s Level</th>
            <th className="border px-4 py-2 font-semibold">Example Learning Outcome</th>
            <th className="border px-4 py-2 font-semibold">Example Assignment or Lab Task</th>
          </tr>
        </thead>
        <tbody>
          {bloomsData.map((item, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="border px-4 py-2">{item.level}</td>
              <td className="border px-4 py-2">{item.outcome}</td>
              <td className="border px-4 py-2">{item.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




export default BloomsTax