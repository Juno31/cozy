import React from 'react';
import { OverlayContext } from '@/module/overlay/overlay-context';
import { useCallback, useMemo, useState } from 'react';

const OverlayProvider = ({ children }) => {
  const [overlayId, setOverlayId] = useState([]);

  const mount = useCallback((id, element) => {
    setOverlayId((current) => {
      const cloned = [...current];
      cloned.push({
        id,
        element,
      });
      return cloned;
    });
  }, []);

  const unmount = useCallback((id) => {
    setOverlayId((current) => {
      const cloned = [...current];
      const deleteIndex = cloned.findIndex(
        (overlayById) => overlayById.id === id,
      );
      cloned.splice(deleteIndex, 1);

      return cloned;
    });
  }, []);

  const Overlays = useMemo(() => {
    return overlayId.map(({ id, element }) => (
      <React.Fragment key={id}>{element}</React.Fragment>
    ));
  }, [overlayId]);

  return (
    <OverlayContext.Provider
      value={{
        mount,
        unmount,
      }}
    >
      {children}
      {Overlays}
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
