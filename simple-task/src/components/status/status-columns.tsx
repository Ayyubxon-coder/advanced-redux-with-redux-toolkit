import { PropsWithChildren } from 'react';

type StatusColumnsProps = {};

export const StatusColumns = ({
  children,
}: PropsWithChildren<StatusColumnsProps>) => {
  return <section className="flex gap-4">{children}</section>;
};
