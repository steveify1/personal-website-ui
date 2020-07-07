import React, { Fragment, useState, useEffect, useReducer } from 'react';
import elysiaClient from '../../utils/elysiaClient';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveRead, unsetActiveRead } from '../../store/activeRead';
import FaceCard from '../Cards/FaceCard/FaceCard';
import ActiveReadManager from '../ActiveReadManager/ActiveReadManager';
import Reader from '../Reader/Reader';
import articles from '../../mockData/articles';
import postImg_1 from '../../assets/images/36315119_1713324662085135_4126363613151625216_n.jpg';
import './reader.scss';

const ArticleReader = (props) => {
  const { params, url } = props.match;
  // const dispatch = useDispatch();
  const activeRead = useSelector((state) => state.activeRead);
  const [article, setArticle] = useState(null);
  // const { setActive } = ActiveReadManager(activeRead);

  // Fetch the article
  useEffect(() => {
    const fetchData = async (slug) => {
      // if (!activeRead.title) {
      const res = await elysiaClient.articles.getOne(slug);
      if (res) {
        setArticle(res.data.data);
        console.log(res);
      }
      // } else {
      //   console.log('Reading from redux');
      //   setArticle(activeRead);
      // }
    };
    fetchData(params.slug);

    // return () => {
    //   dispatch(
    //     setActiveRead({
    //       ...article,
    //       url,
    //       statistics: {
    //         readPercentage: 0.3,
    //       },
    //     })
    //   );
    // };
  }, [
    params.slug,
    // activeRead,
    // activeRead.title,
    setArticle,
    // dispatch,
    // url,
  ]);

  const social = {
    facebook: 'https://www/facebook.com/gbola-sokoya',
    twitter: 'https://www/twitter.com/gbola-sokoya',
    instagram: 'https://www/instagram.com/gbola-sokoya',
    linkedin: 'https://www/linkedin.com/gbola-sokoya',
  };

  const description =
    'Professor of Economics and Finance, and resident zonal pastor at RCCG, Bariga zone';

  return (
    <Fragment>
      <div aria-label="article-reader" className="page article-reader">
        <section className="section">
          <section className="section__inner">
            <div className="two-colums">
              <section className="column">
                <Reader article={article} />
              </section>
              <section className="column">
                {/* <FaceCard
                  name="Gbola Sokoya"
                  image={postImg_1}
                  social={social}
                  description={description}
                /> */}
              </section>
            </div>
          </section>
        </section>
      </div>
    </Fragment>
  );
};

export default withRouter(ArticleReader);
