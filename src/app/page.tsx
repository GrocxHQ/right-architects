import { client } from "@/sanity/client";
import { homepageQuery } from "@/sanity/queries";
import ProjectStage from "@/components/ProjectStage";

export default async function HomePage() {
  const data = await client.fetch(homepageQuery);

  return (
    <ProjectStage projects={data?.featuredProjects || []} />
  );
}
