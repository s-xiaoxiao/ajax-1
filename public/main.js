console.log("hello world");
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();

  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const array = JSON.parse(request.response);

      array.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element.id;
        xxx.appendChild(li);
      });
      n += 1;
      if (n === 3) {
        const getPage = document.querySelector("#getPage");
        getPage.setAttribute("disabled", "false");
      }
    }
  };
  request.send();
};
getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div.firstChild);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载 css 失败了");
      }
    }
  };
  request.send();
};
getJs.onclick = () => {
  const request = new XMLHttpRequest();

  request.open("GET", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");

    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败");
  };
  request.send();
};

getXml.onclick = () => {
  const request = new XMLHttpRequest();

  request.open("GET", "/4.xml");

  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };

  request.send();
};

getJson.onclick = () => {
  const request = new XMLHttpRequest();

  request.open("GET", "/5.json");

  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const objJson = JSON.parse(request.response);
      console.log(objJson);
    }
  };
  request.send();
};
