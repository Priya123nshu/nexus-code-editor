// import EditorPanel from "./_components/EditorPanel";
// import Header from "./_components/Header";
// import OutputPanel from "./_components/OutputPanel";

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       <div className="max-w-[1800px] mx-auto p-4">
//         <Header />

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           <EditorPanel />
//           <OutputPanel />
//         </div>
//       </div>
//     </div>
//   );
// }


import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <div className="max-w-[1800px] mx-auto p-4">

        <Header />

        {/* ========================== */}
        {/*        HERO SECTION        */}
        {/* ========================== */}
        <div className="mt-6 w-full rounded-2xl bg-gradient-to-br from-blue-900/40 via-neutral-900 to-neutral-950 border border-neutral-800 p-10 shadow-lg shadow-blue-500/10">

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            Welcome to <span className="text-blue-400">Nexus</span>
          </h1>

          <p className="text-neutral-400 max-w-2xl text-lg md:text-xl mb-8">
            Build AI-powered agents, generate code, automate workflows, and explore advanced intelligence tools — all inside your developer workspace.
          </p>

          <Link href="/llm">
            <button className="
              px-8 py-4 rounded-xl 
              bg-blue-600 hover:bg-blue-700 
              text-white font-semibold text-lg
              shadow-md hover:shadow-blue-500/30 
              transition-all duration-200
            ">
              ⚡ Open Nexus Agent Core
            </button>
          </Link>
        </div>

        {/* ========================== */}
        {/*    EDITOR + OUTPUT GRID    */}
        {/* ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}




// import EditorPanel from "./_components/EditorPanel";
// import Header from "./_components/Header";
// import OutputPanel from "./_components/OutputPanel";
// import Link from "next/link";
// import { useEffect, useRef } from "react";

// export default function Home() {

//   // Floating 3D animation (smooth parallax)
//   const orb1Ref = useRef<HTMLDivElement>(null);
//   const orb2Ref = useRef<HTMLDivElement>(null);
//   const orb3Ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 20;
//       const y = (e.clientY / window.innerHeight - 0.5) * 20;

//       if (orb1Ref.current)
//         orb1Ref.current.style.transform = `translate(${x}px, ${y}px)`;

//       if (orb2Ref.current)
//         orb2Ref.current.style.transform = `translate(${x * -0.4}px, ${y * -0.4}px)`;

//       if (orb3Ref.current)
//         orb3Ref.current.style.transform = `translate(${x * 0.6}px, ${y * -0.6}px)`;
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div className="min-h-screen bg-neutral-950 text-neutral-200 overflow-hidden">
//       <div className="max-w-[1800px] mx-auto p-4 relative">

//         <Header />

//         {/* =============================
//             3D FLOATING ORBS BACKGROUND
//         ============================== */}
//         <div className="absolute top-0 left-0 w-full h-[450px] overflow-hidden pointer-events-none">
          
//           {/* Blue Orb */}
//           <div
//             ref={orb1Ref}
//             className="absolute w-[180px] h-[180px] bg-blue-600/30 blur-3xl rounded-full top-10 left-16"
//           ></div>

//           {/* Purple Orb */}
//           <div
//             ref={orb2Ref}
//             className="absolute w-[220px] h-[220px] bg-purple-500/20 blur-3xl rounded-full top-20 right-20"
//           ></div>

//           {/* Teal Orb */}
//           <div
//             ref={orb3Ref}
//             className="absolute w-[150px] h-[150px] bg-cyan-400/20 blur-3xl rounded-full bottom-[-30px] left-[40%]"
//           ></div>
//         </div>

//         {/* =============================
//                  HERO SECTION
//         ============================== */}
//         <div className="relative mt-8 rounded-3xl bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 p-12 shadow-[0_0_35px_-10px_rgba(0,0,0,0.6)]">
          
//           <h1 className="text-5xl font-bold mb-4 text-neutral-100 leading-tight">
//             Welcome to <span className="text-blue-400">Nexus</span>
//           </h1>

//           <p className="text-neutral-400 text-xl max-w-3xl mb-10">
//             Your unified workspace for intelligent coding.  
//             Generate code, build AI agents, analyze data, automate workflows —  
//             all powered by next-generation LLMs.
//           </p>

//           <Link href="/llm">
//             <button
//               className="
//                 px-10 py-4 rounded-2xl
//                 bg-blue-600 hover:bg-blue-700
//                 text-white text-lg font-semibold
//                 shadow-lg shadow-blue-500/30
//                 hover:shadow-blue-500/50
//                 transition-all duration-300
//               "
//             >
//               ⚡ Open Nexus Agent Core
//             </button>
//           </Link>
//         </div>

//         {/* =============================
//              MAIN EDITOR + OUTPUT
//         ============================== */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 relative z-10">
//           <EditorPanel />
//           <OutputPanel />
//         </div>
//       </div>
//     </div>
//   );
// }
