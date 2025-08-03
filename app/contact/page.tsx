"use client";

import { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import EnhancedContactForm from "../components/EnhancedContactForm";
import ClientOnlyParticleSystem from "../components/ClientOnlyParticleSystem";
import {
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  Send,
  Clock,
  Shield,
  Zap,
  CheckCircle,
  Globe,
  Calendar,
  Coffee,
  Code,
  Heart,
} from "lucide-react";

interface ValidationResult {
  success: boolean;
  message: string;
}

export default function ContactPage() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Initializing secure connection...",
    "Establishing encrypted channel...",
    "Verifying communication protocols...",
    "Ready to receive your message.",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < steps.length) {
        setCurrentStep(currentIndex);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);
    setIsMessageVisible(false);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/validateForm", {
        method: "POST",
        body: formData,
      });
      const formState: ValidationResult = await response.json();

      if (formState.success) {
        setIsSuccess(true);
        setResponseMessage("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        setIsSuccess(false);
        setHasError(true);
        setResponseMessage(formState.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setHasError(true);
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setIsMessageVisible(true);
      setTimeout(() => {
        setIsMessageVisible(false);
        setHasError(false);
      }, 5000);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setHasError(false);
    setIsMessageVisible(false);
    setEmail("");
    setMessage("");
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/5 rounded-full blur-xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-4 text-center relative z-10"
        >
          <div className="modern-card p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-success to-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <CheckCircle className="w-12 h-12 text-nord-0" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">Message Sent!</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted leading-relaxed mb-8">
                Thank you for reaching out! I'll get back to you within 24
                hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div className="modern-card p-4 bg-success/10 border-success/20">
                  <Clock className="w-6 h-6 text-success mx-auto mb-2" />
                  <div className="text-sm text-success">Response Time</div>
                  <div className="text-lg font-bold text-success">
                    &lt; 24 hours
                  </div>
                </div>

                <div className="modern-card p-4 bg-primary/10 border-primary/20">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-primary">Secure</div>
                  <div className="text-lg font-bold text-primary">
                    Encrypted
                  </div>
                </div>

                <div className="modern-card p-4 bg-secondary/10 border-secondary/20">
                  <Heart className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="text-sm text-secondary">Status</div>
                  <div className="text-lg font-bold text-secondary">
                    Delivered
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetForm}
                  className="modern-btn primary px-8 py-4 flex items-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Another Message
                </button>

                <a
                  href="/"
                  className="modern-btn accent px-8 py-4 flex items-center gap-3 group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Back to Home
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <ClientOnlyParticleSystem />
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gradient relative">
              Let&apos;s Connect
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your ideas into exceptional digital experiences?
            Let's start a conversation about your next project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted"
          >
            <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Clock className="w-4 h-4" />
              Response within 24 hours
            </span>
            <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              <Shield className="w-4 h-4" />
              Secure & encrypted
            </span>
            <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
              <Coffee className="w-4 h-4" />
              Free consultation
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="modern-card p-8 mb-16 max-w-3xl mx-auto"
        >
          <h3 className="text-lg font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
            <Zap className="w-5 h-5 text-primary" />
            Secure Connection Status
          </h3>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: index <= currentStep ? 1 : 0.3,
                  x: 0,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                  index <= currentStep
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-background-elevated text-muted"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    index <= currentStep ? "bg-primary" : "bg-muted"
                  } ${index === currentStep ? "animate-pulse" : ""}`}
                ></div>
                <span className="font-mono text-sm flex-1">{step}</span>
                {index === currentStep && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                  />
                )}
                {index < currentStep && (
                  <CheckCircle className="w-4 h-4 text-primary" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <EnhancedContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="modern-card p-6 lg:p-10 relative overflow-hidden group">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6 lg:mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-nord-0" />
                </div>
                Get in Touch
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:contact@aleksmanov.me"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background-elevated hover:bg-primary/10 transition-all duration-300 group/item"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-nord-0" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted">contact@aleksmanov.me</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary ml-auto group-hover/item:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/aleksmanov"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background-elevated hover:bg-secondary/10 transition-all duration-300 group/item"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                    <Linkedin className="w-6 h-6 text-nord-0" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      LinkedIn
                    </div>
                    <div className="text-muted">Connect professionally</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary ml-auto group-hover/item:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="https://github.com/Ception"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background-elevated hover:bg-accent/10 transition-all duration-300 group/item"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                    <Github className="w-6 h-6 text-nord-0" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">GitHub</div>
                    <div className="text-muted">View my code</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-accent ml-auto group-hover/item:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            <div className="modern-card p-6 lg:p-10 relative overflow-hidden group">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-success to-primary rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-nord-0" />
                </div>
                Quick Info
              </h3>

              <div className="grid gap-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-background-elevated">
                  <span className="text-muted flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Response Time
                  </span>
                  <span className="font-semibold text-success">
                    &lt; 24 hours
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-background-elevated">
                  <span className="text-muted flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Timezone
                  </span>
                  <span className="font-semibold text-primary">UTC-4</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-background-elevated">
                  <span className="text-muted flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Availability
                  </span>
                  <span className="font-semibold text-secondary">
                    Open to projects
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-success/10 to-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
          className={`absolute w-2 h-2 rounded-full pulse-subtle ${
            i % 3 === 0
              ? "bg-primary"
              : i % 3 === 1
              ? "bg-secondary"
              : "bg-accent"
          }`}
          style={{
            left: `${5 + i * 15}%`,
            top: `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
