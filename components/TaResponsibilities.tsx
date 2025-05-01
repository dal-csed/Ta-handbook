import { useState } from "react";

export default function TAResponsibilities() {
  const [activeTab, setActiveTab] = useState("checklist");
  

  // TODO: Head TA role tab
  // Tab name: Head TA role 

  return (
    <div className="my-3 space-y-4">
      <h1 className="text-2xl font-bold">Your Responsibilities as a TA</h1>
      
      <div className="my-4">
        <p>
          TA roles differ in tasks depending on the course and the professor you are working with. You must be clear on your responsibilities when you accept a role as TA.
          Understanding the role of a Teaching Assistant (TA) is the foundation of effective teaching and support for students. The responsibilities vary across institutions but generally include assisting faculty with course delivery, grading assignments, and supporting students' learning experiences. 
        </p>

        <div className="mt-2 space-y-2">
          <h3 className="font-semibold">
            Basic Responsibilities
          </h3>

          <ul className="list-disc list-inside">
            <li>
              <strong>
              Facilitation of Learning
              </strong>
              : Lead tutorials, labs, or discussion sessions to clarify course content. 
            </li>

            <li>
              <strong>
              Grading and Feedback
              </strong>
              : Mark assignments, quizzes, or exams, and provide constructive feedback to support student learning. 
            </li>

            <li>
              <strong>
              Office Hours and Student Support
              </strong>
              : Host regular office hours to address student concerns, clarify concepts, and provide guidance. 
            </li>

            <li>
              <strong>
              Course Preparation
              </strong>
              : Collaborate with instructors to prepare teaching materials, assignments, and assessments. 
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            
            <button
              onClick={() => setActiveTab("checklist")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "checklist"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Teaching Assistant Checklist: Essential Questions to Clarify Your Role
            </button>
            <button
              onClick={() => setActiveTab("policies")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "policies"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
                Understanding Policies and Procedures
            </button>
          </nav>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          
          {activeTab === "checklist" && (
            <div>              
              <p>
                Every instructor will have their own needs and ideas for what they would like you to do and how they would like you to approach tasks. The first meeting with the instructor can be seen as an "Orientation Meeting." This meeting is an opportunity to start your role in a positive and clear direction. To ensure that you are successful in your role, a helpful checklist of questions in this section will help guide your discussion with the instructor of the class as you embark on your TA journey. You will be able to refer to it when you need clarity. Also, you can share specific information you have recorded with your teaching team.  
              </p>

              <p className="mt-3">
              Whether you are a <strong>new Teaching Assistant (TA)</strong> or taking on a course that is new to you, it’s essential to clearly understand your responsibilities. The following questions will help you define your role and expectations, ensuring you are prepared for your duties. Taken from <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:18384b70-2761-431f-9693-f2bbeb795e6a" target="_blank" className="text-blue-600">Teaching Assistant Checklist: Questions to Ask</a>. Centre for Teaching Excellence, University of Waterloo (2024). 
              </p>
            
              <h3 className="text-lg font-semibold mt-4">Understanding the Course & Syllabus </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>The first step to understanding the course—its content, learning outcomes, structure (lectures, labs, and tutorials), and important policies—is to carefully read the course syllabus. The first question you must ask the instructor is: <i> May I please have a copy of the course syllabus?</i></li>
                <li>
                  <i>
                  Also, you need to obtain the teaching materials to familiarize yourself with the content and structure of the learning materials. 
                  </i>
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
              Understanding Your Role 
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                What will my primary responsibilities be? Will I be lecturing, leading discussions, running tutorials, conducting labs, grading, or working in an online environment through the course management system?
                </li>
                <li>
                How frequently will I be performing each of these tasks? 
                </li>
                <li>
                How does my supervisor define my role? (For example, what specifically is involved in running a tutorial?) 
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
              Providing Assistance 
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                If I am offering individual support, how much help is appropriate without crossing boundaries? 
                </li>
                <li>
                What types of assistance are not permitted or advisable? 
                </li>
                <li>
                Should I consider organizing group help or review sessions? 
                </li>
              </ul>
     
              <p className="mt-4">
                Taking the time to find answers to these questions will help you feel confident and prepared as you take on your TA responsibilities. Being proactive in gathering information will minimize unexpected challenges and ensure you can approach your new role with assurance and clarity.
              </p>

              <h3 className="font-semibold my-2 text-lg">
              Facilitating Discussions 
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                If I am leading discussions, what is the best way to structure the sessions? 
                </li>
                <li>
                Should I focus on sticking closely to the course text or lectures? 
                </li>
                <li>
                Should I encourage broad student participation, or take on a more directive role? 
                </li>
                <li>
                Is it appropriate to address only student problems during discussions? 
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
              Conducting Labs 
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                What specific responsibilities do I have in the lab? 
                </li>
                <li>
                Am I in charge of managing supplies and materials?  
                </li>
                <li>
                Will I be responsible for designing or revising labs?  
                </li>
                <li>
                Am I expected to give demonstrations during lab sessions?  
                </li>
                <li>
                Are there any platforms that I need to know how to use to conduct the lab (GitLab, IntelliJ, Codio, etc.) Is there training for this? 
                </li>
                <li>
                What procedures should I follow in case of emergencies or accidents? 
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
              Grading and Evaluation 
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                What assessments will I be grading (papers, projects, reports, quizzes, exams, participation)? 
                </li>
                <li>
                Are the grading criteria and rubrics for final grades clearly defined?
                </li>
                <li>
                Who will handle disputes over grades? 
                </li>
                <li>
                How much time will I have to complete grading tasks?   
                </li>
                <li>
                Are there platforms that I need to learn for grading (Crowdmark, Codio, Brightspace, etc.)?  
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
                Technical and Logistical Support 
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                Will I need to post content, announcements etc., on the LMS (Brightspace)?  
                </li>
                <li>
                What audiovisual or technical equipment will I be responsible for using?
                </li>
                <li>
                Will I need to book, collect, or return equipment to the CS Help Desk, or will it be managed by someone else? 
                </li>
                <li>
                How much freedom do I have to introduce new ideas, employ different teaching methods, or present perspectives that differ from the instructor?
                </li>
                <li>
                If one of the technical platforms that we are using doesn’t work properly, who do I contact?  
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
                Office Hours and Availability 
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                Do I hold any office hours? How many, and at what times? 
                </li>
                <li>
                Who will be supervising my work, and what criteria will be used to evaluate my performance? 
                </li>
                <li>
                If I am unable to attend a class, lab, or tutorial, who should I inform and what procedures should I follow? 
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
              Additional Responsibilities 
              </h3>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                Are there any other duties or expectations I should be aware of? 
                </li>
              </ul>

              <h3 className="font-semibold my-2 text-lg">
              Final Thoughts on Questions to Clarify Your Role 
              </h3>

              <p>
              Taking the time to find answers to these questions will help you feel confident and prepared as you take on your TA responsibilities. Being proactive in gathering information will minimize unexpected challenges and ensure you can approach your new role with assurance and clarity.
              </p>

            </div>
          )}

            
          
          {activeTab === "policies" && (
            <div>
              
              <p>
                As a Teaching Assistant (TA) at Dalhousie University, it's essential to familiarize yourself with the university's policies and procedures to ensure compliance and uphold the institution's standards. This section provides an overview of key policies relevant to your role.
              </p>
                
              <p className="mt-4">
                By familiarizing yourself with Dalhousie University's policies and procedures, you contribute to a respectful, safe, and effective learning environment for all members of the university community.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}