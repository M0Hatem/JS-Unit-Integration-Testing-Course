import { calculateResult } from "./src/math.js";
import { extractEnteredNumberValues } from "./src/parser";
import { generateResultText, outPutResult } from "./src/output";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = extractEnteredNumberValues(form);

  const result = calculateResult(numberInputs);
  const resultText = generateResultText(result);

  outPutResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
