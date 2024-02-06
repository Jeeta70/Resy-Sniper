import { SignUpForm } from '@/components'

const index = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 sm:place-items-center place-items-start h-dvh">
      <SignUpForm />
      <div className="h-full w-full bg-[url('@/assets/login/login.png')] bg-no-repeat bg-cover hidden sm:block"></div>
    </div>
  );
}

export default index