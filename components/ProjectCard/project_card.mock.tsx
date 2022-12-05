import React from "react";
import ProjectCard from "./project_card";

export default function ProjectCardMock() {
  const url =
    "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.6435-9/90233506_3772518019455584_7953197431145889792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGUp02nmQ7M8cyiJ5igJv1NSp_Dis9DLEhKn8OKz0MsSH1yDCzEB78f8vKk6zpSDI7FjEBKBBAfAzlj1hw-k6EV&_nc_ohc=6z3aV4LLlPoAX80xAMl&_nc_oc=AQkyTOvqyMCoc9zrHOIg5N9Ne5rgZXq_JosZzCvUXvMJHkEbeZ0V2JiL8HADPbUaavY&_nc_ht=scontent.fubp1-1.fna&oh=00_AfACE5rOB91S4aogJ5LEJ02A-xviWv15hDBStYtUPMsjdA&oe=63B5023B";
  const tags = ["C#", "Unity", "UniRX", "DoTween"];
  const description = "Lorem ipsum Lorem ipsum sdajkldsa jdsakl jaskl djaslkajsmlfkn lkan rwropq nowqin rwqoirnqw rikoqnroqw"
  return <ProjectCard src={url} techStacks={tags} />;
}
