import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features25-container2 thq-section-max-width">
          <div className="features25-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features25-tab-horizontal1"
            >
              <div className="features25-divider-container1">
                {activeTab === 0 && (
                  <div className="features25-container3"></div>
                )}
              </div>
              <div className="features25-content1">
                <h2>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h2 className="features25-text4 thq-heading-2">
                        Quality Home Textiles
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features25-text2 thq-body-small">
                        We specialize in manufacturing high-quality home
                        textiles including bed linens, curtains, and towels.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features25-tab-horizontal2"
            >
              <div className="features25-divider-container2">
                {activeTab === 1 && (
                  <div className="features25-container4"></div>
                )}
              </div>
              <div className="features25-content2">
                <h2>
                  {props.feature2Title ?? (
                    <Fragment>
                      <h2 className="features25-text3 thq-heading-2">
                        Customized Designs
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features25-text5 thq-body-small">
                        We offer a wide range of customized design options to
                        meet the unique preferences of our customers.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features25-tab-horizontal3"
            >
              <div className="features25-divider-container3">
                {activeTab === 2 && (
                  <div className="features25-container5"></div>
                )}
              </div>
              <div className="features25-content3">
                <h2>
                  {props.feature3Title ?? (
                    <Fragment>
                      <h2 className="features25-text6 thq-heading-2">
                        Global Exporting
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features25-text1 thq-body-small">
                        With our strong exporting capabilities, we cater to
                        clients worldwide with our premium home textile
                        products.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features25-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features25-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features25-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features25-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features25-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features25-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal3 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content3 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features25-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features25-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-text1 {
            display: inline-block;
          }
          .features25-text2 {
            display: inline-block;
          }
          .features25-text3 {
            display: inline-block;
          }
          .features25-text4 {
            display: inline-block;
          }
          .features25-text5 {
            display: inline-block;
          }
          .features25-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features25-container2 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .features25-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

Features25.defaultProps = {
  feature3Description: undefined,
  feature1ImgAlt: 'Quality Home Textiles Image',
  feature1Description: undefined,
  feature3ImgAlt: 'Global Exporting Image',
  feature2Title: undefined,
  feature1Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1502664386630-1000f504623f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODQ0NzkwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1545126178-862cdb469409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODQ0NzkwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature3Title: undefined,
  feature2ImgAlt: 'Customized Designs Image',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1707736849955-c6cb4fafd6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODQ0NzkwNXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features25.propTypes = {
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features25
