import { SignUpForm } from '@/components'

const index = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 place-items-center h-dvh">
      <SignUpForm/>
      <div className="h-full w-full bg-[url('Img.png')] hidden sm:block"></div>
    </div>
  );
}

export default index