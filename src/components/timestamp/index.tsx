import { TimeStampProps } from '../../types';
import styles from "./index.module.css"

const Timestamp = ({ time, bg }: TimeStampProps) => {
  return (
    <section 
        className={`
            ${styles.container}
            ${bg==="green" && styles.green}
            ${bg==="blue" && styles.blue}
            ${bg==="grey" && styles.grey}
        `}
    >
        {time}
    </section>
  )
}

export default Timestamp