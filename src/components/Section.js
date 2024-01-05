export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      {children}
    </section>
  );
}
