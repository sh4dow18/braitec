// Set this component as a client component
"use client";
// Input Section Requirements
import { ChangeEvent, useState } from "react";
// Input Section Props
type Props = {
  label: string;
  type: string;
  name: string;
  example: string;
  help: string;
  autoComplete?: string;
  maxLenght?: number;
  validation?: string;
};
// Input Section Regular Expressions
const REGEX: Record<string, RegExp> = {
  // A name must have at least 2 words with a space between them
  // Example: Ramsés Solano
  name: /^(?:\b[a-zA-ZÀ-ÖØ-öø-ÿ]+\b\s+){1,2}\b[a-zA-ZÀ-ÖØ-öø-ÿ]+\b$/,
  // An e-mail must be a valid regular email
  // Example: ramses.solano@braitec.cr
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
};
// Input Section Main Function
function InputSection({
  label,
  type,
  name,
  example,
  help,
  autoComplete,
  maxLenght,
}: Props) {
  // Set a valid input state
  const [state, SetState] = useState<"Valid" | "Neutral" | "Invalid">(
    "Neutral"
  );
  // Input on Change Function
  const OnChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Event Value
    const VALUE = event.target.value;
    // If Value is Empty, set Neutral
    if (VALUE.length == 0) {
      SetState("Neutral");
    }
    // If is not empty, check if it is valid
    else {
      // If Value is Valid, set Valid
      if (REGEX[name].test(VALUE)) {
        SetState("Valid");
        return;
      }
      // If Value is not Valid, set Invalid
      SetState("Invalid");
    }
  };
  // Returns Input Section Component
  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={example}
        autoComplete={autoComplete || "on"}
        maxLength={maxLenght}
        onChange={OnChange}
        aria-invalid={state !== "Neutral" ? state === "Invalid" : undefined}
        required
      />
      {/* Help means advice to the user on what the input should be like */}
      <small>{help}</small>
    </section>
  );
}

export default InputSection;
