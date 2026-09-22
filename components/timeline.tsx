interface TimelineItem {
  title: string;
  subtitle: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="career-list">
      {items.map((item) => (
        <li key={`${item.title}-${item.subtitle}`}>
          <p className="career-name">{item.title}</p>
          <p>{item.subtitle}</p>
        </li>
      ))}
    </ul>
  );
}
