import React, { useState } from 'react';
import { Code2, Image, Video, Copy, Wand2 } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

type PromptType = 'code' | 'image' | 'video';

interface PromptField {
  key: string;
  label: string;
  type: 'text' | 'select' | 'textarea';
  options?: string[];
  placeholder?: string;
}

const getPromptFields = (t: (key: string) => string): Record<PromptType, PromptField[]> => ({
  code: [
    {
      key: 'language',
      label: t('fields.code.language.label'),
      type: 'text',
      placeholder: t('fields.code.language.placeholder'),
    },
    {
      key: 'functionality',
      label: t('fields.code.functionality.label'),
      type: 'textarea',
      placeholder: t('fields.code.functionality.placeholder'),
    },
    {
      key: 'constraints',
      label: t('fields.code.constraints.label'),
      type: 'textarea',
      placeholder: t('fields.code.constraints.placeholder'),
    },
    {
      key: 'complexity',
      label: t('fields.code.complexity.label'),
      type: 'select',
      options: [
        t('fields.code.complexity.options.basic'),
        t('fields.code.complexity.options.intermediate'),
        t('fields.code.complexity.options.advanced'),
      ],
    },
  ],
  image: [
    {
      key: 'subject',
      label: t('fields.image.subject.label'),
      type: 'text',
      placeholder: t('fields.image.subject.placeholder'),
    },
    {
      key: 'style',
      label: t('fields.image.style.label'),
      type: 'text',
      placeholder: t('fields.image.style.placeholder'),
    },
    {
      key: 'mood',
      label: t('fields.image.mood.label'),
      type: 'text',
      placeholder: t('fields.image.mood.placeholder'),
    },
    {
      key: 'composition',
      label: t('fields.image.composition.label'),
      type: 'textarea',
      placeholder: t('fields.image.composition.placeholder'),
    },
  ],
  video: [
    {
      key: 'concept',
      label: t('fields.video.concept.label'),
      type: 'textarea',
      placeholder: t('fields.video.concept.placeholder'),
    },
    {
      key: 'duration',
      label: t('fields.video.duration.label'),
      type: 'text',
      placeholder: t('fields.video.duration.placeholder'),
    },
    {
      key: 'style',
      label: t('fields.video.style.label'),
      type: 'text',
      placeholder: t('fields.video.style.placeholder'),
    },
    {
      key: 'elements',
      label: t('fields.video.elements.label'),
      type: 'textarea',
      placeholder: t('fields.video.elements.placeholder'),
    },
  ],
});

function App() {
  const { t } = useLanguage();
  const [promptType, setPromptType] = useState<PromptType>('code');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const promptFields = getPromptFields(t);

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const generatePrompt = () => {
    let prompt = '';
    
    switch (promptType) {
      case 'code':
        prompt = `Create a ${formData.complexity?.toLowerCase() || ''} ${formData.language} program that accomplishes the following:

${formData.functionality || ''}

Technical Requirements:
${formData.constraints || ''}

Please provide:
1. Well-structured, clean code
2. Comments explaining key logic
3. Error handling where appropriate
4. Usage examples`;
        break;
        
      case 'image':
        prompt = `Generate an image with the following specifications:

Subject: ${formData.subject || ''}
Style: ${formData.style || ''}
Mood: ${formData.mood || ''}

Composition Details:
${formData.composition || ''}

Ensure high quality and attention to detail in the final output.`;
        break;
        
      case 'video':
        prompt = `Create a ${formData.duration} video with the following specifications:

Concept:
${formData.concept || ''}

Visual Style: ${formData.style || ''}

Key Elements and Requirements:
${formData.elements || ''}

Ensure smooth transitions and professional quality throughout.`;
        break;
    }
    
    setGeneratedPrompt(prompt.trim());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6">
        {/* Header with language switcher */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold">{t('title')}</h1>
          <LanguageSwitcher />
        </div>
        
        {/* iOS-style segmented control */}
        <div className="bg-[#1c1c1e] p-1 sm:p-1.5 rounded-2xl flex gap-0.5 sm:gap-1 mb-6 sm:mb-8">
          <button
            onClick={() => setPromptType('code')}
            className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-xl transition-all text-sm sm:text-base ${
              promptType === 'code' 
                ? 'bg-white text-black shadow-lg' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            <Code2 size={16} className="sm:w-[18px] sm:h-[18px]" /> 
            <span className="hidden sm:inline">{t('categories.code')}</span>
          </button>
          <button
            onClick={() => setPromptType('image')}
            className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-xl transition-all text-sm sm:text-base ${
              promptType === 'image' 
                ? 'bg-white text-black shadow-lg' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            <Image size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden sm:inline">{t('categories.image')}</span>
          </button>
          <button
            onClick={() => setPromptType('video')}
            className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-xl transition-all text-sm sm:text-base ${
              promptType === 'video' 
                ? 'bg-white text-black shadow-lg' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            <Video size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden sm:inline">{t('categories.video')}</span>
          </button>
        </div>

        {/* iOS-style form */}
        <div className="space-y-4 sm:space-y-6 bg-[#1c1c1e] rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          {promptFields[promptType].map((field) => (
            <div key={field.key} className="space-y-1.5 sm:space-y-2">
              <label className="block text-sm font-medium text-white/90">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#2c2c2e] rounded-lg sm:rounded-xl border-0 text-sm sm:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-white/20"
                  rows={4}
                  placeholder={field.placeholder}
                  value={formData[field.key] || ''}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                />
              ) : field.type === 'select' ? (
                <select
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#2c2c2e] rounded-lg sm:rounded-xl border-0 text-sm sm:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-white/20"
                  value={formData[field.key] || ''}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                >
                  <option value="">{t('Select an option')}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#2c2c2e] rounded-lg sm:rounded-xl border-0 text-sm sm:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-white/20"
                  placeholder={field.placeholder}
                  value={formData[field.key] || ''}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                />
              )}
            </div>
          ))}

          <button
            onClick={generatePrompt}
            className="mt-6 sm:mt-8 w-full bg-white text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-white/90 transition-colors text-sm sm:text-base"
          >
            <Wand2 size={18} className="sm:w-5 sm:h-5" />
            {t('generateButton')}
          </button>
        </div>

        {/* Generated prompt section */}
        {generatedPrompt && (
          <div className="mt-6 sm:mt-8 bg-[#1c1c1e] rounded-2xl sm:rounded-3xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">{t('generatedPromptTitle')}</h2>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 sm:gap-2 text-white/70 hover:text-white text-sm sm:text-base"
              >
                <Copy size={14} className="sm:w-4 sm:h-4" />
                {t('copyButton')}
              </button>
            </div>
            <div className="bg-[#2c2c2e] rounded-lg sm:rounded-xl p-3 sm:p-4 whitespace-pre-wrap text-white/90 text-sm sm:text-base">
              {generatedPrompt}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;