import Counter from './Counter';

const CounterUp: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:pl-24 p-12 bg-[#c86500]">
      <Counter count={185} label="Projects" labelClassName="text-white" />
      <Counter count={100} label="Clients" labelClassName="text-white" />
      <Counter count={25} label="Experiences" labelClassName="text-white" />
    </div>
  );
};

export default CounterUp;
