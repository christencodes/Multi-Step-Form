import thankYouIcon from "/public/images/icon-thank-you.svg";
import { useFormProvider } from "./FormObserver";

export default function ThankYou() {
  const { filled } = useFormProvider();
  return filled ? (
    <div
      className="flex flex-col items-center justify-center gap-6 max-h-91.25 |
    md:max-w-87 md:gap-8 md:self-start md:pt-8  py-20"
    >
      <div>
        <img className="w-14 h-14" src={thankYouIcon} alt="" />
      </div>
      <div className="text-center flex flex-col gap-2">
        <h3 className="text-preset-2">Thank you</h3>
        <p className="text-preset-3r text-grey500">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  ) : (
    " "
  );
}
