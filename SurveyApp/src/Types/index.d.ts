interface BaseQuestion {
    id: number;
    type: 'scale' | 'text-area' | 'checkbox' | 'radio';
    question: string;
}

interface ScaleQuestion extends BaseQuestion {
    type: 'scale';
    max: 2 | 3 | 4 | 5;
}

interface SingleChoiceQuestion extends BaseQuestion {
    type: 'radio';
    options: { label: string; value: string }[];
}

interface MultiChoiceQuestion extends BaseQuestion {
    type: 'checkbox';
    options: { label: string; value: string }[];
    maxSelectableCount?: number;
}

interface TextInputQuestion extends BaseQuestion {
    type: 'text-area';
}

export type Question = ScaleQuestion | SingleChoiceQuestion | MultiChoiceQuestion | TextInputQuestion;

export type Answer = { id: number; answer: string|number; question: string }
