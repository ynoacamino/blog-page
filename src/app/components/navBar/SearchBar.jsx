import { Input } from '@nextui-org/react';
import SearchIcon from './SearchIcon';

export default function SearchBar() {
  return (
    <Input
      size="sm"
      placeholder="Buscar"
      clearable
      startContent={
        <SearchIcon />
      }
      radius="full"
      className="w-52 md:w-96"
    />
  );
}
