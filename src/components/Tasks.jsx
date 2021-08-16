const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h2>{task.text}</h2>
      ))}
    </>
  );
};

export default Tasks;
