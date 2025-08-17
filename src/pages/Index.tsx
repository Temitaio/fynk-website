import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";
import { ArrowRight, Code, Settings, Zap, Users, CheckCircle, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="relative z-50 border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                Fynk
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                Contact
              </a>
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient-subtle">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Expert IT Solutions
              <span className="block bg-hero-gradient bg-clip-text text-transparent">
                for Modern Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              Professional software development, system configuration, and seamless integrations 
              that transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button variant="hero" size="lg" className="group">
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-card-hover transition-all duration-300 group border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-16 h-16 bg-hero-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Software Development</h3>
                <p className="text-muted-foreground">
                  Custom software solutions built with modern technologies. From web applications 
                  to enterprise systems, we deliver scalable and maintainable code.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Web & Mobile Applications
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  API Development & Integration
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Database Design & Optimization
                </li>
              </ul>
              <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-card-hover transition-all duration-300 group border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-16 h-16 bg-tech-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">System Configuration</h3>
                <p className="text-muted-foreground">
                  Expert setup and optimization of your IT infrastructure. We ensure your 
                  systems run efficiently and securely at all times.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Server Setup & Management
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Security Configuration
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Performance Optimization
                </li>
              </ul>
              <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-card-hover transition-all duration-300 group border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-glow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">System Integrations</h3>
                <p className="text-muted-foreground">
                  Seamless integration of your existing systems and third-party services. 
                  We connect your tools to create unified, efficient workflows.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Third-party API Integration
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Legacy System Modernization
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Data Migration & Sync
                </li>
              </ul>
              <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-hero-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Fynk?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience in enterprise IT solutions, we bring expertise, 
                reliability, and innovation to every project. Our team of skilled professionals 
                is committed to delivering solutions that drive real business value.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Certified professionals with deep technical expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">Agile development with quick turnaround times</p>
                  </div>
                </div>
              </div>
              
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <span className="font-medium">Discovery & Planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <span className="font-medium">Design & Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <span className="font-medium">Development & Testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <span className="font-medium">Deployment & Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help you achieve your technology goals. 
            Contact us today for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a href="mailto:contact@fynk.ca" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>contact@fynk.ca</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                Fynk
              </h3>
              <p className="text-muted-foreground mt-2">
                Expert IT Solutions for Modern Business
              </p>
            </div>
            
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-foreground transition-colors">Services</a>
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50 text-sm text-muted-foreground">
              <p>&copy; 2024 Fynk. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;