export default function Form({ action, children, className }) {
  return (
    <form className={className} action={action}>
      {children}
    </form>
  );
}
