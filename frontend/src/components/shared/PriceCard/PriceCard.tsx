import "./pricecard.css";

interface PriceCardProps {
  pricing: string;
  title: string;
  info: string;
  feature1: string;
  feature2: string;
  feature3: string;
  buttonText: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  pricing,
  title,
  info,
  feature1,
  feature2,
  feature3,
  buttonText,
}) => {
  
  return (
    <div className="price-card">
      <div className="price-card-inner">
        <span className="price-card-pricing">
          <span>
            ${pricing} <small>/ MONTH</small>
          </span>
        </span>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <p className="price-card-title">{title}</p>
        <p className="price-card-info">{info}</p>
        <ul className="price-card-features">
          <li>
            <span className="price-card-icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>{feature1}</span>
          </li>
          <li>
            <span className="price-card-icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>{feature2}</span>
          </li>
          <li>
            <span className="price-card-icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>{feature3}</span>
          </li>
        </ul>
        <div className="price-card-action">
          <a className="price-card-button" href="#">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
