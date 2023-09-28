import React, { Component } from "react";

export default class ThuKinh extends Component {
  glassList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    glassProduct: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  changeGlass = (product) => {
    this.setState({ glassProduct: product });
  };
  renderGlassIcons = () => {
    return this.glassList.map((product) => {
      let { id, url } = product;
      return (
        <div className="col-2 img-fluid productIcon" key={`glassProduct ${id}`}>
          <img src={url} onClick={() => this.changeGlass(product)} alt="" />
        </div>
      );
    });
  };
  render() {
    let { glassProduct } = this.state;
    let { name, url, desc } = glassProduct;
    return (
      <div>
        <header>
          <p>TRY GLASSES APP ONLINE</p>
        </header>
        <section className="view">
          <div className="row">
            <div className="col-6">
              <img className="modelWithGlass" src="./img/model.jpg" alt="" />

              <img className="glassOn" src={url} alt="" />

              <div className="glassInfo">
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            </div>
            <div className="col-6">
              <img className="modelNoGlass" src="./img/model.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="glassList">
          <div className="glassWrap">
            <div className="row">{this.renderGlassIcons()}</div>
          </div>
        </section>
      </div>
    );
  }
}
