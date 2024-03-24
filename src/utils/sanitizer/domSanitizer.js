import DOMPurify from "dompurify";

const scriptContent = '<script></script>';
const sanitizedScriptContent = DOMPurify.sanitize(scriptContent);
export const scriptElement = document.createElement('script');
scriptElement.innerHTML = sanitizedScriptContent;