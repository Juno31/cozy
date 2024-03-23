import AppearController from '@/module/appear/appear-controller';
import localFont from 'next/font/local';

const boldFont = localFont({ src: '../../../public/assets/fonts/bold.ttf' });

const LoadingOverlay = ({ onExit }) => {
  return (
    <div
      className={
        'fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'
      }
    >
      <div className={'relative flex flex-col gap-1'}>
        <AppearController duration={500}>
          <p
            className={`text-display-medium-bold ${boldFont.className} relative text-white`}
          >
            WELCOME TO
          </p>
        </AppearController>
        <AppearController
          delay={500}
          duration={500}
        >
          <p
            className={`text-display-medium-bold ${boldFont.className} relative text-white`}
          >
            JUNO UM ARCHIVE
          </p>
        </AppearController>
      </div>
    </div>
  );
};

export default LoadingOverlay;
