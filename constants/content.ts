import { ReactNode } from "react";

export const introduction = (`
    Welcome to the Faculty of Computer Science Teaching Assistant (TA) Handbook! As a Graduate TA, you play a vital role in supporting student learning, fostering engagement, and maintaining the rigour and academic integrity of our courses. Whether you’re leading labs or tutorials, grading assignments, assisting the instructor in various aspects of teaching, or providing one-on-one support, your contributions help shape the learning experience for our students. This is a crucial and important role! 
    
    This handbook is designed to equip you with the knowledge, strategies, and best practices necessary to excel in your role. It covers essential topics such as effective teaching techniques (helpful in any lab or tutorial setting), grading and assessment guidelines, communication strategies, and managing common challenges in computer science education. 
    
    As a TA, you will encounter students with diverse backgrounds, learning preferences, and levels of experience in programming theoretical concepts. Your ability to explain complex ideas, facilitate discussions, and provide constructive feedback will be key to their success. This handbook will serve as a resource to help you navigate these responsibilities with confidence! 
    
    We encourage you to approach your role with enthusiasm, patience and a commitment to inclusive and supportive teaching. Your work not only impacts individual students and builds upon the work of instructors in the classroom but also contributes to a strong and collaborative learning community at the Faculty of Computer Science. 
    
    Developing an effective Teaching Assistant (TA) toolkit is a vital step toward supporting TAs in their multifaceted roles within academia. This toolkit aspires to be a comprehensive resource similar to those provided by Queen’s University’s Teaching Assistant Toolkit1 and the University of Waterloo’s TA Handbook2. However, our handbook draws on and integrates unique materials for the Faculty of Computer Science at Dalhousie. By building on established resources and our own bespoke solutions, this toolkit aims to equip TAs with tailored strategies, valuable insights, and best practices to enhance your teaching effectiveness and overall efficiency.
    `
)

interface CollapsibleSection {
    id: number;
    title: string;
    content: ReactNode;
}

export const collapsable : CollapsibleSection[] = [
    {
        id: 1,
        title: "How To Become a Grad TA with the Faculty of Computer Science",
        content: `Opportunities are there for you to become a TA as a graduate student. At the FCS (Faculty of Computer Science), we have a vested interest in your success in all facets, in your academics, research and professional aspirations to become future academics. Part of that role will most likely entail teaching! A great way to learn the skills necessary to become a successful educator is to involve yourself with aspects of teaching.  

 

        At the Faculty, there are different roles: TA (Teaching Assistant), Demonstrators and Makers. A TA position is the best way to secure a longer-term role with one or more classes for a sustained duration, hopefully for the duration of your degree! This is good for the faculty, as we can retain trained TAs who can develop a strong knowledge of a particular course or courses and ensure that the course can be delivered consistently from term to term. This is also very positive for grad students as they can secure funding and develop skills that they will need to be successful instructors in the future. 

 

        In the first instance, your supervisor at the Faculty of Computer Science, Dr. Micheal McAllister or the Lab Coordinator (Megan Baker) will be able to inform you of what role could be possible for you at the Faculty. They all have a wealth of information about the various roles and can advise you on what would be the most appropriate placement for you if there are any suitable opportunities. You are best placed to be a TA in a course that matches your skills and competencies; it is very important to have a thorough knowledge of the material covered in the course. If there are gaps in your knowledge, you must speak with the course instructor and learn the required material. 

 

        Secondly, there is a Brightspace page set up for TAs, Markers and Demonstrators at the Faculty: FCS TAs and Markers. All students at the Faculty have been enrolled in the site. It requires that you log in with your Dal credentials. If you have any issues accessing it, contact Megan Baker: FCSTA@dal.ca Once logged in, you will able to learn more about various roles, contract lengths, access Job Seeker Registry and much more! 

        

        Information about the roles of TAs, Markers and Demonstrators can also be found on the Faculty of Computer Science TA/Marker page3. It outlines the types of support that the various roles have and the hourly remuneration. The page also contains a link to the CUPE 3912 (Canadian Union of Public Employees) webpage. 
        
        Thank you for your dedication to teaching and learning at the FCS. Let’s get started! `
    }
]