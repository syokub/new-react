import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfo, faTimes } from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,100}$/;

export const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, control } = useForm();

  useEffect(() => {
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      aaa
    </Box>
  );

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="">
      <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
        {errMsg}
      </p>

      <Card className="w-1/3 ml-auto mr-auto mt-20 justify-center p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <Typography
              component={"div"}
              className="justify-center"
              gutterBottom
            >
              Sign up
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <span className={validName ? "text-green-500" : "hidden"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                  className={validName || !user ? "hidden" : " text-red-700"}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                <Controller
                  name="user"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <TextField
                      ref={userRef}
                      size="small"
                      id="outlined-basic"
                      label="Login"
                      variant="outlined"
                      fullWidth
                      autoComplete="off"
                      onChange={(e) => {
                        onChange(e);
                        setUser(e.target.value);
                      }}
                      required={true}
                      aria-invalid={validName ? true : false}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                  )}
                />

                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions align-middle"
                      : "hidden"
                  }
                >
                  <FontAwesomeIcon
                    icon={faInfo}
                    className="p-1 text-yellow-600"
                  />
                  4 to 24 characters .<br />
                  Must begin with a letter.
                  <br />
                  Letter, numbers, underscores, hyphens allowed
                </p>
              </Grid>
              <Grid item xs={12}>
                <span className={validPwd ? "text-green-500" : "hidden"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPwd || !pwd ? "hidden" : " text-red-700"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <TextField
                      size="small"
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      fullWidth
                      required={true}
                      onChange={(e) => {
                        setPwd(e.target.value);
                        onChange(e);
                      }}
                      aria-invalid={validPwd ? false : true}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                  )}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd
                      ? "instructions align-middle"
                      : "hidden"
                  }
                >
                  <FontAwesomeIcon
                    icon={faInfo}
                    className="p-1 text-yellow-600"
                  />
                  8 to 24 characters .<br />
                  Must include uppercase and lowercase letters, a number and a
                  special characters.
                  <br />
                  Allowed special characters like{" "}
                  <span className="text-blue-600">@ # $ %</span>
                </p>
              </Grid>
              <Grid item xs={12}>
                <span className={validMatch ? "text-green-500" : "hidden"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                  className={
                    validMatch || !matchPwd ? "hidden" : " text-red-700"
                  }
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                <Controller
                  name="conPassword"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <TextField
                      size="small"
                      id="outlined-password-input"
                      label="Confirm Password"
                      type="password"
                      fullWidth
                      required={true}
                      onChange={(e) => {
                        setMatchPwd(e.target.value);
                        onChange(e);
                      }}
                      aria-invalid={validMatch ? false : true}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />
                  )}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch
                      ? "instructions align-middle"
                      : "hidden"
                  }
                >
                  <FontAwesomeIcon
                    icon={faInfo}
                    className="p-1 text-yellow-600"
                  />
                  Must match the first password input field
                </p>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className="justify-center">
            <Button
              type="submit"
              disabled={!validName || !validPwd || !validMatch ? true : false}
              variant="contained"
              fullWidth
            >
              login
            </Button>
          </CardActions>
        </form>
        <span className="ml-auto mr-auto w-3/4 block">
          <>Already registered ?</>
          <span className="ml-3 ">
            <NavLink
              to="/sign-in"
              className=" bg-blue-600 p-1 rounded-md text-white"
            >
              Sign-up
            </NavLink>
          </span>
        </span>
      </Card>
    </div>
  );
};
export default SignUp;
