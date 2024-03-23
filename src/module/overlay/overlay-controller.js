import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

const OverlayController = forwardRef(function OverlayController(
  { overlayElement: OverlayElement, onExit },
  ref,
) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => {
      return { close: handleClose };
    },
    [handleClose],
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }, []);

  return (
    <OverlayElement
      isOpen={isOpen}
      close={handleClose}
      exit={onExit}
    />
  );
});

export default OverlayController;
