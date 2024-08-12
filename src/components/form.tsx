// Set this component as a client component
"use client";
// Form Stylesheets
import "@/stylesheets/components/form.css";
// Form Requirements
import { FormEvent, useEffect, useRef, useState } from "react";
// Form Props
type Props = {
  api: string;
  method: "GET" | "POST" | "PUT";
  button: string;
  children: React.ReactNode;
};
// Form Main Function
function Form({ api, method, button, children }: Props) {
  // Button Disabled State that always starts with true
  const [disabled, SetDisabled] = useState<boolean>(true);
  // Form Reference
  const REFERENCE = useRef<HTMLFormElement | null>(null);
  // Form Submit Function
  const Submit = async (event: FormEvent<HTMLFormElement>) => {
    // Avoid refreshing the page
    event.preventDefault();
    // Create a Form Data with actual form
    const FORM = new FormData(event.currentTarget);
    // Get the data form every input in form
    const DATA = Object.fromEntries(FORM.entries());
    // Make a request to project api to make something
    fetch(`/api/${api}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DATA),
    });
  };
  // Form Main Use Effect Hook
  useEffect(() => {
    // Update Disable Attribute in Submit Button
    const UpdateButton = () => {
      // If the Reference Exists, continue
      if (REFERENCE.current) {
        // First, get every Input and Textarea in the Form
        // Later, create a new key-value array with input name and aria-invalid attribute
        // Example: [ ["name", true], ["email", false] ]
        const inputsList = Array.from(
          REFERENCE.current.querySelectorAll<
            HTMLInputElement | HTMLTextAreaElement
          >("input, textarea")
        ).map((input) => [
          input.name,
          input.getAttribute("aria-invalid") === "false",
        ]);
        // Create a new object from a key-value array
        // Example: From [ ["name", true], ["email", false] ] to { name: true, email: false }
        const FORM_OBJECT = Object.fromEntries(inputsList);
        // Get values from FORM_OBJECT to check if every value is true
        // If it is true, set false, if not, set true
        SetDisabled(!Object.values(FORM_OBJECT).every(Boolean));
      }
    };
    // Update Button Function Call
    UpdateButton();
    // Create a new observer for "aria invalid" attributes to update the disabled attribute on the Submit button
    // Mutation Observer can observe changes in the DOM
    const ARIA_INVALID_OBSERVER = new MutationObserver(UpdateButton);
    // If the Reference Exists, continue
    if (REFERENCE.current) {
      // Aria Invalid Observer can observe attributes and subtrees, but focuses on the aria-invalid attribute
      ARIA_INVALID_OBSERVER.observe(REFERENCE.current, {
        attributes: true,
        subtree: true,
        attributeFilter: ["aria-invalid"],
      });
    }
    // When useEffect finishes, unmount the observer
    return () => {
      ARIA_INVALID_OBSERVER.disconnect();
    };
  }, []);
  // Return Form Component
  return (
    <form className="form-container" ref={REFERENCE} onSubmit={Submit}>
      {/* Inputs and Textarea Components */}
      {children}
      {/* Sent Message Button */}
      <button type="submit" disabled={disabled}>
        {button}
      </button>
    </form>
  );
}

export default Form;
