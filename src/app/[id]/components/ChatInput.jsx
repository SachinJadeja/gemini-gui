import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

import { useToast } from '@/components/ui/use-toast';
import ChatSession from '@/lib/gemini';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SendIcon from '../../../../public/send.svg';

const addResponse = (msg, isHuman, setConversationHistory) => {
  setConversationHistory(history => [...history, {
    id: uuidv4(),
    type: isHuman ? 'human' : 'ai',
    role: isHuman ? 'user' : 'model',
    message: msg,
  }]);
};


function ChatInput({
  conversationHistory, setConversationHistory,
}) {
  const router = useRouter();
  const chat = new ChatSession(conversationHistory.map((i) => ({ role: i.role, parts: i.message })));
  const { toast } = useToast();

  const sendMessage = (msg) => {
    chat.sendMessage(msg).then((result) => {
      const response = result.response.candidates[0].content.parts[0].text;
      addResponse(response, false, setConversationHistory);
    }).catch(() => {
      localStorage.removeItem('ai-token');
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
      router.push('/');
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    addResponse(data.message, true, setConversationHistory);
    sendMessage(data.message);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-[80%] gap-8">
      <Input
        className="w-full h-[40px] bg-white border border-gray-300 rounded-md px-4 py-2"
        placeholder="Type something..."
        {...register('message')}
      />
      <Button
        className="w-[40px] h-[40px] bg-white text-white rounded-[20%] p-2 border border-gray-300 hover:bg-slate-100"
        type="submit"
        disabled={!watch('message')}
      >
        <Image
          src={SendIcon}
          priority
          alt="star icon"
        />
      </Button>
    </form>
  );
}

export default ChatInput;
