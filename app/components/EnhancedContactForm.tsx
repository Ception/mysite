"use client";

import { useEffect, useState, FormEvent, useActionState } from "react";
 import { useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { validateForm as serverValidateForm } from "../utils/sendEmail";
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Eye,
  EyeOff,
} from "lucide-react";

interface ValidationResult {
  success: boolean;
  message: string;
}

interface FormErrors {
  email?: string;
  message?: string;
}

interface FormData {
  email: string;
  message: string;
  name?: string;
}

function SubmitButton({ disabledByErrors }: { disabledByErrors: boolean }) {
  const { pending } = useFormStatus();
  const disabled = pending || disabledByErrors;
  return (
    <motion.button
      type="submit"
      disabled={disabled}
      className={`w-full modern-btn primary text-lg py-5 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {pending ? (
        <span className="flex items-center justify-center gap-3">
          <motion.div
            className="w-5 h-5 border-2 border-nord-0 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          Sending Message...
        </span>
      ) : (
        <span className="flex items-center justify-center gap-3">
          <Send className="w-5 h-5" />
          Send Message
        </span>
      )}
    </motion.button>
  );
}

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
    name: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showPreview, setShowPreview] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const initialActionState: ValidationResult & { success: boolean | null } = {
    success: null,
    message: "",
  };
  const [actionState, formAction] = useActionState(serverValidateForm, initialActionState);

  // Real-time validation
  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case "email":
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address";
        }
        return undefined;
      case "message":
        if (!value) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        if (value.length > 1000)
          return "Message must be less than 1000 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Real-time validation
    const error = validateField(field, value);
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSubmitStatus({ type: null, message: "" });

    // Validate all fields
    const newErrors: FormErrors = {};
    newErrors.email = validateField("email", formData.email);
    newErrors.message = validateField("message", formData.message);

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (actionState.success === null) return;
    if (actionState.success) {
      setSubmitStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ email: "", message: "", name: "" });
      setErrors({});
    } else {
      setSubmitStatus({ type: "error", message: actionState.message || "Submission failed" });
    }
  }, [actionState.success, actionState.message]);

  

  const getInputVariants = (hasError: boolean, isFocused: boolean) => ({
    initial: { borderColor: "var(--border)" },
    animate: {
      borderColor: hasError
        ? "var(--error)"
        : isFocused
        ? "var(--primary)"
        : "var(--border)",
      boxShadow: hasError
        ? "0 0 0 3px rgba(191, 97, 106, 0.1)"
        : isFocused
        ? "0 0 0 3px rgba(136, 192, 208, 0.1)"
        : "none",
    },
    transition: { duration: 0.2 },
  });

  const characterCount = formData.message.length;
  const maxCharacters = 1000;

  return (
    <div className="modern-card p-8 relative overflow-hidden group">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-nord-0" />
          </div>
          Enhanced Contact Form
        </h2>
        <p className="text-muted">
          Let&apos;s discuss your project with real-time validation and preview
        </p>
      </div>

      <form action={formAction} onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field (Optional) */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="flex items-center gap-2 text-primary font-semibold">
            <User className="w-4 h-4" />
            Name (Optional)
          </label>
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            placeholder="Your name"
            className="w-full modern-input focus-ring text-lg py-4"
            {...getInputVariants(false, focusedField === "name")}
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label className="flex items-center gap-2 text-primary font-semibold">
            <Mail className="w-4 h-4" />
            Email Address *
          </label>
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder="your.email@domain.com"
            className="w-full modern-input focus-ring text-lg py-4"
            required
            {...getInputVariants(!!errors.email, focusedField === "email")}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-error text-sm"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Field */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-primary font-semibold">
              <MessageCircle className="w-4 h-4" />
              Your Message *
            </label>
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
            >
              {showPreview ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
          </div>

          <div className="space-y-4">
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              placeholder="Tell me about your project, goals, timeline, budget, or just say hello..."
              className="w-full modern-input focus-ring min-h-[200px] resize-none text-lg py-4"
              required
              {...getInputVariants(
                !!errors.message,
                focusedField === "message"
              )}
            />

            {/* Character Count */}
            <div className="flex justify-between items-center text-sm">
              <AnimatePresence>
                {errors.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-error"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.span
                className={`${
                  characterCount > maxCharacters
                    ? "text-error"
                    : characterCount > maxCharacters * 0.8
                    ? "text-warning"
                    : "text-muted"
                }`}
                animate={{
                  scale: characterCount > maxCharacters ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {characterCount}/{maxCharacters}
              </motion.span>
            </div>

            {/* Message Preview */}
            <AnimatePresence>
              {showPreview && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="modern-card p-4 bg-background-elevated"
                >
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    Message Preview
                  </h4>
                  <div className="text-muted text-sm leading-relaxed whitespace-pre-wrap">
                    {formData.message || "Your message will appear here..."}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Submit Button */}
        <SubmitButton disabledByErrors={Object.values(errors).some((e) => !!e)} />
      </form>

      {/* Submit Status */}
      <AnimatePresence>
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`mt-8 p-6 rounded-xl border flex items-center gap-3 ${
              submitStatus.type === "error"
                ? "bg-error/10 border-error/30 text-error"
                : "bg-success/10 border-success/30 text-success"
            }`}
          >
            {submitStatus.type === "error" ? (
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
            ) : (
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
            )}
            <span className="font-medium">{submitStatus.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Effect */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
    </div>
  );
}
