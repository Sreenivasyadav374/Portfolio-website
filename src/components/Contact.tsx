import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'your_template_id', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'your_public_key', // Replace with your EmailJS public key
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset submit status
    setSubmitStatus('idle');
    
    // Validate form
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors below and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.SERVICE_ID === 'your_service_id' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'your_template_id' || 
          EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key') {
        throw new Error('EmailJS not configured. Please check the setup instructions.');
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'srinivaspa374@gmail.com',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        
        // Reset form
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      let errorMessage = "There was an error sending your message. Please try again.";
      
      if (error instanceof Error) {
        if (error.message.includes('not configured')) {
          errorMessage = "Email service is not configured. Please contact me directly at srinivaspa374@gmail.com";
        } else if (error.message.includes('network')) {
          errorMessage = "Network error. Please check your connection and try again.";
        }
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morphing"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-premium-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-in-up bg-[length:200%_200%] animate-gradient-x">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 animate-premium-glow">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Email</h4>
                  <p className="text-muted-foreground">srinivaspa374@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 animate-premium-glow">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 animate-premium-glow">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 ease-premium hover:shadow-premium transform hover:scale-105 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                Send Message
                {submitStatus === 'success' && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                {submitStatus === 'error' && (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-background/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm ${
                      errors.name ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-background/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm ${
                      errors.email ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`bg-background/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full relative overflow-hidden group shadow-glow hover:shadow-hover transition-all duration-500 ${
                    submitStatus === 'success' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-primary hover:bg-primary/90'
                  } text-primary-foreground`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Message Sent!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <AlertCircle className="w-4 h-4" />
                        Try Again
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;