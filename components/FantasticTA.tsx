import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function FantasticTA() {
  const [activeTab, setActiveTab] = useState("strategies");
  
  return (
    <div className="my-3 space-y-4">
      <p>A fantastic Teaching Assistant (TA) is more than just a support role, they are a bridge between students and instructors, helping to foster understanding, confidence, and academic success. Great TAs are approachable, reliable, and proactive. They anticipate student needs, explain concepts clearly, and create an inclusive environment where every learner feels seen and supported. Whether they're leading tutorials, marking assignments, or guiding labs, fantastic TAs show up with enthusiasm, empathy, and a genuine commitment to student learning. Their impact often extends beyond the classroom, leaving a lasting impression on both students and the academic team.</p>

      <p>
        To help you grow into this role, the tabs in this section include helpful videos and practical suggestions from seasoned TAs and experienced academics, offering insights, strategies, and encouragement drawn from real classroom experiences.
      </p>
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("strategies")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "strategies"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Practical Strategies for Inclusive Teaching
            </button>
            <button
              onClick={() => setActiveTab("fantastic")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "fantastic"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Tips for Being an Exemplary Teaching Assistant
            </button>
            <button
              onClick={() => setActiveTab("insight")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "insight"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              A Teaching Assistant's Insight
            </button>
          </nav>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {activeTab === "strategies" && (
            <div className="space-y-1.5">
              <h4 className="font-semibold">Inclusive Language and Communication</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Avoid gendered or ableist language; use terms like "they/them," "everyone," or "folks."</li>
                <li>Ask students (if comfortable) to share their preferred name and pronouns.</li>
                <li>Avoid slang or idioms without context.</li>
                <li>Refer to Dalhousie's <a href="https://www.dal.ca/about/mission-vision-values/respectful-discourse.html" target="_blank" className="text-blue-800 underline inline-flex items-center">Respectful Discourse Guidelines.<ExternalLink className="ml-1 h-4 w-4" /></a></li>
              </ul>
              
              <h4 className="font-semibold mt-3">Accessible Course Materials</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use high-contrast visuals, captioned videos, and screen-reader-friendly documents.</li>
                <li>Upload lecture slides or notes in advance.</li>
                <li>Avoid small font sizes or excessive use of colour.</li>
                <li>Create accessible materials using this resource as a guide: <a href="https://caul-cbua.pressbooks.pub/creatingaccessiblelearningresources/" target="_blank" className="text-blue-800 underline inline-flex items-center">Creating Accessible Learning Resources<ExternalLink className="ml-1 h-4 w-4" /></a></li>
              </ul>
              
              <h4 className="font-semibold mt-3">Curriculum Representation and Content</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use diverse sources from underrepresented groups.</li>
                <li>Avoid defaulting to Eurocentric examples.</li>
                <li>Address power, privilege, and systemic inequality.</li>
              </ul>
              
              <h4 className="font-semibold mt-3">Accessible Physical Spaces</h4>
              <p>
                Is the teaching space physically accessible? Ensure that those who are (dis)Abled can access the classroom. Keep a few seats at the front for individuals who may be using wheelchairs or crutches. There could be other students who cannot manage stairs well, ensuring physical accessibility is important.
              </p>
              <p className="mt-2">
                Wear a microphone if the teaching space is large. These can be borrowed from the CS Help Desk on the first floor of the Goldberg Building
              </p>
              
              <h4 className="font-semibold mt-3">Supporting Mental Health and Wellness</h4>
              <p className="mt-2">
                Inclusion also means supporting the emotional and mental well-being of students. University life can be overwhelming—especially for international students, first-generation learners, or students dealing with trauma, discrimination, or financial stress.
              </p>
              
              <p className="mt-2">Here are some tips to integrate wellness:</p>
              
              <ul className="list-disc pl-6 space-y-1">
                <li>Include a wellness statement or resource list in your syllabus.</li>
                <li>Remind students that it's okay to ask for help, and that Dalhousie has confidential and free supports.</li>
                <li>Be flexible with deadlines where reasonable—rigidity can disproportionately harm those with mental health challenges or caregiving responsibilities.</li>
              </ul>
              
              <h4 className="font-semibold mt-3">Resources You Can Share:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><a href="https://www.dal.ca/campus_life/health-and-wellness/my-health/mental-health.html" className="text-blue-800 underline inline-flex items-center" target="_blank">Mental Health Supports<ExternalLink className="ml-1 h-4 w-4" /></a></li>
                <li><a href="https://dalu.sharepoint.com/sites/hr/SitePages/wellness.aspx" className="text-blue-800 underline inline-flex items-center" target="_blank">Wellness Hub for Staff and Faculty<ExternalLink className="ml-1 h-4 w-4" /></a></li>
              </ul>

        
            <div className="mt-4">
              <h3 className="font-bold text-lg">Recognizing and Addressing Power Dynamics</h3>
              
              <p className="mt-2">
                As a TA or Instructor, you hold power in the classroom—often more than you realize. Being mindful of that power means avoiding public call-outs, being transparent about grading, and using inclusive language and tone. Also, be aware of your body language and non-verbal cues when addressing students.
              </p>
            </div>
            
            <div className="mt-4">
              <h3 className="font-bold text-lg">Building Community in Your Classroom</h3>
              
              <p className="mt-2">
                Inclusivity thrives in classrooms where students feel seen. Consider using small group discussions, weekly check-ins, and anonymous suggestion forms to build trust and inclusivity.
              </p>
              
              <p className="mt-2">
                Dalhousie's <a href="https://dalu.sharepoint.com/sites/shw/SitePages/Student-Support-Team.aspx" className="text-blue-800 underline inline-flex items-center" target="_blank">Student Support Team<ExternalLink className="ml-1 h-4 w-4" /></a> is also available to help if you notice a student who may need more targeted support. Don't hesitate to reach out or refer a student when necessary.
              </p>
            </div>
            
            <div className="mt-4">        
              <p className="mt-2">
                Inclusive teaching isn't about perfection—it's about intention and growth. Mistakes will happen. But if your students see that you care, that you're learning, and that you're willing to listen and adapt, they will respond with trust and engagement.
              </p>
              
              <p className="mt-2">Here's how you can keep growing:</p>
              
              <ul className="list-disc pl-6 space-y-1">
                <li>Attend EDIA workshops or teaching seminars at Dal.</li>
                <li>Seek feedback from students and peers.</li>
                <li>Reflect on your assumptions and teaching style after each term.</li>
              </ul>
              
              <p className="mt-3">Want help?</p>
              
              <ul className="list-disc pl-6 space-y-1">
                <li>📩 Contact the Student Support Team: <a href="https://dalu.sharepoint.com/sites/shw/SitePages/Student-Support-Team.aspx" target="_blank" className="text-blue-800 underline inline-flex items-center">https://dalu.sharepoint.com/sites/shw/SitePages/Student-Support-Team.aspx<ExternalLink className="ml-1 h-4 w-4" /></a></li>
                <li>📚 Explore Dalhousie EDIA Resources: <a href="https://www.dal.ca/about/mission-vision-values/equity-diversity-inclusion-and-accessibility.html" target="_blank" className="text-blue-800 underline inline-flex items-center">https://www.dal.ca/about/mission-vision-values/equity-diversity-inclusion-and-accessibility.html<ExternalLink className="ml-1 h-4 w-4" /></a></li>
                <li>🧠 Share Mental Health Resources: <a href="https://www.dal.ca/campus_life/health-and-wellness/my-health/mental-health.html" target="_blank" className="text-blue-800 underline inline-flex items-center">https://www.dal.ca/campus_life/health-and-wellness/my-health/mental-health.html<ExternalLink className="ml-1 h-4 w-4" /></a></li>
              </ul>
            </div>
            </div>
          )}
          
          {activeTab === "fantastic" && (
            <div>
              <h4 className="font-semibold">Tips for Being an Exemplary Teaching Assistant - Dr. Amin Ahmadzadeh</h4>
              
              <iframe 
                src="https://www.youtube.com/embed/bohDEpKeqgY"
                allowFullScreen
                className="h-120 w-174 my-3"
              />              
              <p className="mt-2">
                This summary provides insights from a lecture by Dr. Amid Ahmadzadeh on how to be an effective and exemplary teaching assistant (TA). Below are key takeaways and tips shared throughout the talk:
              </p>
              
              <ol className="list-decimal pl-6 space-y-2 mt-3">
                <li>
                  <strong>Fostering a Positive Learning Environment:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Start by creating an engaging atmosphere to capture the attention of students and help them focus on the lecture.</li>
                    <li>Foster an environment that encourages learning by reducing distractions and noise in the classroom.</li>
                    <li>Bring enthusiasm and energy into the classroom. Teaching is a sacred duty, and as a TA, you should take pride in facilitating the learning process.</li>
                  </ul>
                </li>
                
                <li>
                  <strong>Cultural Sensitivity:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Be aware of cultural differences in the classroom. Students may come from diverse backgrounds, with different values, assumptions, and learning experiences.</li>
                    <li>Non-verbal communication and manners vary across cultures. Some behaviors may be perceived as rude in one culture but are acceptable in another.</li>
                    <li>Do not personalize student behavior that may seem casual or informal.</li>
                  </ul>
                </li>
                
                <li>
                  <strong>Overcoming Language Barriers:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>International students may face challenges with verbal communication. If you're an international TA, make every effort to improve your English and practice speaking clearly and slowly.</li>
                    <li>We are part of a global community, and as such, we will be listening to many different accents – that is a good thing! It means members of our community can communicate in more than one language. We encourage you to focus on delivering the material confidently.</li>
                    <li>Encourage students to raise questions if they don't understand. Repeat questions asked by students to ensure everyone is on the same page.</li>
                  </ul>
                </li>
                
                <li>
                  <strong>Presentation and Preparedness:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Practice your lectures out loud. Watch yourself in the mirror to improve verbal communication and eliminate distracting mannerisms.</li>
                    <li>Exaggerate your speech if necessary, especially if English is not your first language, and try to speak with a clear accent.</li>
                    <li>Repeat key points and emphasize important concepts using gestures and tone variations to engage students effectively.</li>
                  </ul>
                </li>
                
                <li>
                  <strong>Classroom Management:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Set clear rules at the beginning of the class, including expectations regarding behaviour, use of electronics, and participation.</li>
                    <li>You have the authority to stop disruptive behaviour. Address it politely but firmly to ensure the learning process is not affected.</li>
                  </ul>
                </li>
              </ol>
              
              <p className="mt-3">
                <strong>Take-Home Messages:</strong> Be prepared, knowledgeable, and confident in your abilities. Remember that teaching is a rewarding experience, and as a TA, you play a crucial role in shaping students' learning journey.
              </p>
            </div>
          )}
          
          {activeTab === "insight" && (
            <div>
              <h4 className="font-semibold">Our Students Deserve Better - Notes From a Computer Science TA</h4>
              
              <iframe 
                src="https://www.youtube.com/embed/whfPmPfolRs"
                allowFullScreen
                className="h-120 w-174 my-3"
              />  
              
              <p className="mt-2">
                This video explores the preconceived notions held by a computer science teaching assistant (TA) before beginning her role. It highlights key insights she gained through her experience:
              </p>
              
              <p className="mt-3">
                <strong>Collaboration matters:</strong> Contrary to common assumptions, students enjoy communicating and working together to solve problems. It's important to design learning activities that foster collaboration and peer learning.
              </p>
              
              <p className="mt-2">
                <strong>Context is key:</strong> To help students grasp abstract concepts, it is essential to provide contextualized examples and problem exemplars. This supports students in applying theoretical knowledge to real-world scenarios.
              </p>
              
              <p className="mt-2">
                <strong>Feedback must be constructive:</strong> The video emphasizes the harm caused by a lack of meaningful feedback. Appropriate feedback helps students identify their mistakes, understand why they went wrong, and learn how to improve. It's a critical component of the learning process.
              </p>
              
              <p className="mt-2">
                <strong>Students need to learn how to learn:</strong> A widespread issue in many computer science programs is that students lack metacognitive strategies. The TA talks about this issue in the study body that she works with: students' lack of effective study techniques which are required for academic success. In education terms, this is called "Learning to learn", it is the ability to understand, manage, and improve your learning processes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}