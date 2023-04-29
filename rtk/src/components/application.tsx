import { useMemo } from 'react';
import { useGetItemsQuery } from '../services/api-service';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  const { data, isLoading } = useGetItemsQuery();
  const items = useMemo(() => data?.items || [], [data]);
  return (
    <main className="mx-auto flex flex-col gap-8 p-8 lg:max-w-4xl">
      {isLoading && <h1>Loading...</h1>}
      <Header count={0} />
      <NewItem />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList title="Items" items={items} />
      </section>
      <MarkAllAsUnpacked />
    </main>
  );
};

export default Application;
