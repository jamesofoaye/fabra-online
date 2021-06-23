import { graphql } from "react-apollo";
import { getAds } from "../queries/queries";

const ProductInitialShowing = (props) => {
    const showAds = () => {
        if (props.data.loading) {
            return <div>Loading</div>
            console.log(props)
        } else {
            return props.data.ads.map(ad => {
                return (<div key={ad.id}>
                    <img src={ad.gallery[0]} />
                    {ad.title}
                    {ad.description}
                    {ad.price}
                    {ad.location}
                    {ad.datePosted}
                </div>)
            })
        }
    }
    return showAds()
}
export default graphql(getAds)(ProductInitialShowing);

