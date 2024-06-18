import { FC } from "react";

const FAQs: FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <iframe
            src="https://www.wondrx.com/faqs"
            width="100%"
            height="800px"
            title="Embedded FAQs"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
