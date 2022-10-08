import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Avatar, Card, Row, Col, Input, Form, Button, Space } from "antd";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfo, faTimes } from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,100}$/;

export const Home = () => {
  const { form } = useForm();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const onFinish = (data) => {
    console.log("data", data);
  };
  const onFinishFailed = (data) => {};

  return (
    <>
      <div className=" bg-slate-500 justify-center align-middle m-auto p-10">
        <div className="w-1/3 h-auto m-auto  p-11 bg-blue-200 rounded-sm  ">
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="justify-center align-middle flex">
              <h1 className="justify-center text-2xl ">Log in</h1>
            </div>
            <div>
              <Row>
                <Col span={24}>
                  <span className={validName ? "text-green-500" : "hidden"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={validName || !user ? "hidden" : " text-red-700"}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item name="user" label="Login">
                    <Input
                      ref={userRef}
                      className="p-1 w-full rounded"
                      autoComplete="off"
                      onChange={(e) => {
                        // onChange(e);
                        setUser(e.target.value);
                      }}
                      required={true}
                      aria-invalid={validName ? true : false}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
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
                      className="p-1 text-yellow-600 "
                    />
                    4 to 24 characters .<br />
                    Must begin with a letter.
                    <br />
                    Letter, numbers, underscores, hyphens allowed
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <span className={validPwd ? "text-green-500" : "hidden"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={validPwd || !pwd ? "hidden" : " text-red-700"}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item name="password" label="Password">
                    <Input
                      type="password"
                      className="p-1 w-full rounded"
                      required={true}
                      onChange={(e) => {
                        setPwd(e.target.value);
                        // onChange(e);
                      }}
                      aria-invalid={validPwd ? false : true}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
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
                    Allowed special characters like
                    <span className="text-blue-600">@ # $ %</span>
                  </p>
                </Col>
              </Row>
              <div className="justify-center align-middle m-auto flex ">
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={!validName || !validPwd ? true : false}
                  className="bg-blue-600 w-full text-white py-1 px-3 rounded-md mt-3"
                >
                  Login
                </Button>
              </div>
            </div>
          </Form>
          <div className="ml-auto mr-auto w-3/4  mt-3 flex justify-center align-middle">
            <span className=" ">
              <NavLink to="/sign-in" className="underline text-blue-600">
                Forget password
              </NavLink>
            </span>
          </div>
          <Space className="ml-auto mr-auto w-3/4  mt-3 flex justify-center align-middle">
            <span>Not registered yet?</span>
            <span className="">
              <NavLink to="/sign-in" className="underline text-blue-600 ">
                Sign-up
              </NavLink>
            </span>
          </Space>
        </div>
      </div>
    </>
  );
};
export default Home;
