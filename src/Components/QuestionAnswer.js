import React from "react";
import Answer from "./Answer";

const QuestionAnswer = ({item,index}) => {
  return (
    <div
      key={index + Math.random()}
      className={item.type == "q" ? "flex justify-end" : ""}
    >
      {item.type == "q" ? (
        <li
          key={index + Math.random()}
          className="text-right p-1 dark:text-zinc-100 text-zinc-300  pt-3 mr-12 mt-7 dark:bg-zinc-700 bg-zinc-500 border-8 dark:border-zinc-700 border-zinc-500 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-fit "
        >
          <Answer
            ans={item.text}
            index={index}
            totalresult={1}
            type={item.type}
          />
        </li>
      ) : (
        item.text.map((ansItem, ansIndex) => (
          <li key={index + Math.random()} className="text-left p-1 pt-3 mx-5 ">
            <Answer
              ans={ansItem}
              index={ansIndex}
              totalresult={ansItem.length}
            />
          </li>
        ))
      )}
    </div>
  );
};

export default QuestionAnswer;
