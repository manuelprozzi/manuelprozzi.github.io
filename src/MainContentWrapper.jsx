export default function MainContentWrapper({ children }) {
  return (
    <div className='flex justify-center'>
      <div className='m-10 lg:max-w-4xl'>{children}</div>
    </div>
  );
}