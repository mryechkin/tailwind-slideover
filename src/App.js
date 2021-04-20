import { useState } from 'react';
import { OverlayProvider, usePreventScroll } from 'react-aria';
import Button from './components/Button';
import SlideOver from './components/SlideOver';
import HeadlessSlideOver from './components/HeadlessSlideOver';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOnClose = () => setIsOpen(false);

  usePreventScroll({ isDisabled: !isOpen });

  return (
    <OverlayProvider>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative text-center py-3 max-w-full lg:max-w-xl lg:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-700 shadow-lg transform -skew-y-3 lg:skew-y-0 lg:-rotate-3 lg:rounded-3xl"></div>
          <div className="relative p-20 bg-white shadow-lg lg:rounded-3xl">
            <div className="max-w-md mx-auto lg:max-w-2xl">
              <Button onClick={() => setIsOpen(true)}>Click Me</Button>
              <Button className="mx-2" onClick={() => setOpen(true)}>
                Click Me Again
              </Button>
              <p className="p-4">
                Ipsum dolore cillum labore anim eu voluptate sunt est ea
                aliquip. Irure consequat eiusmod minim consectetur ut magna
                nulla occaecat commodo. Eiusmod culpa amet pariatur non commodo
                voluptate ipsum nisi duis.
              </p>
              <p className="p-4">
                Ipsum dolore cillum labore anim eu voluptate sunt est ea
                aliquip. Irure consequat eiusmod minim consectetur ut magna
                nulla occaecat commodo. Eiusmod culpa amet pariatur non commodo
                voluptate ipsum nisi duis.
              </p>
              <p className="p-4">
                Ipsum dolore cillum labore anim eu voluptate sunt est ea
                aliquip. Irure consequat eiusmod minim consectetur ut magna
                nulla occaecat commodo. Eiusmod culpa amet pariatur non commodo
                voluptate ipsum nisi duis.
              </p>
              <p className="p-4">
                Ipsum dolore cillum labore anim eu voluptate sunt est ea
                aliquip. Irure consequat eiusmod minim consectetur ut magna
                nulla occaecat commodo. Eiusmod culpa amet pariatur non commodo
                voluptate ipsum nisi duis.
              </p>
              <p className="p-4">
                Ipsum dolore cillum labore anim eu voluptate sunt est ea
                aliquip. Irure consequat eiusmod minim consectetur ut magna
                nulla occaecat commodo. Eiusmod culpa amet pariatur non commodo
                voluptate ipsum nisi duis.
              </p>
              <p className="p-4">
                Ipsum dolore cillum labore anim eu voluptate sunt est ea
                aliquip. Irure consequat eiusmod minim consectetur ut magna
                nulla occaecat commodo. Eiusmod culpa amet pariatur non commodo
                voluptate ipsum nisi duis.
              </p>
              <p className="p-4">
                Ipsum dolore cillum labore anim eu voluptate sunt est ea
                aliquip. Irure consequat eiusmod minim consectetur ut magna
                nulla occaecat commodo. Eiusmod culpa amet pariatur non commodo
                voluptate ipsum nisi duis.
              </p>
              <SlideOver
                isOpen={isOpen}
                onClose={handleOnClose}
                title="Item Details"
              >
                <div className="flex flex-col">
                  <input type="text" className="border-gray-300 rounded-md" />
                  <Button className="mt-4" onClick={handleOnClose}>
                    OK
                  </Button>
                </div>
              </SlideOver>
              <HeadlessSlideOver
                open={open}
                setOpen={setOpen}
                title="Item Details"
              >
                <div className="flex flex-col">
                  <input type="text" className="border-gray-300 rounded-md" />
                  <Button className="mt-4" onClick={handleOnClose}>
                    OK
                  </Button>
                </div>
              </HeadlessSlideOver>
            </div>
          </div>
        </div>
      </div>
    </OverlayProvider>
  );
}

export default App;
