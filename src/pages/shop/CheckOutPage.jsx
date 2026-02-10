import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../components/modal.css";
import { useNavigate } from "react-router";
const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const from = location.state?.from?.pathneame || "/";
  const navigate = useNavigate();

  const handleOrderConfirm = () => {
    alert("Your Order is placed successfully");
    localStorage.removeItem("cart");
    navigate(from, { replace: true });
  };
  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade "
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      href="#visa"
                      className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => {
                        handleTabChange("visa");
                      }}
                    >
                      <img
                        src="https://i.imgur.com/sB4jftM.png"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#paypal"
                      className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => {
                        handleTabChange("paypal");
                      }}
                    >
                      <img
                        src="https://i.imgur.com/yK7EDD1.png"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>
                </ul>
                {/* contents */}
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            required
                            min={1}
                            max={999}
                          />
                          <span>Expiration Date </span>
                        </div>

                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              required
                              min={1}
                              max={999}
                            />
                            <span>Expiration Date </span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              required
                              min={1}
                              max={999}
                            />
                            <span>CVV </span>
                          </div>
                        </div>
                        <div className="pay ">
                          <button
                            className="btn rounded-3  btn-success btn-block"
                            onClick={handleOrderConfirm}
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* paypal content */}
                  <div
                    className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                          />
                          <span>Enter your email</span>
                        </div>

                        <div className="d-flex flex-column">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              required
                              min={1}
                              max={999}
                            />
                            <span>Your Name</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="info"
                              id="info"
                              className="form-control"
                              required
                              min={1}
                              max={999}
                            />
                            <span>Extra info </span>
                          </div>
                        </div>
                        <div className="pay">
                          <button
                            onClick={handleOrderConfirm}
                            className="btn rounded-3  btn-primary btn-block"
                          >
                            Add Paypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
