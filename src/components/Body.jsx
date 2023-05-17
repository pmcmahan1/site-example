import React from "react";
import "./Body.scss";

const Body = () => {
  return (
    <div className="body">
      <div className="body-item">
        <div className="body-title">Body Section Header</div>
        <div className="body-img-container">
          <img
            src="https://dummyimage.com/550/29282d/ffffff.jpg&text=Your+img+here."
            alt=""
            className="body-img1"
          />
          <img
            src="https://dummyimage.com/550/29282d/ffffff.jpg&text=Your+img+here."
            alt=""
            className="body-img1"
          />
        </div>
        <div className="body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          vero, consequuntur minima id dolor, consectetur recusandae quaerat
          tempora atque nesciunt quia aliquam earum voluptates officiis
          voluptatem dolorem numquam velit ipsa? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum reiciendis labore saepe quam
          facere reprehenderit nulla quas repellendus quibusdam quidem
          perferendis soluta, veritatis tenetur delectus corporis sint quaerat
          laborum dolor!
        </div>
        <div className="body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          cumque aspernatur vero similique libero, illum unde deleniti saepe,
          placeat ratione exercitationem minus, nulla laborum aliquam adipisci
          numquam ipsa iste hic!
        </div>
      </div>
      <div className="body-item">
        <div className="body-title">Body Section Header</div>
        <div className="body-container">
          <img
            src="https://dummyimage.com/550/29282d/ffffff.jpg&text=Your+img+here."
            alt=""
            className="body-img2"
          />
          <div className="body-text-container">
            <h1>Body Header</h1>
            <h2>Body Subheader</h2>
            <div className="body-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              provident ab est velit cumque deleniti nostrum aliquam itaque
              dolor laborum odio, reiciendis beatae vitae! Quidem dicta
              laboriosam eaque maiores suscipit?
            </div>
            <div className="body-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nisi omnis aperiam quisquam optio accusantium totam
              sequi vel deleniti reiciendis in, iure ullam temporibus a neque
              sed? Nam, cupiditate rerum!
            </div>
            <button>Click here!</button>
          </div>
        </div>
      </div>
      <div className="body-item">
        <div className="body-title">Body Section Header</div>
        <div className="body-container2">
          <h1>Body Header</h1>
          <div className="body-text centered">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            optio laborum suscipit. Molestias accusamus voluptatum, numquam
            quia, dolor blanditiis possimus debitis unde iste laborum facilis
            nisi nesciunt quae voluptatibus molestiae.
          </div>
          <img
            src="https://dummyimage.com/900x400/29282d/ffffff.jpg&text=Your+img+here."
            alt=""
            className="body-img3"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
