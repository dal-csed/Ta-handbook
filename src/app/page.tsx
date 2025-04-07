import CollapsibleSection from "../../components/CollapsibleSection";
import { collapsable, introduction } from "../../constants/content";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Faculty of Computer Science TA Handbook</h1>

      <h2 className="text-3x1 font-bold mb-8">Introduction</h2>
      <p>${introduction}$</p>

      {collapsable.map((section) => (
        <CollapsibleSection
          key={section.id}
          title={section.title}
          content={section.content as string}
        />
      ))}
    </main>
  );
}

