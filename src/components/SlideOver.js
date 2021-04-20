import React from 'react';
import {
  FocusScope,
  OverlayContainer,
  useOverlay,
  useModal,
  useDialog,
} from 'react-aria';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from '@heroicons/react/outline';

function SlideOverContent(props) {
  const { onClose, children, title } = props;

  const ref = React.useRef();
  const { overlayProps } = useOverlay(props, ref);
  const { modalProps } = useModal(props, ref);
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
        <motion.section
          className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
          aria-labelledby="slide-over-heading"
          ref={ref}
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
          <FocusScope contain restoreFocus autoFocus>
            <div className="relative w-screen max-w-md">
              <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                <button
                  onClick={onClose}
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Close panel</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div className="px-4 sm:px-6">
                  <h2
                    id="slide-over-heading"
                    className="text-lg font-medium text-gray-900"
                    {...titleProps}
                  >
                    {title}
                  </h2>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  {children}
                </div>
              </div>
            </div>
          </FocusScope>
        </motion.section>
      </div>
    </div>
  );
}

function SlideOver({ isOpen, onClose, title, children }) {
  return (
    <OverlayContainer>
      <AnimatePresence>
        {isOpen && (
          <SlideOverContent
            title={title}
            onClose={onClose}
            isOpen={isOpen}
            isDismissable
          >
            {children}
          </SlideOverContent>
        )}
      </AnimatePresence>
    </OverlayContainer>
  );
}

export default SlideOver;
