import { TfiAgenda } from 'react-icons/tfi';

function Header() {
  return (
    <h1 className=" text-center p-4 text-3xl font-bold my-10 ">
      <TfiAgenda className="inline" />
      Todos
    </h1>
  );
}

export default Header;
