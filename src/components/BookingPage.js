import BookingForm from "./BookingForm";
import Main from "./Main";
import Footer from "./Footer";

export default function BookingPage() {
  return (
    <div>
      <div className="form-cont">
        <fieldset>
          <legend>Order Online</legend>
          <BookingForm />
        </fieldset>
      </div>
      <Main />
      <Footer />
    </div>
  );
}
