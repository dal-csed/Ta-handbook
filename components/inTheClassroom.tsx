import { useState } from "react";

export default function ClassroomGuidance() {
  const [activeTab, setActiveTab] = useState("firstContact");
  
  return (
    <div className="my-3 space-y-4">      
      <div className="my-4">
        <p>
          In the Classroom: When leading a class or assisting a lecturer, TAs should maintain professionalism by being punctual, well-prepared, and enthusiastic. This section includes tips on managing classroom dynamics, responding to questions effectively, using technology to enhance teaching, and collaborating smoothly with faculty to support learning.
        </p>
        
        <p className="mt-2">
          As a Teaching Assistant, your presence, attitude, and approach to classroom dynamics significantly impact student engagement and learning. Establishing a foundation of respect from the first day is essential. Set clear rules and expectations early on, and initiate a discussion about respectful communication. Modeling this behavior consistently will encourage students to follow your lead and contribute to a positive learning environment.
        </p>
        
        <p className="mt-2">
          Being approachable is also key. Aim to strike a balance between being kind and firm. When students feel comfortable coming to you with questions or concerns, it creates a more inclusive and supportive atmosphere. Approachability fosters trust and encourages participation.
        </p>
        
        <p className="mt-2">
          Encouraging active learning helps students move beyond passive reception of information. Simple strategies like "think-pair-share" can promote engagement and deeper understanding of the material.
        </p>
        
        <p className="mt-2">
          Effective communication is another essential skill. Practice active listening and make a conscious effort to use students' names in conversation. This not only personalizes interactions but also fosters a sense of community.
        </p>
        
        <p className="mt-2">
          In the physical space, your movement around the classroom matters. Walking around to interact with students signals attentiveness and allows you to identify who might need help. Lastly, your energy as an educator sets the tone. Even if the topic isn't your favourite, showing enthusiasm will inspire students to stay engaged. Your attitude can transform the learning experience.
        </p>
      </div>
      
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            
            <button
              onClick={() => setActiveTab("firstContact")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "firstContact"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              First Contact with Students
            </button>
            <button
              onClick={() => setActiveTab("activeLearning")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "activeLearning"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Active Learning
            </button>
            <button
              onClick={() => setActiveTab("explicitInstruction")}
              className={`mr-4 py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "explicitInstruction"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Explicit Direct Instruction
            </button>
            <button
              onClick={() => setActiveTab("discussions")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "discussions"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Discussions
            </button>
          </nav>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          
          {activeTab === "firstContact" && (
            <div>              
              <h3 className="text-lg font-medium mt-4">Establishing a Supportive Learning Environment</h3>
              
              <h4 className="font-medium mt-3">Importance of First Impressions</h4>
              <p>
                The first interaction shapes students' perceptions of the instructor, the course, and their own role as learners. A positive, engaging, and approachable tone fosters confidence and motivation.
              </p>
              
              <h4 className="font-medium mt-3">Strategies for Creating a Welcoming Atmosphere</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Introduce Yourself:</strong> Share relevant background information about yourself, including teaching philosophy, research interests, and personal anecdotes that connect with students.</li>
                <li><strong>Encourage Student Introductions:</strong> Use icebreaker activities to help students learn about each other.</li>
                <li><strong>Use Inclusive Language:</strong> Ensure that all students feel represented and valued by acknowledging diverse backgrounds and perspectives.</li>
                <li><strong>Show Enthusiasm for the Subject:</strong> Express passion for the course content to inspire students and encourage engagement.</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-4">Setting Clear Expectations and Guidelines</h3>
              
              <h4 className="font-medium mt-3">Communicating Course Policies</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Provide a Course Overview:</strong> Highlight key components, including learning outcomes, grading policies, and major deadlines.</li>
                <li><strong>Clarify Classroom Etiquette:</strong> Discuss expectations regarding participation, respectful communication, and academic integrity.</li>
                <li><strong>Set Clear Office Hours:</strong> Outline when and how students can reach out for help.</li>
              </ul>
              
              <h4 className="font-medium mt-3">Creating an Accessible and Supportive Learning Space</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Encourage Questions:</strong> Reinforce that asking questions is a crucial part of learning.</li>
                <li><strong>Introduce Support Resources:</strong> Provide information on tutoring centers, writing labs, student accessibility services, and mental health support.</li>
                <li><strong>Use a Course FAQ:</strong> Address common student concerns upfront.</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-4">Building Community and Engagement</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Active Learning Strategies:</strong> Incorporate interactive elements such as polling and collaborative exercises.</li>
                <li><strong>Name Recognition:</strong> Use name tents in labs or small classes to help instructors and peers learn each other's names quickly.</li>
                <li><strong>Group Work:</strong> Assign students to small discussion groups early to build connections.</li>
                <li><strong>Emphasize Learning over Grades:</strong> Encourage students to focus on skill development rather than just performance metrics.</li>
                <li><strong>Normalize Mistakes:</strong> Share stories where learning from failure led to improvement.</li>
              </ul>
            </div>
          )}
          
          {activeTab === "activeLearning" && (
            <div>              
              <p>
                Active learning is a teaching approach that encourages student engagement and participation in the learning process. It involves instructional strategies that promote doing and thinking rather than just passively receiving information.
              </p>
              
              <h3 className="text-lg font-medium mt-4">Why Incorporate Active Learning?</h3>
              <p>
                Research suggests that active learning improves student learning outcomes compared to passive lecturing. Benefits include:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Better retention of course material</li>
                <li>Improved thinking and writing abilities</li>
                <li>Enhanced attitudes towards learning</li>
                <li>Increased motivation for further study</li>
                <li>Greater awareness of one's learning process</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-4">Effective Active Learning Strategies</h3>
              
              <div className="mt-3">
                <h4 className="font-medium">Think-Pair-Share</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Students first think about a question individually.</li>
                  <li>They then pair up with a peer to discuss their responses.</li>
                  <li>Finally, pairs share their responses with the class.</li>
                  <li>This method encourages articulation of ideas and critical analysis of peer responses.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Group Discussions</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Students are divided into small groups to discuss a specific topic or prepared questions.</li>
                  <li>Encourages exchange of ideas, experiences, and critical thinking.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Board Rotation</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>A topic is divided into sub-topics, each posted at different stations in the room.</li>
                  <li>Students rotate through the stations, adding comments and insights.</li>
                  <li>The class later discusses the collective input.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Surveys, Polls, Quizzes, and Questionnaires</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Can be used for brainstorming, practice, or assessing student understanding.</li>
                  <li>Online tools like Zoom polls, Mentimeter, and Kahoot! enhance interaction.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Jigsaw (Group Experts)</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Students are divided into expert groups, each focusing on a specific topic.</li>
                  <li>Experts then mix into new groups, where they teach their topic to peers.</li>
                  <li>Encourages peer teaching and deeper understanding.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Role-Playing and Simulations</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Students act out real-world situations or scenarios to understand concepts practically.</li>
                  <li>Games and interactive activities help students engage with material in a meaningful way.</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === "explicitInstruction" && (
            <div>              
              <p>
                Explicit Direct Instruction (EDI) in programming education is a modern teaching framework rooted in traditional Direct Instruction (DI), but with a more flexible and student-centered approach. It's particularly effective in fields like programming, where learners must grasp complex concepts step-by-step.
              </p>
              
              <h3 className="text-lg font-medium mt-4">Eight Core Principles of EDI</h3>
              
              <div className="mt-3">
                <h4 className="font-medium">1. Clear Learning Objectives</h4>
                <p>Every lesson begins with a simple, clearly stated goal—written in everyday language. This helps students understand what they're learning and why, focusing their attention and giving them direction.</p>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">2. Activating Prior Knowledge</h4>
                <p>Before introducing new material, teachers review previously learned content. This strengthens memory, highlights connections, and makes new ideas easier to grasp.</p>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">3. Concept Development</h4>
                <p>New topics are introduced gradually with detailed explanations, diagrams, and real-life examples. Abstract concepts are made more accessible before students are expected to apply them.</p>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">4. Skill Development</h4>
                <p>EDI goes beyond theory. It teaches practical programming skills like using development tools, writing syntax correctly, debugging, and developing logical thinking.</p>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">5. Guided Practice</h4>
                <p>Teachers work through problems with students—often via live coding sessions—while encouraging questions, discussion, and participation. This shared problem-solving builds confidence and reinforced learning.</p>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">6. Independent Practice</h4>
                <p>Students then tackle problems on their own, applying what they've learned. This stage helps solidify understanding and reveals areas that need more attention.</p>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">7. Lesson Closure</h4>
                <p>Lessons end with a brief review, quiz, or discussion to check for understanding. This ensures both teacher and students are clear on what was learned and what might need reinforcement.</p>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">8. Emphasizing Lesson Importance</h4>
                <p>Teachers explain the real-world value of each topic. In programming, this could mean showing how a concept applies to future courses, job skills, or solving everyday problems.</p>
              </div>
              
              <h3 className="text-lg font-medium mt-4">Teaching Explicit Strategies</h3>
              
              <div className="mt-3">
                <h4 className="font-medium">The Debug Strategy</h4>
                <p>This four-step method helps students fix errors logically:</p>
                <ol className="list-decimal ml-6 mt-1">
                  <li>Identify the problem</li>
                  <li>Brainstorm possible causes</li>
                  <li>Test the causes</li>
                  <li>Ask for help if needed</li>
                </ol>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">The Reuse Strategy</h4>
                <p>This teaches students how to adapt existing code for new problems. Steps include:</p>
                <ol className="list-decimal ml-6 mt-1">
                  <li>Define the goal</li>
                  <li>Find example code</li>
                  <li>Modify it to fit the new context</li>
                </ol>
              </div>
            </div>
          )}
          
          {activeTab === "discussions" && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Planning and Facilitating Discussions</h2>
              
              <p>
                To ensure a productive and engaging discussion, consider the following strategies:
              </p>
              
              <div className="mt-3">
                <h4 className="font-medium">Build Community</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Encourage students to learn each other's names using name cards (in-person) or by setting display names (online).</li>
                  <li>Engage students by asking about their interests, reasons for taking the course, and relevant experiences.</li>
                  <li>Foster a welcoming and creative learning environment.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Establish Classroom Discussion Norms</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Collaboratively set discussion guidelines by asking students: \"What makes an effective discussion?"</li>
                  <li>Ensure students understand how to maintain respectful and constructive dialogue.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Promote Active Listening</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Encourage students to focus on the speaker, avoid interruptions, and paraphrase before responding.</li>
                  <li>Taking notes when appropriate can improve comprehension and retention.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Ensure Equal Participation</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Design discussions in a way that allows every student to contribute.</li>
                  <li>Consider seating arrangements (e.g., semi-circle or round tables) to facilitate open conversation.</li>
                  <li>In lecture halls, ensure students are in small groups (no more than 4 people).</li>
                  <li>Circulate in the room to listen, answer questions, and redirect if necessary.</li>
                  <li>Use breakout rooms for small group discussions in online settings.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Prepare and Facilitate Effectively</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Review key concepts and learning objectives before starting the discussion.</li>
                  <li>Record main ideas and summarize intermittently to help students make connections.</li>
                  <li>Specify the discussion format and clarify learning outcomes.</li>
                  <li>Allow silence for processing questions before responding.</li>
                  <li>Encourage student-to-student interaction rather than responding to every comment.</li>
                  <li>Use open-ended questions like "What do you think of...?" to stimulate discussion.</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h4 className="font-medium">Conclude with a Wrap-Up</h4>
                <ul className="list-disc ml-6 mt-1">
                  <li>Summarize key takeaways at the end of the discussion.</li>
                  <li>Consider having students create an exam question related to the discussion topics and review them in the next class.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}