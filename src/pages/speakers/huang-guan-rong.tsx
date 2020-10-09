import Speaker from "pageContent/Speaker";
import React, { memo } from "react";
import useSpeak from "speakers/huang-guan-rong/useSpeaker";

function App() {
  const {
    topic,
    content,
    name,
    title,
    introduce,
    image,
    ogTitle,
    ogDescription,
  } = useSpeak();
  return (
    <Speaker
      topic={topic}
      content={content}
      name={name}
      title={title}
      introduce={introduce}
      image={image}
      ogTitle={ogTitle}
      ogDescription={ogDescription}
    />
  );
}

export default memo(App);
