import { ReactNode, useState } from "react";
import ClassroomGuidance from "../components/inTheClassroom";
import TAResponsibilities from "../components/TaResponsibilities";
import ProfessionalBehavior from "../components/ProfessionalBehavior";
import TheLab from "../components/TheLab";
import ReceivingFeedback from "../components/feedback";
import CollapsibleSection from "../components/CollapsibleSection";
import ToolboxInstructionalStrategies from "../components/InstructionalStrategies";
import FosteringInclusiveClassrooms from "../components/FosteringInclusiveClassrooms";
import BloomsTax from "../components/BloomsTax";
import TADemonstratorMarkerTable from "../components/GradTA";
import FantasticTA from "../components/FantasticTA";
import EDIA from "../components/Edia";
import CreatingALR from "../components/CreatingALR";

export const introduction = [
  'Welcome to the Faculty of Computer Science Teaching Assistant (TA) Handbook! As a Graduate TA, you play a vital role in supporting student learning, fostering engagement, and maintaining the rigour and academic integrity of our courses. Whether you’re leading labs or tutorials, grading assignments, assisting the instructor in various aspects of teaching, or providing one-on-one support, your contributions help shape the learning experience for our students. This is a crucial and important role!',
  'This handbook is designed to equip you with the knowledge, strategies, and best practices necessary to excel in your role. It covers essential topics such as effective teaching techniques (helpful in any lab or tutorial setting), grading and assessment guidelines, communication strategies, and managing common challenges in computer science education.',
  'As a TA, you will encounter students with diverse backgrounds, learning preferences, and levels of experience in programming theoretical concepts. Your ability to explain complex ideas, facilitate discussions, and provide constructive feedback will be key to their success. This handbook will serve as a resource to help you navigate these responsibilities with confidence!',    
  'We encourage you to approach your role with enthusiasm, patience and a commitment to inclusive and supportive teaching. Your work not only impacts individual students and builds upon the work of instructors in the classroom but also contributes to a strong and collaborative learning community at the Faculty of Computer Science.',
  'Developing an effective Teaching Assistant (TA) toolkit is a vital step toward supporting TAs in their multifaceted roles within academia. However, our handbook draws on and integrates unique materials for the Faculty of Computer Science at Dalhousie. By building on established resources and our own bespoke solutions, this toolkit aims to equip TAs with tailored strategies, valuable insights, and best practices to enhance your teaching effectiveness and overall efficiency.',
]

interface CollapsibleSection {
    id: number;
    title: string;
    content: ReactNode;
}


export const collapsable : CollapsibleSection[] = [
  {
    id: 1,
    title: "How To Become a Grad TA with the Faculty of Computer Science",
    content: (      
      <div className="my-3 space-y-4">
        <p>
          Opportunities are there for you to become a TA as a graduate student. At the FCS (Faculty of Computer Science), we have a vested interest in your success in all facets—academics, research, and professional aspirations to become future academics. Part of that role will most likely entail teaching! A great way to learn the skills necessary to become a successful educator is to involve yourself with aspects of teaching.
        </p>
  
        <p>
          At the Faculty, there are different roles: <strong>TA (Teaching Assistant)</strong>, <strong>Demonstrators</strong>, and <strong>Makers</strong>. A TA position is the best way to secure a longer-term role with one or more classes for a sustained duration—ideally for the length of your degree! This benefits the faculty by retaining trained TAs who develop strong knowledge of a particular course, ensuring consistent delivery from term to term. For graduate students, this provides funding security and helps develop essential teaching skills for future instructor roles.
        </p>
  
        <p>
          Initially, reach out to your supervisor at the Faculty of Computer Science, <strong>Dr. Michael McAllister</strong>, or the Lab Coordinator, <strong><b>Megan Baker:</b></strong> They have extensive knowledge of the various roles available and can guide you on the most suitable placement based on your skills. You'll likely be placed in a course that matches your competencies, and it's crucial to have a thorough understanding of the material. If there are gaps, connect with the course instructor and work on filling them.
        </p>
  
        <p>
          There is a Brightspace page dedicated to TAs, Markers, and Demonstrators at the Faculty: <a href="https://dal.brightspace.com/d2l/home/136347" target="_blank" className="text-blue-600 underline">FCS TAs and Markers</a>. All students are enrolled in this site, accessible using your Dal credentials. If you encounter any access issues, contact <strong><b>Megan Baker:</b></strong> at <a href="mailto:FCSTA@dal.ca" className="text-blue-600 underline">FCSTA@dal.ca</a>. The site contains detailed information on roles, contract lengths, the <a href="https://dal.brightspace.com/d2l/le/content/136347/Home?itemIdentifier=D2L.LE.Content.ContentObject.ModuleCO-1804406" target="_blank" className="text-blue-600 underline">Job Seekers Registry</a>, and more.
        </p>
  
        <p>
          More details about TA, Marker, and Demonstrator roles, including hourly remuneration, are available on the <strong>Faculty of Computer Science TA/Marker page</strong>. This page also links to the <a href="https://cupe.ca/local/cupe-3912" target="_blank" className="text-blue-600 underline">CUPE 3912 (Canadian Union of Public Employees)</a> website.
        </p>
  
        <p>Thank you for your dedication to teaching and learning at the FCS. Let's get started!</p>

        < TADemonstratorMarkerTable />
      </div>
    ),
  },
  {
    id: 2,
    title: "Resources and Training at Dalhousie for TAs",
    content: (
      <div className="my-3 space-y-4">

        {/* Intro */}
        <p>
          Teaching Assistants (TAs) in the Faculty of Computer Science have access to a variety of professional-development opportunities designed to support and enhance your teaching practice. Through a combination of Faculty-led workshops and programs offered by Dalhousie's Centre for Learning and Teaching (CLT), TAs can develop key skills in facilitation, inclusive teaching, assessment, and student engagement. Whether you are new to the role or building on previous experience, these training opportunities provide valuable resources and support to help TAs grow as effective educators in the classroom, lab, and beyond.
        </p>

        {/* ─────────  Faculty-specific  ───────── */}
        <h3 className="font-bold text-lg">Faculty of Computer Science Training Opportunities</h3>
        <p>
          We strive to offer you training that will help you be successful in your role through this handbook, the FCS TAs & Markers Brightspace site, in-person training sessions at the FCS, and the guidance of the instructor you will be working with. Computer Science is a distinct discipline that requires specialized support.
        </p>

        <h3 className="font-bold text-lg">Centre for Learning & Teaching (CLT) Training Opportunities</h3>

        <h3 className="font-semibold">
        Professional Development Resources at Dalhousie 
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Teaching Assistant Professional Development Days (TA Days)</strong>
            <p>
              TA Days provide TAs with strategies, information, and insight to support teaching activities throughout the year. These workshops and webinars give both new and returning TAs a chance to listen, learn, and engage in discussions about effective teaching practices.
            </p>
          </li>

          <li>
            <strong>Teaching Assistant Enrichment Program (TAEP)</strong>
            <p>
              TAEP combines workshops, teaching exercises, and reflection on teaching and learning. It recognises a participant's work toward the development of teaching, offering experience, knowledge, and skills that can be applied immediately to current TA assignments.
            </p>
          </li>

          <li>
            <strong>Certificate in University Teaching and Learning (Graduate Students)</strong>
            <p>There are four main requirement elements in the program:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Theory</li>
              <li>Teaching Practice</li>
              <li>Professional Development</li>
              <li>Capstone – Teaching Dossier</li>
            </ul>
          </li>

          <li>
            <strong>Centre for Learning and Teaching (CLT):</strong> Access a range of resources and support services dedicated to improving teaching and learning experiences.
          </li>
        </ul>

        <h3 className="font-bold text-lg">The Importance of Being Proactive and Active</h3>
        <p>
          It’s important to stay proactive when it comes to teaching. You can’t wait for students to take initiative. You have to take action both inside and outside the classroom. Don’t sit back passively; engage with your students and take the lead. 
        </p>

        <p>
        Gaining the respect of your students is crucial from the first day. If you don’t set clear expectations from the beginning, it becomes much harder to maintain authority throughout the semester. 
        </p>

      {/* Managing responsibilities */}
      <h4 className="font-semibold">Managing the Responsibilities of a TA</h4>
      <p>
      Being a TA comes with a balancing act. You have your own research, coursework, and preparation for lectures. On top of that, you may need to teach classes, grade assignments and possibly hold office hours. It’s important to prioritize your tasks and not get overwhelmed. You can manage your time more effectively by preparing any activities that you may need for labs, classes and tutorials before you enter the learning space. If you are marking, tackle grading as soon as assignments come in rather than letting them pile up. As a TA, you're going to have a lot on your plate. Between (possibly) grading, preparing lectures, attending meetings, and your own coursework or research, it can be easy to feel overwhelmed. The key is to stay organized and manage your time effectively. If you have marking responsibilities, we recommend grading assignments as soon as you receive them. You will most likely be given a timeline for this from the instructor with whom you are working. This will not only make your life easier but also ensure that your students get timely feedback, which is crucial for their learning. 
      </p>
      <p>
      Another thing to remember is that your students might not always come to you with their questions. Some might be too shy or unsure, so it’s important to make yourself available. Hold regular office hours and encourage your students to reach out to you via email if they need help. And remember, if you're offering office hours, be sure to attend them! It may seem like no one will come, but being available is important in case they do.
      </p>
      <p>
      Finally, it’s important to communicate with your fellow TAs, especially if you’re all teaching the same course. Make sure you're on the same page when it comes to grading policies, handling academic dishonesty, and any other issues that may arise during the semester. 
      </p>

      <p>
      Being an active TA requires more than just physically moving around the classroom. It’s about taking the initiative, being proactive, and staying engaged with your students. Whether it’s inside or outside the classroom, there are always opportunities to be an active participant in the learning process. 
      </p>

      {/* Proactive mindset */}
      <h4 className="font-semibold">Being Proactive as a TA</h4>
      <p>
      To help your students succeed, you must focus on being proactive rather than reactive. If you're always waiting for things to go wrong or waiting for students to ask for help, you'll find yourself constantly playing catch-up. Instead, try to anticipate issues and questions before they arise. That way, you're better prepared to handle them. You need to be intentional in your plan for each lab, tutorial or assistance in class. When you are working with an instructor as support in a class or whether you are leading a lab, tutorial or other TAs, have clear communication and set a plan. 
      </p>

      <p>
      You also want to set the tone early on. The first day of class is critical. If you don’t establish yourself as an authority figure from day one, it will be much harder to gain the respect of your students later in the semester. 
      </p>

      {/* Engagement */}
      <h4 className="font-semibold">Engaging Your Students</h4>
      <p>
      Another thing to keep in mind is that your students are much more likely to engage with the material if you're actively engaging with them. This doesn't mean you have to be overly strict or unapproachable, but it does mean that you need to be present and involved in the learning process. 
      </p>

      <p>
      Using Active Learning techniques such as "think-pair-share” and other strategies helps students engage with the material and facilitates deeper learning and retention of skills and course content. This not only gets students interacting with each other and the content but incorporates critical thinking. It also gives them the chance to work through any confusion they may have in a low-pressure environment. 
      </p>

      <p>
        See the <a className="text-blue-600">Active Learning</a> section for active learning techniques and steps for implementation. 
      </p>

      {/* Staying active physically */}
      <h4 className="font-semibold">Staying Active and Engaged</h4>
      <p>
      Another tip is to stay physically active in the classroom. Don’t just stand at the front of the room and lecture for the entire period. Move around the classroom, check in with students, and offer assistance when needed. Not only does this make you more approachable, but it also keeps your students on their toes because they know you’re paying attention. 
      </p>

      <p>
      You should also strive to bring energy into the classroom. Even if the material isn't doesn’t seem very exciting, your enthusiasm can make a huge difference in how your students respond to it. When you're excited about what you're teaching, that excitement becomes contagious, and your students will be more likely to stay engaged. 
      </p>

      <p>
      In summary, being an active TA is about more than just showing up to class and doing the minimum. It's about taking initiative, engaging with your students, and staying proactive both inside and outside the classroom. By doing these things, you’ll not only make your students' lives easier, but you’ll also make your own teaching experience much more rewarding.  
      </p>

      
    </div>
    ),
  },
  {
    id: 3,
    title: "Guiding TAs on Professional Behavior",
    content: (
      <ProfessionalBehavior/>
    ),
  },
  {
    id: 4,
    title: "Your Responsibilities as a TA",
    content: (
      <TAResponsibilities/>
    )
  },
  {
    id: 5,
    title: "In the Classroom",
    content: (
      <ClassroomGuidance />
    )
  },
  {
    id: 6,
    title: "Suggestions for Being a Fantastic TA",
    content: (
      <FantasticTA />
    ),
  },
  {
    id: 7,
    title: "Instructional Modalities",
    content: (
      <div className="my-3 space-y-4">
        <p>
          Instructional modalities refer to the mode or format in which instruction is delivered—how students engage with learning experiences. Modalities focus more on structure, timing, and presence (physical or virtual) in the learning environment.
        </p>
  
        <p>
          Here are some of the most common instructional modalities at the Faculty of Computer Science:
        </p>
  
        <ul className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Face-to-Face (F2F) / In-Person</strong>
            <ul className="list-disc pl-6 space-y-1">
              <li>Instructor and students are physically present in the same location.</li>
              <li>Traditional modality used in classrooms, labs, or tutorials.</li>
              <li>Can be lecture-based, active learning, or experiential.</li>
            </ul>
          </li>
  
          <li>
            <strong>Online (Fully Online)</strong>
            <ul className="list-disc pl-6 space-y-1">
              <li>All course activities happen online, with no in-person meetings.</li>
              <li>
                Can be:
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Asynchronous:</strong> no real-time meetings; learners engage on their own schedule (e.g., pre-recorded videos, forums, assignments).
                  </li>
                  <li>
                    <strong>Synchronous:</strong> real-time online sessions (e.g., via Zoom or Teams).
                  </li>
                </ul>
              </li>
            </ul>
          </li>
  
          <li>
            <strong>Blended / Hybrid</strong>
            <ul className="list-disc pl-6 space-y-1">
              <li>Combines online and in-person elements.</li>
              <li>A portion of learning occurs in person, and the rest is completed online.</li>
              <li>Often structured with in-person sessions for interaction and online components for content delivery and practice.</li>
            </ul>
          </li>
  
          <li>
            <strong>HyFlex (Hybrid-Flexible)</strong>
            <ul className="list-disc pl-6 space-y-1">
              <li>Students choose how to participate—in-person, online synchronous, or online asynchronous.</li>
              <li>Provides maximum flexibility.</li>
              <li>Requires strong planning to ensure all students have an equitable experience.</li>
            </ul>
          </li>
  
          <li>
            <strong>Flipped Classroom</strong>
            <ul className="list-disc pl-6 space-y-1">
              <li>Instructional content (e.g., readings or videos) is completed before class.</li>
              <li>Class time is used for active learning (e.g., discussion, problem-solving, labs).</li>
              <li>Can be applied in any modality—F2F, blended, or online.</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    title: "The Lab",
    content: (
      <TheLab />
    ),
  },

  {
    id: 9,
    title: "Receiving Feedback",
    content: (
      <ReceivingFeedback />
    ),
  },

  {
    id: 10,
    title: "Markers",
    content: (
      <div className="my-3 space-y-4">
        <p>
        This section is focused on maintaining consistency, fairness, and clarity in grading practices. The following key aspects are addressed: 
        </p>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>
            Providing Exemplars
            </strong>
            : When grading complex projects, having exemplars of high-quality, average, and below-average work can help markers make objective comparisons. It also gives TAs a better understanding so they can explain it well to students. Exemplars (a worked example) should be selected or created and shared (with the corresponding rubrics) with students to set clear expectations. This practice not only aids students in understanding expectations and helps them to gain clarity on the success criteria applied to similar work of varying quality but also guides markers on how to improve the assessment of the work once it is completed and submitted6.
          </li>
          <li>
            <strong>
            Establishing a Standard for Better Grading
            </strong>
            : Markers should develop a clear, shared understanding of the grading criteria before assessing student work. A great way to do this is to carefully review the rubric for the assessment that has been given and thoroughly discuss it with the instructor or head TA/Marker. The marking team need to understand how to apply the rubric criteria appropriately to grade a piece of work. As highlighted above, using an exemplar of the project or past submissions as calibration tools align expectations and improves the consistency of evaluations across all markers7
          </li>
          <li className="space-y-3">
            <strong>
            Moderation Techniques
            </strong>
            
            : To maintain consistent grading standards, markers should collaborate through moderation sessions. These sessions involve collectively grading a sample set of submissions and discussing any scoring discrepancies. 
            
            
            <p className="mt-3">A lead marker or instructor can select a few assessments representing high, medium, and low outcomes to establish a shared understanding of the standard and the rationale behind specific success criteria in the rubric. </p>

            <p>During the session, all markers grade the same assessment using the rubric, then compare scores and feedback. This process, known as "calibration," helps markers reach a consensus on the grade and determine effective feedback to guide student improvement. It is an essential strategy to resolve grading differences and ensure consistent application of rubrics. </p>
          </li>
          <li>
            <strong>
            Grading Policies
            </strong>
            : To ensure fairness and adherence to academic standards, maintaining the anonymity of student names (often called Blind Marking) is crucial to avoid bias. Markers must adhere to deadlines for returning graded assignments according to the grading policy set by the instructor (this can often be found in the course syllabus) and handle disputes or requests for re-evaluation. Markers will be instructed on how to communicate feedback constructively, maintain academic integrity, and keep records of graded work for potential audits or appeals by the instructor9. 
          </li>
          <li>
            <strong>
            Take Regular Breaks to Maintain Fairness
            </strong>
            : Grading fatigue can lead to <strong>
            inconsistent evaluation</strong> or <strong>unfair grading</strong>. Taking breaks ensures that every student receives a <strong>fair and thoughtful assessment</strong>. 
          </li>
          <li>
            <strong>
            Be Thoughtful in Tone
            </strong>
            : Written feedback should be encouraging and constructive, not just critical. Write comments that you would want to receive as a student. 
          </li>
          <li>
            <strong>
            Prioritize Feedback on Key Issues
            </strong>
            : Since time is limited, focus on the most important areas for improvement rather than trying to correct every issue. 
          </li>
          <li>
            <strong>
            Comment Banks
            </strong>
            : Can save time and be effective as comments can be curated. If you aren’t using CrowdMark a <strong>list of common feedback</strong> that can be copied and pasted to streamline grading can be useful. Refer students to external resources (e.g., office hours, the FCS Learning Centre, or Dal’s Writing Centre) for further learning. 
          </li>
          <li>
            <strong>
            Address Common Errors with the Entire Class
            </strong>
            : Instead of repeating feedback individually, <strong>discuss frequent mistakes in class</strong> to save time and reinforce key learning points. 
          </li>
        </ol>

        <h3 className="font-sans font-bold">
        GPS Model for Effective Feedback           
        </h3>

        <p>
        Providing minimal feedback can frustrate students, even those who performed well. The <strong>GPS model</strong> ensures that feedback is clear, actionable, and supportive:
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>
            G – Goal
            </strong>
            : Clearly define what success looks like and what students should aim for. 
          </li>
          <li>
            <strong>
            P – Position
            </strong>
            : Help students understand where they currently stand in relation to their goal. 
          </li>
          <li>
            <strong>
            S – Steps
            </strong>
            : Offer specific strategies and guidance on how to improve and progress towards success. 
          </li>
        </ul>

        <p>
        By implementing these principles and strategies, TAs can provide <strong>meaningful and effective feedback</strong> that supports student learning and development. 
        </p>

        <p>
        By abiding by and implementing the above steps, markers can be equipped with the necessary tools to perform their responsibilities effectively, foster a transparent grading process, give feedback accordingly and contribute to a fair learning environment. 
        </p>

        <p>
        Receiving and giving effective feedback | Centre for Teaching Excellence | University of Waterloo. (n.d.). <a href="https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/receiving-and-giving-effective-feedback" target="_blank" className="text-blue-600">https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/receiving-and-giving-effective-feedback</a>
        </p>

        <p>
        Moderation guidance. (2024, February 26). The University of Edinburgh. https://institute-academic-development.ed.ac.uk/learning-teaching/staff/assessment/moderation-guidance#:~:text=This%20involves%20the%20first%20marker,agree%20a%20final%20single%20mark.
        </p>

        <p>
        Wimshurst, K., & Manning, M. (2012). Feed-forward assessment, exemplars and peer marking: evidence of efficacy. Assessment & Evaluation in Higher Education, 38(4), 451–465. https://doi.org/10.1080/02602938.2011.646236
        </p>

        <p>
        Wimshurst, K., & Manning, M. (2012b). Feed-forward assessment, exemplars and peer marking: evidence of efficacy. Assessment & Evaluation in Higher Education, 38(4), 451–465. https://doi.org/10.1080/02602938.2011.646236
        </p>

        <CollapsibleSection 
        id={10.1}
        title="Material Distribution, Turnaround Time, and Effective Feedback Strategies"
        content={
          <div>
            <p className="mt-3">
            Effective material distribution, timely feedback, and structured feedback mechanisms are essential for student success. These components help ensure that students receive the necessary resources, guidance, and corrections that facilitate their learning process. This document outlines best practices for distributing materials efficiently, reducing turnaround time for feedback, and implementing various forms of effective feedback.  
            </p>

            <h3 className="text-lg font-bold mt-3 mb-2 ">1. Material Distribution: Ensuring Accessibility and Efficiency  </h3>

            <h3 className="text-md font-semibold mt-2 mb-1">
            Importance of Organized Material Distribution  
            </h3>

            <p>
            Students rely on timely access to lecture notes, assignments, grading rubrics, and supplementary resources to stay engaged in their courses. Inconsistent or delayed distribution can lead to confusion, lack of preparedness, and diminished academic performance.  
            </p>


            <h3 className="text-lg font-bold mt-3 mb-2">
            2. Best Practices for Material Distribution  
            </h3>

            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>
                Use a Centralized Platform
                </strong>
                : Learning Management Systems (LMS) like Brightspace should serve as the primary location for all class materials. This ensures consistency and accessibility. However, Teams is often used for online meetings and organizing group and project work. It has a Files feature where students can share and work on files together. 
              </li>
              <li>
                <strong>
                Schedule Releases in Advance
                </strong>
                : Providing students with a predictable timeline for when materials will be available fosters better planning and engagement. <i>Check with the instructor for the course and read the syllabus carefully as the instructor may have a policy for this.</i> 
              </li>
              <li>
                <strong>
                Categorize and Label Resources Clearly
                </strong>
                : Proper organization, such as folders for each topic or week, makes it easier for students to find the necessary resources quickly.  
              </li>
              <li>
                <strong>
                Provide Multiple Formats
                </strong>
                : Where possible, provide PDFs, PowerPoints, video lectures, and interactive content to cater to different learning needs as outlined by <a href="https://www.cast.org/what-we-do/universal-design-for-learning/" target="_blank" className="text-blue-600">Universal Design for Learning (UDL)</a>. We need to ensure we provide opportunities to engage students, offer multiple means of representation of course material and offer various ways for students to express/demonstrate the learning outcomes.  
              </li>
              <li>
                <strong>
                Enable Offline Access
                </strong>
                : Some students may have limited internet access; downloadable materials ensure they can continue their studies without disruption. 
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-3 mb-1">
             3. Turnaround Time: Enhancing Student Engagement with Timely Feedback  
            </h3>

            <p className="font-semibold mt-2 mb-1">
            The Impact of Timely Feedback  
            </p>
            <p>
            Timely feedback allows students to reflect on their performance and improve before their next assessment. Delays in returning graded assignments or feedback can lead to frustration and hinder learning.  
            </p>

            <p className="text-md font-semibold mt-2 mb-1">
            Strategies to Improve Turnaround Time  
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>
                Set Clear Expectations
                </strong>
                : Inform students of feedback timelines upfront (e.g., “Assignments will be returned within two weeks”).  
              </li>
              <li>
                <strong>
                Prioritize Key Assignments
                </strong>
                : Focus on high-impact assessments while using automated tools for smaller quizzes.   
              </li>
              <li>
                <strong>
                Use Peer Reviews
                </strong>
                : Implement structured peer review sessions to provide students with preliminary feedback before instructor comments. 
              </li>
              <li>
                <strong>
                Employ Digital Grading Tools
                </strong>
                : Platforms such as CrowdMark or using Quizzes or Assignments in Brightspace
              </li>
              <li>
                <strong>
                Utilize Teaching Assistants (TAs)
                </strong>
                : If you are the Head TA, assign TAs/Markers to specific grading tasks or sections to distribute workload efficiently. 
              </li>
            </ul>

            <p className="text-lg font-bold mt-3 mb-2">
             4. Forms of Effective Feedback: Constructive and Actionable Guidance  
             </p>


            <p className="mt-2 mb-1">
            <strong>Characteristics of Effective Feedback</strong> (the Markers section has more details for marking students’ work) 
            </p>

            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>
                Specific and Actionable
                </strong>
                : Feedback should clearly highlight what students did well and areas needing improvement. Provide access to resources to help them improve if necessary. 
              </li>
              <li>
                <strong>
                Timely and Ongoing
                </strong>
                : Providing feedback while the material is still fresh enhances its effectiveness.
              </li>
              <li>
                <strong>
                Balanced and Constructive
                </strong>
                : Highlight strengths before critiquing weaknesses.
              </li>
              <li>
                <strong>
                Encourages Reflection
                </strong>
                : Guide students to think critically about their performance and how to improve.
              </li>
            </ul>

            <p className="text-md font-bold mt-2 mb-1">
              Types of Feedback and Their Applications  
            </p>

            <ol className="list-[lower-alpha] my-2 space-y-2 pl-5">
              <li>
                <strong>
                  Formative Feedback (During Learning)  
                </strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                      <strong>
                      Purpose
                      </strong>
                      : Helps students adjust their learning strategies before final assessments.  
                    </li>
                    <li>
                      <strong>
                      Examples
                      </strong>
                      : Instructor/TA/Marker written comments on a draft submission, interactive discussions, verbal feedback during lab sessions.
                    </li>
                  </ul>
              </li>
              <li>
                <strong>
                Summative Feedback
                </strong>
                (After Learning happens, these are the graded that appear in the Gradebook as part of the final grade)  
                <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>
                      Purpose
                      </strong>
                      : Evaluates learning at the end of an instructional unit. 
                    </li>
                    <li>
                      <strong>
                      Examples
                      </strong>
                      : Final project grades, comprehensive written evaluations (tests/exams) and presentations.
                    </li>
                  </ul>
              </li>
              <li>
                <strong>
                Peer Feedback  
                </strong>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>
                      Purpose
                      </strong>
                      : Enhances student collaboration and critical thinking skills.
                    </li>
                    <li>
                      <strong>
                      Implementation
                      </strong>
                      : Structured peer-review sessions where students provide constructive critiques based on a rubric.
                    </li>
                  </ul>
              </li>
              <li>
                <strong>
                Automated Feedback
                </strong>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>
                      Purpose
                      </strong>
                      : Provides immediate feedback through quizzes and exercises.  
                    </li>
                    <li>
                      <strong>
                      Tools
                      </strong>
                      : MS Forms, Kahoot, LMS quizzes, WeBWork, or various coding platforms with instant feedback features.  
                    </li>
                  </ul>
              </li>
              <li>
                <strong>
                Verbal Feedback
                </strong>
                <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>
                      Purpose
                      </strong>
                      : Quick, informal feedback during discussions or labs.
                    </li>
                    <li>
                      <strong>
                      Implementation
                      </strong>
                      : One-on-one feedback during office hours or live class corrections.
                    </li>
                  </ul>
              </li>
            </ol>

            <p className="my-1">
            Effective material distribution, prompt feedback turnaround, and structured feedback methods significantly improve student learning outcomes. By implementing digital tools, structured peer reviews, and diverse feedback strategies, educators and their teams (TAs and Markers) can create an engaging and supportive learning environment.
            </p>

            <h3 className="text-lg font-bold mt-3 mb-2">
            References 
            </h3>

            <ul className="list-disc list-inside space-y-1">
              <li>
              Centre for Teaching Excellence. (n.d.). TA Handbook. University of Waterloo. Retrieved from <a className="text-blue-600" target="_blank" href="https://uwaterloo.ca/centre-for-teaching-excellence/support-graduate-students/ta-handbook">https://uwaterloo.ca/centre-for-teaching-excellence/support-graduate-students/ta-handbook  </a>
              </li>

              <li>
              Centre for Teaching Excellence. (n.d.). Receiving and Giving Effective Feedback. University of Waterloo. Retrieved from <a className="text-blue-600" target="_blank" href="https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/receiving-and-giving-effective-feedback">https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/receiving-and-giving-effective-feedback  </a>
              </li>

              <li>
              Institute for Academic Development. (n.d.). Assessment & Feedback Basic Guidance. University of Edinburgh. Retrieved from <a  className="text-blue-600" target="_blank" href="https://institute-academic-development.ed.ac.uk/learning-teaching/staff/assessment/guidance">https://institute-academic-development.ed.ac.uk/learning-teaching/staff/assessment/guidance </a> 
              </li>

              <li>
              Wiggins, G. (2012). Seven Keys to Effective Feedback. Educational Leadership, 70(1), 10–16.  
              </li>

              <li>
              Stenger, M. (2014). Meaningful Feedback for Students: 5 Research-Based Tips. Edutopia. Retrieved from <a className="text-blue-600" target="_blank" href="https://www.edutopia.org/blog/tips-providing-students-meaningful-feedback-marianne-stenger">https://www.edutopia.org/blog/tips-providing-students-meaningful-feedback-marianne-stenger </a> 
              </li>

              <li>
              Ambrose, S. A., Bridges, M. W., DiPietro, M., Lovett, M. C., & Norman, M. K. (2010). How Learning Works: Seven Research-Based Principles for Smart Teaching. San Francisco, CA: Jossey-Bass.  
              </li>

              <li>
              Education Endowment Foundation. (n.d.). Feedback. Retrieved from <a className="text-blue-600" target="_blank" href="https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/feedback">https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/feedback </a> 
              </li>

              <li>
              The Education Hub. (2016). How to Integrate Effective Feedback into Your Classroom. Retrieved from <a className="text-blue-600" target="_blank" href="https://theeducationhub.org.nz/how-to-integrate-effective-feedback-into-your-classroom">https://theeducationhub.org.nz/how-to-integrate-effective-feedback-into-your-classroom</a>
              </li>
            </ul>

          </div>
        }
      />
      </div>


    ),
  },

  {
    id: 11,
    title: "Conducting Office Hours",
    content: (
      <div className="space-y-2">
        <p className="mt-3">
        TAs will receive guidance from their course instructor regarding whether they are required to hold office hours. When hosting office hours, it is essential to create a welcoming and productive environment where students feel comfortable, respected, and supported. Strategies in this section include managing time efficiently, guiding students to think critically rather than providing direct answers, maintaining clear boundaries, and managing one-on-one or group interactions with empathy and fairness.
        </p>

        <h3 className="text-lg font-bold">
        Importance of Office Hours
        </h3>

        <p>
        Office hours are essential as they offer students structured opportunities to seek assistance and engage in one-on-one interactions with instructors and TAs. This dedicated time helps prevent unscheduled interruptions and fosters a supportive learning environment. Virtual office hours are also encouraged to enhance accessibility for all students.
        </p>

        <h3 className="text-md font-semibold mt-2 mb-1">
          Scheduling Office Hours
        </h3>

        <p>
          When planning office hours, TAs should consider the following:
        </p>

        <ul className="list-disc pl-6 ml-1 space-y-1">
          <li><strong>Consistency:</strong> Hold sessions at the same time and location each week to avoid confusion.</li>
          <li><strong>Accessibility:</strong> Choose locations that are easily accessible to students, such as a designated office, library, or other public spaces.</li>
          <li><strong>Flexibility:</strong> Acknowledge that not all students can attend scheduled hours; offer alternatives like appointments before or after class, or communication via email or phone.</li>
          <li><strong>Student Input:</strong> If possible, provide multiple time options and collaborate with students to determine the most convenient slots for the majority.</li>
          <li><strong>Optimal Timing:</strong> Avoid inconvenient times, such as late Friday afternoons or early Monday mornings. Scheduling office hours adjacent to class times can be beneficial, as many students prefer to avoid back-to-back classes. </li>
        </ul>

        <h3 className="text-md font-semibold mt-2 mb-1">
          Promoting Office Hours
        </h3>

        <ul className="list-disc pl-6 ml-1 space-y-1">
          <li><strong>Regular Reminders:</strong> Consistently inform students about your office hours throughout the semester. Although it is most likely in the syllabus, frequent reminders can make students feel welcome. </li>
          <li><strong>Approachability:</strong> Cultivate a friendly and open atmosphere in the classroom to make students feel comfortable seeking help. Tell them that you hope that they take advantage of that time and why it is there.</li>
          <li><strong>Mandatory Visits:</strong> For smaller classes, consider requiring/incentivizing at least one office visit during the initial weeks or after the first assignment or test to establish rapport.</li>
          
        </ul>

        <h3 className="text-md font-semibold mt-2 mb-1">
          Best Practices During Office Hours
        </h3>

        <ul className="list-disc pl-6 ml-1 space-y-1">
          <li><strong>Punctuality:</strong> Arrive on time to demonstrate respect for students' time.</li>

          <li><strong>Open Door Policy:</strong> Keep the door open during office hours to signal availability.</li>

          <li><strong>Professionalism:</strong> Set aside personal tasks to focus entirely on the student, refraining from distractions like phone calls or emails.</li>

          <li><strong>Preparation Guidance:</strong> Advise students to come prepared with specific questions or topics to discuss.</li>

          <li><strong>Clarify Purpose</strong> : Encourage students to specify their reasons for visiting, allowing for focused and efficient meetings.  </li>

          <li><strong>Group Discussions:</strong>  If multiple students have similar concerns, address them collectively to save time.</li>

          <li><strong>Active Listening:</strong>  Engage in attentive listening by maintaining eye contact, paraphrasing, and summarizing to ensure understanding. Repeat back to the student what they have said to confirm understanding of 
          their issue.</li>

          <li><strong>Nonverbal Cues:</strong>  Be mindful of body language to fully grasp students' perspectives. <i>Do they seem nervous, shy or upset?</i> Be kind and patient. </li>

          <li><strong>Effective Questioning:</strong>  Use open-ended questions to promote critical thinking and deeper understanding. That is… avoid questions that only require a yes or no as an answer. </li>

          <li><strong>Managing Frustrations: </strong> Handle student frustrations with empathy, offering support and, when necessary, referring them to appropriate resources.  </li>

          <li><strong>Continuous Improvement:  </strong> Use feedback from office hours to identify common issues and adjust teaching methods accordingly. </li>
        </ul>

        <h3 className="text-md font-semibold mt-2 mb-1">
          Addressing Common Challenges
        </h3>

        <ul className="list-disc pl-6 ml-1 space-y-1">
          <li><strong>Lack of Office Space:</strong> If an office isn't available, promptly inform the course instructor to arrange a temporary meeting space or choose a public area like the library.</li>
          <li><strong>Personal Problems:</strong> When students present personal issues beyond academic concerns, refer them to qualified professionals or campus services. See the Student Support Flow Diagram or the resources from Dal’s webpage on Student Health and Wellness.</li>
          <li><strong>Setting Boundaries:</strong> Some students may wish to chat without academic purpose; politely reserve time for those needing assistance.</li>
          <li><strong>Missed Connections:</strong> If unable to attend scheduled hours due to unforeseen circumstances, notify students and the course instructor promptly, and arrange alternative support.</li>
          <li><strong>High Demand:</strong> If office hours consistently attract large numbers, consider adding extra sessions to accommodate student needs.</li>
        </ul>

        <p>
        By adhering to these guidelines, TAs can create an effective and supportive environment during office hours, enhancing the overall educational experience for their students.
        </p>

        <p>
        For more great tips on "Conducting Office Hours" visit the UNBC Teaching Assistant Manual which provides comprehensive guidance for teaching assistants (TAs) on effectively managing office hours to support student learning.
        </p>

        <h3 className="text-lg font-bold">
          References:
        </h3>

        <p>
        “Conducting Office Hours: UBC Teaching Assistant Manual” by British Columbia/Yukon Pressbooks is licensed under <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/" className="text-blue-600" >CC BY 4.0</a>  <a href="https://pressbooks.bccampus.ca/unbctamanual/chapter/conducting-office-hours/" target="_blank" className="text-blue-600">https://pressbooks.bccampus.ca/unbctamanual/chapter/conducting-office-hours/</a>
        </p>
      </div>
    ),
  },

  {
    id: 12,
    title: "Head TA Leading other TAs and Demonstrators",
    content: (
      <div className="space-y-2">
        <p className="mt-3">
        Some courses require Head TAs if there is more than one section for the course and/or if the class has many students. As a Head TA, you play a crucial leadership role in supporting other Teaching Assistants (TAs) and Demonstrators, ensuring the smooth operation of lab-based courses and tutorials. Your role centres around clear communication, setting expectations, providing mentorship, and facilitating feedback to promote a successful experience for both TAs, Markers and students.
        </p>

        <h3 className="font-semibold text-lg mt-2 mb-1">Set Clear Expectations with your team from the start </h3>

        <p>
        At the beginning of the term, it's essential to define and communicate the roles and responsibilities of each TA and Demonstrator. As Head TA, you should work with the course instructor to outline expectations, which typically include: 
        </p>

        <ul className="list-disc pl-6 ml-1 space-y-1">
          <li>Leading lab and/or tutorial sessions  </li>
          <li>Preparing lab, tutorial and possibly class materials  </li>
          <li>Ensuring TAs & Demonstrators know how to use any ed tech and required digital platforms needed for labs and classes (GitHub, GitLab, Codio, etc.)  </li>
          <li>Grading assignments and reports  </li>
          <li>Holding office hours  </li>
          <li>Responding to student inquiries </li>
        </ul>

        <p>
        Clarifying these responsibilities early on prevents confusion and sets a professional tone for the term. 
        </p>

        <h3 className="font-semibold text-lg mt-2 mb-1">Facilitate Regular Meetings for Coordination and Support </h3>

        <p>Organize weekly or biweekly meetings with all TAs to maintain consistent communication. These meetings provide a space to: </p>

        <ul className="list-disc pl-6 ml-1 space-y-1">
          <li>Review upcoming lab activities and expectations </li>
          <li>Address questions or logistical concerns </li>
          <li>Share grading rubrics and align marking standards </li>
          <li>Encourage peer collaboration and mutual support </li>
        </ul>

        <p>As Head TA, your role is to lead these discussions, troubleshoot issues, and act as a liaison between the course instructor and the TAs. </p>

        <h3 className="font-semibold text-lg mt-2 mb-1">Supporting Lab Observations</h3>

        <p>Occasionally, an instructor may ask you to attend lab sessions or tutorials to help ensure course delivery standards are being met. This also provides mentorship opportunities. When observing: </p>


        <ul className="list-disc pl-6 ml-1 space-y-1">
          <li>Coordinate with TAs and Demonstrators beforehand on when you'll attend  </li>
          <li>Observe respectfully, allowing the TA to lead and the Demonstrator to proceed with the planned session </li>
          <li>Step in only if necessary (e.g., safety issues or serious disruptions) </li>
          <li>Take notes to share with the instructor of the course </li>
        </ul>

        <p>This approach reinforces your trust in their capabilities while still offering guidance. </p>

        <h3 className="font-semibold text-lg">Offer Constructive Feedback </h3>

        <p>Regular feedback helps TAs grow as educators. You can foster their development through: </p>

        <ul className="list-disc pl-6 ml-1 space-y-1">
          <li>Informal check-ins and debriefs after labs </li>
          <li>Private discussions focused on teaching techniques and classroom management </li>
          <li>Encouraging peer feedback through shared reflection or observation </li>
          <li>Include any feedback from the course </li>
        </ul>

        <p>Always aim to give feedback in a positive, supportive manner to build confidence and skill. </p>

        <h3 className="font-semibold text-lg mt-2 mb-1">
          Promote a Collaborative and Professional Environment 
        </h3>

        <p>Your leadership sets the tone for a respectful and growth-oriented team. Strengthen your TA team by: </p>
        
        
        <ul className="list-disc pl-6 ml-1 space-y-1">
          <li>Treating TAs and Demonstrators as instructional partners </li>
          <li>Encouraging initiative  </li>
          <li>Sharing resources for professional development </li>
          <li>Recognizing individual strengths and contributions </li>
        </ul>

        <p>By nurturing a collaborative environment, you enhance both TA and Marker performance and the student learning experience. </p>
        

        <h3 className="font-semibold text-lg mt-2 mb-1">
        In Summary 
        </h3>
        
        <p>
        As a Head TA, your role extends beyond administration—you're a mentor, communicator, and team leader. By establishing clear expectations, maintaining regular communication, observing with care, offering constructive feedback, and fostering a professional learning community, you help build a strong foundation for successful lab and tutorial instruction. This helps students meet course outcomes, and the instructor can focus on teaching course content in classes, knowing that the learning environment is running smoothly in other areas so students can succeed.  
        </p>

        <h3 className="text-lg font-bold mt-2 mb-1">
          References:
        </h3>

        <p>
        Roles and responsibilities of teaching assistants. Graduate Assistant Handbook. (2024, March 21). <a href="https://uwm.edu/graduate-assistants/handbook/teaching-assistants/roles-and-responsibilities-of-teaching-assistants/" target="_blank" className="text-blue-600">https://uwm.edu/graduate-assistants/handbook/teaching-assistants/roles-and-responsibilities-of-teaching-assistants/</a>
        </p>

        <p>
        Ott, E. T., & Angel, H. Z. (2022, February 12). How to oversee a laboratory course taught by teaching assistants: experiences in the lab and field. Pressbooks. <a href="https://pressbooks.lib.vt.edu/universityteaching/chapter/how-to-oversee-a-laboratory-course-taught-by-teaching-assistants-experiences-in-the-lab-and-field/ " target="_blank" className="text-blue-600">https://pressbooks.lib.vt.edu/universityteaching/chapter/how-to-oversee-a-laboratory-course-taught-by-teaching-assistants-experiences-in-the-lab-and-field/</a>
        </p>
      </div>
    ),
  },

  {
    id: 13,
    title: "Toolbox of Instructional Strategies that Work!",
    content: (
      <ToolboxInstructionalStrategies />
    ),
  },

  {
    id: 14,
    title: "Your Role in Fostering Inclusive Classrooms at the Faculty of Computer Science",
    content: (
      <FosteringInclusiveClassrooms />
    ),
  },
  
  {
    id: 15,
    title: "Creating Assignments and Labs with Clear Outcomes Using Bloom’s Taxonomy",
    content: (
      <BloomsTax />
    ),
  },

  {
    id: 16,
    title: "Equity, Diversity, Inclusion & Accessibility (EDIA) and Supporting Students in Distress",
    content: (
      <EDIA />
    ),
  },

  {
    id: 17,
    title: "Creating Assignment, Labs and Rubrics",
    content: (
      <CreatingALR />
    ),
  },

];
