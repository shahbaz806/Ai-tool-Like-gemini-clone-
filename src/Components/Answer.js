import React, { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStr } from "./Helper";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Answer = ({ ans, totalResult, index }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setanswer] = useState(ans);
  console.log(index);
  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setanswer(replaceHeadingStr(ans));
    }
  }, []);

  const render = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          language={match[1]}
          style={dark}
          PreTag="div"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className="pt-2 text-xl text-white">{answer}</span>
      ) : heading ? (
        <span className="py-5 text-lg block text-white font-semibold">
          {answer}
        </span>
      ) : (
        <span className="pl-5"><ReactMarkdown components={render}>{answer}</ReactMarkdown></span>
      )}
    </>
  );
};

export default Answer;
