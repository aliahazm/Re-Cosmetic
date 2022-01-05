import React from "react";
import { useFormikContext } from "formik";

import routes from "../../navigation/routes";
import AppButton2 from "../AppButton2";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  //return <AppButton2 title={title} onPress={handleSubmit} />;

  return (
    <AppButton2
      title={title}
      onPress={handleSubmit}
      //onPress={navigation.navigate(routes.MY_RECYCLE_DETAILS)}
      // onPress={() => navigation.navigate(routes.TERMS_AND_CONDITIONS)}
      // onPressIn={handleSubmit}
    />
  );
}

export default SubmitButton;
