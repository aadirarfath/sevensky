"use client"

import { useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function SurveyBuilderPage() {
  const [questions, setQuestions] = useState([
     { id: 1, type: 'text', title: 'What is your primary age demographic?' },
     { id: 2, type: 'multiple_choice', title: 'How did you hear about our brand?', options: ['Social Media', 'Word of Mouth', 'Event Activation', 'Other'] }
  ]);
  const [surveyTitle, setSurveyTitle] = useState("Target Audience Insight Survey");

  const addQuestion = () => {
     setQuestions([...questions, { id: Date.now(), type: 'text', title: 'New Question' }]);
  }

  const removeQuestion = (id: number) => {
     setQuestions(questions.filter(q => q.id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
         <div className="flex-1">
            <input 
              type="text" 
              value={surveyTitle}
              onChange={(e) => setSurveyTitle(e.target.value)}
              className="text-2xl font-bold text-white bg-transparent border-none p-0 focus:ring-0 w-full placeholder-slate-500 mb-2 truncate"
              placeholder="Survey Title"
            />
            <p className="text-slate-400">Design custom surveys to gather critical market insights.</p>
         </div>
         <div className="mt-4 sm:mt-0 flex gap-4 shrink-0">
            <button className="inline-flex justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-all border border-white/10">
              Preview
            </button>
            <button className="inline-flex justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 transition-all border border-brand-400/20">
              Publish Survey
            </button>
         </div>
      </div>

      <div className="space-y-6">
         {questions.map((q, index) => (
            <div key={q.id} className="bg-slate-900 border border-white/10 rounded-2xl p-6 group transition-all hover:border-brand-500/50">
               <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3 w-full">
                     <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                     </span>
                     <input 
                       type="text" 
                       value={q.title} 
                       className="font-medium text-white bg-white/5 border border-transparent hover:border-white/10 focus:border-brand-500 rounded px-3 py-1.5 w-full outline-none transition-all"
                       onChange={(e) => {
                          const newQ = [...questions];
                          newQ[index].title = e.target.value;
                          setQuestions(newQ);
                       }}
                     />
                  </div>
                  <button onClick={() => removeQuestion(q.id)} className="ml-4 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                     <TrashIcon className="w-5 h-5" />
                  </button>
               </div>

               <div className="pl-11">
                  {q.type === 'text' && (
                     <div className="h-24 w-full bg-slate-950/50 border border-slate-800 border-dashed rounded-lg flex items-center justify-center text-slate-500 text-sm">
                        Respondent Text Input Area
                     </div>
                  )}

                  {q.type === 'multiple_choice' && q.options && (
                     <div className="space-y-2">
                        {q.options.map((opt, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <span className="w-4 h-4 rounded-full border border-slate-600"></span>
                              <input 
                                type="text" 
                                value={opt} 
                                className="text-sm text-slate-300 bg-transparent border-b border-transparent hover:border-slate-700 focus:border-brand-500 px-1 py-0.5 outline-none"
                                onChange={(e) => {
                                   const newQ = [...questions];
                                   if (newQ[index].options) {
                                       newQ[index].options[i] = e.target.value;
                                   }
                                   setQuestions(newQ);
                                }}
                              />
                           </div>
                        ))}
                        <button className="text-sm text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1 mt-2">
                           <PlusIcon className="w-3 h-3" /> Add Option
                        </button>
                     </div>
                  )}
               </div>
            </div>
         ))}

         {/* Add Question Button */}
         <button 
           onClick={addQuestion}
           className="w-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 p-6 text-center hover:bg-white/5 hover:border-brand-500/30 transition-all text-slate-400 hover:text-brand-400"
         >
           <PlusIcon className="mx-auto h-8 w-8 mb-2" />
           <span className="text-sm font-semibold">Add New Question</span>
         </button>
      </div>
    </div>
  );
}
