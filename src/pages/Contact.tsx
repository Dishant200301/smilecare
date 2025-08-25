import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@zeniq.ai",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "123 Innovation Street, Suite 100"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8am - 6pm PST",
      description: "Weekend support available for enterprise clients"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="hero-text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with AI automation? We're here to help you 
              get started and answer any questions you might have.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="service-card text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-2">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Contact Form & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 hero-text-gradient">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your business and how we can help..." 
                      rows={6}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4 hero-text-gradient">
                    Schedule a Free Consultation
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Book a 30-minute consultation with our experts to discuss your 
                    business needs and see how our AI automation can help you grow.
                  </p>
                  <Button className="btn-primary w-full">
                    Book Free Consultation
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4 hero-text-gradient">
                    Enterprise Sales
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Looking for enterprise solutions? Our dedicated sales team can 
                    help you with custom pricing and implementation plans.
                  </p>
                  <Button variant="outline" className="btn-outline w-full">
                    Contact Sales Team
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4 hero-text-gradient">
                    Technical Support
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Need help with your existing ZenIQ setup? Our technical support 
                    team is here to assist you.
                  </p>
                  <Button variant="outline" className="btn-outline w-full">
                    Get Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common <span className="hero-text-gradient">Questions</span>
              </h2>
              <p className="text-muted-foreground">
                Quick answers to questions you might have before reaching out.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I get started?",
                  answer: "Most clients are up and running within 24-48 hours. Our setup process is designed to be quick and seamless."
                },
                {
                  question: "Do you offer custom integrations?",
                  answer: "Yes, we can integrate with most existing business tools and software. Our team will work with you to ensure smooth integration."
                },
                {
                  question: "What kind of support do you provide?",
                  answer: "We offer 24/7 technical support, dedicated account managers for enterprise clients, and comprehensive training resources."
                },
                {
                  question: "Is my data secure?",
                  answer: "Absolutely. We use bank-level encryption and are compliant with GDPR, HIPAA, and other major security standards."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;