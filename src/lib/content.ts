const API_URL = "http://localhost:3000/content";

/**
 * Fetch the content from the api
 */
const fetchContent = async () => {
  return new Promise((resolve, reject) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((resp) => resolve(resp.content))
      .catch((err) => reject(err));
  });
};

/**
 * Parse the content into sentences, and return an array of sentences. Look at the Readme for sample input and expected output.
 * Avoid using DOMParser for implementing this function.
 */
const parseContentIntoSentences = (content: string): string[] => {
  const parser = new DOMParser();
  let output = [] as string[];
  const node = parser.parseFromString(content, "text/xml");
  function recursiveHelper(element: any){
    for(let i = 0; i < element.childNodes.length; i++){
      if(element.childNodes[i].tagName !== "s")
        {
          recursiveHelper(element.childNodes[i])
        }else {
          // its starts with another tag
          output = [...output, element.childNodes[i].textContent ]
        }
    }
  }
  recursiveHelper(node);
  return output;
};

export { fetchContent, parseContentIntoSentences };
