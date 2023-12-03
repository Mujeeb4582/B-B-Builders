import Counter from './Counter';

const CounterUp: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row sm:items-center justify-center lg:pl-24 p-12 bg-headingText">
        <Counter count={5} label="Projects" labelClassName="text-white" />
        <Counter count={200} label="Clients" labelClassName="text-white" />
        <Counter count={4} label="Experiences" labelClassName="text-white" />
      </div>
    </div>
  );
};

export default CounterUp;
