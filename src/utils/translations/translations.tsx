import React, { createContext, useContext, useState, ReactNode } from 'react';
import { enTranslations } from './en/en';
import { jaTranslations } from './ja/ja';

type Language = 'en' | 'ja';

type TranslationContextType = {
    currentLanguage: Language;
    setLanguage: (lang: Language) => void;
    t: typeof enTranslations;
};

const translations = {
    en: enTranslations,
    ja: jaTranslations
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslations = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslations must be used within a TranslationProvider');
    }
    return context;
};

type TranslationProviderProps = {
    children: ReactNode;
    defaultLanguage?: Language;
};

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ 
    children, 
    defaultLanguage = 'en' 
}) => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage);

    const value = {
        currentLanguage,
        setLanguage: setCurrentLanguage,
        t: translations[currentLanguage]
    };

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    );
};