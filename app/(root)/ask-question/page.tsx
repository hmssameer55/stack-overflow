import React from "react";

const AskQuestion = () => {
  async function InitiatePayment(formData: FormData) {
    "use server";

    try {
      const res = await fetch("https://test.payu.in/_payment", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const htmlResponse = await res.text();
      console.log("htmlResponse", htmlResponse);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <form action={"https://test.payu.in/_payment"} method="post">
      <input type="hidden" name="key" value="JP***g" />
      <input type="hidden" name="txnid" value="t6svtqtjRdl34W" />
      <input type="hidden" name="productinfo" value="iPhone" />
      <input type="hidden" name="amount" value="10" />
      <input type="hidden" name="email" value="test@gmail.com" />
      <input type="hidden" name="firstname" value="Ashish" />
      <input type="hidden" name="lastname" value="Kumar" />
      <input type="hidden" name="pg" value="UPI" />
      <input type="hidden" name="bankcode" value="UPI" />
      <input type="hidden" name="vpa" value="test123@okhdfcbank" />
      <input type="hidden" name="surl" value="your own success url" />
      <input type="hidden" name="furl" value="your own failure url" />
      <input type="hidden" name="phone" value="9988776655" />
      <input
        type="hidden"
        name="hash"
        value="eabec285da28fd0e3054d41a4d24fe9f7599c9d0b66646f7a9984303fd6124044b6206daf831e9a8bda28a6200d318293a13d6c193109b60bd4b4f8b09c90972"
      />
      <input type="submit" value="Pay Now" />
    </form>
  );
};

export default AskQuestion;
