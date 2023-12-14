/* eslint-disable react/jsx-props-no-spreading */

'use client';

import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
} from '@nextui-org/react';
import { createAutocomplete } from '@algolia/autocomplete-core';
import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from './SearchIcon';
import Divider from '../utils/Divider';

function AutocompleteItem({
  title, image, type, path, onClick,
}) {
  return (
    <>
      <Link
        onClick={onClick}
        href={`/publicaciones/${type}/${path}`}
        className="flex text-black md:flex-row flex-col gap-4 items-center justify-between hover:bg-gray-200 p-2 rounded-md"
      >
        <h3>
          {title}
        </h3>
        <Image src={image} alt={title} width={150} height={100} />
      </Link>
      <Divider />
    </>
  );
}

export default function SearchBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false,
  });

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: 'Buscar por palabra',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [
      {
        sourceId: 'offers-next-api',
        getItems: ({ query }) => {
          if (query) return fetch(`/api/search?q=${query}`).then((res) => res.json());
          return [];
        },
      },
    ],
  }), []);

  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current,
  });

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  });

  return (
    <>
      <button type="button" aria-label="buscar" className="p-2" onClick={onOpen}>
        <SearchIcon />
      </button>
      <Modal
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Buscador</ModalHeader>
              <ModalBody>
                <form
                  className="flex flex-col justify-start z-20 w-full text-black min-h-[400px]"
                  {...formProps}
                >
                  <input
                    type="text"
                    className="py-3 pl-6 rounded-2xl bg-white text-base focus:outline-none shadow-lg z-40"
                    {...inputProps}
                  />
                  {
        autocompleteState.isOpen && (
          <div className="p-2 pt-6 pr-0 bg-white rounded-b-lg shadow-lg z-30 w-full max-h-[60vh]">
            <div
              className="overflow-y-scroll max-h-[55vh]"
              ref={panelRef}
              {...autocomplete.getPanelProps()}
            >
              {autocompleteState.collections.map((collection) => {
                const { items } = collection;
                return (
                  <section key="" className="">
                    {
                      items.length > 0 && (
                        <ul {...autocomplete.getListProps} className="flex flex-col">
                          {
                            items[0].results.map((item) => (
                              <AutocompleteItem
                                key={item.title}
                                title={item.title}
                                image={item.image}
                                type={item.type}
                                path={item.path}
                                onClick={onClose}
                              />
                            ))
                          }
                        </ul>
                      )
                    }
                  </section>
                );
              })}
            </div>
          </div>
        )
      }
                </form>
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
