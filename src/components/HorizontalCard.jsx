function HorizontalCard({ img, title, day, description, temp_c }) {
  return (
    <div className="card py-5 mb-3 bg-transparent text-white border-white">
      <div className="row g-0">
        <div className="col-md-6">
          <div className="d-flex align-item-center justify-content-center h-100">
            <img src={img} alt="wheather Icon" className="image-fluid" />
          </div>
        </div>
        <div
          className="col-md-6
        "
        >
          <div className="card-body">
            <p className="card-text">{day}</p>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{temp_c}</p>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
