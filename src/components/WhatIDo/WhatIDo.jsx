import Service from "../service/ServiceAnimation";

const WhatIDo = () => {
  return (
    <div className="max-w-[1120px] w-full mx-auto">
      <div className="ml-5">
        <div className="title">
          <h3>What I do?</h3>
        </div>

        <Service></Service>
      </div>

      {/* End .row */}

      {/* separated */}
      <div
        className="separated"
        style={{
          backgroundImage: `url("img/border-dark.png")`,
        }}
      ></div>
    </div>
  );
};

export default WhatIDo;
