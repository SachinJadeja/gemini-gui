'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { getToken, setToken } from '@/lib/utils';

export default function Home() {
  const token = getToken();
  const [previewTokenInput, setPreviewTokenInput] = useState(token);
  const setPreviewToken = (tok) => {
    setToken(tok, 'ai-token')
  };
  const [showDialog, setShowDialog] = useState(!token);

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-24">
      <Dialog open={showDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter your Google AI API Key</DialogTitle>
            <DialogDescription>
              If you have not obtained your Google AI API key, you can do so by
              {' '}
              <a
                href="https://ai.google.dev/"
                className="underline"
              >
                signing up
              </a>
              {' '}
              on the Google AI website. This is only necessary for preview
              environments so that the open source community can test the app.
              The token will be saved to your browser&apos;s local storage under
              the name
              {' '}
              <code className="font-mono">ai-token</code>
              .
            </DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Google AI  API key"
            onChange={(e) => setPreviewTokenInput(e.target.value)}
          />
          <DialogFooter className="items-center">
            <Button
              onClick={() => {
                setPreviewToken(previewTokenInput);
                setShowDialog(false);
              }}
            >
              Save Token
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex flex-col items-center gap-3">
        <p className="text-[40px]"> Built with Google&apos;s Gemini Model </p>
        <Link
          href={`/${uuidv4()}`}
          className="w-fit text-white border-2 border-white items-center bg-slate-600 rounded-lg px-4  py-2 hover:bg-slate-500  dark:hover:bg-slate-700
        flex align-center justify-center
        "
        >
          <span className=" flex-1   whitespace-nowrap">Get Started</span>
        </Link>
      </div>

    </div>
  );
}
