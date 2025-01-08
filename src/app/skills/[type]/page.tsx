import React from "react";
import { fetchSkills } from "@/server-component";
import { Job } from "@/types";
import Skills from "@/feat-components/skills/Skills";

const MirSkills = async ({ params }: { params: Promise<{ type: Job }> }) => {
  const type = (await params).type;
  const response = await fetchSkills(type);

  if (!response?.data) {
    return null;
  }

  return <Skills type={type} data={response.data} />;
};

export default MirSkills;
