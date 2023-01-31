export default function MainContentWrapper({ children }) {
  return (
    <div className='flex justify-center'>
      <div className='m-10 px-10 py-7 rounded-2xl lg:max-w-4xl bg-teal-600 '>{children}</div>
    </div>
  );
}