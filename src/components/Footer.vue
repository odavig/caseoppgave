<template>
  <footer>
    <div id="emailSubContainer">
      <input
        type="text"
        name=""
        placeholder="Sign Up To Our Newsletter"
        id=""
      />
      <app-button
        btnTitle="Sign Up"
        btnClass="primary-white small"
      ></app-button>
    </div>
    <div id="outerInformationContainer">
      <div id="innerInformationContainer">
        <div id="informationContainerIcon">
          <img
            src="../assets/media/fb-icon.png"
            alt="Link til bedriftens bruker på Facebook"
          />
          <img
            src="../assets/media/ig-icon.png"
            alt="Link til bedriftens bruker på Instagram"
          />
          <img
            src="../assets/media/twitter-icon.png"
            alt="Link til bedriftens bruker på Twitter"
          />
        </div>
        <div id="informationContainerList">
          <ul>
            <li>Info</li>
            <li>Marketing</li>
            <li>Support</li>
            <br />
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div id="informationContainerRights">
          © All Rights Reserved Et eller Annet
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  padding-top: 5%;
}

#emailSubContainer {
  background-color: #008066;
  text-align: center;
  padding: 1%;
}

#emailSubContainer input {
  font-size: 14px;
  border: none;
  height: 1.5em;
  padding: 0.5%;
  width: 200px;
  border-radius: 5px;
}

#outerInformationContainer {
  background-color: #f1f1f1;
}

#innerInformationContainer {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 3%;
}

#informationContainerIcon {
  margin-bottom: 10%;
}

#informationContainerIcon img {
  width: 10%;
  margin-left: 2%;
  margin-right: 2%;
  cursor: pointer;
}

#informationContainerList {
    width: 100%;
}

#informationContainerList ul {
  padding: 0px;
  width: 100%;
}

#informationContainerList li {
  list-style-type: none;
  display: inline;
  cursor: pointer;
  margin-right: 5%;
  margin-left: 5%;
}

#informationContainerRights {
    color: #979797;
    margin-top: 15%;
}
</style>
