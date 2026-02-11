import { useParams } from "react-router";
import blogList from "../../utilis/blogdata";
import PageHeader from "../../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";
const SingleBlogPage = () => {
  const { id } = useParams();
  const result = blogList.filter((data) => data.id === Number(id));
  //   console.log("type", typeof id);
  //   console.log("type", typeof blogList[0].id);
  const socialList = [
    { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
    { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
    { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
    { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
    { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
  ];

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt={item.imgAlt}
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}>
                                          {val.text}
                                        </i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Illo, dicta! Nihil doloribus
                                  nemo consequatur cumque ea architecto nostrum
                                  fugiat? Ea.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quo, ea non magni mollitia
                                    odio nihil in, at necessitatibus aliquid
                                    exercitationem quidem dicta adipisci quis
                                    corrupti tenetur harum reiciendis
                                    doloremque. Tempora.
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolore laudantium totam,
                                  veritatis accusamus fuga labore minima
                                  perferendis sapiente magnam, inventore natus
                                  aut, fugiat et perspiciatis velit ratione
                                  libero. Numquam rerum sint cupiditate
                                  laudantium totam velit voluptatum nulla harum
                                  aliquid minus.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Tenetur quae repellat cum
                                  mollitia quas, soluta neque voluptates ex
                                  consectetur eveniet dolor nesciunt, laborum
                                  eum quidem voluptatem at sed omnis accusantium
                                  odio rem dolorem. Iste aliquid totam deserunt
                                  dolorem exercitationem numquam!
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="http://udemy.com/course/the-ultimate-react-course/learn/lecture/38038056?start=5"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Vel ducimus nobis dolorem
                                  maxime placeat. Aliquid autem, sequi minus
                                  repellendus sed eaque molestiae architecto
                                  enim nobis placeat magnam sit hic fuga modi
                                  vel ratione nostrum itaque, possimus minima
                                  facere? Quod, necessitatibus?
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>{" "}
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i>Previous Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parellel Processes via Technics Sound
                            Models Authoritative
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            <i className="icofont-double-right"></i>Previous
                            Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parellel Processes via Technics Sound
                            Models Authoritative
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
