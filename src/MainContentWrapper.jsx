export default function MainContentWrapper({ children }) {
  return (
    <div className='flex justify-center'>
      <div className='mx-10 my-5 px-10 py-7 rounded-2xl lg:max-w-4xl bg-teal-500 shadow-xl'>{children}</div>
    </div>
  );
}