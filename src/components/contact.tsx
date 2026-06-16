"use client";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";
import { useState } from "react";

export default function FeaturesSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32" id="contact">
      <div className="ambient-orb left-[-10rem] top-10 -z-10 size-72 bg-taupe/35" />
      <div className="contour-field absolute inset-x-0 bottom-0 -z-10 h-80 opacity-25" />
      <div className="section-shell">
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <div className="space-y-4">
                  <span className="eyebrow">Contact</span>
                  <h2 className="text-balance text-5xl font-semibold leading-none md:text-6xl">
                    Have a project in mind?
                  </h2>
                </div>
              </ScrollView>
              <ScrollView>
                <p className="mt-6 max-w-md">
                  Send a quick note about what you&apos;re building, where you
                  are in the process, and what kind of help would move it
                  forward.
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 space-y-3">
                <li>
                  <Link
                    href="mailto:brishan.king@gmail.com"
                    className="depth-card flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Mail className="size-4" />
                    <span>brishan.king@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/brishan3"
                    target="_blank"
                    className="depth-card flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Github className="size-4" />
                    <span>github.com/brishan3</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com/in/brishan-king"
                    target="_blank"
                    className="depth-card flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Linkedin className="size-4" />
                    <span>linkedin.com/in/brishan-king</span>
                  </Link>
                </li>
                <li>
                  <div className="depth-card flex items-center gap-3 rounded-2xl px-4 py-3 text-sm">
                    <MapPin className="size-4" />
                    <span>Vancouver, BC, Canada</span>
                  </div>
                </li>
              </ul>
            </ScrollView>
          </div>
          <div className="lg:col-span-3">
            <ScrollView>
              <Card className="surface-card mx-auto w-full max-w-2xl rounded-[2rem] p-6 sm:p-10">
                <div>
                  <h3 className="text-title text-3xl font-semibold leading-none">
                    Start the conversation
                  </h3>
                  <p className="mt-3 text-sm">
                    A few sentences are enough. I&apos;ll follow up with the
                    right questions.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="**:[&>label]:block mt-10 grid gap-5 *:space-y-2 sm:grid-cols-2"
                >
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="rounded-2xl border border-primary/25 bg-sage/20 p-4 sm:col-span-2">
                      <p className="text-sm text-foreground">
                        Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="rounded-2xl border border-destructive/25 bg-destructive/10 p-4 sm:col-span-2">
                      <p className="text-sm text-foreground">
                        Sorry, there was an error sending your message. Please try again or contact me directly.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-fit rounded-full px-6 sm:col-span-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
