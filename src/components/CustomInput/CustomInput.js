import React from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import styles from "assets/jss/general/components/customInputStyle.js";
import { OutlinedInput } from "@material-ui/core";
import { warningColor } from "assets/jss/material-dashboard-react";

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    inputRef,
    helperText,
    helperColor,
    onChange,
    disabled,
    value,
    name,
    required,
    type,
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  var helpTextClasses = classNames({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });
  let newInputProps = {
    maxLength:
      inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
    minLength:
      inputProps && inputProps.minLength ? inputProps.minLength : undefined,
  };
  return (
    <FormControl
      {...formControlProps}
      className={formControlClasses}
      variant="outlined"
      required={required}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          type={type}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}

      <OutlinedInput
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
        }}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...inputProps}
        inputProps={newInputProps}
        inputRef={inputRef}
      />

      {helperText !== undefined ? (
        <FormHelperText
          style={{
            color: helperColor === undefined ? warningColor[0] : helperColor,
          }}
          id={id + "-text"}
          className={helpTextClasses}
        >
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  helperText: PropTypes.node,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  helperColor: PropTypes.string,
  inputRef: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};
