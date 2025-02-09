interface Translation {
  title: string;
  generateButton: string;
  generatedPromptTitle: string;
  copyButton: string;
  categories: {
    code: string;
    image: string;
    video: string;
  };
  fields: {
    code: {
      language: {
        label: string;
        placeholder: string;
      };
      functionality: {
        label: string;
        placeholder: string;
      };
      constraints: {
        label: string;
        placeholder: string;
      };
      complexity: {
        label: string;
        options: {
          basic: string;
          intermediate: string;
          advanced: string;
        };
      };
    };
    image: {
      subject: {
        label: string;
        placeholder: string;
      };
      style: {
        label: string;
        placeholder: string;
      };
      mood: {
        label: string;
        placeholder: string;
      };
      composition: {
        label: string;
        placeholder: string;
      };
    };
    video: {
      concept: {
        label: string;
        placeholder: string;
      };
      duration: {
        label: string;
        placeholder: string;
      };
      style: {
        label: string;
        placeholder: string;
      };
      elements: {
        label: string;
        placeholder: string;
      };
    };
  };
}

export const translations: Record<string, Translation> = {
  en: {
    title: 'Prompt Generator',
    generateButton: 'Generate Prompt',
    generatedPromptTitle: 'Generated Prompt',
    copyButton: 'Copy',
    categories: {
      code: 'Code',
      image: 'Image',
      video: 'Video',
    },
    fields: {
      code: {
        language: {
          label: 'Programming Language',
          placeholder: 'e.g., JavaScript, Python, etc.',
        },
        functionality: {
          label: 'What should the code do?',
          placeholder: 'Describe the desired functionality in detail',
        },
        constraints: {
          label: 'Technical Requirements',
          placeholder: 'List any specific requirements, frameworks, or limitations',
        },
        complexity: {
          label: 'Code Complexity',
          options: {
            basic: 'Basic',
            intermediate: 'Intermediate',
            advanced: 'Advanced',
          },
        },
      },
      image: {
        subject: {
          label: 'Main Subject',
          placeholder: 'What should be the focus of the image?',
        },
        style: {
          label: 'Art Style',
          placeholder: 'e.g., Photorealistic, Anime, Oil Painting, etc.',
        },
        mood: {
          label: 'Mood/Atmosphere',
          placeholder: 'e.g., Dramatic, Peaceful, Energetic',
        },
        composition: {
          label: 'Composition Details',
          placeholder: 'Describe lighting, camera angle, background, etc.',
        },
      },
      video: {
        concept: {
          label: 'Video Concept',
          placeholder: 'Describe the overall concept and storyline',
        },
        duration: {
          label: 'Duration',
          placeholder: 'e.g., 15 seconds, 1 minute',
        },
        style: {
          label: 'Visual Style',
          placeholder: 'e.g., Cinematic, Animation, Documentary',
        },
        elements: {
          label: 'Key Elements',
          placeholder: 'List important visual elements, transitions, effects',
        },
      },
    },
  },
  ru: {
    title: 'Генератор промптов',
    generateButton: 'Создать промпт',
    generatedPromptTitle: 'Сгенерированный промпт',
    copyButton: 'Копировать',
    categories: {
      code: 'Код',
      image: 'Изображение',
      video: 'Видео',
    },
    fields: {
      code: {
        language: {
          label: 'Язык программирования',
          placeholder: 'например, JavaScript, Python и т.д.',
        },
        functionality: {
          label: 'Что должен делать код?',
          placeholder: 'Опишите желаемую функциональность подробно',
        },
        constraints: {
          label: 'Технические требования',
          placeholder: 'Перечислите требования, фреймворки или ограничения',
        },
        complexity: {
          label: 'Сложность кода',
          options: {
            basic: 'Базовый',
            intermediate: 'Средний',
            advanced: 'Продвинутый',
          },
        },
      },
      image: {
        subject: {
          label: 'Основной объект',
          placeholder: 'Что должно быть в центре внимания?',
        },
        style: {
          label: 'Художественный стиль',
          placeholder: 'например, Фотореализм, Аниме, Масляная живопись и т.д.',
        },
        mood: {
          label: 'Настроение/Атмосфера',
          placeholder: 'например, Драматичная, Спокойная, Энергичная',
        },
        composition: {
          label: 'Детали композиции',
          placeholder: 'Опишите освещение, ракурс, фон и т.д.',
        },
      },
      video: {
        concept: {
          label: 'Концепция видео',
          placeholder: 'Опишите общую концепцию и сюжет',
        },
        duration: {
          label: 'Длительность',
          placeholder: 'например, 15 секунд, 1 минута',
        },
        style: {
          label: 'Визуальный стиль',
          placeholder: 'например, Кинематографический, Анимация, Документальный',
        },
        elements: {
          label: 'Ключевые элементы',
          placeholder: 'Перечислите важные визуальные элементы, переходы, эффекты',
        },
      },
    },
  },
  fr: {
    title: 'Générateur de prompts',
    generateButton: 'Générer le prompt',
    generatedPromptTitle: 'Prompt généré',
    copyButton: 'Copier',
    categories: {
      code: 'Code',
      image: 'Image',
      video: 'Vidéo',
    },
    fields: {
      code: {
        language: {
          label: 'Langage de programmation',
          placeholder: 'ex: JavaScript, Python, etc.',
        },
        functionality: {
          label: 'Que doit faire le code ?',
          placeholder: 'Décrivez la fonctionnalité souhaitée en détail',
        },
        constraints: {
          label: 'Exigences techniques',
          placeholder: 'Listez les exigences, frameworks ou limitations',
        },
        complexity: {
          label: 'Complexité du code',
          options: {
            basic: 'Basique',
            intermediate: 'Intermédiaire',
            advanced: 'Avancé',
          },
        },
      },
      image: {
        subject: {
          label: 'Sujet principal',
          placeholder: 'Quel doit être le focus de l\'image ?',
        },
        style: {
          label: 'Style artistique',
          placeholder: 'ex: Photoréaliste, Anime, Peinture à l\'huile, etc.',
        },
        mood: {
          label: 'Ambiance/Atmosphère',
          placeholder: 'ex: Dramatique, Paisible, Énergique',
        },
        composition: {
          label: 'Détails de composition',
          placeholder: 'Décrivez l\'éclairage, l\'angle de la caméra, l\'arrière-plan, etc.',
        },
      },
      video: {
        concept: {
          label: 'Concept vidéo',
          placeholder: 'Décrivez le concept général et le scénario',
        },
        duration: {
          label: 'Durée',
          placeholder: 'ex: 15 secondes, 1 minute',
        },
        style: {
          label: 'Style visuel',
          placeholder: 'ex: Cinématographique, Animation, Documentaire',
        },
        elements: {
          label: 'Éléments clés',
          placeholder: 'Listez les éléments visuels importants, transitions, effets',
        },
      },
    },
  },
  de: {
    title: 'Prompt-Generator',
    generateButton: 'Prompt erstellen',
    generatedPromptTitle: 'Generierter Prompt',
    copyButton: 'Kopieren',
    categories: {
      code: 'Code',
      image: 'Bild',
      video: 'Video',
    },
    fields: {
      code: {
        language: {
          label: 'Programmiersprache',
          placeholder: 'z.B. JavaScript, Python, usw.',
        },
        functionality: {
          label: 'Was soll der Code machen?',
          placeholder: 'Beschreiben Sie die gewünschte Funktionalität im Detail',
        },
        constraints: {
          label: 'Technische Anforderungen',
          placeholder: 'Listen Sie spezifische Anforderungen, Frameworks oder Einschränkungen auf',
        },
        complexity: {
          label: 'Code-Komplexität',
          options: {
            basic: 'Einfach',
            intermediate: 'Mittel',
            advanced: 'Fortgeschritten',
          },
        },
      },
      image: {
        subject: {
          label: 'Hauptmotiv',
          placeholder: 'Was soll im Fokus des Bildes stehen?',
        },
        style: {
          label: 'Kunststil',
          placeholder: 'z.B. Fotorealistisch, Anime, Ölgemälde, usw.',
        },
        mood: {
          label: 'Stimmung/Atmosphäre',
          placeholder: 'z.B. Dramatisch, Friedlich, Energetisch',
        },
        composition: {
          label: 'Kompositionsdetails',
          placeholder: 'Beschreiben Sie Beleuchtung, Kamerawinkel, Hintergrund, usw.',
        },
      },
      video: {
        concept: {
          label: 'Videokonzept',
          placeholder: 'Beschreiben Sie das Gesamtkonzept und die Handlung',
        },
        duration: {
          label: 'Dauer',
          placeholder: 'z.B. 15 Sekunden, 1 Minute',
        },
        style: {
          label: 'Visueller Stil',
          placeholder: 'z.B. Kinematografisch, Animation, Dokumentarisch',
        },
        elements: {
          label: 'Schlüsselelemente',
          placeholder: 'Listen Sie wichtige visuelle Elemente, Übergänge, Effekte auf',
        },
      },
    },
  },
  es: {
    title: 'Generador de Prompts',
    generateButton: 'Generar Prompt',
    generatedPromptTitle: 'Prompt Generado',
    copyButton: 'Copiar',
    categories: {
      code: 'Código',
      image: 'Imagen',
      video: 'Vídeo',
    },
    fields: {
      code: {
        language: {
          label: 'Lenguaje de Programación',
          placeholder: 'ej. JavaScript, Python, etc.',
        },
        functionality: {
          label: '¿Qué debe hacer el código?',
          placeholder: 'Describe la funcionalidad deseada en detalle',
        },
        constraints: {
          label: 'Requisitos Técnicos',
          placeholder: 'Enumera requisitos específicos, frameworks o limitaciones',
        },
        complexity: {
          label: 'Complejidad del Código',
          options: {
            basic: 'Básico',
            intermediate: 'Intermedio',
            advanced: 'Avanzado',
          },
        },
      },
      image: {
        subject: {
          label: 'Tema Principal',
          placeholder: '¿Cuál debe ser el foco de la imagen?',
        },
        style: {
          label: 'Estilo Artístico',
          placeholder: 'ej. Fotorrealista, Anime, Pintura al Óleo, etc.',
        },
        mood: {
          label: 'Estado de Ánimo/Atmósfera',
          placeholder: 'ej. Dramático, Tranquilo, Enérgico',
        },
        composition: {
          label: 'Detalles de Composición',
          placeholder: 'Describe iluminación, ángulo de cámara, fondo, etc.',
        },
      },
      video: {
        concept: {
          label: 'Concepto del Vídeo',
          placeholder: 'Describe el concepto general y la narrativa',
        },
        duration: {
          label: 'Duración',
          placeholder: 'ej. 15 segundos, 1 minuto',
        },
        style: {
          label: 'Estilo Visual',
          placeholder: 'ej. Cinematográfico, Animación, Documental',
        },
        elements: {
          label: 'Elementos Clave',
          placeholder: 'Enumera elementos visuales importantes, transiciones, efectos',
        },
      },
    },
  },
};