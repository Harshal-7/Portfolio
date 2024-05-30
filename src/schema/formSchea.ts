import * as z from "zod";

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Enter valid email address",
  }),
  message: z.string(),
});
