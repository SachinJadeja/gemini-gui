'use client';

import { useEffect, useState } from 'react';
import { getToken, setToken } from '@/lib/utils';
// import { Input } from '@/components/ui/input';
import ChatDisplay from './components/ChatDisplay';
import ChatInput from './components/ChatInput';

const Page = ({ params }) => {
  const userData = getToken('userData') ? JSON.parse(getToken('userData')) : [];
  const storedConversationData = userData.length > 0 ? userData.find((item) => item.id === params.id) : null;
  if (!storedConversationData?.id) {
    setToken(JSON.stringify([...userData, { id: params.id, history: [] }]), 'userData');
  }
  const [conversationHistory, setConversationHistory] = useState(storedConversationData?.history || []);

  useEffect(() => {
    const newUserData = userData.filter((item) => item.id !== params.id);
    newUserData.push({
      id: params.id,
      history: conversationHistory,
    });
    setToken(JSON.stringify(newUserData), 'userData');
  }
    , [conversationHistory]);

  return (
    <div
      className="w-full h-screen flex flex-col items-center py-8 bg-slate-100 scrollbar-hide justify-end"
    >
      {/* <Input 
      className="w-[80%] h-[40px] mb-2 bg-white border-none rounded-md px-4 py-2" 
      placeholder="Add Title" name="title" 
      onKeyPress={() => { }} /> */}
      <ChatDisplay conversationHistory={conversationHistory} />
      <ChatInput conversationHistory={conversationHistory} setConversationHistory={setConversationHistory} />
    </div>
  );
}

export default Page;
