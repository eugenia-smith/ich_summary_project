import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.page_footer}>
      <div className={styles.footer_content_container}>
        <div className={styles.footer_contacts}>
          <p>Contact Us</p>
          <a href="tel:88000000000">8 800 000 00 00</a>
          <a href="mailto:emailexample@email.com">emailexample@email.com</a>
        </div>

        <ul className={styles.footer_socials}>
          <li>
            <a href="#">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 16.0401C32 7.18596 24.832 0 16 0C7.168 0 0 7.18596 0 16.0401C0 23.8035 5.504 30.2677 12.8 31.7594V20.8521H9.6V16.0401H12.8V12.0301C12.8 8.93434 15.312 6.41604 18.4 6.41604H22.4V11.2281H19.2C18.32 11.2281 17.6 11.9499 17.6 12.8321V16.0401H22.4V20.8521H17.6V32C25.68 31.198 32 24.3649 32 16.0401Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="#">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0C24.8457 0 32 7.15429 32 16C32 24.8457 24.8457 32 16 32C7.15429 32 0 24.8457 0 16C0 7.15429 7.15429 0 16 0ZM13.0743 24.4343C20.16 24.4343 24.0457 18.56 24.0457 13.4629V12.96C24.8 12.4114 25.4629 11.7257 25.9657 10.9486C25.28 11.2457 24.5257 11.4514 23.7486 11.5657C24.5486 11.0857 25.1657 10.3314 25.44 9.44C24.6857 9.87429 23.8629 10.1943 22.9943 10.3771C22.2857 9.62286 21.28 9.16572 20.1829 9.16572C18.0571 9.16572 16.32 10.9029 16.32 13.0286C16.32 13.3257 16.3429 13.6229 16.4343 13.8971C13.2343 13.7371 10.3771 12.2057 8.48 9.87429C8.16 10.4457 7.95429 11.1086 7.95429 11.8171C7.95429 13.1429 8.64 14.3314 9.66857 15.0171C9.02857 15.0171 8.43429 14.8343 7.93143 14.5371V14.5829C7.93143 16.4571 9.25714 18.0114 11.0171 18.3771C10.6971 18.4686 10.3543 18.5143 10.0114 18.5143C9.76 18.5143 9.53143 18.4914 9.28 18.4457C9.76 19.9771 11.2 21.0971 12.8686 21.12C11.5429 22.1486 9.87429 22.7657 8.06857 22.7657C7.74857 22.7657 7.45143 22.7657 7.15429 22.72C8.84571 23.8171 10.88 24.4571 13.0514 24.4571"
                  fill="white"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="#">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21C14.6739 21 13.4021 20.4732 12.4645 19.5355C11.5268 18.5979 11 17.3261 11 16C11 15.715 11.03 15.4367 11.0817 15.1667H9.33333V21.8283C9.33333 22.2917 9.70833 22.6667 10.1717 22.6667H21.83C22.0521 22.6662 22.2649 22.5777 22.4217 22.4205C22.5786 22.2634 22.6667 22.0504 22.6667 21.8283V15.1667H20.9183C20.97 15.4367 21 15.715 21 16ZM16 19.3333C16.4378 19.3332 16.8714 19.2469 17.2759 19.0792C17.6803 18.9116 18.0478 18.6659 18.3574 18.3562C18.6669 18.0465 18.9124 17.6789 19.0799 17.2743C19.2473 16.8698 19.3334 16.4362 19.3333 15.9983C19.3332 15.5605 19.2469 15.1269 19.0792 14.7225C18.9116 14.318 18.6659 13.9505 18.3562 13.641C18.0465 13.3314 17.6789 13.0859 17.2743 12.9185C16.8698 12.751 16.4362 12.6649 15.9983 12.665C15.1141 12.6652 14.2661 13.0167 13.641 13.6421C13.0158 14.2676 12.6648 15.1157 12.665 16C12.6652 16.8843 13.0167 17.7322 13.6421 18.3574C14.2676 18.9825 15.1157 19.3336 16 19.3333ZM20 12.5H21.9983C22.1311 12.5 22.2584 12.4474 22.3525 12.3537C22.4465 12.2599 22.4996 12.1328 22.5 12V10.0017C22.5 9.86862 22.4471 9.74102 22.3531 9.64693C22.259 9.55285 22.1314 9.5 21.9983 9.5H20C19.8669 9.5 19.7393 9.55285 19.6453 9.64693C19.5512 9.74102 19.4983 9.86862 19.4983 10.0017V12C19.5 12.275 19.725 12.5 20 12.5ZM16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32C18.1012 32 20.1817 31.5861 22.1229 30.7821C24.0641 29.978 25.828 28.7994 27.3137 27.3137C28.7994 25.828 29.978 24.0641 30.7821 22.1229C31.5861 20.1817 32 18.1012 32 16C32 13.8989 31.5861 11.8183 30.7821 9.87706C29.978 7.93586 28.7994 6.17203 27.3137 4.68629C25.828 3.20055 24.0641 2.022 22.1229 1.21793C20.1817 0.413852 18.1012 0 16 0ZM24.3333 22.4817C24.3333 23.5 23.5 24.3333 22.4817 24.3333H9.51833C8.5 24.3333 7.66667 23.5 7.66667 22.4817V9.51833C7.66667 8.5 8.5 7.66667 9.51833 7.66667H22.4817C23.5 7.66667 24.3333 8.5 24.3333 9.51833V22.4817Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>

        <p className={styles.footer_copyright}>All Rights Reserved</p>
        <label className={styles.footer_input_container} htmlFor="">
          <input type="email" name="" id="" placeholder="Type your email" />
        </label>
      </div>
    </footer>
  );
}

export default Footer;
