import { QuestionnaireProps } from '../types';

const API_URL = "http://localhost:3000/fetch-questionnaire";

/**
 * Fetch the content from the api
 */
const fetchContent = async (): Promise<QuestionnaireProps[]> => {
  return new Promise((resolve, reject) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
};


export { fetchContent };