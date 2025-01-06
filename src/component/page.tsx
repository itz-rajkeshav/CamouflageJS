import { useState } from 'react';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';
const Page = () => {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(outputCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleConvertcode = async () => {
    const url = "https://camouflagejs-server.onrender.com/api/obfuscateCode";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: inputCode }),
      });
      const data = await response.json(); 
      setOutputCode(data.resultCode); 
    } catch (error) {
      console.error("Error during obfuscation:", error);
    }
  };
  return (
    <div className="relative flex flex-col bg-customBgcolor w-full h-screen items-center justify-between overflow-hidden p-6">
      <div className="absolute top-0 w-full text-center pt-4">
        <h1 className="text-3xl font-bold font-mono text-gray-400">CamouflageJS</h1>
      </div>
      <AnimatedGridPattern
        numSquares={500}
        maxOpacity={0.2}
        duration={6}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <AnimatedGridPattern
        numSquares={4}
        maxOpacity={0.05}
        duration={4}
        repeatDelay={2}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,gray,transparent)]",
          "inset-x-0 inset-y-[-40%] h-[200%] skew-y-6 opacity-50"
        )}
      />

      <div className="relative z-10 flex w-full gap-4 flex-1 mt-16 mb-8">
        <div className="w-1/2 flex flex-col relative">
          <div className="absolute top-4 right-4 z-50 flex flex-col items-center">
            <div className="flex items-center space-x-2   rounded-t-lg">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-sm font-semibold text-gray-400 px-4 py-1 rounded-b-lg">
              Code Editor
            </span>
          </div>
          <textarea
            className="w-full h-full p-4 pt-11 bg-black text-white text-sm font-mono rounded-lg resize-none border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="// Write your code here..."
            spellCheck={false}
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
        </div>

        <div className="w-1/2 flex flex-col relative">
          <button
            onClick={handleCopy}
            className="absolute top-4 right-6 z-20 p-1 bg-customBgcolor rounded-lg hover:bg-gray-700 transition-colors"
            title="Copy code"
          >
            <Copy className={cn(
              "w-5 h-5",
              copied ? "text-green-800" : "text-gray-400"
            )} />
          </button>
          <textarea
            className="w-full h-full p-4 pt-11 bg-black text-white rounded-lg font-mono text-sm resize-none border border-gray-700"
            placeholder=" // Converted code will appear here..."
            value={outputCode}
            readOnly
          />
        </div>
      </div>

      <div className="relative z-10 mb-8">
        <button
          className="relative text-gray-300 text-xl bg-black px-8 py-4 rounded-lg flex items-center group overflow-hidden"
          onClick={handleConvertcode}
        >
          <span className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10  group-hover:text-white transition-colors duration-300">
            Convert code
          </span>
        </button>
      </div>
    </div>
  );
};

export default Page;