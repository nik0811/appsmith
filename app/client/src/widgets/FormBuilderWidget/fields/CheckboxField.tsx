import React from "react";

import CheckboxComponent from "widgets/CheckboxWidget/component";
import Field from "widgets/FormBuilderWidget/component/Field";
import { BaseFieldComponentProps } from "./types";

type CheckboxComponentProps = {
  isDisabled: boolean;
};

type CheckboxFieldProps = BaseFieldComponentProps<CheckboxComponentProps>;

function CheckboxField({ name, schemaItem, ...rest }: CheckboxFieldProps) {
  const { label } = schemaItem;

  return (
    <Field
      {...rest}
      label={label}
      name={name}
      render={({ field: { onBlur, onChange, ref, value } }) => (
        <CheckboxComponent
          alignWidget="LEFT"
          inputRef={ref}
          isChecked={value}
          isLoading={false}
          isRequired={false}
          label=""
          onBlurHandler={onBlur}
          onCheckChange={onChange}
          // TODO: Handle default value of rowSpace
          rowSpace={20}
          widgetId=""
        />
      )}
    />
  );
}

CheckboxField.componentDefaultValues = {};

export default CheckboxField;