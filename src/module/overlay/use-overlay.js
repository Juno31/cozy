import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import OverlayController from '@/module/overlay/overlay-controller';
import { OverlayContext } from '@/module/overlay/overlay-context';

let elementId = 1;

const useOverlay = ({ exitOnUnmount = true } = {}) => {
  const { mount, unmount } = useContext(OverlayContext);
  const [id] = useState(() => String(elementId++));

  const overlayRef = useRef(null);

  useEffect(() => {
    return () => {
      if (exitOnUnmount) {
        unmount?.(id);
      }
    };
  }, [exitOnUnmount, id, unmount]);

  return useMemo(
    function () {
      return {
        open: function (overlayElement) {
          return mount?.(
            id,
            <OverlayController
              ref={overlayRef}
              overlayElement={overlayElement}
              onExit={() => {
                unmount?.(id);
              }}
            />,
          );
        },
        close: function () {
          overlayRef?.current?.close();
        },
        exit: function () {
          unmount?.(id);
        },
      };
    },
    [id, mount, unmount],
  );
};

export default useOverlay;
