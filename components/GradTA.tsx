export default function TADemonstratorMarkerTable() {
  return (
    <div className="overflow-x-auto my-8">
      <h2 className="text-2xl font-bold mb-4">
        FCS TA / Demonstrator / Marker Structure
      </h2>
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left w-1/4">Category</th>
            <th className="border p-2 text-left">Teaching Assistants</th>
            <th className="border p-2 text-left">Demonstrators – new!</th>
            <th className="border p-2 text-left">Markers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 font-semibold">Pay</td>
            <td className="border p-2">
              $30.05 per hour*<br />
              <em>paid in fixed installments</em>
            </td>
            <td className="border p-2">
              $24.00 per hour*<br />
              <em>variable hours, submit by timesheet</em>
            </td>
            <td className="border p-2">
              $24.00 per hour*<br />
              <em>hours worked submitted by timesheet</em>
            </td>
          </tr>

          <tr>
            <td className="border p-2 font-semibold">Total Hours</td>
            <td className="border p-2">
              25, 35, 45, 65, 90, 110, or 130 hours only*
            </td>
            <td className="border p-2">
              maximum of lab or tutorial time<br />
              <em>plus minimal other duties: meetings, prep, tech, in-lecture support, training</em>
            </td>
            <td className="border p-2">non-binding and unlimited at FCS</td>
          </tr>

          <tr>
            <td className="border p-2 font-semibold">Ratios</td>
            <td className="border p-2">
              20 to 60 students per TA,<br />
              <em>depends on duties and TA</em>
            </td>
            <td className="border p-2">
              20 to 60 students per TA/Demonstrator grouping
            </td>
            <td className="border p-2">
              1.5 to 2 hours per student enrolled
            </td>
          </tr>

          <tr>
            <td className="border p-2 font-semibold">Valid Use of Time</td>
            <td className="border p-2 space-y-1">
              <ul className="list-disc ml-4">
                <li>interact with students, running labs/tutorials</li>
                <li>attend administrative meetings</li>
                <li>assessment testing/development</li>
                <li>technology training and additional supports</li>
              </ul>
            </td>
            <td className="border p-2 space-y-1">
              <ul className="list-disc ml-4">
                <li>interact with students in lab/tutorial/lecture only</li>
                <li>attend coordination briefings</li>
                <li>assist in launch and shutdown procedures</li>
                <li>proctor (admin support and walk the room only)</li>
              </ul>
            </td>
            <td className="border p-2 space-y-1">
              <ul className="list-disc ml-4">
                <li>evaluate student work product</li>
                <li>attend coordination briefings</li>
                <li>edit closed captioning</li>
                <li>proctor (admin support and walk the room only)</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td className="border p-2 font-semibold">Invalid Use of Time</td>
            <td className="border p-2">
              <ul className="list-disc ml-4">
              <li>
                be hired to mark at the TA rate<br />
                <em>If a TA needs to do marking, add a Marker contract.</em>
              </li>
              </ul>
            </td>
            <td className="border p-2">
              <ul className="list-disc ml-4">
                <li>interact with students outside labs/tutorials including text/email</li>
                <li>lead labs/tutorials</li>
                <li>invigilate (answer content-related questions during testing)</li>
              </ul>
              <em>
                If a Demonstrator needs to do marking, add a Marker contract.
              </em>
            </td>
            <td className="border p-2">
              <ul className="list-disc ml-4">
                <li>interact with students, including text/email</li>
                <li>answer student questions about marked work outside lab/tutorial/lecture</li>
                <li>invigilate (answer content-related questions during testing)</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4 text-sm">
        <strong>Source:</strong>{" "}
        <a
          href="https://3912.cupe.ca/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          CUPE 3912 collective agreement
        </a>
      </p>
      <p className="text-sm italic">*Pay rates effective September 1, 2023.</p>
    </div>
  );
}
