import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makePayment } from "../../requests/makePayment";

const Payment = () => {
  const [successSession, setSuccessSession] = React.useState<any>(false);
  const [redirectUrl, setRedirectUrl] = React.useState<any>("");
  const [failed, setFailed] = React.useState<any>(false);
  const { token } = useSelector((state: any) => state.user);

  useEffect(() => {
    makePayment(token).then((res) => {
      console.log(res);
      if (res?.data.status === "SUCCESS") {
        setSuccessSession(true);
        setRedirectUrl(res?.data.redirectGatewayURL);
      } else {
        setFailed(true);
      }
    });
  }, []);

  return (
    <div>
      {successSession
        ? (window.location = redirectUrl)
        : "Payment is being processed..."}
      {failed ? (
        <>
          <h1>Payment Failed</h1>
          <p>Payment failed due to some reason. Please try again later.</p>
          <Link to="/doctors/book-appointment">
            Go to Book Doctor Appointment
          </Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Payment;
