export default function MainContentWrapper({ children }) {
  return (
    <div className='flex justify-center'>
      <div className='m-6 rounded-2xl md:max-w-7xl'>{children}</div>
    </div>
  );
}