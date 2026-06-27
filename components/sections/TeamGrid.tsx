import Image from "next/image";
import { teamMembers } from "@/lib/data/team";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-gutter gap-y-12 md:grid-cols-5">
      {teamMembers.map((member) => (
        <div key={member.name}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(min-width: 768px) 20vw, 50vw"
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
          <h3 className="mt-4 font-display text-base font-medium text-ink">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-mute">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
