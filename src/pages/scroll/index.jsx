const ScrollPage = () => {
  return (
    <main className={'flex h-full w-full flex-col gap-[200px]'}>
      <div className={'relative h-screen w-full bg-amber-500'}>
        <p className={'reveal h-[300px]'}>This is Introduction</p>
      </div>
      <div className={'relative h-screen w-full bg-amber-500'}>
        <p className={'reveal h-[300px]'}>This is Main Content</p>
      </div>
      <div className={'relative h-screen w-full bg-amber-500'}>
        <p className={'reveal h-[300px]'}>This is Footer</p>
      </div>
    </main>
  );
};

export default ScrollPage;
