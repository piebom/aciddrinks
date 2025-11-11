"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  naam: z.string().min(1, "Naam van de zaak is verplicht"),
  adres: z.string().min(1, "Adres is verplicht"),
  telefoonnummer: z.string().min(1, "Telefoonnummer is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      naam: "",
      adres: "",
      telefoonnummer: "",
      email: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Er is een fout opgetreden");
      }

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="naam"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold text-sm">
                  Naam van de zaak
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border-gray-300 text-gray-900 h-11"
                    placeholder="Naam van de zaak"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="adres"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold text-sm">
                  Adres
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border-gray-300 text-gray-900 h-11"
                    placeholder="Adres"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefoonnummer"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 font-semibold text-sm">
                  Telefoonnummer
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    className="bg-white border-gray-300 text-gray-900 h-11"
                    placeholder="Telefoonnummer"
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
                <FormLabel className="text-gray-900 font-semibold text-sm">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="bg-white border-gray-300 text-gray-900 h-11"
                    placeholder="Email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-6 text-base shadow-lg transition-all duration-200"
          >
            {isSubmitting ? "Verzenden..." : "Verzenden"}
          </Button>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 text-sm font-semibold text-center">
                Bedankt! We hebben je bericht ontvangen.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-semibold text-center">
                Er is een fout opgetreden. Probeer het later opnieuw.
              </p>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

