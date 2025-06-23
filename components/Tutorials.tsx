import { ExternalLink } from "lucide-react";
import React from "react";

const Tutorials = () => {
  return (
    <div className="my-3">
      <h3 className="font-semibold text-lg">What is a tutorial? </h3>

      <p className="my-3">
        A <strong>tutorial</strong> is a structured learning session designed to
        supplement lectures by offering students an interactive environment
        where they can deepen their understanding of course content through
        discussion, problem-solving, and guided practice.
      </p>
      <p>
        Tutorials generally follow lectures; it is crucial to ensure alignment
        between what was taught in the preceding lecture and the tutorial.
        Review the content of lectures and be aware of the intended outcomes. At
        times, tutorials can also be used to reinforce foundational concepts and
        skills that students will need to draw on for future learning.
        Conversations with the course instructor are critical to pinpoint any
        learning gaps that students may have. The learning activities for the
        tutorial should address these and outline clear areas of focus for the
        session.
      </p>

      <iframe
        src="https://www.youtube.com/embed/2Hg2LYpZTSY?start=279"
        allowFullScreen
        className="h-120 w-174 my-3"
      />

      <p>
        <strong>Video:</strong>
        <a
          href="https://www.youtube.com/watch?v=2Hg2LYpZTSY&t=279s"
          target="_blank"
          className="text-blue-800 underline inline-flex items-center"
        >
          https://www.youtube.com/watch?v=2Hg2LYpZTSY&t=279s{" "}
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </p>

      <div className="mt-2 space-y-2">
        <h3 className="font-semibold text-lg">Key Purposes of a Tutorial </h3>

        <h4 className="mb-[-1] font-semibold">
          Clarify and Reinforce Concepts
        </h4>
        <p>
          Tutorials give students the opportunity to ask questions and revisit
          complex or abstract ideas introduced in lectures.
        </p>

        <h4 className="mb-[-1] font-semibold">Promote Active Learning </h4>
        <p>
          Through hands-on exercises, discussions, and collaborative
          problem-solving, students apply theoretical knowledge in practice.
        </p>

        <h4 className="mb-[-1] font-semibold">
          Foster Critical Thinking and Inquiry
        </h4>
        <p>
          Tutorials encourage students to analyze, question, and evaluate ideas,
          often through open-ended questions, discussions or debate.
        </p>

        <h4 className="mb-[-1] font-semibold">Provide Personalized Support</h4>
        <p>
          Smaller group sizes allow TAs or instructors to give targeted feedback
          and guidance based on students’ needs.
        </p>

        <h4 className="mb-[-1] font-semibold">
          Build Communication and Collaboration Skills
        </h4>
        <p>
          Tutorials often involve group activities or presentations that develop
          teamwork, listening, and academic communication.
        </p>

        <h4 className="mb-[-1] font-semibold">Bridge Theory and Practice </h4>
        <p>
          Especially in fields like Computer Science, tutorials are a space to
          work through examples, write code, or troubleshoot real-world
          problems.
        </p>

        <h4 className="mb-[-1] font-semibold">Prepare for Assessments</h4>
        <p>
          Tutorials help students practice the kinds of questions or problems
          that may appear on assignments, labs, or exams.
        </p>
      </div>

      <p className="mt-3 text-red-700 font-semibold">
        For more information on Tutorials, visit the Key Strategies for
        Effective Tutorials:{" "}
        <a
          target="_blank"
          className="text-blue-800 underline inline-flex items-center"
          href="https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/key-strategies-effective-tutorials "
        >
          https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/key-strategies-effective-tutorials
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </p>

      <p className="text-lg font-semibold mt-3">Other Useful Resources:</p>
      <div className="space-y-2">
        <ul className="list-disc ml-4 mt-2 space-y-1">
          <li>
            <a
              target="_blank"
              className="text-blue-800 underline inline-flex items-center"
              href="https://www.ctl.ox.ac.uk/planning-effective-tutorials "
            >
              https://www.ctl.ox.ac.uk/planning-effective-tutorials{" "}
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="text-blue-800 underline inline-flex items-center"
              href="https://libguides.hull.ac.uk/introduction/tutorials "
            >
              https://libguides.hull.ac.uk/introduction/tutorials{" "}
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="text-blue-800 underline inline-flex items-center"
              href="https://www.queensu.ca/ctl/resources/graduate-student-post-doctoral-and-ta/teaching-assistant-toolkit/leading-tutorials#TA-Toolkit-Strategies-for-Effective-Tutorials "
            >
              https://www.queensu.ca/ctl/resources/graduate-student-post-doctoral-and-ta/teaching-assistant-toolkit/leading-tutorials#TA-Toolkit-Strategies-for-Effective-Tutorials{" "}
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="text-blue-800 underline inline-flex items-center"
              href="https://www.ctl.ox.ac.uk/facilitating-tutorial-discussions#:~:text=Vary%20activities%20from%20week%20to,%2Dmap%2C%20you%20for%20example.&text=We%20encourage%20you%20to%20adapt,Centre%20for%20Teaching%20and%20Learning. "
            >
              https://www.ctl.ox.ac.uk/facilitating-tutorial-discussions#:~:text=Vary%20activities%20from%20week%20to,%2Dmap%2C%20you%20for%20example.&text=We%20encourage%20you%20to%20adapt,Centre%20for%20Teaching%20and%20Learning.{" "}
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              className="text-blue-800 underline inline-flex items-center"
              href="https://www.ctl.ox.ac.uk/inclusive-tutorials#:~:text=Use%20students'%20submitted%20work%20to,some%20flexibility%20for%20the%20unexpected. "
            >
              https://www.ctl.ox.ac.uk/inclusive-tutorials#:~:text=Use%20students'%20submitted%20work%20to,some%20flexibility%20for%20the%20unexpected.{" "}
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tutorials;
