
import MarkdownComp from '@/components/markdown';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import StarIcon from '../../../../public/star.svg'

function ChatDisplay({ conversationHistory }) {

  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversationHistory]);


  return (
    <div className="flex flex-col w-[80%] gap-8 max-h-[100%] overflow-scroll mb-4">
      {conversationHistory?.map((item) => (
        <div className={`${item.type === 'human' ? 'flex-row-reverse' : 'flex-row'} items-start	 w-[100%] flex gap-8`}>
          <Image 
            src={item.type === 'human' ? '/star.svg' : StarIcon}
            priority
            alt={item.type === 'human' ? 'human' : 'ai'}
            width={40}
            height={40}
            className="rounded-full border p-1"
          />
          <div className={`${item.type === 'human' ? 'bg-slate-800 text-white text-right rounded-b-[20px] rounded-l-[20px] ' : 'bg-slate-200  rounded-b-[20px] rounded-r-[20px]'}  w-fit max-w-[50%]  p-4`} >
            <MarkdownComp markdownContent={item.message} />
          </div>
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
}

export default ChatDisplay;
