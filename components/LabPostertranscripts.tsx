import { useState } from "react";

const LabTranscripts = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTranscript = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="">
      <button
        onClick={toggleTranscript}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 ml-2 px-4 rounded shadow-md transition-colors duration-200"
      >
        {isVisible ? "Hide Transcript" : "Show Transcript"}
      </button>

      {isVisible && (
        <div className="mt-4 bg-white border border-gray-300 rounded-lg ml-2 shadow-lg p-6 max-w-[530px] max-h-[1350px] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            4 Strategic Questions for Teaching Assistants in a Lab Setting
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                1. What is My Role?
              </h3>
              <p className="text-gray-600 mb-2">
                Clarifying your role is essential for effective teaching and
                student support.
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Ask the course instructor and fellow TAs:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li>Who is responsible for introducing the lab session?</li>
                <li>
                  Who will lead the lab activities, and how should this be done?
                </li>
                <li>
                  When should I provide direct answers to students, and when
                  should I guide them to think critically and find solutions on
                  their own?
                </li>
              </ul>
              <p className="text-gray-600 mb-2">
                Also, understand the grading process:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>
                  Who will be marking the assignments, and how will this be
                  done?
                </li>
                <li>
                  Review grading rubrics and assessment policies ahead of time
                  to ensure consistent, fair evaluation.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                2. How Can We Enhance Communication?
              </h3>
              <p className="text-gray-600 mb-2">
                Effective communication is key for both the teaching team and
                students.
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Clarify expectations and policies related to:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li>Late or missed submissions</li>
                <li>Academic integrity and collaboration</li>
              </ul>
              <p className="text-gray-600">
                Ensure that communication flows within the teaching team first,
                and then with students. Be prepared for unexpected interruptions
                or cancellations during lab sessions, and have backup plans in
                place.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                3. How Do I Prepare Effectively?
              </h3>
              <p className="text-gray-600 mb-2">
                Proper preparation ensures smooth lab sessions.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>
                  Familiarize yourself with the lab's learning goals and
                  understand why they matter.
                </li>
                <li>
                  Review the background material and theory behind the lab
                  exercises.
                </li>
                <li>
                  Practice running through the lab procedures in advance,
                  identifying potential areas where students might struggle.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                4. How Do We Maintain a Safe Environment?
              </h3>
              <p className="text-gray-600 mb-2">
                Safety is paramount in any lab setting, and it should be a focus
                throughout the session.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li>
                  Be aware of all lab safety guidelines (e.g., tucking in
                  chairs, managing trailing cables, keeping bags under tables)
                  and emergency procedures.
                </li>
                <li>
                  Model good safety practices yourself as a positive example.
                </li>
                <li>
                  Regularly observe the lab space to identify and address
                  potential safety risks.
                </li>
                <li>
                  Reinforce safety rules at regular intervals during the
                  session.
                </li>
              </ul>
              <p className="text-gray-600">
                Consider how safety protocols apply in virtual or take-home lab
                formats and ensure those are clearly communicated and followed.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabTranscripts;
