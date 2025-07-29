import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morphing"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-premium-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in-up">
            Get In Touch
          </h2>
          <p
            className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Let's Connect
            </h3>
            <div className="space-y-6">
              <div
                className="flex items-center space-x-4 group animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:animate-premium-glow">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-muted-foreground">srinivaspa374@gmail.com</p>
                </div>
              </div>
              <div
                className="flex items-center space-x-4 group animate-fade-in-up"
                style={{ animationDelay: "500ms" }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:animate-premium-glow">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    Phone
                  </h4>
                  <p className="text-muted-foreground">+91 8919110875</p>
                </div>
              </div>
              <div
                className="flex items-center space-x-4 group animate-fade-in-up"
                style={{ animationDelay: "600ms" }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:animate-premium-glow">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    Location
                  </h4>
                  <p className="text-muted-foreground">Gurgaon, Haryana India</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 ease-premium hover:shadow-premium transform hover:scale-105 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-card-foreground">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 backdrop-blur-sm"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group shadow-glow hover:shadow-hover transition-all duration-500"
                >
                  <span className="relative z-10">Send Message</span>
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
