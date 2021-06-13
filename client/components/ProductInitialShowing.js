import { graphql } from "react-apollo";
import { getAds } from "../queries/queries";

const ProductInitialShowing = (props) => {
    const showAds = () => {
        if (props.data.loading) {
            return <div>Loading</div>
        } else {
            return props.data.ads.map(ad => {
                return (<div>
                    <img src={ad.gallery[0]} />
                    {ad.title}
                    {ad.description}
                    {ad.price}
                    {ad.isNegotiable}
                    {ad.adLocation}
                    {ad.condition}
                    {ad.datePosted}
                </div>)
            })
        }
    }
    return showAds()
}
export default graphql(getAds)(ProductInitialShowing);

