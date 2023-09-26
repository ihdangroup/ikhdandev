const Card = ({ project }) => {
  return (
    <div className="w-full  bg-[#333] lg:w-[31%] my-4 rounded-lg">
      <div className="p-1 rounded">
        <img src={`/images/${project.images}`} className="rounded-md" alt="" />
      </div>
      <div className="p-4 rounded">
        <a target="_blank" href={`${project.href}`}>
          <h4 className="underline text-md">{project.title}</h4>
        </a>
        <p className="py-4 text-sm">{project.body}</p>
        <div className="flex mb-2">
          {project.icons.map((icon) => (
            <img src={`/icon/${icon}`} className="mr-2" width="30px" alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
