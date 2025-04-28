import { ReactNode } from "react";

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
    <div className="my-3 space-y-4">

      {/* ――― Intro ――― */}
      <p>
        This section is dedicated to guiding TAs on professional behaviour and best practices during lab sessions, classroom teaching, and office hours. We emphasize the importance of creating an inclusive, respectful, and engaging learning environment.
      </p>
      <p>
        As a Teaching Assistant, you play a vital role in supporting student learning and maintaining a positive classroom environment. To demonstrate professional behaviour, it's important to be <strong>punctual</strong>, <strong>reliable</strong>, and <strong>respectful</strong> in all interactions with students, professors, and fellow TAs. Adhering to Dalhousie University policies, maintaining confidentiality, and demonstrating cultural sensitivity are key aspects of your role. Use inclusive language and practice active listening to create a welcoming atmosphere.
      </p>

      {/* ――― Boundaries with Students ――― */}
      <h3 className="font-bold text-lg">Boundaries with Students</h3>
      <p>
        Keep professional and personal relationships separate. Even if a friend happens to be in your lab or tutorial, avoid preferential treatment—every student must follow the same rules. Communicate courteously (in person and online), remain impartial, give consistent feedback, and consult your supervisor if conflicts arise.
      </p>

      {/* ――― Communication with Professors ――― */}
      <h3 className="font-bold text-lg">Communication with Professors</h3>
      <p>
        Maintain open, respectful dialogue with instructors and notify them of issues early. Clarify duties (see the <em>Teaching Assistant Checklist</em>), seek guidance when uncertain, and always uphold professionalism when sharing feedback or challenges.
      </p>

      {/* When to contact the instructor */}
      <h4 className="font-semibold">When to Contact the Instructor</h4>
      <ul className="list-disc pl-6 space-y-1">
        <li>Clarifying duties or grading policies</li>
        <li>Student concerns beyond TA authority (e.g.&nbsp;accommodation requests, personal matters)</li>
        <li>Suspected academic-integrity violations</li>
        <li>Content questions outside your expertise</li>
        <li>Logistical or policy changes (deadlines, exams, rubrics)</li>
        <li>Personal emergencies or absences</li>
        <li>Boundary or ethical concerns</li>
      </ul>

      {/* ――― What to do when you don’t know what to do ――― */}
      <h3 className="font-bold text-lg">What to Do When You Don’t Know What to Do</h3>
      <p>
        If you’re unsure how to proceed—whether about a platform, cheating incident, or finding resources—be proactive and ask: start with this handbook, consult other TAs, and if still unclear, talk to the course instructor.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>How to proceed in a particular situation</li>
        <li>Who to approach when “x” happens</li>
        <li>Where to find a learning resource</li>
        <li>Which platform to use for assignments</li>
        <li>What to do when you catch someone cheating</li>
        <li>How to learn Crowdmark … and more</li>
      </ul>

      {/* ――― Collaborating with Other TAs ――― */}
      <h3 className="font-bold text-lg">Interacting with Other TAs</h3>
      <p>
        Foster collaboration and mutual support. Share resources, avoid gossip, resolve conflicts respectfully, and keep the instructor informed if mediation is needed. Strong TA teams create cohesive learning experiences.
      </p>

      {/* ――― References (compact list) ――― */}
      <h3 className="font-bold text-lg mt-6">References</h3>
      <p className="text-sm">
        Elements of course design for TAs&nbsp;| Centre for Teaching and Learning. (n.d.). <a target="_blank" className="text-blue-600 underline" href="https://www.queensu.ca/ctl/resources/graduate-student-post-doctoral-and-ta/teaching-assistant-toolkit/elements-course-design">https://www.queensu.ca/ctl/resources/graduate-student-post-doctoral-and-ta/teaching-assistant-toolkit/elements-course-design</a>
      </p>
      <p className="text-sm">
        Smith, J. (2024, October&nbsp;3). Communication Techniques for Classroom Assistants. Portobello Institute. <a target="_blank" className="text-blue-600 underline" href="https://blog.portobelloinstitute.com/communication-techniques-for-classroom-assistants">https://blog.portobelloinstitute.com/communication-techniques-for-classroom-assistants</a>
      </p>
      <p className="text-sm">
        Teaching Continuity for Graduate Teaching Assistants&nbsp;- Communicating with Students. (2023, July&nbsp;10). Taylor Institute for Teaching and Learning. <a target="_blank" className="text-blue-600 underline" href="https://taylorinstitute.ucalgary.ca/resources/teaching-continuity-for-graduate-teaching-assistants-communicating-with-students"> https://taylorinstitute.ucalgary.ca/resources/teaching-continuity-for-graduate-teaching-assistants-communicating-with-students</a>
      </p>
      <p className="text-sm">
        Working with Teaching Assistants&nbsp;| Computer Science Instructional Support Group. (n.d.). University of Waterloo. <a target="_blank" className="text-blue-600 underline" href="https://uwaterloo.ca/computer-science-instructional-support-group/instructor-support/guidelines-cs-instructors/working-teaching-assistants"> https://uwaterloo.ca/computer-science-instructional-support-group/instructor-support/guidelines-cs-instructors/working-teaching-assistants</a>
      </p>
      <p className="text-sm">
        Teaching Assistants' Training Program. (2024, May&nbsp;29). Course Instructor–Teaching Assistant Relationship&nbsp;- Teaching Assistants' Training Program. <a target="_blank" className="text-blue-600 underline" href="https://tatp.utoronto.ca/resources/course-instructor-teaching-assistant-relationship/"> https://tatp.utoronto.ca/resources/course-instructor-teaching-assistant-relationship/</a>
      </p>
      <p className="text-sm">
        Learning Module: Teaching Assistant Orientation&nbsp;- Lesson&nbsp;5. (2023, February&nbsp;16). Taylor Institute for Teaching and Learning. <a target="_blank" className="text-blue-600 underline" href="https://taylorinstitute.ucalgary.ca/resources/module/teaching-assistant-orientation/professionalism"> https://taylorinstitute.ucalgary.ca/resources/module/teaching-assistant-orientation/professionalism</a>
      </p>
    </div>
  ),
},
{
    id: 4,
    title: "Your Responsibilities as a TA",
    content: (
      <div className="my-3 space-y-4">
        <p>
          TA roles differ in tasks depending on the course and the professor you are working with. You must be clear on your responsibilities when you accept a role as TA. Every instructor will have their own needs and ideas for what it is that they would like you to do and how they would like you to approach tasks.
        </p>
        <p>
          The first meeting with the instructor can be seen as an "Orientation Meeting". This meeting is an opportunity to start your role in a positive and clear direction. To ensure that you are successful in your role, a helpful checklist of questions in this section will help guide your discussion with the instructor of the class as you embark on your TA journey. You will be able to refer to it when you need clarity. Also, you can share specific information you have recorded with your teaching team.
        </p>
        <h3 className="font-bold text-lg mt-6 mb-2">Teaching Assistant Checklist: Essential Questions to Clarify Your Role</h3>
        <p>
          Whether you are a new Teaching Assistant (TA) or taking on a course that is new to you, it's essential to clearly understand your responsibilities. The following questions will help you define your role and expectations, ensuring you are prepared for your duties. Taken from Teaching Assistant Checklist: Questions to Ask. Centre for Teaching Excellence, University of Waterloo (2024).
        </p>
        <p>
          Link to Checklist: Teaching Assistant Checklist
        </p>
        <h4 className="font-semibold mt-4 mb-2">Understanding the Course Syllabus</h4>
        <p>
          The first step to understanding the course—its content, learning outcomes, structure (lectures, labs, and tutorials), and important policies—is to carefully read the course syllabus. The first question you must ask the instructor is: May I please have a copy of the course syllabus?
        </p>
        <h4 className="font-semibold mt-4 mb-2">Understanding Your Role</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>What will my primary responsibilities be? Will I be lecturing, leading discussions, running tutorials, conducting labs, grading, or working in an online environment through the course management system?</li>
          <li>How frequently will I be performing each of these tasks?</li>
          <li>How does my supervisor define my role? (For example, what specifically is involved in running a tutorial?)</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2">Providing Assistance</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>If I am offering individual support, how much help is appropriate without crossing boundaries?</li>
          <li>What types of assistance are not permitted or advisable?</li>
          <li>Should I consider organizing group help or review sessions?</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2">Facilitating Discussions</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>If I am leading discussions, what is the best way to structure the sessions?</li>
          <li>Should I focus on sticking closely to the course text or lectures?</li>
          <li>Should I encourage broad student participation, or take on a more directive role?</li>
          <li>Is it appropriate to address only student problems during discussions?</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2">Conducting Labs</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>What specific responsibilities do I have in the lab?</li>
          <li>Am I in charge of managing supplies and materials?</li>
          <li>Will I be responsible for designing or revising labs?</li>
          <li>Am I expected to give demonstrations during lab sessions?</li>
          <li>Are there any platforms that I need to know how to use to conduct the lab (GitLab, IntelliJ, Codio, etc.) Is there training for this?</li>
          <li>What procedures should I follow in case of emergencies or accidents?</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2">Grading and Evaluation</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>What assessments will I be grading (papers, projects, reports, quizzes, exams, participation)?</li>
          <li>Are the grading criteria and rubrics for final grades clearly defined?</li>
          <li>Who will handle disputes over grades?</li>
          <li>How much time will I have to complete grading tasks?</li>
          <li>Are there platforms that I need to learn for grading (Crowdmark, Codio, Brightspace, etc.)?</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2">Technical and Logistical Support</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>What audiovisual or technical equipment will I be responsible for using?</li>
          <li>Will I need to book, collect, or return equipment to the CS Help Desk, or will it be managed by someone else?</li>
          <li>How much freedom do I have to introduce new ideas, employ different teaching methods, or present perspectives that differ from the instructor?</li>
          <li>If one of the technical platforms that we are using doesn't work properly, who do I contact?</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2">Office Hours and Availability</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Do I hold any office hours? How many, and at what times?</li>
          <li>Who will be supervising my work, and what criteria will be used to evaluate my performance?</li>
          <li>If I am unable to attend a class, lab, or tutorial, who should I inform and what procedures should I follow?</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2">Additional Responsibilities</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Are there any other duties or expectations I should be aware of?</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2">Final Thoughts on Questions to Clarify Your Role</h4>
        <p>
          Taking the time to find answers to these questions will help you feel confident and prepared as you take on your TA responsibilities. Being proactive in gathering information will minimize unexpected challenges and ensure you can approach your new role with assurance and clarity.
        </p>
      </div>
    )
},
      // {
      //   id: 5,
      //   title: "In the Classroom",
      //   content: `
      //   In the Classroom: When leading a class or assisting a lecturer, TAs should maintain professionalism by being punctual, well-prepared, and enthusiastic. This section includes tips on managing classroom dynamics, responding to questions effectively, using technology to enhance teaching, and collaborating smoothly with faculty to support learning. 
      //   As a Teaching Assistant, your presence, attitude, and approach to classroom dynamics significantly impact student engagement and learning. Establishing a foundation of respect from the first day is essential. Set clear rules and expectations early on, and initiate a discussion about respectful communication. Modeling this behavior consistently will encourage students to follow your lead and contribute to a positive learning environment. 
      //   Being approachable is also key. Aim to strike a balance between being kind and firm. When students feel comfortable coming to you with questions or concerns, it creates a more inclusive and supportive atmosphere. Approachability fosters trust and encourages participation. 
      //   Encouraging active learning helps students move beyond passive reception of information. Simple strategies like “think-pair-share” can promote engagement and deeper understanding of the material. (See the Active Learning section  for more ideas.) 
      //   Effective communication is another essential skill. Practice active listening and make a conscious effort to use students’ names in conversation. This not only personalizes interactions but also fosters a sense of community. 
      //   In the physical space, your movement around the classroom matters. Walking around to interact with students signals attentiveness and allows you to identify who might need help. Lastly, your energy as an educator sets the tone. Even if the topic isn’t your favourite, showing enthusiasm will inspire students to stay engaged. Your attitude can transform the learning experience. 
      //   Your First Contact with Students (Tab) 
        
      //   Establishing a Supportive Learning Environment  
      //   1. Introduction 
      //   The first interaction between instructors, teaching assistants (TAs), and students sets the tone for the entire learning experience. A well-structured first contact can help students feel welcome, establish expectations, and create an open line of communication that promotes academic success. This document outlines best practices for making a strong first impression, fostering an inclusive classroom, and providing clear guidance on course resources and support. 
      //   2. Establishing a Welcoming Environment 
      //   2.1 Importance of First Impressions 
      //   The first interaction shapes students’ perceptions of the instructor, the course, and their own role as learners. A positive, engaging, and approachable tone fosters confidence and motivation. 
      //   2.2 Strategies for Creating a Welcoming Atmosphere 
      //   Introduce Yourself: Share relevant background information about yourself, including teaching philosophy, research interests, and personal anecdotes that connect with students. 
      //   Encourage Student Introductions: Use icebreaker activities to help students learn about each other, such as name-sharing games or personal goal-setting exercises. 
      //   Use Inclusive Language: Ensure that all students feel represented and valued by acknowledging diverse backgrounds and perspectives. 
      //   Show Enthusiasm for the Subject: Express passion for the course content to inspire students and encourage engagement. 
      //   3. Setting Clear Expectations and Guidelines 
      //   3.1 Communicating Course Policies 
      //   Provide a Course Overview: Highlight key components, including learning outcomes, grading policies, and major deadlines. 
      //   Clarify Classroom Etiquette: Discuss expectations regarding participation, respectful communication, and academic integrity. 
      //   Set Clear Office Hours: Clearly outline when and how students can reach out for help, whether through office hours, email, or discussion forums. 
      //   3.2 Creating an Accessible and Supportive Learning Space 
      //   Encourage Questions: Reinforce that asking questions is a crucial part of learning. 
      //   Introduce Support Resources: Provide information on tutoring centers, writing labs, student accessibility services, and mental health support. 
      //   Use a Course FAQ: Address common student concerns upfront by compiling frequently asked questions and their answers.
      //   4. Effective Communication Channels 
      //   4.1 Establishing Lines of Communication 
      //   Email Guidelines: Provide a template or examples of how students should format their emails to instructors. 
      //   Discussion Boards and LMS Platforms: Utilize tools like Brightspace or Teams for announcements and Q&A discussions. 
      //   Group Messaging Apps: Consider platforms like Slack, Discord, or Microsoft Teams to facilitate informal discussions and peer support. 
      //   4.2 First-Class Meeting or Email 
      //   Welcome Email Template: Send a warm and informative email before the first class with course details, important links, and expectations. 
      //   Introductory Lecture: Dedicate the first class session to orienting students to the course structure and fostering engagement. 

      //   Surveys and Feedback Forms: Use anonymous surveys to understand student backgrounds, expectations, and concerns. 

 

      //   5. Building Community and Engagement 

 

      //   5.1 Encouraging Student Participation 

      //   Active Learning Strategies: Incorporate interactive elements such as polling, breakout discussions, and collaborative exercises. 

      //   Name Recognition: Use name tents in labs or small classes to help instructors and peers learn each other’s names quickly. 

      //   Group Work: Assign students to small discussion groups early to build connections and a sense of community. 

 

      //   5.2 Fostering a Growth Mindset 

      //   Emphasize Learning over Grades: Encourage students to focus on skill development rather than just performance metrics. 

      //   Normalize Mistakes: Share stories or examples where learning from failure led to improvement. 

      //   Encourage Self-Reflection: Ask students to set learning goals and periodically reflect on their progress. 

        

      //   6. Conclusion 

      //   The first contact with students is a critical opportunity to create an inclusive and productive learning environment. By setting a welcoming tone, establishing clear expectations, and providing accessible communication channels, educators can empower students to take ownership of their learning experience. Thoughtful planning and engagement from the first interaction lay the foundation for a successful academic journey. 

      //   References (APA Style) 

      //   Ambrose, S. A., Bridges, M. W., DiPietro, M., Lovett, M. C., & Norman, M. K. (2010). How Learning Works: Seven Research-Based Principles for Smart Teaching. San Francisco, CA: Jossey-Bass. 

      //   Centre for Teaching Excellence. (n.d.). TA Handbook. University of Waterloo. Retrieved from https://uwaterloo.ca/centre-for-teaching-excellence/support-graduate-students/ta-handbook 

      //   Wankat, P. C., & Oreovicz, F. S. (2015). Teaching Engineering. Purdue University Press. Retrieved from https://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=1018&context=purduepress_ebooks 

      //   Nilson, L. B. (2016). Teaching at Its Best: A Research-Based Resource for College Instructors (4th ed.). Jossey-Bass. 

      //   Education Endowment Foundation. (n.d.). Metacognition and Self-Regulated Learning. Retrieved from https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/metacognition-and-self-regulation 
        

      //   Active Learning (tab) 

      //   Active learning is a teaching approach that encourages student engagement and participation in the learning process. It involves instructional strategies that promote doing and thinking rather than just passively receiving information. Some key definitions include: 

      //   OpenEd Guelph: Active learning includes teaching strategies that promote student activity and engagement in the classroom. 

      //   Bonwell & Eison (1991): Active learning involves instructional activities where students do things and reflect on their learning. 

      //   Why Incorporate Active Learning? 

      //   Research suggests that active learning improves student learning outcomes compared to passive lecturing. Benefits include: 

      //   Better retention of course material 

      //   Improved thinking and writing abilities 

      //   Enhanced attitudes towards learning 

      //   Increased motivation for further study 

      //   Greater awareness of one’s learning process 

      //   How to Incorporate Active Learning? Some Strategies to Try! 
      //   There are various active learning strategies, ranging from short activities to longer exercises. Below are several effective techniques: 
      //   Think-Pair-Share 
      //   Students first think about a question individually. 
      //   They then pair up with a peer to discuss their responses. 
      //   Finally, pairs share their responses with the class.  
      //   This method encourages articulation of ideas and critical analysis of peer responses. 
      //   Group Discussions 
      //   Students are divided into small groups to discuss a specific topic or prepared questions. 
      //   Encourages exchange of ideas, experiences, and critical thinking. 
      //   Board Rotation 
      //   A topic is divided into sub-topics, each posted at different stations in the room. 
      //   Students rotate through the stations, adding comments and insights. 
      //   The class later discusses the collective input. 
      //   Surveys, Polls, Quizzes, and Questionnaires 
      //   Can be used for brainstorming, practice, or assessing student understanding. 
      //   Online tools like Zoom polls, Mentimeter, and Kahoot! enhance interaction. 
      //   Jigsaw (Group Experts) 
      //   Students are divided into expert groups, each focusing on a specific topic. 
      //   Experts then mix into new groups, where they teach their topic to peers. 
      //   Encourages peer teaching and deeper understanding. 
      //   Sticky Note Brainstorming (In-Person or Online) 
      //   Students write ideas on sticky notes, which can be categorized or responded to by peers. 
      //   Online tools like Padlet, Google Jamboard, and Zoom annotations can be used for virtual participation. 
      //   Role-Playing 
      //   Students act out a real-world situation or scenario. 
      //   Followed by a discussion to analyze insights gained from the role-play. 
      //   Games and Simulations 
      //   Interactive activities like Jeopardy for review sessions or simulations to explore real-life situations. 
      //   Helps students engage with material in a fun, meaningful way. 
      //   Felder, R. M., & Brent, R. (2009). Active learning: An introduction. ASQ Higher Education Brief, 2(4), 1–5. https://engr.ncsu.edu/stem-resources/wp-content/uploads/sites/5/2021/07/Active-Learning-Tutorial.pdf 
      //   Prince, M. (2004). Does active learning work? A review of the research. Journal of Engineering Education, 93(3), 223–231. https://doi.org/10.1002/j.2168-9830.2004.tb00809.x 
      //   Explicit Direct Instruction (Tab) 
      //   Explicit Direct Instruction (EDI) in programming education is a modern teaching framework rooted in traditional Direct Instruction (DI), but with a more flexible and student-centered approach. While early DI was known for its scripted, rigid teaching methods, EDI emphasizes clarity, engagement, and structured support. It’s particularly effective in fields like programming, where learners must grasp complex concepts step-by-step. 
      //   In EDI, teachers guide students through each stage of learning, ensuring understanding before moving on. Lessons are designed to be purposeful and interactive, helping students build confidence and competence in programming. 
      //   Eight Core Principles of EDI 
      //   Clear Learning Objectives
      //   Every lesson begins with a simple, clearly stated goal—written in everyday language. This helps students understand what they’re learning and why, focusing their attention and giving them direction. 
      //   Activating Prior Knowledge 
      //   Before introducing new material, teachers review previously learned content. This strengthens memory, highlights connections, and makes new ideas easier to grasp. 
      //   Concept Development 
      //   New topics are introduced gradually with detailed explanations, diagrams, and real-life examples. Abstract concepts are made more accessible before students are expected to apply them. 
      //   Skill Development
      //   EDI goes beyond theory. It teaches practical programming skills like using development tools, writing syntax correctly, debugging, and developing logical thinking. 
      //   Guided Practice
      //   Teachers work through problems with students—often via live coding sessions—while encouraging questions, discussion, and participation. This shared problem-solving builds confidence and reinforced learning. 
      //   Independent Practice 
      //   Students then tackle problems on their own, applying what they’ve learned. This stage helps solidify understanding and reveals areas that need more attention. 
      //   Lesson Closure
      //   Lessons end with a brief review, quiz, or discussion to check for understanding. This ensures both teacher and students are clear on what was learned and what might need reinforcement. 
      //   Emphasizing Lesson Importance
      //   Teachers explain the real-world value of each topic. In programming, this could mean showing how a concept applies to future courses, job skills, or solving everyday problems. 
      //   Why EDI Works for Programming 
      //   Programming has a steep learning curve. Many classrooms skip foundational steps like setting clear goals or reviewing material, which leaves students confused. Research by Hermans and Smit shows that applying EDI in programming fills these gaps. It ensures lessons are complete, structured, and supportive. https://www.ppig.org/files/2018-PPIG-29th-hermans.pdf 
      //   For example, before teaching loops, a teacher might review conditionals to build context. They’d then explain the concept thoroughly, guide students through examples, and finally assign exercises for independent work. Skills like using IDEs, reading error messages, and checking documentation should also be explicitly taught—not left for students to figure out on their own.  
      //   Hermans, F., & Smit, M. (n.d.). Explicit Direct Instruction in Programming Education.  https://www.ppig.org/files/2018-PPIG-29th-hermans.pdf 
      //   Teaching Explicit Strategies: Debug and Reuse 
      //   Two structured strategies—Debug and Reuse—were also explored as part of this approach.
      //   The Debug Strategy 
      //   This four-step method helps students fix errors logically: 
      //   Identify the problem 
      //   Brainstorm possible causes 
      //   Test the causes 
      //   Ask for help if needed 
      //   It was introduced using a car engine analogy, making the idea of troubleshooting relatable. Taught after conditionals, this strategy improved students’ logical thinking and productivity during coding tasks. 
      //   The Reuse Strategy 
      //   This teaches students how to adapt existing code for new problems. Steps include: 
      //   Define the goal 
      //   Find example code 
      //   Modify it to fit the new context 
      //   However, many students struggled with this. They had trouble identifying useful examples and making effective changes, suggesting a need for more foundational teaching before applying reuse strategies successfully. 
      //   Classroom Practices and Recommendations 
      //   Professors used a "Roboto" visual format to break down each strategy step-by-step. Students tracked their progress using strategy logs. Professors and TAs reinforced this by asking students to explain their goals and strategies during help sessions, fostering an open and collaborative classroom culture. 
      //   The research recommends: 
      //   More explicit instruction on strategy use 
      //   Helping students build self-regulation—the ability to plan, monitor, and assess their work 
      //   Tailoring support to individual needs 
      //   Developing better tools to scale these strategies across classrooms 
      //   In summary, blending structure with flexibility and guidance with independence is key to helping students succeed in programming. Explicit Direct Instruction offers a roadmap for making this possible. 
      //   Ko, A. J., LaToza, T. D., Hull, S., Ko, E. A., Kwok, W., Quichocho, J., Akkaraju, H., & Pandit, R. (2019). Teaching Explicit Programming Strategies to Adolescents. https://doi.org/10.1145/3287324.3287371 
      //   Discussions (Tab) 
      //   Planning and Facilitating Discussions 
      //   To ensure a productive and engaging discussion, consider the following strategies: 
      //   Build Community 
      //   Encourage students to learn each other's names using name cards (in-person) or by setting display names (online). 
      //   Engage students by asking about their interests, reasons for taking the course, and relevant experiences. 
      //   Foster a welcoming and creative learning environment. 
      //   Establish Classroom Discussion Norms 
      //   Collaboratively set discussion guidelines by asking students: “What makes an effective discussion?” 
      //   Ensure students understand how to maintain respectful and constructive dialogue. 
      //   Promote Active Listening 
      //   Encourage students to focus on the speaker, avoid interruptions, and paraphrase before responding. 
      //   Taking notes when appropriate can improve comprehension and retention. 
      //   Ensure Equal Participation 
      //   Design discussions in a way that allows every student to contribute. 
      //   Consider seating arrangements (e.g., semi-circle or round tables) to facilitate open conversation (if in a space that allows for that). Otherwise, if in a lecture hall, ensure students are in small groups (no more than 4 people). Circulate in the room to listen to the students, to answer questions and to redirect students if they are off topic or need further guidance. 
      //   Use breakout rooms for small group discussions in online settings. 
      //   Prepare Before the Discussion 
      //   Review key concepts and learning objectives before starting the discussion. 
      //   Record main ideas and summarize intermittently to help students reflect on connections to course material. 
      //   Clarify Discussion Format and Learning Outcomes 
      //   Specify whether the discussion will be open-ended, structured, or debate-style. 
      //   Some students may not be familiar with seminar-style discussions, so provide clear guidance. 
      //   Use Active Learning Strategies 
      //   Incorporate different discussion methods to keep students engaged. 
      //   Refer to Active Learning Techniques for ideas on interactive discussion formats. 
      //   Set Clear Goals for the Discussion 
      //   Begin with a goal and review at the end to assess its effectiveness. 
      //   Involve students in the evaluation process by discussing what worked well and where improvements can be made. 
      //   Manage Silence Effectively 
      //   Allow students time to process questions before responding. 
      //   A brief pause can encourage deeper thinking and more thoughtful responses. 
      //   Encourage Student-to-Student Interaction 
      //   Avoid responding to every comment; instead, prompt students to build on each other’s ideas. 
      //   Use open-ended, opinion-based questions to stimulate discussion. “What do you think of.....?” 
      //   Conclude with a Wrap-Up 
      //   Summarize key takeaways at the end of the discussion. 
      //   A useful technique is to have students create an exam question related to the discussion topics and review them in the next class. 
      //   The Office of Teaching & Learning & The Office of Teaching & Learning. (n.d.). Guide for new teaching assistants. In Guide for New Teaching Assistants (pp. 1–43). https://otl.uoguelph.ca/system/files/Guide%20for%20New%20TAs%20-%20Fillable%20PDF.pdf `
      // },
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
