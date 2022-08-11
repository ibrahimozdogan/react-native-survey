import axios from 'axios';
import { endpoints } from '@Config';
import { Question } from '@Types';

const fetchQuestions = () => axios.get<Question[]>(
    endpoints.FETCH_QUESTIONS,
);

export {
    fetchQuestions,
};
