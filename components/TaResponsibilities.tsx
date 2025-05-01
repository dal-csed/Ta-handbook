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
        </p>
        
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
                Every instructor will have their own needs and ideas for what they would like you to do and how they would like you to approach tasks. The first meeting with the instructor can be seen as an "Orientation Meeting." This meeting is an opportunity to start your role in a positive and clear direction.
              </p>
            
              <h3 className="text-lg font-medium mt-4">Technical and Logistical Support</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>If one of the technical platforms that we are using doesn't work properly, who do I contact?</li>
              </ul>
     
              <p className="mt-4">
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