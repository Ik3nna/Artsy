import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Data } from '../../../utils/data';
import styles from "./index.module.css"

const MarketplaceId: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  if (id !== undefined) {
    const findItem = Data.find((item)=>item.id == parseInt(id, 10));
   
    return (
      <section className={styles.container}>
        <div onClick={()=>navigate(-1)}>back</div>
        <img src={findItem?.image} />
      </section>
    )
  }
}

export default MarketplaceId;