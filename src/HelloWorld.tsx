import React from 'react';
import './App.css';

interface Props {
  text: string;
}

const HelloWorld: React.FC<Props> = ({ text }) => <div className='text-black'>Hello {text}</div>;

export default HelloWorld;
