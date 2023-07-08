"use client"

import { useState } from 'react';

const CopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const linkToCopy = 'https://example.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy link to clipboard:', error);
    }
  };

  return (
    <div className="copy-to-clipboard">
      <div className="link-container">
        <span className="link">{linkToCopy}</span>
        <button className="copy-button" onClick={handleCopy}>
          {isCopied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
      <style jsx>{`
        .copy-to-clipboard {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .link-container {
          display: flex;
          align-items: center;
          margin-right: 10px;
        }

        .link {
          font-size: 14px;
          margin-right: 10px;
          word-break: break-all;
        }

        .copy-button {
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }

        .copy-button:hover {
          background-color: #1da1f2;
        }
      `}</style>
    </div>
  );
};

export default CopyToClipboard;
