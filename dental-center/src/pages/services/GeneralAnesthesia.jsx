/** @format */

// import img1 from "../../images/teeth1.jpg"
import { Link } from "react-router";

const GeneralAnesthesia = () => {
  return (
    <>
      <div>
        <div
          style={{
            height: "350px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}>
          {/* <img
          src={img1}
          alt="Teeth Whitening"
          style={{
            height: '100%',
            objectFit: 'cover',
            width:'100%'
          }}
        /> */}
          <h1
            style={{
              position: "absolute",
              color: "#fff",
              textShadow: "0 0 5px #000",
              fontSize: "50px",
            }}>
            Teethwhitening
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            background: "#e6f4f1",
          }}>
          <div style={{ width: "50%", margin: "30px" }}>
            <div
              style={{
                width: "60%",
                background: "#7fb6ac",
                height: "600px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "30px",
              }}>
              <h3 style={{ textAlign: "center", color: "#7f4c7e" }}>
                Related Services
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  gap: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <li>
                  <Link
                    to='/DentalProsthetics'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    Dental Implants
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Veneers'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    Veneers
                  </Link>
                </li>
                <li>
                  <Link
                    to='/DentalImplants'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    Dental Implants
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Orthodontics'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    Orthodontics
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Teeth-Whitening'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    Teeth Whitening
                  </Link>
                </li>
                <li>
                  <Link
                    to='/LaserGumbeAutification'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    Laser gum beautifications
                  </Link>
                </li>
                <li>
                  <Link
                    to='/CosmeticFillings'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    Cosmetic fillings
                  </Link>
                </li>
                <li>
                  <Link
                    to='/GeneralAnesthesia'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    General anesthesia
                  </Link>
                </li>
                <li>
                  <Link
                    to='/PediatricDentistry'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    Pediatric dentistry
                  </Link>
                </li>
                <li>
                  <Link
                    to='/RootCanalTreatment'
                    style={{ textDecoration: "none", color: "#cdf082" }}>
                    Root canal treatment
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ marginTop: "30px" }}>
              {/* <img src={require('../../images/teeth3.jpg')} style={{width:'600px',height:'400px',borderRadius:'20px'}} alt='img3'/> */}
            </div>
          </div>

          <div style={{ width: "50%", marginTop: "50px" }}>
            {/* <img src={require('../../images/teeth2.jpg')} style={{width:'600px',height:'400px',borderRadius:'30px'}} alt='image2'/> */}
            <h1 style={{ color: "rgb(243, 86, 86)" }}>Teeth Whitening</h1>
            <p style={{ color: "#4e94b3" }}>
              Teeth whitening with laser is used to treat stains and yellowing
              of teeth caused by smoking, <br />
              drinking coffee, or other causes. It is one of the most common and
              fastest teeth whitening procedures.
              <br />
              Teeth whitening with laser is a process that uses whitening
              materials that are placed on the surface of <br />
              the teeth and the laser is applied to them to activate the
              materials to restore the shine and whiteness of the teeth.
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              Teeth whitening with laser is used in the case of:
            </h3>
            <p style={{ color: "#4e94b3" }}>
              Yellowing of teeth.
              <br />
              The presence of stains on the teeth.
              <br />
              The desire to lighten the color of the teeth.
              <br />
              Teeth whitening is not an ideal solution for people who have
              problems with their front teeth, unhealthy gums,
              <br />
              or sensitivity to the materials used in whitening procedures.
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              The procedures for teeth whitening with laser are as follows:
            </h3>
            <p style={{ color: "#4e94b3" }}>
              The doctor first checks for the presence of tartar deposits on the
              teeth.
              <br />
              Then the doctor starts by determining the color of the patient's
              teeth according to the tooth guide available in the clinics.
              <br />
              Then the doctor starts by applying whitening materials to the
              teeth and shining the laser on them.
              <br /> This takes place in one session lasting between one and one
              and a half hours.
              <br />
              After the end of the teeth whitening session, the patient may
              sometimes feel slight pain in the teeth,
              <br /> which disappears within 24 hours at most
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              There are some instructions that the patient should follow for{" "}
              <br />
              at least three days after teeth whitening with a laser to maintain
              the result:
            </h3>
            <p style={{ color: "#4e94b3" }}>
              Avoid colored foods and drinks such as (coffee, tea, carbonated
              drinks).
              <br />
              Keep using a toothbrush and dental floss.
              <br />
              To preserve the color and its continuation, it is advisable to
              reduce smoking as it is one of the most common causes of
              yellowing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default GeneralAnesthesia;
