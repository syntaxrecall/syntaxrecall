export type ShowProps = {
  when: boolean;
  children: React.ReactNode;
}

export function Show({ when, children }: ShowProps) {
  if (when) {
    return children;
  }

  return undefined;
}
