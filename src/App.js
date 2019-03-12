import React from "react";
import "./styles.css";
import Left from "./Left.js";
import Middle from "./middle.js";

function ID() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

let data = [
  {
    nume: "Mia",
    prenume: "Diaconu",
    data_nasterii: {
      ziua: 16,
      luna: 4,
      anul: 1991
    },
    sex: "F",
    nr_telefon: 72603559,
    cnp: 504801005787951,
    photo_url:
      "https://images.unsplash.com/photo-1521510186458-bbbda7aef46b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 8.286132,
    messages: [
      {
        direction: 0,
        message: "Yea bla bla"
      },
      {
        direction: 0,
        message: "No blabla"
      },
      {
        direction: 0,
        message: "Bla bla"
      }
    ]
  },
  {
    nume: "Aubrey",
    prenume: "Nitu",
    data_nasterii: {
      ziua: 24,
      luna: 0,
      anul: 1969
    },
    sex: "M",
    nr_telefon: 77225432,
    cnp: 68407195726710,
    photo_url:
      "https://images.unsplash.com/photo-1455819760800-d2aa223b237a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 7.0060544,
    messages: [
      {
        direction: 0,
        message: "Yea bla bla"
      },
      {
        direction: 0,
        message: "LoL"
      }
    ]
  },
  {
    nume: "Emily",
    prenume: "Dima",
    data_nasterii: {
      ziua: 21,
      luna: 6,
      anul: 1971
    },
    sex: "F",
    nr_telefon: 77016003,
    cnp: 453373857705486,
    photo_url:
      "https://images.unsplash.com/photo-1501510920781-55fe4e2a2c84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 7.1944613,
    messages: [
      {
        direction: 0,
        message: ":D"
      },
      {
        direction: 0,
        message: "LoL"
      }
    ]
  },
  {
    nume: "Sofia",
    prenume: "Stanciu",
    data_nasterii: {
      ziua: 2,
      luna: 2,
      anul: 1982
    },
    sex: "F",
    nr_telefon: 77596401,
    cnp: 994133144764362,
    photo_url:
      "https://images.unsplash.com/photo-1520639933053-bc786aeaaeff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 7.879523,
    messages: [
      {
        direction: 0,
        message: "Bla bla"
      }
    ]
  },
  {
    nume: "Riley",
    prenume: "Nita",
    data_nasterii: {
      ziua: 26,
      luna: 10,
      anul: 1978
    },
    sex: "M",
    nr_telefon: 71785995,
    cnp: 863375317289121,
    photo_url:
      "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 5.710667,
    messages: [
      {
        direction: 0,
        message: "Bla bla"
      }
    ]
  },
  {
    nume: "Olivia",
    prenume: "Diaconescu",
    data_nasterii: {
      ziua: 19,
      luna: 6,
      anul: 1994
    },
    sex: "M",
    nr_telefon: 74343650,
    cnp: 791791621436779,
    photo_url:
      "https://images.unsplash.com/photo-1544476671-bfd151728e9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 7.317722,
    messages: [
      {
        direction: 0,
        message: "LoL"
      },
      {
        direction: 0,
        message: "Yea bla bla"
      },
      {
        direction: 0,
        message: "Here?"
      }
    ]
  },
  {
    nume: "Evelyn",
    prenume: "Barbu",
    data_nasterii: {
      ziua: 9,
      luna: 3,
      anul: 1960
    },
    sex: "F",
    nr_telefon: 74208851,
    cnp: 642442081433752,
    photo_url:
      "https://images.unsplash.com/photo-1548686522-ca6fd6b40427?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 7.930915,
    messages: [
      {
        direction: 0,
        message: "Yea bla bla"
      },
      {
        direction: 0,
        message: ":D"
      },
      {
        direction: 0,
        message: "Bla bla"
      }
    ]
  },
  {
    nume: "Amelia",
    prenume: "Tudor",
    data_nasterii: {
      ziua: 0,
      luna: 6,
      anul: 1996
    },
    sex: "F",
    nr_telefon: 73742725,
    cnp: 501817783536767,
    photo_url:
      "https://images.unsplash.com/photo-1527628217451-b2414a1ee733?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 9.560095,
    messages: [
      {
        direction: 0,
        message: ":D"
      },
      {
        direction: 0,
        message: "Yea bla bla"
      },
      {
        direction: 0,
        message: "Bla bla"
      },
      {
        direction: 0,
        message: "Hello"
      }
    ]
  },
  {
    nume: "Ella",
    prenume: "Stoica",
    data_nasterii: {
      ziua: 14,
      luna: 5,
      anul: 1999
    },
    sex: "M",
    nr_telefon: 71085139,
    cnp: 273280400380883,
    photo_url:
      "https://images.unsplash.com/photo-1523916480930-3eb0627839bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 7.353421,
    messages: [
      {
        direction: 0,
        message: "No blabla"
      },
      {
        direction: 0,
        message: "Bla bla"
      }
    ]
  },
  {
    nume: "Lily",
    prenume: "Stan",
    data_nasterii: {
      ziua: 12,
      luna: 4,
      anul: 1972
    },
    sex: "F",
    nr_telefon: 76976075,
    cnp: 345591447118201,
    photo_url:
      "https://images.unsplash.com/photo-1520639933053-bc786aeaaeff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 10.958535,
    messages: [
      {
        direction: 0,
        message: "Yea bla bla"
      },
      {
        direction: 0,
        message: ":D"
      },
      {
        direction: 0,
        message: "Bla bla"
      },
      {
        direction: 0,
        message: "Bla bla"
      }
    ]
  },
  {
    nume: "Evelyn",
    prenume: "Ionita",
    data_nasterii: {
      ziua: 7,
      luna: 4,
      anul: 1964
    },
    sex: "F",
    nr_telefon: 78947926,
    cnp: 749671667670202,
    photo_url:
      "https://images.unsplash.com/photo-1517812989268-e75958710fb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 5.940934,
    messages: [
      {
        direction: 0,
        message: "Hello"
      }
    ]
  },
  {
    nume: "Charlotte",
    prenume: "Fratila",
    data_nasterii: {
      ziua: 20,
      luna: 3,
      anul: 1970
    },
    sex: "M",
    nr_telefon: 76561877,
    cnp: 94190884531530,
    photo_url:
      "https://images.unsplash.com/photo-1527585743534-7113e3211270?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 7.5126038,
    messages: [
      {
        direction: 0,
        message: "Bla bla"
      },
      {
        direction: 0,
        message: ":D"
      }
    ]
  },
  {
    nume: "Harper",
    prenume: "Nita",
    data_nasterii: {
      ziua: 0,
      luna: 9,
      anul: 1979
    },
    sex: "M",
    nr_telefon: 75052280,
    cnp: 784484864089275,
    photo_url:
      "https://images.unsplash.com/photo-1501510920781-55fe4e2a2c84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 7.343562,
    messages: [
      {
        direction: 0,
        message: "Here?"
      },
      {
        direction: 0,
        message: "Here?"
      }
    ]
  },
  {
    nume: "Lily",
    prenume: "Dumitrescu",
    data_nasterii: {
      ziua: 21,
      luna: 3,
      anul: 1979
    },
    sex: "F",
    nr_telefon: 75758217,
    cnp: 150544134050602,
    photo_url:
      "https://images.unsplash.com/photo-1545583476-c6f2eafc7f47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 9.347481,
    messages: [
      {
        direction: 0,
        message: "LoL"
      },
      {
        direction: 0,
        message: "Hello"
      },
      {
        direction: 0,
        message: "Bla bla"
      }
    ]
  },
  {
    nume: "Aubrey",
    prenume: "Nitu",
    data_nasterii: {
      ziua: 14,
      luna: 4,
      anul: 1968
    },
    sex: "F",
    nr_telefon: 76523437,
    cnp: 820472999865576,
    photo_url:
      "https://images.unsplash.com/photo-1544476671-bfd151728e9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 7.1829324,
    messages: []
  },
  {
    nume: "Ava",
    prenume: "Stanciu",
    data_nasterii: {
      ziua: 13,
      luna: 11,
      anul: 1982
    },
    sex: "M",
    nr_telefon: 70783595,
    cnp: 613318129965399,
    photo_url:
      "https://images.unsplash.com/photo-1544961585-de6f13aa4fa0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 9.726275,
    messages: [
      {
        direction: 0,
        message: "Hello"
      },
      {
        direction: 0,
        message: "LoL"
      },
      {
        direction: 0,
        message: "No blabla"
      },
      {
        direction: 0,
        message: "Hello"
      }
    ]
  },
  {
    nume: "Elizabeth",
    prenume: "Nistor",
    data_nasterii: {
      ziua: 28,
      luna: 9,
      anul: 1987
    },
    sex: "M",
    nr_telefon: 73247528,
    cnp: 52457606906796,
    photo_url:
      "https://images.unsplash.com/photo-1545583476-c6f2eafc7f47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 8.243101,
    messages: [
      {
        direction: 0,
        message: "Here?"
      },
      {
        direction: 0,
        message: "Here?"
      }
    ]
  },
  {
    nume: "Abigail",
    prenume: "Dima",
    data_nasterii: {
      ziua: 29,
      luna: 1,
      anul: 1978
    },
    sex: "F",
    nr_telefon: 78917045,
    cnp: 776129081964766,
    photo_url:
      "https://images.unsplash.com/photo-1527585743534-7113e3211270?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 8.889519,
    messages: [
      {
        direction: 0,
        message: "Yea bla bla"
      },
      {
        direction: 0,
        message: "Hello"
      },
      {
        direction: 0,
        message: "Hello"
      }
    ]
  },
  {
    nume: "Riley",
    prenume: "Marin",
    data_nasterii: {
      ziua: 2,
      luna: 5,
      anul: 1998
    },
    sex: "F",
    nr_telefon: 70384306,
    cnp: 474110510969800,
    photo_url:
      "https://images.unsplash.com/photo-1543575551-72a802fa5ffc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 8.959445,
    messages: [
      {
        direction: 0,
        message: "LoL"
      }
    ]
  },
  {
    nume: "Evelyn",
    prenume: "Tudor",
    data_nasterii: {
      ziua: 7,
      luna: 9,
      anul: 1990
    },
    sex: "M",
    nr_telefon: 72577081,
    cnp: 308296784016842,
    photo_url:
      "https://images.unsplash.com/photo-1521510186458-bbbda7aef46b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    media: 6.084469,
    messages: [
      {
        direction: 0,
        message: "Bla bla"
      },
      {
        direction: 0,
        message: "Hello"
      },
      {
        direction: 0,
        message: "Hello"
      }
    ]
  }
].map(x => {
  x.key = ID();
  return x;
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      studentId: null //idiul studentului care e afisat
    };
  }

  changeStudentId(newId) {
    this.setState({ studentId: newId });
    alert(newId);
  }

  render() {
    return (
      <div>
        <head />
        <body>
          <div id="app">
            <div id="header">Messenger</div>
            <div id="messenger_app">
              <Left
                data={this.state.data}
                changeStudentId={this.changeStudentId}
              />
              <div id="middle">
                <Middle
                  data={this.state.data.find(x => {
                    return x.key == this.state.studentId;
                  })}
                />
              </div>
              <div id="right" />
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
