import Image from "next/image";
import { teamMembers } from "@/lib/data/team";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-gutter gap-y-12 md:grid-cols-5">
      {teamMembers.map((member) => (
        <div key={member.id}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md">
            <Image
              src={member.image}
              alt={member.role}
              fill
              sizes="(min-width: 768px) 20vw, 50vw"
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
          <p className="mt-4 text-sm text-mute">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
