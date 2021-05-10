import React from "react";

interface Props {
  text: string;
}

const HelloWorld: React.FC<Props> = ({ text }) => <div>Hello {text}</div>

export default HelloWorld;
