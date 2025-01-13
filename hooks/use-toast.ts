import { toast } from "sonner"

export interface ToastProps {
  title?: string
  description?: string
  duration?: number
}

export function useToast() {
  return {
    toast: (props: ToastProps) => {
      toast(props.title, {
        description: props.description,
        duration: props.duration,
      })
    },
    success: (props: ToastProps) => {
      toast.success(props.title, {
        description: props.description,
        duration: props.duration,
      })
    },
    error: (props: ToastProps) => {
      toast.error(props.title, {
        description: props.description,
        duration: props.duration,
      })
    },
    warning: (props: ToastProps) => {
      toast.warning(props.title, {
        description: props.description,
        duration: props.duration,
      })
    },
  }
}