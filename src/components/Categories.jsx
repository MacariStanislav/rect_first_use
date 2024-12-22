import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name:'Всё'

                },
                {
                    key: 'chairs',
                    name:'стул'

                }  , 
                 {
                    key: 'tables',
                    name:'стол'

                },
                {
                    key: 'sofas',
                    name:'диван'

                },
                {
                    key: 'кожа',
                    name:'кресло'

                },
                {
                    key: 'storage',
                    name:'Полка '

                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el =>(
            <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories