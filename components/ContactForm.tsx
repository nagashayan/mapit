// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/hooks/use-toast"

// export default function ContactForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const { success } = useToast()

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000))

//     success({
//       title: "Message sent!",
//       description: "We'll get back to you as soon as possible.",
//     })

//     setIsSubmitting(false)
//       ; (e.target as HTMLFormElement).reset()
//   }

//   return (
//     // <form onSubmit={handleSubmit} className="space-y-6">
//     //   <div>
//     //     <Input
//     //       placeholder="Your Name"
//     //       required
//     //       className="w-full"
//     //     />
//     //   </div>

//     //   <div>
//     //     <Input
//     //       type="email"
//     //       placeholder="Your Email"
//     //       required
//     //       className="w-full"
//     //     />
//     //   </div>

//     //   <div>
//     //     <Input
//     //       placeholder="Subject"
//     //       required
//     //       className="w-full"
//     //     />
//     //   </div>

//     //   <div>
//     //     <Textarea
//     //       placeholder="Your Message"
//     //       required
//     //       className="w-full min-h-[150px]"
//     //     />
//     //   </div>

//     //   <Button
//     //     type="submit"
//     //     className="w-full"
//     //     disabled={isSubmitting}
//     //   >
//     //     {isSubmitting ? "Sending..." : "Send Message"}
//     //   </Button>
//     // </form>
//   )
// }