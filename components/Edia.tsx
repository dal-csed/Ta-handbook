import { useState } from "react";

export default function EDIA() {
  const [activeTab, setActiveTab] = useState("explicit-direct-instruction");
  
  return (
    <div className="my-3 space-y-4">
      <div className="mb-6">
        
        <p className="mb-4">
          Creating an equitable, inclusive, and accessible learning environment is essential to student success and well-being. As a TA, your awareness and responsiveness to issues of equity, diversity, and inclusion help foster a classroom culture where all students feel respected, valued, and empowered to participate fully, regardless of their background, identity, or ability.
        </p>
        
        <p>
          Recognizing signs of distress and knowing how to respond with empathy and professionalism is equally important. Students may face a range of academic, personal, or mental health challenges, and your support can make a meaningful difference. In this section, you’ll find resources on inclusive teaching practices, accessibility considerations, and guidance on how to identify and refer students who may be struggling. By approaching your role with care and awareness, you contribute to a safer, more compassionate, and more effective learning environment for everyone.
        </p>
      </div>
      
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            
            <button
              onClick={() => setActiveTab("explicit-direct-instruction")}
              className={`py-2 px-3 border-b-2 font-medium text-sm ${
                activeTab === "explicit-direct-instruction"
                  ? "border-blue-800 font-semibold text-blue-800"
                  : "border-transparent bg-blue-400 text-white rounded-t-md hover:text-black hover:border-gray-300"
              }`}
            >
              Explicit Direct Instruction for the Lab or Lectures
            </button>
          </nav>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          
          
          {activeTab === "explicit-direct-instruction" && (
            <div>
              <h3 className="font-bold mb-2">Overview of Direct Instruction (DI)</h3>
              <p className="mb-4">
                Direct Instruction (DI) is a teacher-led approach where the teacher controls the classroom activities and directs information to students in a structured and sequenced manner. There are various forms of DI, with some being more rigid than others. However, the Modern DI forms are much more effective, such as Explicit Direct Instruction (EDI), which is more flexible and involves eight didactic principles that enhance each other.
              </p>
              
              <h4 className="font-semibold mt-4">Eight Didactic Principles of EDI</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Learning Objectives:</strong> Clearly defined goals that students can understand. "By the end of this session, you will be able to…."
                </li>
                <li>
                  <strong>Activating Prior Knowledge:</strong> Connecting new information to what students already know. "What do you already know about "x"? Where have you seen it being used before?"
                </li>
                <li>
                  <strong>Concept Development:</strong> Detailed explanation of new concepts. How does this concept fit into the big picture of what they are learning? For example, if functions and loops are being taught, give a visual example of what it looks like and what other contexts (areas or systems) where it can be applied.
                </li>
                <li>
                  <strong>Skill Development:</strong> Demonstrating and practicing new skills. Give a demonstration of the new skill. Ensure that everyone can see what you are doing. You can also record this so that students can refer back to it if they need more support during the lab.
                </li>
                <li>
                  <strong>Guided Practice:</strong> Teacher-led practice sessions. After the demonstration, take a problem and ask students to suggest the next step. (Students can be in pairs to discuss and suggest the next step to you). Question their thinking along the way. Why do you think this is the step you should take? Can anyone suggest another way?
                </li>
                <li>
                  <strong>Independent Practice:</strong> Students practice on their own. Circulate around the room as students are working.<strong> Pay attention </strong> to what is on their screens, if you notice them making errors, ask them to pause and talk through their choices. See if they can identify where they are going wrong. If they can't, walk them back to where they started making mistakes in their code or work, then provide further guidance so they can achieve success. A good practice is to have a digital resource bank on Brightspace, so they can watch a tutorial on how to do "x" and then circle back to see if they are on the right track after a few moments.
                </li>
                <li>
                  <strong>Lesson Closure:</strong> Assessing student understanding through questions or small tasks. This can be done by polls, small group discussion.
                </li>
                <li>
                  <strong>Lesson Importance:</strong> Explaining the relevance of the lesson to students.
                </li>
              </ul>
              
              <h4 className="font-semibold mt-4">Benefits of EDI</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Effectiveness:</strong> Research shows that EDI can be more effective than exploratory methods, especially for weaker students.
                </li>
                <li>
                  <strong>Equalizing Effect:</strong> EDI ensures all students receive intentional instruction and opportunities to practice, which can help bridge gaps in prior knowledge.
                </li>
              </ul>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm italic">
                  <strong>Reference</strong><br />
                  Hermans, F., & Smit, M. (n.d.). Explicit Direct Instruction in Programming Education. <a href="https://www.ppig.org/files/2018-PPIG-29th-hermans.pdf " className="text-blue-800" target="_blank">
                  https://www.ppig.org/files/2018-PPIG-29th-hermans.pdf </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}