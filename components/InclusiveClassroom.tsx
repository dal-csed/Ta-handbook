import { useState } from "react";

export default function InclusiveClassrooms() {
  const [activeTab, setActiveTab] = useState("strategies");
  
  return (
    <div className="my-3 space-y-4">
      <h2 className="text-2xl font-bold">Creating Inclusive Classrooms at Dalhousie University</h2>
      
      <div className="my-4">
        <p>
          Creating inclusive classrooms is a foundational part of effective teaching. At Dalhousie University, we believe that every student deserves an educational experience where they feel welcomed, respected, supported, and challenged. Inclusion is not simply about compliance—it's a commitment to building equitable spaces where all learners can thrive.
        </p>
        
        <p className="mt-2">
          As Teaching Assistants (TAs), Graduate Students, Instructors, and academic staff, you play a key role in shaping this environment. The choices you make around communication, course design, engagement strategies, and classroom norms significantly impact how students experience your class.
        </p>
      </div>
      
      <div className="my-4">
        <h3 className="font-bold text-lg">Dalhousie's Commitment to EDIA</h3>
        
        <p className="mt-2">
          Dalhousie is guided by its institutional commitment to Equity, Diversity, Inclusion, and Accessibility (EDIA). These principles are not abstract—they are tied directly to the lived experiences of students, staff, and faculty across our campuses.
        </p>
        
        <p className="mt-2">
          Equity means recognizing that not all students begin from the same place and that we must create conditions that address systemic barriers to participation and success.
        </p>
        
        <p className="mt-2">
          Diversity means celebrating and incorporating a wide range of backgrounds, experiences, and identities in our community.
        </p>
        
        <p className="mt-2">
          Inclusion means actively ensuring that everyone feels like they belong, not just that they are allowed in the room.
        </p>
        
        <p className="mt-2">
          Accessibility ensures that all students, regardless of disability or need, can fully engage with course materials and learning activities.
        </p>
        
        <p className="mt-2">
          You can explore Dalhousie's full EDIA framework and strategic goals here: Dalhousie EDIA Commitments
        </p>
      </div>
      
      <div className="my-4">
        <h3 className="font-bold text-lg">Setting the Tone: Respectful Discourse and Belonging</h3>
        
        <p className="mt-2">
          A truly inclusive classroom begins with respectful discourse. Dalhousie emphasizes the importance of open, civil, and constructive dialogue—even when opinions differ. This is especially relevant in classes where sensitive topics, cultural differences, or difficult discussions are likely to arise.
        </p>
      </div>
      
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("strategies")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "strategies"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Practical Strategies for Inclusive Teaching
            </button>
            <button
              onClick={() => setActiveTab("fantastic")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "fantastic"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Suggestions for Being a Fantastic TA
            </button>
            <button
              onClick={() => setActiveTab("insight")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "insight"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              A Teaching Assistant's Insight
            </button>
          </nav>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          {activeTab === "strategies" && (
            <div>
              <h4 className="font-semibold">Inclusive Language and Communication</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Avoid gendered or ableist language; use terms like "they/them," "everyone," or "folks."</li>
                <li>Ask students (if comfortable) to share their preferred name and pronouns.</li>
                <li>Avoid slang or idioms without context.</li>
                <li>Refer to Dalhousie's Respectful Discourse Guidelines.</li>
              </ul>
              
              <h4 className="font-semibold mt-3">Accessible Course Materials</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use high-contrast visuals, captioned videos, and screen-reader-friendly documents.</li>
                <li>Upload lecture slides or notes in advance.</li>
                <li>Avoid small font sizes or excessive use of colour.</li>
                <li>Create accessible materials using this resource as a guide: Creating Accessible Learning Resources</li>
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
                <li>Mental Health Supports</li>
                <li>Wellness Hub for Staff and Faculty</li>
              </ul>
            </div>
          )}
          
          {activeTab === "fantastic" && (
            <div>
              <h4 className="font-semibold">Tips for Being an Exemplary Teaching Assistant - Dr. Amin Ahmadzadeh</h4>
              
              <p>[Video: https://www.youtube.com/watch?v=bohDEpKeqgY]</p>
              
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
              
              <p>[Video: https://www.youtube.com/watch?v=whfPmPfolRs]</p>
              
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
          Dalhousie's Student Support Team is also available to help if you notice a student who may need more targeted support. Don't hesitate to reach out or refer a student when necessary.
        </p>
      </div>
      
      <div className="mt-4">
        <h3 className="font-bold text-lg">Continuous Growth and Resources</h3>
        
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
          <li>📩 Contact the Student Support Team: https://dalu.sharepoint.com/sites/shw/SitePages/Student-Support-Team.aspx</li>
          <li>📚 Explore Dalhousie EDIA Resources: https://www.dal.ca/about/mission-vision-values/equity-diversity-inclusion-and-accessibility.html</li>
          <li>🧠 Share Mental Health Resources: https://www.dal.ca/campus_life/health-and-wellness/my-health/mental-health.html</li>
        </ul>
      </div>
    </div>
  );
}