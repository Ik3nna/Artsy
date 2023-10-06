import { InputProps } from '../../types'
import styles from "./index.module.css";
import checkoutStyles from "../../pages/marketplace/checkout/index.module.css"

const Input = ({ label, placeholder, type, checkboxMessage, select, selectOptions, icon, style, className }: InputProps) => {
  return (
    <section className={styles.container}>
        <div className={styles.label}>{label}</div>

        <div>
            {select ? 
                <div className={styles.select}>
                    <select className={`${checkoutStyles[className]}`}>{selectOptions}</select>
                </div>
                :
                <div className={styles.input_container}>
                    <input 
                        style={style}
                        className={`
                            ${type === "text" && styles.text}
                            ${type === "date" && styles.date}
                            ${type === "checkbox" && styles.checkbox}
                            ${checkoutStyles[className]}
                        `} 
                        type={type} 
                        placeholder={type==="text" ? placeholder : ""} 
                    />
                    {type === "checkbox" &&
                        <div className={styles.message}>{checkboxMessage}</div>
                    }
                    {icon && <img src={icon} alt="" />}
                </div>
            }
        </div>
    </section>
  )
}

export default Input
