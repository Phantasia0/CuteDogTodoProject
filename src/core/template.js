//컴포넌트 만드는 개념
//페이지를 구분할 수 있는 라우터 기능
//컴포넌트 간 데이터 통신을 할 수 있는 스토어 기능

/* Component */
export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {
    //컴포넌트 클래스를 확장해서 사용할때
  }
}

/* Router */
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/");
  }
  const routerView = document.querySelector("router-view");
  // http://localhost:1234/#/about?name=phantasia
  // #/about?name=phantasia
  const [hash, queryString = ""] = location.hash.split("?");

  //a=123&b=456
  //{a:'123', b:'456'}
  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});
  //history.state 객체에 query 전달
  history.replaceState(query, "", "");

  const currentRoute = routes.find((route) => new RegExp(`${route.path}/?$`).test(hash));
  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el);

  window.scrollTo(0, 0);
}

export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

/* Store */
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;
          this.observers[key].forEach((observer) => observer(val));
        },
      });
    }
  }
  //데이터 변경 감지
  subscribe(key, cb) {
    //배열을 이용해 여러 Callback 함수 등록
    Array.isArray(this.observers[key]) ? this.observers[key].push(cb) : (this.observers[key] = [cb]);
  }
}
