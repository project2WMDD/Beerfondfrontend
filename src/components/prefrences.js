import './LoginForm.css'
// import peopleImg from '../images/people.png';
import { Form, Button  } from 'react-bootstrap';
import Footer from './Footer'

function Preference() {
  return (
    <div>
      <div className="container-holder">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="register-left-panel">
                {/* <img src={peopleImg} className="right-img" /> */}
              </div>
            </div>
            <div className="col right-panel">
              <div className="row signup-container">
                <div className="col">
                  <h5 className="blue-bold-text">
                    We want to know your preferences
                  </h5>
                  <div className="mt-5">
                    <Form>
                      <p>
                        <b>What is your favourite flavour?</b>
                      </p>
                      <div className="p-4">
                        {["Sweet", "Spicy", "Fruit", "Sour"].map((type) => (
                          <div key={type} className="mb-3 ml-3">
                            <Form.Check type={type} id={`check-api-${type}`}>
                              <Form.Check.Input type="checkbox" />
                              <Form.Check.Label>{`${type}`}</Form.Check.Label>
                            </Form.Check>
                          </div>
                        ))}
                      </div>

                      <p>
                        <b>What is your favourite food?</b>
                      </p>
                      <div className="p-4">
                        {["Meat", "Fresh Vegetables", "Cheese", "Desert4"].map(
                          (type) => (
                            <div key={type} className="mb-3 ml-3">
                              <Form.Check type={type} id={`check-api-${type}`}>
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label>{`${type}`}</Form.Check.Label>
                              </Form.Check>
                            </div>
                          )
                        )}
                      </div>

                      <p>
                        <b>How much % alcohol do you want?</b>
                      </p>
                      <div className="p-4">
                        {[
                          "Light1",
                          "Medium-light",
                          "Medium-high",
                          "High-4",
                        ].map((type) => (
                          <div key={type} className="mb-3 ml-3">
                            <Form.Check type={type} id={`check-api-${type}`}>
                              <Form.Check.Input type="checkbox" />
                              <Form.Check.Label>{`${type}`}</Form.Check.Label>
                            </Form.Check>
                          </div>
                        ))}
                      </div>
                      <div className="text-center">
                        <Button
                          variant="primary"
                          className="mt-5"
                          type="submit"
                        >
                          Done
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Preference;
