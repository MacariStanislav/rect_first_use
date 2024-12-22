import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "стул_серый.webp",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, fuga?",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол деревянный",
          img: "стол_деревянный.jpg",
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
          category: "tables",
          price: "89.99",
        },
        {
          id: 3,
          title: "Диван синий",
          img: "диван_синий.jpeg",
          desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          category: "sofas",
          price: "299.99",
        },
        {
          id: 4,
          title: "Кресло кожаное",
          img: "кресло_кожаное.jpg",
          desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          category: "кожа",
          price: "149.99",
        },
        {
          id: 5,
          title: "Полка настенная",
          img: "полка.webp",
          desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          category: "storage",
          price: "29.99",
        },
      ],
      ShowFullItem: false,
      fullItem:{}
    };
   this.state.currentItems=this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory=this.chooseCategory.bind(this);
    this.onShowItem =this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.ShowFullItem && <ShowFullItem  onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }


  chooseCategory(category){
    if  (category ==='all'){
      this.setState({currentItems: this.state.items})
      return
    }
      this.setState({
        currentItems: this.state.items.filter(el=> el.category ===category)
      })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id)
           isInArray = true;
    })
    if (!isInArray)
       this.setState({ orders: [...this.state.orders, item] }) 
  }
}

export default App;
