
const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {
          [...Array(10)].map((_, index) => (<div key={index} className="shimmer"></div>
          ))
        }
      </div>
    );
  };
  
  export default Shimmer;
  
  