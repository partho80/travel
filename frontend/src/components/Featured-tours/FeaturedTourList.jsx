import react from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "./../../hooks/userFetch";
import { BASE_URL } from "./../../utils/config";
const FeatureTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  console.log(1, featuredTours);
  return (
    <>
      {loading && <h4>Loading.........</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg='3' className='mb-4' key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeatureTourList;
