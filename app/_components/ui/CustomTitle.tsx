export default function CustomTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h1 className={`text-4xl font-bold text-white ${className}`}>{text}</h1>
  );
}
