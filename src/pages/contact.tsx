import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast"; 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: InsertContact) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <div className="container py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch with our team for inquiries about our services or to book your next flight.
          </p>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Main Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p>123 Aviation Way</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@skyluxe.com</p>
                <p>Hours: 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
        <Card className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
  <CardHeader>
    <CardTitle className="text-3xl font-semibold text-gray-800">Send us a message</CardTitle>
  </CardHeader>
  <CardContent>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => mutate(data))}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-700">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="border border-gray-300 focus:ring-2 focus:ring-primary-500 rounded-lg p-3 w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-700">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email"
                  type="email"
                  className="border border-gray-300 focus:ring-2 focus:ring-primary-500 rounded-lg p-3 w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-700">Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Message subject"
                  className="border border-gray-300 focus:ring-2 focus:ring-primary-500 rounded-lg p-3 w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-700">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[120px] border border-gray-300 focus:ring-2 focus:ring-primary-500 rounded-lg p-3 w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

     <Button
       type="submit"
       className="w-full py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-all duration-300"
       disabled={isPending}
      >
       {isPending ? "Sending..." : "Send Message"}
     </Button>   
      </form>
    </Form>
  </CardContent>
</Card>

        </div>
      </div>
    </div>
  );
}
