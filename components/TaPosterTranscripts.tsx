import { useState } from "react";

const TaLabTranscripts = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTranscript = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div>
      <button
        onClick={toggleTranscript}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium ml-2 py-2 px-4 rounded shadow-md transition-colors duration-200"
      >
        {isVisible ? "Hide Transcript" : "Show Transcript"}
      </button>

      {isVisible && (
        <div className="mt-4 bg-white border border-gray-300 rounded-lg ml-2 shadow-lg px-4 py-2 max-w-[530px] max-h-[1350px] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            TA-ing in the Computer Science Lab
          </h2>
          <p className="text-sm text-gray-600 mb-4 italic">
            Beginning. During. Ending. After. The lab
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-700">
                Beginning the Lab:
              </h3>
              <p className="text-gray-600 mb-3">
                Begin with a brief pre-lab introduction to set the tone:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  Welcome students as they arrive and ensure they're following
                  any required protocols (e.g., logging into systems, setting up
                  their environments).
                </li>
                <li>
                  Clarify the <strong>learning outcomes</strong> of the lab —
                  what concepts or skills will students be able to apply by the
                  end (e.g., debugging techniques, etc)?
                </li>
                <li>
                  Review key concepts from <strong>previous labs</strong>,
                  especially those related to today's work.
                </li>
                <li>
                  Walk through the <strong>structure of the lab</strong>:
                  outline the tasks or challenges, and explain any tools,
                  environments, or datasets they'll be using.
                </li>
                <li>
                  Highlight any{" "}
                  <strong>potential issues or common pitfalls</strong>, and how
                  to avoid them.
                </li>
                <li>Ask for questions before getting started.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">
                During the Lab:
              </h3>
              <p className="text-gray-600 mb-3">
                Be active and approachable - put your mobile phone away during
                the lab:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  Circulate and <strong>check in</strong> with students or
                  groups as they work.
                </li>
                <li>
                  <strong>Facilitate problem-solving</strong> and debugging
                  through guided inquiry:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Ask questions that help students think through logic
                      errors or syntax problems.
                    </li>
                    <li>
                      If their code isn't working, encourage them to articulate
                      what they expected vs. what happened.
                    </li>
                    <li>
                      Help them learn how to read error messages or use
                      debugging tools effectively.
                    </li>
                  </ul>
                </li>
                <li>
                  Monitor progress:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Ask focused questions to see if they understand the{" "}
                      <em>why</em> behind their code.
                    </li>
                    <li>
                      Offer both{" "}
                      <strong>
                        positive reinforcement and constructive feedback.
                      </strong>
                    </li>
                  </ul>
                </li>
                <li>
                  Encourage students to <strong>collaborate</strong> and ask
                  questions during <strong>formative</strong> exercises.
                </li>
                <li>
                  If a common issue arises,{" "}
                  <strong>pause to address the class</strong> or a small group
                  to clarify.
                </li>
                <li>
                  If you're unsure of an answer, it's fine to say, "I'll look
                  into that and get back to you," and follow up later.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-700">
                Ending the Lab:
              </h3>
              <p className="text-gray-600 mb-3">
                Wrap up the session with a short post-lab discussion:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>
                  <strong>Summarize the key takeaways from the lab</strong> —
                  what were the main concepts practiced or discovered through
                  coding, debugging, or problem-solving?
                </li>
                <li>
                  Reflect on <strong>what students accomplished</strong>,
                  including any solutions they shared.
                </li>
                <li>
                  Reinforce major learning points (e.g., effective use of loops,
                  version control, etc).
                </li>
              </ul>

              <p className="text-gray-600 mb-3">
                Leave time for <strong>clean-up and shutdown</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>
                  Ensure students log out of all systems, and save or back up
                  their work properly.
                </li>
                <li>
                  Check that students have{" "}
                  <strong>put away any hardware</strong> or reset workstations.
                </li>
              </ul>

              <p className="text-gray-600 mb-3">
                <strong>Ask:</strong> Does the{" "}
                <strong>Faculty or instructor</strong> have a standard
                end-of-lab checklist?
              </p>

              <p className="text-gray-600 mb-3">
                Follow routine lab closing procedures:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Collect any submitted work or reports.</li>
                <li>
                  Ensure equipment is powered down, devices are stored securely,
                  any shared files or systems are closed properly, and
                  projectors are switched off.
                </li>
                <li>Lock up the lab (if applicable)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-700">
                After the Lab:
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Review students' work</strong> for recurring issues or
                misconceptions.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>
                  Share general feedback or clarifications in the{" "}
                  <strong>next lab session</strong>.
                </li>
                <li>
                  Communicate <strong>noteworthy observations</strong> to the
                  instructor.
                </li>
              </ul>

              <p className="text-gray-600 mb-3">
                Evaluate lab reports or code submissions promptly, with
                constructive feedback:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>
                  <strong>Specific</strong> – Help students understand what
                  worked and what didn't
                </li>
                <li>
                  <strong>Balanced</strong> – Point out both strengths and areas
                  for improvement.
                </li>
                <li>
                  <strong>Actionable</strong> – Suggest small, focused
                  improvements they can apply.
                </li>
                <li>
                  <strong>Timely</strong> – feedback must be given in a
                  reasonable timeframe.
                </li>
              </ul>

              <p className="text-gray-600 mb-3">
                Reflect on your own TA practice:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  Think about what worked well in the lab and what could be
                  improved.
                </li>
                <li>
                  Talk with <strong>fellow TAs</strong>, ask the{" "}
                  <strong>instructor for tips</strong>, and invite{" "}
                  <strong>student feedback</strong>.
                </li>
                <li>Continuous self-improvement makes labs more effective.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaLabTranscripts;
