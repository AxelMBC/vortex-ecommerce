"use client";

import { Session, Chatbox } from "@talkjs/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Chat = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="fixed right-10 bottom-40">
      {isVisible && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="h-150 w-100"
        >
          <Session appId="tcBd5ghq" userId="sample_user_alice">
            <Chatbox conversationId="sample_conversation" className="h-full" />
          </Session>
        </motion.div>
      )}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="w-10 h-10 bg-blue-500 border-1 rounded-full fixed right-10 flex items-center"
      >
        {isVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Chat;
