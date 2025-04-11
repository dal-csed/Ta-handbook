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
        content: `
        Opportunities are there for you to become a TA as a graduate student. At the FCS (Faculty of Computer Science), we have a vested interest in your success in all facets, in your academics, research and professional aspirations to become future academics. Part of that role will most likely entail teaching! A great way to learn the skills necessary to become a successful educator is to involve yourself with aspects of teaching.  

        At the Faculty, there are different roles: TA (Teaching Assistant), Demonstrators and Makers. A TA position is the best way to secure a longer-term role with one or more classes for a sustained duration, hopefully for the duration of your degree! This is good for the faculty, as we can retain trained TAs who can develop a strong knowledge of a particular course or courses and ensure that the course can be delivered consistently from term to term. This is also very positive for grad students as they can secure funding and develop skills that they will need to be successful instructors in the future. 

        In the first instance, your supervisor at the Faculty of Computer Science, Dr. Micheal McAllister or the Lab Coordinator (Megan Baker) will be able to inform you of what role could be possible for you at the Faculty. They all have a wealth of information about the various roles and can advise you on what would be the most appropriate placement for you if there are any suitable opportunities. You are best placed to be a TA in a course that matches your skills and competencies; it is very important to have a thorough knowledge of the material covered in the course. If there are gaps in your knowledge, you must speak with the course instructor and learn the required material. 

        Secondly, there is a Brightspace page set up for TAs, Markers and Demonstrators at the Faculty: FCS TAs and Markers. All students at the Faculty have been enrolled in the site. It requires that you log in with your Dal credentials. If you have any issues accessing it, contact Megan Baker: FCSTA@dal.ca Once logged in, you will able to learn more about various roles, contract lengths, access Job Seeker Registry and much more! 

        Information about the roles of TAs, Markers and Demonstrators can also be found on the Faculty of Computer Science TA/Marker page3. It outlines the types of support that the various roles have and the hourly remuneration. The page also contains a link to the CUPE 3912 (Canadian Union of Public Employees) webpage. 
        
        Thank you for your dedication to teaching and learning at the FCS. Let’s get started! `
    }, 
    {
        id: 2,
        title: "Resources and Training at Dalhousie for TAs",
        content: `
        We strive to offer you training that will help you to be successful in your role through this handbook, the FCS TAs & Markers Brightspace site, in-person training sessions at the FCS and via the guidance of the instructor that you will be working with. Computer Science is a distinct discipline that requires specialized support.
    
        The Centre of Learning and Teaching Assistant Professional Development Days:
        
        TA Days are designed to equip teaching assistants with strategies, insights, and practical information to support their teaching throughout the year. These workshops and webinars offer both new and returning TAs a chance to listen, learn, and engage in discussions about effective teaching practices.
        
        Link: https://www.dal.ca/dept/clt/events-news/annual-events/TA_Days.html
    
        Certificate in University Teaching and Learning (Graduate Students):
        Dalhousie University's Center for Learning and Teaching (CLT) offers the Certificate in University Teaching and Learning (CUTL), designed for graduate students and post-doctoral fellows. This certificate provides a flexible structure that supports and acknowledges a wide array of teaching development opportunities.
    
        There are four main requirement elements in the program:
        - Theory
        - Teaching Practice
        - Professional Development
        - Capstone: Teaching Dossier
    
        For more information visit the website: https://www.dal.ca/dept/clt/programs/CUTL.html.`
    }, 

    {
        id: 3,
        title: "Guiding TAs on Professional Behavior",
        content: `
        This section is dedicated to guiding TAs on professional behaviour and best practices during lab sessions, classroom teaching, and office hours. We emphasize the importance of creating an inclusive, respectful, and engaging learning environment. 

        As a Teaching Assistant, you play a vital role in supporting student learning and maintaining a positive classroom environment. To demonstrate professional behaviour, it’s important to be punctual (on time), reliable, and respectful in all your interactions with students, professors, and fellow TAs. Adhering to Dalhousie University Policies, maintaining confidentiality, and demonstrating cultural sensitivity are key aspects of your role. Be mindful of using inclusive language, and practicing active listening to create a welcoming and respectful atmosphere. Take advantage of training opportunities that focus on communication skills, conflict resolution, and ethical behaviour, as these will help you develop confidence and professionalism in your interactions. 

        When interacting with students, maintain a clear boundary between professional and personal relationships. There may be times when a classmate from another class you are taking (or a friend) happens to be a student in the lab or tutorial you are leading. You must avoid preferential treatment to any student/s. All students must abide by the same rules and expectations regardless of your personal friendships with them outside of your lab/tutorial. Always communicate respectfully and courteously, both in person and online. Encourage open communication but remain impartial and avoid favouritism. Provide clear and consistent feedback and be patient when explaining complex concepts. If a conflict arises, approach it calmly and professionally, and if necessary, seek guidance from your supervisor.  

        When interacting with professors, maintain open and respectful communication, keeping them informed of any challenges or concerns when they happen. Do not wait until a situation becomes an even bigger problem! At times, you may feel shy or nervous to discuss issues with the instructor, but early resolutions to issues are appreciated. This will also help you to develop your communication skills!  Be proactive in discussing your responsibilities and expectations, and seek clarification whenever needed. Always maintain professionalism, even when sharing feedback or discussing classroom challenges. 

        What to do when you don’t know what to do! 

        There will always be times when you aren’t quite sure about….  

        - how to proceed in a particular situation 

        - who to go to when “x” happens  

        - where to find a learning resource 

        - which platform you need to use for assignments 

        - what to do when you catch someone cheating 

        - how do I learn to use Crowdmark 

        - ……  

        The answer to the above is always to be proactive and ASK! Reading this handbook will provide you with some information, connecting with other TAs and if you can’t find the answer, ask the course instructor.  

        In your interactions with other TAs, foster a spirit of collaboration and support. Respect each other's ideas and perspectives and avoid gossip or unprofessional discussions about students or faculty. Share resources and strategies that have been effective in your work and be willing to learn from your peers. Approach group tasks with a cooperative attitude and take responsibility for your share of the workload. If conflicts arise, address them directly and respectfully, or seek mediation if needed (meaning inform the instructor of the course of the issue). Building strong, positive relationships with your fellow TAs & Demonstrators will enhance your professional growth and contribute to a more cohesive and supportive teaching team. 

        Receiving and acting on feedback is an essential part of your growth as a TA. Be open to constructive feedback from supervisors, professors, and colleagues, and use it as an opportunity to reflect and improve your practice. Don’t hesitate to seek advice or discuss challenges you may face—building a strong support network is crucial for professional development. Engage in self-reflection through journaling or group discussions to better understand your strengths and areas for growth. By committing to continuous learning and professional behaviour, you will make a positive impact on the learning environment and serve as a role model for students and colleagues alike.  `
      },

    {
        id: 4,
        title: "Your Responsibilities as a TA",
        content: `
        TA roles differ in tasks depending on the course and the professor you are working with. You must be clear on your responsibilities when you accept a role as TA. Every instructor will have their own needs and ideas for what it is that they would like you to do and how they would like you to approach tasks. The first meeting with the instructor can be seen as an “Orientation Meeting”. This meeting is an opportunity to start your role in a positive and clear direction. To ensure that you are successful in your role, a helpful checklist of questions in this section will help guide your discussion with the instructor of the class as you embark on your TA journey. You will be able to refer to it when you need clarity. Also, you can share specific information you have recorded with your teaching team.
    
        Teaching Assistant Checklist: Essential Questions to Clarify Your Role
    
        Whether you are a new Teaching Assistant (TA) or taking on a course that is new to you, it’s essential to clearly understand your responsibilities. The following questions will help you define your role and expectations, ensuring you are prepared for your duties. Taken from Teaching Assistant Checklist: Questions to Ask. Centre for Teaching Excellence, University of Waterloo (2024).
    
        Link to Checklist: Teaching Assistant Checklist
    
        Understanding the Course Syllabus
    
        - The first step to understanding the course—its content, learning outcomes, structure (lectures, labs, and tutorials), and important policies—is to carefully read the course syllabus. The first question you must ask the instructor is: May I please have a copy of the course syllabus?
    
        Understanding Your Role
    
        - What will my primary responsibilities be? Will I be lecturing, leading discussions, running tutorials, conducting labs, grading, or working in an online environment through the course management system?
    
        - How frequently will I be performing each of these tasks?
    
        - How does my supervisor define my role? (For example, what specifically is involved in running a tutorial?)
    
        Providing Assistance 

        - If I am offering individual support, how much help is appropriate without crossing boundaries? 

        - What types of assistance are not permitted or advisable? 

        - Should I consider organizing group help or review sessions? 

        Facilitating Discussions 

        - If I am leading discussions, what is the best way to structure the sessions? 

        - Should I focus on sticking closely to the course text or lectures? 

        - Should I encourage broad student participation, or take on a more directive role? 

        - Is it appropriate to address only student problems during discussions? 

        Conducting Labs 

        - What specific responsibilities do I have in the lab? 

        = Am I in charge of managing supplies and materials? 

        - Will I be responsible for designing or revising labs? 

        - Am I expected to give demonstrations during lab sessions? 

        - Are there any platforms that I need to know how to use to conduct the lab (GitLab, IntelliJ, Codio, etc.) Is there training for this? 

        - What procedures should I follow in case of emergencies or accidents? 

        Grading and Evaluation 

        - What assessments will I be grading (papers, projects, reports, quizzes, exams, participation)? 

        - Are the grading criteria and rubrics for final grades clearly defined? 

        - Who will handle disputes over grades? 

        - How much time will I have to complete grading tasks? 

        - Are there platforms that I need to learn for grading (Crowdmark, Codio, Brightspace, etc.)? 

        Technical and Logistical Support 

        - What audiovisual or technical equipment will I be responsible for using? 

        - Will I need to book, collect, or return equipment to the CS Help Desk, or will it be managed by someone else? 

        - How much freedom do I have to introduce new ideas, employ different teaching methods, or present perspectives that differ from the instructor? 

        - If one of the technical platforms that we are using doesn’t work properly, who do I contact? 

        Office Hours and Availability 

        - Do I hold any office hours? How many, and at what times? 

        - Who will be supervising my work, and what criteria will be used to evaluate my performance? 

        - If I am unable to attend a class, lab, or tutorial, who should I inform and what procedures should I follow? 

        Additional Responsibilities 

        - Are there any other duties or expectations I should be aware of? 

        Final Thoughts on Questions to Clarify Your Role 

        Taking the time to find answers to these questions will help you feel confident and prepared as you take on your TA responsibilities. Being proactive in gathering information will minimize unexpected challenges and ensure you can approach your new role with assurance and clarity. `
      },


      {
        id: 5,
        title: "In the Lab",
        content: `
        In the Lab: TAs should foster a supportive atmosphere where students feel comfortable asking questions and engaging with the material. The importance of preparation, clear communication, active listening, and providing constructive feedback are crucial to your effectiveness in the lab. TAs are encouraged to circulate the room, monitor student progress, and facilitate group discussions (when appropriate) to enhance collaborative learning.
    
        No Phones! Unless you are using your mobile phone to communicate with your instructor, locate a resource, or use the timer for activities, you should not be scrolling on your mobile phone. Your job in labs, classes and tutorials is to be attentive to students. This means engaging with them and carefully observing them as they work. Eyes on the class, not on your phone!
        
        You may be leading a teaching team of TAs and Demonstrators. We do encourage you to be collegial with one another and develop positive relationships, but the purpose of lab and tutorial times are to focus on the learning. Be mindful that students will be reticent to approach you for help if you and others leading the sessions are deep in conversation! Always be present, welcoming and observant.

        It’s important that students feel a sense of belonging. You need to facilitate this!  

        - Start by sharing your name and the names of any Demonstrators in the room. Share something about yourself with your students. Perhaps your course of study, where you are from, your favourite hobby, etc. Even something about your own journey as a CS student. This helps students get to know you and develops a sense of familiarity. 

        - Remind your students that, as a TA, your role is to support their learning, which means approaching interactions differently than you would as a peer. 

        - You need to make an effort to learn students’ names. A good way of doing this is to have students write their names on labels and wear them on their lapel the first couple of classes or create name tents (folding a piece of paper in half, students write their names on one half, then prop up the paper next to them). Also, encourage students to share their names with other students when they engage with each other for paired or group work.  

        - If a student asks a clarifying question after a demonstration or if it is relevant for the whole class, repeat it for everyone in the class to hear before you respond. 

        - Use students’ names when speaking to them. If you do not know it, ask them and then repeat it before you respond. “Great question, Ammar…..” 

        Click the link for: 4 Strategic Questions and TA-ing in the CS Lab Poster (https://www.canva.com/design/DAGivQP_-Nc/aNCLhTun55NppYm2ysh5Lw/edit?utm_content=DAGivQP_-Nc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)`

      },

    ];
