import { useState } from "react";

export default function ReceivingFeedback() {
  const [activeTab, setActiveTab] = useState("students");
  
  return (
    <div className="my-3 space-y-4">
      
      <div className="my-4">
        <p>
          Receiving and acting on feedback is an essential part of your growth as a TA. Be open to constructive feedback from supervisors, professors, and colleagues, and use it as an opportunity to reflect and improve your practice.
        </p>
        <p className="mt-2">
          Don't hesitate to seek advice or discuss challenges you may face—building a strong support network is crucial for professional development. Engage in self-reflection through journaling or group discussions to better understand your strengths and areas for growth.
        </p>
        <p className="mt-2">
          By committing to continuous learning and professional behaviour, you will make a positive impact on the learning environment and serve as a role model for students and colleagues alike.
        </p>
      </div>
      
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            
            <button
              onClick={() => setActiveTab("students")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "students"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Receiving Feedback from Students
            </button>
            <button
              onClick={() => setActiveTab("instructor")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "instructor"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
                Receiving Feedback from the Instructor or the Educational Developer at CSEd
            </button>
          </nav>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {activeTab === "students" && (
            <div>
              <p>
                Gathering feedback from students is a valuable way to reflect on and improve your teaching practice. TAs are encouraged to use informal and formal methods throughout the term. This can include quick check-ins during labs or tutorials, anonymous midterm surveys, or brief "exit tickets" where students share what they learned and any lingering questions.
              </p>
              <p className="mt-2">
                Creating a safe, respectful space—such as during office hours or through online forms—can help students feel comfortable offering constructive feedback. Additionally, reviewing these evaluations and discussions with the course instructor can provide further insight into your teaching impact and may help devise any strategies for improvement as a teaching team.
              </p>
              
              <h4 className="font-semibold mt-4">Strategies for Collecting Student Feedback</h4>
              
              <div className="mt-3">
                <strong>Midterm Feedback Surveys</strong>
                <p className="mt-1">Create a short anonymous survey using tools like Microsoft Forms.</p>
                <p className="italic mt-1">Example questions:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>What's one thing that helps you learn in tutorials/labs?</li>
                  <li>What could be improved to support your learning?</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <strong>Exit Tickets</strong>
                <p className="mt-1">At the end of a session, ask students to briefly share:</p>
                <p className="italic mt-1">Example prompt:</p>
                <ul className="list-disc pl-6">
                  <li>What strategies used in the learning space helped you to grasp the concepts/skills? What else could improve your learning in this space?</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <strong>Informal Check-Ins</strong>
                <p className="mt-1">Take a few minutes during a lab or tutorial to ask students how they're finding the pace and content.</p>
                <p className="italic mt-1">Example questions:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Is there anything you'd like more time or explanation on?</li>
                  <li>Is the pace too slow, just right or too fast for you?</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <strong>Office Hours Conversations</strong>
                <p className="mt-1">Encourage students to share feedback in a relaxed setting—either in person or online.</p>
              </div>
              
              <div className="mt-3">
                <strong>Discussion Boards or Online Tools</strong>
                <p className="mt-1">Use Brightspace or other course tools to set up a feedback space or anonymous suggestion box.</p>
              </div>
              
              <div className="mt-3">
                <strong>End-of-Term Evaluations</strong>
                <p className="mt-1">Encourage students to complete course evaluations, and reflect on any feedback that the instructor may have included relating to your role.</p>
              </div>
            </div>
          )}
          
          {activeTab === "instructor" && (
            <div>
              <p>
                Receiving feedback from the course instructor or an Educational Developer is a key part of a TA's professional development. These experienced educators can offer tailored guidance on your teaching methods, clarity of demonstrations, classroom presence and other various aspects of your effectiveness in your role in the learning space.
              </p>
              <p className="mt-2">
                Their feedback helps you identify what's working well and where you might improve, providing concrete strategies you can apply right away.
              </p>
              <p className="mt-2">
                Instructors and Educational Developers observe your teaching with a broader perspective—focusing not only on content delivery but also on such aspects like student engagement and inclusivity. This kind of feedback supports your growth as an educator and helps ensure that your teaching aligns with the course outcomes and provides adequate support to student learning.
              </p>
              <p className="mt-2">
                Constructive feedback helps you build confidence, strengthen your teaching skills, and better support student learning.
              </p>
              
              <h4 className="font-semibold mt-4">How to Request Feedback</h4>
              
              <div className="mt-3">
                <strong>Ask Early in the Term</strong>
                <p className="mt-1">Reach out proactively to express your interest in receiving feedback.</p>
                <p className="italic mt-1 bg-gray-100 p-2 rounded">
                  "I'd appreciate any feedback on my lab/tutorial facilitation. Would you be open to observing a session or reviewing my approach?"
                </p>
              </div>
              
              <div className="mt-3">
                <strong>Be Specific</strong>
                <p className="mt-1">Clarify what you'd like feedback on. Let the observer know what you're working on or hoping to improve.</p>
                <p className="italic mt-1 bg-gray-100 p-2 rounded">
                  "I'm focusing on checking for understanding—any suggestions on how to do that more effectively?"
                </p>
                <p className="mt-1">Other areas could be:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Explaining concepts clearly</li>
                  <li>Encouraging participation</li>
                  <li>Managing group activities</li>
                  <li>Providing instructions and feedback</li>
                </ul>
              </div>
              
              <h4 className="font-semibold mt-4">Steps to the Feedback Session</h4>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>
                  <strong>Choose a Good Session</strong>
                  <p className="mt-1">Select a lab/tutorial where you're well-prepared and that reflects your usual teaching approach. The observer will take notes and offer them to you with suggestions for improvement.</p>
                </li>
                <li>
                  <strong>Reflect After the Session</strong>
                  <p className="mt-1">Consider what went well, what surprised you, and what you might change next time.</p>
                </li>
                <li>
                  <strong>Follow Up</strong>
                  <p className="mt-1">If possible, schedule a follow-up to track your progress and ask any lingering questions for improvement.</p>
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}