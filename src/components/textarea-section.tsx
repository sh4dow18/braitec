// Set this component as a client component
"use client";
// Textarea Section Requirements
import { ChangeEvent, useState } from "react";
// Textarea Section Props
type Props = {
  label: string;
  name: string;
  example: string;
  maxLength?: number;
};
// Textarea Section Main Function
function TextareaSection({ label, name, example, maxLength }: Props) {
  // Set a valid input state
  const [state, SetState] = useState<"Valid" | "Neutral">("Neutral");
  // Textarea on Change Function
  const OnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // Event Value
    const VALUE = event.target.value;
    // If Value is Empty, set Neutral
    if (VALUE.length === 0) {
      SetState("Neutral");
    }
     // If is not empty, set Valid
    else {
      SetState("Valid");
    }
  };
  // Returns Textarea Section Component
  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        placeholder={example}
        rows={maxLength ? Math.ceil(maxLength / 50) : 1}
        maxLength={maxLength}
        autoComplete="on"
        autoCorrect="on"
        onChange={OnChange}
        aria-invalid={state === "Valid" ? false : undefined}
        required
      />
      {/* If Max Length was submitted, displays the max number of characters the textarea supports */}
      {maxLength && <small>Máximo {maxLength} caracteres</small>}
    </section>
  );
}

export default TextareaSection;
