import React from "react";
import { FC } from "react";

type MailButtonProps = {
  email: string;
  className?: string;
};

const MailButton: FC<MailButtonProps> = ({ email, className }) => {
  return (
    <a href={`mailto:${"myungjae84@gmail.com"}`} className={className}>
      E-MAIL
    </a>
  );
};

export default MailButton;
