/** Post Ticket Todo's
 * Event details ==>
 * event name
 * event descriptions
 * event type
 * event date and time
 * event address
 * event image
 * event hashtag
 */

// import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ImageInput from "@/components/ImageInput";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePickerDemo } from "@/components/DatePicker";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  event_date: z.date(),
  event_type: z.string().min(2, {
    message: "Event type must be at least 2 characters.",
  }),
  event_address: z.string().min(2, {
    message: "Event address must be at least 2 characters.",
  }),
  event_name: z.string().min(2, {
    message: "Event name must be at least 2 characters.",
  }),
  event_descriptions: z.string().min(10, {
    message: "Event description must be at least 10 characters.",
  }),
  event_image: z.any(),
});

interface Props {
  handleNext: VoidFunction;
}

export default function EventDetails(props: Props) {
  const { handleNext } = props;

  // const [file, setFile] = React.useState<File | null | Blob>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      event_name: "",
      event_descriptions: "",
      event_type: "",
      event_address: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    handleNext();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-full space-y-3"
      >
        <div className="grid md:grid-cols-2 gap-3 md:border md:border-solid md:rounded-md md:p-3 md:bg-muted/40">
          <FormField
            control={form.control}
            name="event_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="event name"
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="event_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event type</FormLabel>
                <FormControl>
                  <Input
                    placeholder="event type"
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:border md:border-solid md:rounded-md md:p-3 md:bg-muted/40">
          <FormField
            control={form.control}
            name="event_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Date</FormLabel> <br />
                <FormControl>
                  <DatePickerDemo
                    onSetDate={field.onChange}
                    date={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="event_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="event address"
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:border md:border-solid md:rounded-md md:p-3 md:bg-muted/40">
          <FormField
            control={form.control}
            name="event_descriptions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Descriptions</FormLabel> <br />
                <FormControl>
                  <Textarea
                    placeholder="event descriptions..."
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="event_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Banner</FormLabel> <br />
                <FormControl>
                  <ImageInput handleFile={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <Button type="submit" className="col-span-1">
            Next
          </Button>
          <div className="col-span-1"></div>
        </div>
      </form>
    </Form>
  );
}
