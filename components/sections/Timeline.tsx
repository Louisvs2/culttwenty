import { timeline } from "@/lib/data/team";

export function Timeline() {
  return (
    <ol className="flex flex-col divide-y divide-line">
      {timeline.map((entry) => (
        <li
          key={entry.year}
          className="grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-8"
        >
          <span className="font-mono text-sm text-mute md:col-span-2">
            {entry.year}
          </span>
          <h3 className="font-display text-heading-2 font-medium text-ink md:col-span-4">
            {entry.title}
          </h3>
          <p className="text-body text-ink/70 md:col-span-6">{entry.description}</p>
        </li>
      ))}
    </ol>
  );
}
