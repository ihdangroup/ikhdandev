const Code = () => {
  return (
    <div className="w-full lg:w-1/2 code">
      <div className="bg-black p-8 rounded my-4 lg:my-0">
        <span className="text-purple-400">const</span>
        <span className="text-red-500"> keepBeingGrateful</span>
        <span>{`= () => {`}</span>
        <div className="block pl-6">
          <span className="text-purple-400">return </span>
          <span className="text-blue-200">
            'you are great for getting through this difficult process, stay
            alive okay 😊';
          </span>
        </div>
        <span className="block">{`}`}</span>
        <span className="text-purple-400">if </span>
        <span>(</span>
        <span className="text-red-400">life</span>
        <span>) {`{ `}</span>
        <span className="text-blue-400">keepBeingGrateful</span>
        <span>{`(); }`}</span>
      </div>
    </div>
  );
};
export default Code;
