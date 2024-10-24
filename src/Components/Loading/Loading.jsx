import loading from './loading.gif';
import styles from "./loading.module.css"

export const Loading = () => {
  return (
    <div>
        <img src={loading} style={{width:"50px", margin: "250px auto", display: "block"}}alt="loadingIcon" />
    </div>
  )
}
