/** @format */

export default function SectionTwoHome() {
  return (
    <div className='container-section'>
      <div className='content-section'>
        <div className='info'>
          <h1>
            State-of-the-Art <br /> <span>Facility</span>
          </h1>
        </div>
        <div className='boxes'>
          <div className='box-section'>
            <h2>Advanced Technology</h2>
            <p>
              We utilize cutting-edge dental technology to deliver precise and
              efficient treatments.
            </p>
          </div>
          <div className='box-section'>
            <h2>Comfortable Environment</h2>
            <p>
              Our clinic is designed with your comfort in mind, featuring
              spacious treatment rooms and a relaxing waiting area.
            </p>
          </div>
          <div className='box-section'>
            <h2>Exceptional Hygiene</h2>
            <p>
              We maintain the highest standards of hygiene and cleanliness to
              ensure a safe and healthy environment.
            </p>
          </div>
        </div>
      </div>
      <img src={require("../images/cover-bg.jpg")} alt='' />
    </div>
  );
}
