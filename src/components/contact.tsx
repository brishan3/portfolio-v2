import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-transparent" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  Get in Touch
                </h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6">
                  I am available for freelance or full-time positions. Contact me and let&apos;s talk about how we can work together to bring your ideas to life.
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                <li>
                  <Link href="mailto:brishanking3@gmail.com" className="hover:text-accent-foreground">
                    <Mail className="size-5 mr-2 inline" />
                    <span>brishanking3@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/brishan3" target="_blank" className="hover:text-accent-foreground">
                    <svg className="size-5 mr-2 inline" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                    </svg>
                    <span>github.com/brishan3</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com/in/brishan-king" target="_blank" className="hover:text-accent-foreground">
                    <svg className="size-5 mr-2 inline" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>linkedin.com/in/brishan-king</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://brishanking.me" target="_blank" className="hover:text-accent-foreground">
                    <MapPin className="size-5 mr-2 inline" />
                    <span>Vancouver, BC, Canada</span>
                  </Link>
                </li>
              </ul>
            </ScrollView>
          </div>
          <div className="lg:col-span-3">
            <ScrollView>
              <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full">
                <div>
                  <h3 className="text-lg font-semibold">
                    Brishan King
                  </h3>
                  <p className="mt-4 text-sm">
                    Full-Stack Developer
                  </p>
                  <p className="mt-2 text-sm">
                    Ready to discuss your next project? Send me a message and let&apos;s connect!
                  </p>
                </div>

                <form
                  action=""
                  className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
                >
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input type="tel" id="phone" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" required />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input type="text" id="subject" />
                  </div>

                  {/* <div>
                            <Label htmlFor="country">Country/Region</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Country/Region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">DR Congo</SelectItem>
                                    <SelectItem value="2">United States</SelectItem>
                                    <SelectItem value="3">France</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="website">Company Website</Label>
                            <Input type="url" id="website" />
                            <span className="text-muted-foreground inline-block text-sm">Must start with 'https'</span>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="job">Job function</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Job Function" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Finance</SelectItem>
                                    <SelectItem value="2">Education</SelectItem>
                                    <SelectItem value="3">Legal</SelectItem>
                                    <SelectItem value="4">More</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  <div>
                    <Label htmlFor="msg">Message</Label>
                    <Textarea id="msg" rows={3} />
                  </div>

                  <Button>Send Message</Button>
                </form>
              </Card>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
