import { useState } from "react";
import Rating from "../../components/Rating";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
const reviewTitle = "Add a Review";
const Review = () => {
  const [rewievShow, setRewievShow] = useState(true);
  return (
    <div>
      <ul
        className={`review-nav lab-ul ${rewievShow ? "RewActive" : "DescActive"}`}
      >
        <li className="desc" onClick={() => setRewievShow(false)}>
          Description
        </li>
        <img src="" alt="" />
        <li className="rew" onClick={() => setRewievShow(true)}>
          Rewievs
        </li>
      </ul>
      {/* desc & rewiev content */}

      <div
        className={`review-content ${rewievShow ? "review-content-show" : "description-show"}`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p className="entry-content">{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="client-review">
            <div className="review-title">
              <h5>{reviewTitle}</h5>
            </div>
            <form action="action" className="row">
              <div className="col-md-4 col-12">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="col-md-4 col-12">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-md-4 col-12">
                <div className="rating">
                  <span className="me-2">Your Rating</span>
                  <Rating />
                </div>
              </div>
              <div className="col-md-4 col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type Here Message"
                ></textarea>
              </div>
              <div className=" col-12">
                <button type="submit" className="default-button">
                  <span>Submit Review</span>
                </button>
              </div>
            </form>
          </div>
          {/* description */}
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              recusandae tempore, aperiam corporis repudiandae quae delectus
              numquam cumque in obcaecati! Vero magnam praesentium perferendis
              doloremque enim ab pariatur placeat molestias?
            </p>
            <div className="post-item">
              <div className="post-thumb">
                <img src="./src/assets/images/shop/01.jpg" alt="" />
              </div>
              <div className="post-content">
                <ul className="lab-ul">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
