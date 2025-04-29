import { ReactNode, useState } from "react";
import ClassroomGuidance from "../components/inTheClassroom";
import TAResponsibilities from "../components/TaResponsibilities";
import ProfessionalBehavior from "../components/ProfessionalBehavior";

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
          Teaching Assistants (TAs) in the Faculty of Computer Science have access to a variety of professional-development opportunities designed to support and enhance your teaching practice. Through a combination of Faculty-led workshops and programs offered by Dalhousie’s Centre for Learning and Teaching (CL​T), TAs can develop key skills in facilitation, inclusive teaching, assessment, and student engagement. Whether you are new to the role or building on previous experience, these training opportunities provide valuable resources and support to help TAs grow as effective educators in the classroom, lab, and beyond.
        </p>

        {/* ─────────  Faculty-specific  ───────── */}
        <h3 className="font-bold text-lg">Faculty of Computer Science Training Opportunities</h3>
        <p>
          We strive to offer you training that will help you be successful in your role through this handbook, the FCS TAs & Markers Brightspace site, in-person training sessions at the FCS, and the guidance of the instructor you will be working with. Computer Science is a distinct discipline that requires specialized support.
        </p>

        {/* ─────────  CLT / Dal resources  ───────── */}
        <h3 className="font-bold text-lg">Centre for Learning & Teaching (CLT) Training Opportunities</h3>

        {/* TA Days */}
        <p><strong>Teaching Assistant Professional Development Days&nbsp;(TA Days)</strong></p>
        <p>
          TA Days provide TAs with strategies, information, and insight to support teaching activities throughout the year. These workshops and webinars give both new and returning TAs a chance to listen, learn, and engage in discussions about effective teaching practices.
        </p>
        <p>
          Link:&nbsp;
          <a
            href="https://www.dal.ca/dept/clt/events-news/annual-events/TA_Days.html"
            target="_blank"
            className="text-blue-600 underline"
          >
            TA Days
          </a>
        </p>

        {/* TAEP */}
        <p><strong>Teaching Assistant Enrichment Program (TAEP)</strong></p>
        <p>
          TAEP combines workshops, teaching exercises, and reflection on teaching and learning. It recognises a participant’s work toward the development of teaching, offering experience, knowledge, and skills that can be applied immediately to current TA assignments.
        </p>

        {/* CUTL */}
        <p><strong>Certificate in University Teaching and Learning (Graduate Students)</strong></p>
        <p>There are four main requirement elements in the program:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Theory</li>
          <li>Teaching&nbsp;Practice</li>
          <li>Professional&nbsp;Development</li>
          <li>Capstone&nbsp;– Teaching&nbsp;Dossier</li>
        </ul>
        <p>
          For more information visit:&nbsp;
          <a
            href="https://www.dal.ca/dept/clt/programs/CUTL.html"
            target="_blank"
            className="text-blue-600 underline"
          >
            CUTL Program
          </a>
          .
        </p>

        {/* CLT one-liner */}
        <p>
          <strong>Centre for Learning and Teaching (CLT):</strong> Access a range of resources and support services dedicated to improving teaching and learning experiences.
        </p>

        {/* ─────────  Proactive / Active section  ───────── */}
        <h3 className="font-bold text-lg">The Importance of Being Proactive and Active</h3>
        <p>
          It’s important to stay proactive when it comes to teaching. Don’t sit back passively—engage with your students, set clear expectations from day one, and take the lead both inside and outside the classroom.
        </p>

        {/* Managing responsibilities */}
        <h4 className="font-semibold">Managing the Responsibilities of a TA</h4>
        <p>
          Being a TA involves balancing your own research, coursework, lecture prep, grading, and possibly office hours. Prioritise tasks, prepare activities before you enter the learning space, and tackle grading as soon as assignments come in. Timely feedback is crucial for student learning.
        </p>
        <p>
          Some students may be too shy to ask for help, so make yourself available—hold regular office hours and encourage email communication. And if you’re scheduled for office hours, make sure you attend them!
        </p>
        <p>
          Communicate regularly with fellow TAs (especially if you share a course) so everyone is on the same page about grading policies, academic-integrity issues, and other course logistics.
        </p>

        {/* Proactive mindset */}
        <h4 className="font-semibold">Being Proactive as a TA</h4>
        <p>
          Focus on anticipating issues rather than reacting to them. Plan each lab or tutorial intentionally with clear communication and coordination with the instructor and teaching team. Establish authority and expectations on the first day to build respect and rapport.
        </p>

        {/* Engagement */}
        <h4 className="font-semibold">Engaging Your Students</h4>
        <p>
          Students engage more deeply when you engage with them. Active-learning techniques such as “think-pair-share” promote critical thinking and deeper understanding. See the Active Learning section for concrete strategies.
        </p>

        {/* Staying active physically */}
        <h4 className="font-semibold">Staying Active and Engaged</h4>
        <p>
          Move around the classroom, check in with students, and offer assistance—this keeps you approachable and keeps students attentive. Inject energy into your sessions; enthusiasm is contagious!
        </p>

        {/* Summary */}
        <p>
          In short, being an active TA means taking initiative, engaging with students, and staying proactive. These practices benefit your students and make your teaching experience far more rewarding.
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
      // {
      //   id: 6,
      //   title: "Inclusive Classrooms",
      //   content: `
      //   In the Lab: TAs should foster a supportive atmosphere where students feel comfortable asking questions and engaging with the material. The importance of preparation, clear communication, active listening, and providing constructive feedback are crucial to your effectiveness in the lab. TAs are encouraged to circulate the room, monitor student progress, and facilitate group discussions (when appropriate) to enhance collaborative learning.
    
      //   No Phones! Unless you are using your mobile phone to communicate with your instructor, locate a resource, or use the timer for activities, you should not be scrolling on your mobile phone. Your job in labs, classes and tutorials is to be attentive to students. This means engaging with them and carefully observing them as they work. Eyes on the class, not on your phone!
        
      //   You may be leading a teaching team of TAs and Demonstrators. We do encourage you to be collegial with one another and develop positive relationships, but the purpose of lab and tutorial times are to focus on the learning. Be mindful that students will be reticent to approach you for help if you and others leading the sessions are deep in conversation! Always be present, welcoming and observant.

      //   It’s important that students feel a sense of belonging. You need to facilitate this!  

      //   - Start by sharing your name and the names of any Demonstrators in the room. Share something about yourself with your students. Perhaps your course of study, where you are from, your favourite hobby, etc. Even something about your own journey as a CS student. This helps students get to know you and develops a sense of familiarity. 

      //   - Remind your students that, as a TA, your role is to support their learning, which means approaching interactions differently than you would as a peer. 

      //   - You need to make an effort to learn students’ names. A good way of doing this is to have students write their names on labels and wear them on their lapel the first couple of classes or create name tents (folding a piece of paper in half, students write their names on one half, then prop up the paper next to them). Also, encourage students to share their names with other students when they engage with each other for paired or group work.  

      //   - If a student asks a clarifying question after a demonstration or if it is relevant for the whole class, repeat it for everyone in the class to hear before you respond. 

      //   - Use students’ names when speaking to them. If you do not know it, ask them and then repeat it before you respond. “Great question, Ammar…..” 

      //   Click the link for: 4 Strategic Questions and TA-ing in the CS Lab Poster (https://www.canva.com/design/DAGivQP_-Nc/aNCLhTun55NppYm2ysh5Lw/edit?utm_content=DAGivQP_-Nc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)`

      // },

      // {
      //   id: 7,
      //   title: "Instructional Modalities",
      //   content: `
      //     Instructional modalities refer to the mode or format in which instruction is delivered—how students engage with learning experiences. Modalities focus more on structure, timing, and presence (physical or virtual) in the learning environment. 
      //     Here are some of the most common instructional modalities at the Faculty of Computer Science: 
      //     1. Face-to-Face (F2F) / In-Person 
      //     Instructor and students are physically present in the same location. 
      //     Traditional modality used in classrooms, labs, or tutorials. 
      //     Can be lecture-based, active learning, or experiential. 
      //     2. Online (Fully Online) 
      //     All course activities happen online, with no in-person meetings. 
      //     Can be: 
      //     Asynchronous: no real-time meetings; learners engage on their own schedule (e.g., pre-recorded videos, forums, assignments). 
      //     Synchronous: real-time online sessions (e.g., via Zoom or Teams). 
      //     3. Blended / Hybrid 
      //     Combines online and in-person elements. 
      //     A portion of learning occurs in person, and the rest is completed online. 
      //     Often structured with in-person sessions for interaction and online components for content delivery and practice 
      //     4. HyFlex (Hybrid-Flexible) 
      //     Students choose how to participate—in-person, online synchronous, or online asynchronous—often switching between them as needed. 
      //     Provides maximum flexibility. 
      //     Requires strong planning to ensure all students have an equitable experience. 
      //     5. Flipped Classroom 
      //     Instructional content (e.g., readings or videos) is completed before class. 
      //     Class time is used for active learning (e.g., discussion, problem-solving, labs). 
      //     Can be applied in any modality—F2F, blended, or online. 
      //   `
      // },

      // {
      //   id: 8,
      //   title: "In the Lab",
      //   content: `
      //   In the Lab: TAs should foster a supportive atmosphere where students feel comfortable asking questions and engaging with the material. The importance of preparation, clear communication, active listening, and providing constructive feedback are crucial to your effectiveness in the lab. TAs are encouraged to circulate the room, monitor student progress, and facilitate group discussions (when appropriate) to enhance collaborative learning.
    
      //   No Phones! Unless you are using your mobile phone to communicate with your instructor, locate a resource, or use the timer for activities, you should not be scrolling on your mobile phone. Your job in labs, classes and tutorials is to be attentive to students. This means engaging with them and carefully observing them as they work. Eyes on the class, not on your phone!
        
      //   You may be leading a teaching team of TAs and Demonstrators. We do encourage you to be collegial with one another and develop positive relationships, but the purpose of lab and tutorial times are to focus on the learning. Be mindful that students will be reticent to approach you for help if you and others leading the sessions are deep in conversation! Always be present, welcoming and observant.

      //   It’s important that students feel a sense of belonging. You need to facilitate this!  

      //   - Start by sharing your name and the names of any Demonstrators in the room. Share something about yourself with your students. Perhaps your course of study, where you are from, your favourite hobby, etc. Even something about your own journey as a CS student. This helps students get to know you and develops a sense of familiarity. 

      //   - Remind your students that, as a TA, your role is to support their learning, which means approaching interactions differently than you would as a peer. 

      //   - You need to make an effort to learn students’ names. A good way of doing this is to have students write their names on labels and wear them on their lapel the first couple of classes or create name tents (folding a piece of paper in half, students write their names on one half, then prop up the paper next to them). Also, encourage students to share their names with other students when they engage with each other for paired or group work.  

      //   - If a student asks a clarifying question after a demonstration or if it is relevant for the whole class, repeat it for everyone in the class to hear before you respond. 

      //   - Use students’ names when speaking to them. If you do not know it, ask them and then repeat it before you respond. “Great question, Ammar…..” 

      //   Click the link for: 4 Strategic Questions and TA-ing in the CS Lab Poster (https://www.canva.com/design/DAGivQP_-Nc/aNCLhTun55NppYm2ysh5Lw/edit?utm_content=DAGivQP_-Nc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)`

      // }

];
