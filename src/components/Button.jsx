import Link from "next/link"
import clsx from "clsx"

const styles = {
  primary:
    "py-2 px-4 text-sm font-medium text-white border-2 border-red-500 shadow-lg transition hover:bg-black",
  secondary:
    "py-2 px-4 text-sm font-medium text-white border-2 border-red-500 shadow-lg transition hover:bg-black",
}

export function Button({ variant = "primary", className, href, ...props }) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
