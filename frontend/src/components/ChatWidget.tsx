import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatContainer from "./ChatContainer";
type ChatMode = "closed" | "widget" | "chat";
export default function ChatWidget() {
  const [mode, setMode] = useState<ChatMode>("closed");
  const [initialMessage, setInitialMessage] = useState<string | undefined>();

  const openChat = () => {
    setMode("chat");
  };

  const closeChat = () => {
    setInitialMessage(undefined);
    setMode("closed");
  };

  return (
    <>
      <AnimatePresence>
        {mode === "chat" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            style={{
              position: "fixed",
              inset: "auto 0 0 0",
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px",
              zIndex: 1000,
            }}
          >
            <ChatContainer
              initialMessage={initialMessage}
              onClose={closeChat}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {mode !== "chat" && (
        <button
          onClick={openChat}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "#1F65EF",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
            zIndex: 1000,
          }}
        >
          <img
            src="https://spur-uploads.s3.ap-south-1.amazonaws.com/360/7799_spurlogobluebg.svg"
            style={{ width: "38px" }}
          />
        </button>
      )}
    </>
  );
}
