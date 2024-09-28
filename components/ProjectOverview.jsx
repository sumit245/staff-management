import React from "react";
import { ScrollView } from "react-native";

import ProjectCard from "./ProjectCard";

export default function ProjectOverview() {
  return (
    <ScrollView>
      <ProjectCard
        title="Project Overview"
        icon="briefcase"
        status={{
          numbers: [1, 2, 3],
          labels: ["Open", "Hold", "Complete"],
        }}
      />
    </ScrollView>
  );
}
