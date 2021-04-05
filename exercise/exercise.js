// async await ambil data dari github
const getDataGithub = async () => {
    const url = "https://api.github.com/users/arsitanrfzh";
    const option = {
      method: "GET",
    };
    try {
      let response = await fetch(url, option);
      response = await response.json();
      console.log(response);
      let displayUsername = `<a>${response.login}</a>`;
      const container = document.querySelector(".nav-link");
      container.innerHTML = displayUsername;
    } catch (response) {
      console.log(response);
    }
  };
  
  getDataGithub();