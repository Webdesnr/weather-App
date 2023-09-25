function VerticalCard({ img, day, description }) {
  return (
    <div className="card p-2 bg-transparent text-white border-white col-2">
      <div className="text-center ">
        <img src={img} alt="wheather icon" className="img-fluid" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{day}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default VerticalCard;
